var gulp = require('gulp');
var pug = require('gulp-pug');
var rename = require('rename');

gulp.task('html', function () {
    gulp.src('views/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    gulp.watch('views/*.pug', ['html']);
});