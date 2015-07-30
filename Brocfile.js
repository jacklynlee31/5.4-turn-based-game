var concat = require('broccoli-sourcemap-concat');
var mergeTrees = require('broccoli-merge-trees');
var sass = require('broccoli-sass');

var bowerStuff = concat('bower_components', {outputFile: 'vendor.js', inputFiles: [
	'jquery/dist/jquery.min.js',
	'underscore/underscore-min.js',
	'backbone/backbone-min.js'
]});

var compiledSass = sass(['assets/scss', 'bower_components/reset-css'], 'app.scss', 'app.css');

module.exports = mergeTrees(['public', compiledSass, bowerStuff]);
