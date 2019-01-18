var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var gulpConcat = require('gulp-concat');
var browserSync = require('browser-sync');
var map = require('gulp-sourcemaps');

gulpSass.compiler = require('node-sass');

function sass() {
    return gulp.src('./sass/styles.scss')
        .pipe(map.init())
        // .pipe(gulpConcat('./styles.scss'))
        // .pipe(gulp.dest('./css'))
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(map.write())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}));
}

function sync() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
}

function html() {
    return gulp.src('./*.html')
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('scss', sass);
gulp.task('sync', sync);

gulp.task('watcher', function () {
    gulp.watch('./sass/**/*.scss', sass);
    gulp.watch('./*.html', html);
});

gulp.task('default', gulp.series('scss', gulp.parallel('sync', 'watcher')));