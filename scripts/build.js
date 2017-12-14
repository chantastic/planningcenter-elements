var fs = require("fs");
var postcss = require("postcss");
var atImport = require("postcss-import");

var css = fs.readFileSync("build.css", "utf8");

postcss()
  .use(atImport())
  .process(css, {
    from: "build.css"
  })
  .then(function(result) {
    var output = result.css;

    fs.writeFileSync("dist/index.css", output, "utf8");
  });
