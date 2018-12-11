
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browserSync = require('browser-sync');

gulpSass.compiler = require('node-sass');

function sass() {
    return gulp.src('./*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
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

// gulp.task('sass', sass);
gulp.task('sync', sync);

gulp.task('watcher', function () {
    gulp.watch('./*.scss', sass);
    gulp.watch('./*.html', html);
});

gulp.task('default', gulp.parallel( ['sync', 'watcher']));