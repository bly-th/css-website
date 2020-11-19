const gulp = require("gulp");
const sass = require("gulp-sass");

// Grab dependencies
const $ = require('gulp-load-plugins')({
  pattern: ['*', '*/*'],
  scope: ['devDependencies']
});

const paths = {
  styles: {
    src: "./src/scss/app.scss",
    dest: "./src/_includes/css"
  },
  scripts: {
    src: './src/scripts',
    dest: "./src/js"
  }
};

// Minify Javascript files
$.gulp.task('scripts', function () {
  var b = $.browserify({
    entries: `${paths.scripts.src}/main.js`,
    debug: true,
  }).transform("babelify", {presets: ["@babel/preset-env"]});

  return b.bundle()
    .pipe($.plumber())
    .pipe($.vinylSourceStream('main.js'))
    .pipe($.vinylBuffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.sourcemaps.write('./'))
    .pipe($.gulp.dest(paths.scripts.dest));
});

// a task to generate the css with sass
$.gulp.task('css', function() {
  return gulp.src(paths.styles.src)
    .pipe($.sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe($.gulp.dest(paths.styles.dest));
});

// Watch folders for changes
gulp.task("watch", function() {
  gulp.watch('./src/scripts/**/*.js', gulp.parallel('scripts'));
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
});