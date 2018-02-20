var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('default', function(){
    console.log('Helllo, gulp!');
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.+(scss|sass)')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.+(scss|sass)', ['sass']);
});