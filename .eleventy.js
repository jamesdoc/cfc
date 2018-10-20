module.exports = function (elevntyConfig) {

  return {
    templateFormats: ["html", "njk"],
    pathPrefix: "/",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
      includes: "_includes"
    },
  };

}
