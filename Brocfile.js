var concat = require('broccoli-sourcemap-concat');
var mergeTrees = require('broccoli-merge-trees');
var sass = require('broccoli-sass');
var injectLiveReload = require('broccoli-inject-livereload');
var handlebars = require('broccoli-handlebars-precompiler');

var publicWithReload = injectLiveReload('public');

var bowerStuff = concat('bower_components', {outputFile: 'vendor.js', inputFiles: [
	'jquery/dist/jquery.min.js',
	'underscore/underscore-min.js',
	'backbone/backbone-min.js',
	'handlebars/handlebars.min.js'
]});

var templatesAndScripts = handlebars('assets', {
  srcDir: 'templates',
  namespace: 'AppTemplates'
});

var includePaths = [
    'assets/scss',
    'bower_components/reset-css',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/neat/app/assets/stylesheets'
];

var appJs = concat(templatesAndScripts, {outputFile: 'app.js', inputFiles: [
		'js/setup.js',
		'templates/**/*.js',
		'js/hero.js',
		'js/enemy.js',
		'js/game.js',
    'js/app.js'
  ]});

var compiledSass = sass(includePaths, 'app.scss', 'app.css');

module.exports = mergeTrees([publicWithReload, appJs, compiledSass, bowerStuff]);
