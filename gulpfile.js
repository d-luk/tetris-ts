const gulp = require('gulp');
const newer = require('gulp-newer');
const { exec } = require('child_process');
const cssMin = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const pug = require('gulp-pug');

gulp.task('default', ['js', 'css', 'html']);
gulp.task('watch', () => {
    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.pug', ['html']);
});

gulp.task('js', cb => exec('webpack', (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
}));

gulp.task('css', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(newer({ dest: 'dist', ext: '.css' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(cssMin())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

gulp.task('html', () => {
    return gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
});