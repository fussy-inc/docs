---
id: schema
slug: /
title: FUSSY API Documentation
sidebar_position: 1
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
sidebar_class_name: navbar__toggle
---

FUSSY の API をご利用いただくためのドキュメントです。

## FUSSY API とは
株式会社 FUSSY は趣味に関する公開データベース、 [FUSSY](https://www.fussy.fun) を運営しています。本ドキュメントで説明する FUSSY API は、FUSSY のデータベースへの投稿と取得を行うための API です。

不具合に気づかれた際は [Issue](https://github.com/fussy-inc/docs/issues) でのご報告をお願いいたします。

## ご利用方法
開発時のエンドポイントとしては [https://staging.api.fussy.fun/graphql](https://staging.api.fussy.fun/graphql) を、本番環境のエンドポイントとしては [https://api.fussy.fun/graphql](https://api.fussy.fun/graphql) をご利用ください。

スキーマ定義に関しては [https://static.fussy.fun/api/schema.graphql](https://static.fussy.fun/api/schema.graphql) をご参照ください。


## 認証

APIを使った投稿には認証(Access Token)が必要です。認証方法は [Misskey と同様の方法](https://misskey-hub.net/docs/api/)を採用しています。
以下に、認証の方法と bash で行う例を記載します。

### 1.Session ID の発行
Access Token を発行するためにはまず、 Session ID を発行してください。

Session ID は以下の要件を満たす必要があります。

- UUID v4 であること
- 毎回生成されること

```bash
$ SESSION_ID=$(uuidgen)
```

### 2. ユーザー認証

利用者に `https://beta.fussy.fun/auth/[SESSION_ID]` にアクセスしていただき、認証を行っていただきます。
このとき、クエリパラメータには以下の値を設定してください。

- `serviceName`: サービス名
- `serviceUrl`: サービスの URL
- `callbackUrl`: 認証後にリダイレクトする URL

たとえば、サービス名：なごり、サービス URL：https://nagori.fun、認証後にリダイレクトする URL：https://nagori.fun/callback の場合は、以下のようになります。

```bash
$ SERVICE_NAME="なごり"
$ SERVICE_URL="https://nagori.fun"
$ CALLBACK_URL="https://nagori.fun/callback"
$ open "https://beta.fussy.fun/auth/${SESSION_ID}?serviceName=${SERVICE_NAME}&serviceUrl=${SERVICE_URL}&callbackUrl=${CALLBACK_URL}"
```

ユーザによる認証後、`callbackUrl` にリダイレクトします。

:::Caution
認証については開発環境は用意していません。
本番環境でのみご利用ください。
:::


### 3. Access Token の取得

認証後、Session ID を利用して Access Token を取得できます。
Access Token の取得にはエンドポイントに対し、次のクエリを実行してください。

```graphql
  mutation IssueFussyAccessToken($sessionId: String!) {
    issueFussyAccessToken(input: {sessionId: $sessionId}) {
      accessToken
    }
  }
```

たとえば、次のように取得できます

```bash
$ curl -X POST \
       -H "Content-Type: application/json" \
       -d '{"query":"mutation IssueFussyAccessToken($sessionId: String!) {\n  issueFussyAccessToken(input: {sessionId: $sessionId}) {\n    accessToken\n  }\n}\n","variables":{"sessionId":"'"${SESSION_ID}"'"}}' \
       https://api.fussy.fun/graphql
```


### 4. Access Token の利用
mutation とユーザ情報を取得するクエリの実行時には、取得した Access Token を `X-Access-Token` ヘッダに設定してください。

Access Token を必要とするクエリは次のものがあります。
- https://fussy-inc.github.io/docs/queries/me: ユーザ情報を取得するクエリ
- https://fussy-inc.github.io/docs/mutations/createForm: データベースを作成するクエリ
- https://fussy-inc.github.io/docs/mutations/createResponse: データベースへの投稿を作成するクエリ

たとえば、`query me` は次のように実行できます

```bash
$ curl -X POST \
       -H "Content-Type: application/json" \
       -H "X-Access-Token: ${ACCESS_TOKEN}" \
       -d '{"query":"query me { me { id name } }"}' \
       https://api.fussy.fun/graphql
```

## データ構造について
FUSSY API でアクセスできる主なデータの構造について説明します。

各データタイプの詳細は、[https://fussy-inc.github.io/docs/category/objects](https://fussy-inc.github.io/docs/category/objects)よりご確認ください。

FUSSY API でアクセスできるデータの構造は次の図のようになっています。

![](https://d1stpor4o81wuq.cloudfront.net/api/docs/images/system-description.png)

FUSSY のサービス上では、データベースとその投稿という構造で見せていますが、API としては投稿フォームとその回答という命名を採用しています。

### Form, Question, Response, Answer
Form は複数の Question を持ちます。<br />
たとえば、聖地巡礼のデータを収集したい Form は「作中登場回」と「実際の場所」を入力してもらうための Question を持ちます。

この Form への回答は Response と言い、Response は複数の Answer から作られます。<br />
先程の例にならうと、聖地巡礼のデータとして Response が作成され、「作中登場回」の Answer と「実際の場所」の Answer を持ちます。

### Category, User
Category は FUSSY のサービスでは Fave と呼ばれるものです。Category アーティスト名や作品名や雑誌など、様々なものを表現します。
Form には複数の Category を設定できます。例えば、「P.A. Works 北陸青春３部作の舞台を巡るためのデータベース」という Form には「true tears」「花咲くいろは」「グラスリップ」の３つの Category を設定できます。

:::info
Category の追加のご要望は [https://forms.gle/SgYg8TQmtPsvP7Wy5](https://forms.gle/SgYg8TQmtPsvP7Wy5) よりご連絡ください。
:::

## 参考実装
現在実装中です。
