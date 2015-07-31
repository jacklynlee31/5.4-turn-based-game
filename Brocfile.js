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

var appJs = concat(templatesAndScripts, {outputFile: 'app.js', inputFiles: [
		'js/app.js',
		'templates/**/*.js',
    'js/character.js',
    'js/family.js',
    'js/app.js'
  ]});

var vendor = funnel('bower_components', {
  files: ['handlebars/handlebars.js', 'jquery/dist/jquery.min.js']
});

var compiledSass = sass(['assets/scss', 'bower_components/reset-css'], 'app.scss', 'app.css');

module.exports = mergeTrees([publicWithReload, compiledSass, bowerStuff]);
