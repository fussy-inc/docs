// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const graphqlMarkdownConfig = require("./graphql-markdown.config");

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FUSSY API Document",
  tagline: "FUSSY API Document for Developers",
  url: "https://fussy-inc.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "fussy-inc", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  plugins: [["@graphql-markdown/docusaurus", graphqlMarkdownConfig]],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          path: "documents",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "FUSSY API Document",
        logo: {
          alt: "graphql-markdown",
          src: "img/graphql-markdown.svg"
        },
        items: [
          {
            href: "https://github.com/fussy-inc/docs",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "light",
        links: [
          {
            label: "Official Site",
            href: "https://fussy-inc.co.jp",
          },
          {
            label: "Service Page",
            href: "https://beta.fussy.fun",
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FUSSY, Inc.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    }),
};

module.exports = config;
