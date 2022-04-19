const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

async function style() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
}

async function serve() {
    browserSync.init({
        server: './dist',
        notify: false
    })
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

async function start() {
    browserSync.init({
        server: './dist',
        notify: false
    })
}

exports.style = style;
exports.watch = serve;
exports.default = start;

