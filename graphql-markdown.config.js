module.exports = {
  schema: "http://static.fussy.fun/api/schema.graphql",
  rootPath: "documents",
  baseURL: "/",
  homepage: "documents/index.md",
  loaders: {
    UrlLoader: "@graphql-tools/url-loader"
  },
  docOptions: {
    pagination: false, // disable buttons previous and next, same as cli flag --noPagination
    toc: true, // disable page table of content, same as cli flag --noToc
    index: true, // enable generated index pages, same as cli flag --index
  }
};
