const gulp = require('gulp');
const newer = require('gulp-newer');
const { exec } = require('child_process');
const cssMin = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

gulp.task('default', ['js', 'css', 'html']);
gulp.task('watch', () => {
    browserSync.init({
        proxy: 'localhost:8080'
    });

    gulp.watch('src/**/*.ts').on('change', () => setTimeout(browserSync.reload, 1000));
    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.pug', ['html']).on('change', browserSync.reload);
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
        .pipe(sourcemaps.write('./', {
            includeContent: false,
            sourceRoot: '/app/scss'
        }))
        .pipe(browserSync.stream({ match: '**/*.css' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    return gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'));
});