var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    uglify     = require('gulp-uglify'),
    concat     = require('gulp-concat'),
    open       = require('gulp-open'),
    del        = require('del'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS  = require('gulp-minify-css'),
    imagemin   = require('gulp-imagemin');