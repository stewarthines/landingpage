// Gulp File
//----------
// based on: https://travismaynard.com/writing/getting-started-with-gulp
//---- Contents ----//
// 1. Include Gulp
// 2. Include plugins
// 3. Sass task / autoprefixer
// 4. Watcher / livereload
// 5. Default
//------------------//
// 1. include gulp
var gulp = require('gulp');
// 2. Include plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Serve Task
gulp.task('serve', function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./assets/scss/*.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// 3. Sass Task
gulp.task('sass', function() {
  // Feed the source
  return gulp.src('./assets/scss/*.scss')
    // What do do with the files?
    .pipe(sass())
    // Log the errors
    .pipe(sass().on('error', sass.logError))
    // Autoprefix the stuff
    .pipe(autoprefixer('last 2 versions'))
    // Where is the file going to go?
    .pipe(gulp.dest('./assets/css'))
    // Browser Sync
    .pipe(browserSync.stream());
});




//6. Default Task
gulp.task('default', ['serve']);
