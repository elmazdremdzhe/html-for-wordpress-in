var gulp = require('gulp'),
    watch = require('gulp-watch'),
    stylus = require('gulp-stylus'),
    browserSync = require('browser-sync').create(),
    koutoSwiss  = require('kouto-swiss');

var browserify = require('gulp-browserify');
 
/*// Basic usage 
gulp.task('scripts', function() {
    // Single entry point to browserify 
    gulp.src('src/js/app.js')
        .pipe(browserify({
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});
*/

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('stylus', function(){
    console.log('stylus');
     gulp.src('src/css/styles.styl')
        .pipe(stylus({
            use: [koutoSwiss()]
        }))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('reload', function(){
    console.log('reload');
    browserSync.reload();
});

gulp.task('watch', function() {
    gulp.watch(['src/css/**/*.styl', '*.html'], ['stylus', 'reload']);    
});

gulp.task('default', ['stylus', 'watch', 'browser-sync']);