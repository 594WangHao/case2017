var gulp = require('gulp');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
// var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
    return gulp
        .src('./less/case2017.less')
        .pipe(less())
        .pipe(concat('case2017.css'))
        .pipe(cleanCSS())       // 压缩代码
        .pipe(gulp.dest('./www/css/'))
});

gulp.task('js', function () {
    gulp.src('./js/case2017.js')
    .pipe(uglify())         // 压缩代码
    .pipe(gulp.dest('./www/js/'))
})

gulp.task('watch', function () {
    gulp.watch('./less/*.less', function () {
        gulp.run('css')
    })
    gulp.watch('./js/*.js', function () {
        gulp.run('js')
    })
})

gulp.task('default', function () {
    gulp.start('css','js','watch')
})