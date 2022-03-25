var gulp        = require('gulp');
var fileInclude = require('gulp-file-include');

// Gabungkan HTML
gulp.task('html', async function() {
    // Baca file HTML dari folder `pages`
    return gulp.src('index.html')
        // Menggunakan plugin `gulp-file-include`
        .pipe(fileInclude())
        // Tulis HTML ke folder `dist`
        .pipe(gulp.dest('inc'));
});

// Lakukan semua tugas
gulp.task('default', ['html']);