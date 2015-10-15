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
    .pipe(gulp.dest('./minified/assets/css/'))
   
  gulp.src('./assets/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./minified/assets/js/'))
   
  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))
    .pipe(notify({ message: 'Tarea[Minimizado de archivos] - Completada!' }))
    
});

gulp.task('Imagemin', function() {

  gulp.src('./assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./minified/assets/images/'))
    .pipe(notify({ message: "Tarea[Minimizado de imagenes] - Completada!"}));

});

gulp.task('Clean', function(cb) {
  del(['minified/*'], cb)
});

gulp.task("Test", function(){
  gulp.src('')
    .pipe(notify({ message: "Tarea[Test] - Completada!"}))
    .pipe(open({ uri: 'https://alu0100536652.github.io/STW03/test/'}))
});

gulp.task('default', ['Clean', 'Minify', 'Imagemin', 'Test'], function() {
});
