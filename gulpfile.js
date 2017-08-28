/* ============================================================ *\
	SETUP
\* ============================================================ */

/*jslint node: true */
'use strict';

// Gulp
var browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream');

var gulp   = require('gulp');
var argv   = require('yargs').argv;
var runSeq = require('run-sequence');



// Tasks
var del = require('del');

// Node
var path = require('path');
var fs   = require('fs');

// Tasks
var tasks         = {};

tasks.default     = [];
tasks.watch       = [];

// Config
var config        = require('./_config/project.json');
var cartridge     = JSON.parse(fs.readFileSync('./.cartridgerc', 'utf8'));

config.cleanPaths = [];
config.creds      = require('./_config/creds.json');

config.isProd     = argv.prod || false;
config.isWatched  = argv.watch || false;

var destFolder = config.paths.dest.scripts,
sourceFile = destFolder + 'main.js',
destFile = 'bundle.js';

/* ============================================================ *\
	TASK MODULES
\* ============================================================ */

cartridge.modules.forEach(function(module) {
	require(path.resolve('node_modules/' + module.task))(gulp, config, tasks);
});

gulp.task('clean', function () {
	return del(config.cleanPaths);
});

/* ============================================================ *\
	MAIN TASKS
\* ============================================================ */

/* browserify - https://coderwall.com/p/0vlbxq/using-gulp-with-browserify-and-watchify */ 
gulp.task('browserify', function() {

  var bundler = browserify({
    entries: sourceFile,
    cache: {}, packageCache: {}, fullPaths: true, debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .on('error', function () {})
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder));
  };

  if(config.isWatched) {
    bundler = watchify(bundler);
    bundler.on('update', bundle);
  }

  return bundle();
});

gulp.task('watch', tasks.watch);

// Task for local dev
gulp.task('default', tasks.default.concat(['watch', 'browserify']));

// Task for team city
gulp.task('build', function (cb) {
	return runSeq(['clean'], tasks.default, cb);
});



