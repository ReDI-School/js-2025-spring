const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  entry: "./main.js", // Webpack needs an entry point, even if it's just HTML
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: "index.html",
          to: "index.html",
          transform: content => content.toString()
            .replaceAll("https://unpkg.com/reveal.js@^4/", "")
            .replaceAll("https://unpkg.com/highlight.js/", "")
        },
        { from: "style.css", to: "style.css" },
        { from: "toc.md", to: "toc.md" },
        { from: "lesson*.md" },
        { from: "images", to: "images" },
        { from: "node_modules/reveal.js/dist/reset.css", to: "dist/reset.css" },
        { from: "node_modules/reveal.js/dist/reveal.css", to: "dist/reveal.css" },
        { from: "node_modules/reveal.js/dist/theme/black.css", to: "dist/theme/black.css" },
        { from: "node_modules/reveal.js/dist/reveal.js", to: "dist/reveal.js" },
        { from: "node_modules/reveal.js/plugin/markdown/markdown.js", to: "plugin/markdown/markdown.js" },
        { from: "node_modules/reveal.js/plugin/highlight/highlight.js", to: "plugin/highlight/highlight.js" },
        { from: "node_modules/reveal.js/plugin/zoom/zoom.js", to: "plugin/zoom/zoom.js" },
        { from: "node_modules/reveal.js/plugin/search/search.js", to: "plugin/search/search.js" },
        { from: "node_modules/reveal.js/dist/theme/fonts", to: "dist/theme/fonts"},
        { from: "node_modules/highlight.js/styles/vs2015.min.css", to: "styles/vs2015.css" },
      ],
    }),
  ],
  mode: "production",
};

module.exports = config
