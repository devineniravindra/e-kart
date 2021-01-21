'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
// var babel = require('gulp-babel');
const babel = require('gulp-babel');
sass.compiler = require('node-sass');

//script paths
var scssFiles = 'assets/styles/**/*.scss',
    cssDest = 'styles',
    jsFiles = 'assets/scripts/**/*.js',
    jsDest = 'scripts';

gulp.task('compileCss', function () {
    return gulp.src(scssFiles)
    .pipe(concat('style.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest))
    .pipe(rename('style.min.css'))
    .pipe(minifyCSS())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(gulp.dest(cssDest));
 });
 
gulp.task('compileJS', function () {
    return gulp.src(jsFiles)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
 });