const gulp = require('gulp');
const newer = require('gulp-newer');
const { exec } = require('child_process');
const cssMin = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();
const { argv } = require('yargs');
const gulpif = require('gulp-if');

const env = argv.dev
    ? 'development'
    : 'production';

const isProd = env === 'production';

console.log('Gulp env:', env);

gulp.task('default', ['js', 'css', 'html']);
gulp.task('watch', () => {
    browserSync.init({ server: 'dist' });

    gulp.watch('src/**/*.scss', ['css']);
    gulp.watch('src/**/*.pug', ['html']);

    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
    gulp.watch('dist/**/*.js').on('change', browserSync.reload);
});

gulp.task('js', cb => {
    exec(`set NODE_ENV=${env} && webpack`, (err, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('css', () => {
    return gulp.src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(newer({ dest: 'dist', ext: '.css' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(isProd, cssMin()))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./', {
            sourceRoot: '/styles'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(gulpif(!isProd, browserSync.stream()));
});

gulp.task('html', () => {
    return gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
});