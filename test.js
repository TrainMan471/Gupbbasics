

var gulp = require('gulp');//require gulp
var concat = require('gulp-concat');//require gulp-concat
var uglify = require('gulp-uglify');//require uglify

gulp.task("hello", function() {//first gulp task
  console.log("Hello");
});

gulp.task("concatScripts", function() {//combine javascript filess together! Great for performance
  gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js.main.js'
  ]).pipe(concat('app.js'))
  .pipe(gulp.dest('js')_;
})

gulp.task("minifyScripts",function() {
  gulp.src("js/app.js")
})

gulp.task("default", ["hello"], function() {
  console.log("the default task!!!");
});
