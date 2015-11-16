var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-ejsmin');
var strip = require('gulp-strip-comments');

gulp.task('default', function () {
	return gulp.src(['./app/lib/jquery-1.10.2.js', './app/lib/jquery-ui-1.10.4.custom.js',
		'./app/lib/angular/angular.js', './app/lib/angular/angular-sanitize.min.js',
		'./app/lib/angular/angular-resource.min.js',
		'./app/lib/angular/angular-route.min.js', './app/lib/angular/underscore-1.4.4.min.js',
		'./app/js/app.js', './app/lib/bootstrap.min.js', './app/js/services/EventData.js',
		'./app/js/services/GravatarUrlBuilder.js', './app/js/directives/dataKeys.js',
		'./app/js/directives/eventThumb.js', './app/js/directives/mySample.js', './app/js/directives/upVote.js',
		'./app/js/directives/gravatar.js', './app/js/directives/collapsible.js',
		'./app/js/directives/datePicker.js',
		'./app/js/controllers/EditEventController.js', './app/js/controllers/EditProfileController.js',
		'./app/js/controllers/EventController.js', './app/js/controllers/EventListController.js',
		'./app/js/controllers/MainMenuController.js', './app/js/controllers/SampleDirectiveController.js'])
		.pipe(concat('scripts.js'))
		// .pipe(strip())
		// .pipe(uglify({ removeComment: true }))
		.pipe(gulp.dest('./app/js/dist/'))
});