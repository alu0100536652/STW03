var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    open       = require('gulp-open'),
    del        = require('del'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS  = require('gulp-minify-css'),
    notify     = require('gulp-notify'),
    imagemin   = require('gulp-imagemin');
    
gulp.task('Minify', function () {

  gulp.src('./assets/css/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/css/'))
   
  gulp.src('./assets/js/*.js')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/js/'))
   
  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))
    .pipe(notify({ message: 'Minify task complete' }))
    
});

gulp.task('Imagemin', function() {

  gulp.src('./assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./minified/images/'))
    .pipe(notify({ message: "Image-Min task complete!"}));

});

gulp.task('Clean', function(cb) {
  del(['minified/*'], cb)
});

gulp.task("Test", function(){
  gulp.src('')
    .pipe(notify({ message: "Test task complete!"}))
    .pipe(open({ uri: 'https://alu0100536652.github.io/STW03/test/'}))
});

gulp.task('default', ['Clean', 'Minify', 'Imagemin', 'Test'], function() {
});
