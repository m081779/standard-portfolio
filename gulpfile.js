var gulp = require('gulp');  
var sass = require('gulp-sass');  
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var wait = require('gulp-wait');

gulp.task('sass', function () {  
    gulp.src('sass/main.sass')
        .pipe(wait(500))
        .pipe(plumber())
        .pipe(sass({includePaths: ['sass']}))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["css/*.css", "js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("sass/*.sass", ['sass']);
    gulp.watch('./**/*.html').on('change', browserSync.reload)
});