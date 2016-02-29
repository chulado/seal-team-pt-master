var pickFiles = require('broccoli-static-compiler');
var compileSass = require('broccoli-sass');
var mergeTrees = require('broccoli-merge-trees');
var assetConcat = require('broccoli-concat');
var compileES6 = require('broccoli-es6-concatenator');
var select = require('broccoli-select');
var findBowerTrees = require('broccoli-bower');
var fs = require('fs');
var autoprefixer = require('broccoli-autoprefixer');

var trees = {
  js: {
    modules: [
      "appkit/*.js",
      "appkit/**/*.js"
    ],

    legacy: [
      "jquery/dist/jquery.js",
      "bootstrap-sass/js/transition.js",
      "bootstrap-sass/js/dropdown.js",
      "bootstrap-sass/js/collapse.js",
      "owl.carousel/dist/owl.carousel.js"
    ],
  },
  
  css: [
    "owl.carousel/dist/assets/owl.carousel.css",
    "owl.carousel/dist/assets/owl.theme.default.css"
  ]
 
}


function preprocess(tree) {
  return tree;
}

var app = "views/javascripts";
app = pickFiles(app, {
  srcDir: "/",
  destDir: "appkit"
});
app = preprocess(app);

var styles = "views/styles";
styles = pickFiles(styles, {
  srcDir: "/",
  destDir: "appkit"
});

var sourceTrees = [ "./bower_components", app, styles ];

var appAndDependencies = new mergeTrees(sourceTrees, { overwrite: true });

var appJs = compileES6(appAndDependencies, {
  loaderFile: "appkit/loader.js",
  inputFiles: trees.js.modules,
  legacyFilesToAppend: trees.js.legacy,
  wrapInEval: false,
  outputFile: "/app.js"
});


var appCss = compileSass(sourceTrees, "appkit/app.scss", "/app.css");
appCss = autoprefixer(appCss);

appCss = assetConcat(new mergeTrees([appAndDependencies, appCss]), {
  inputFiles: trees.css.concat(["app.css"]),
  outputFile: "/app.css"
});

module.exports = mergeTrees([appJs, appCss]);
//module.exports = stylesTree;