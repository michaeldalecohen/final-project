var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat');

/*function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}*/

// .on('error', errorLog)

// Sass task
// Uglifies
gulp.task('sass', function() {
	return sass('./scss/**/*.scss', {
		style: 'compressed'
	})
	.pipe(plumber())
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('./build/css'))
	.pipe(livereload());
});

// Scripts task
// Concatenates & Uglifies
gulp.task('scripts', function() {
	gulp.src('./js/**/*.js')
		.pipe(plumber())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./build/js'))
		.pipe(livereload());
});

// Imagemin task
// compresses file size
gulp.task('imagemin', function() {
	gulp.src('./img/**/*')
		.pipe(plumber())
		.pipe(imagemin())
		.pipe(gulp.dest('./build/img'));
});

// Html task
// Move html files to the build directory.
gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(plumber())
		.pipe(gulp.dest('./build'))
		.pipe(livereload());
});

// Watch task
// Watches JS, SCSS
gulp.task('watch', function() {

	var server = livereload({start: true});

	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./js/**/*.js', ['scripts']);
	gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['sass', 'scripts', 'imagemin', 'html', 'watch']);