import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import minify from 'gulp-cssnano';

/**
 * The `Sass` task compiles a single stylesheet from Sass file.
 */

const sassInput = [
  './src/styles/helpers.scss',
  './src/styles/vendor/rc-slider.scss',
  './src/components/**/styles.scss'
];

function sassMake(src, fileName) {
  return gulp
    .src(src)
    // Concatenate everything in a single stylesheet
    .pipe(concat(fileName))
    // Compile Sass
    .pipe(sass({
      includePaths: [ './src/components', './src/styles' ],
      errLogToConsole: true
    }))
    // Minify everything
    .pipe(minify())
    // Autoprefix everything
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    // Write the stylesheet
    .pipe(gulp.dest('./static/stylesheets'));
}

gulp.task('sass', () => {
  return sassMake(sassInput, 'styles.scss');
});

/**
 * The `watch` task enables a watcher for Sass files.
 * The general idea is to re-run a relevant Gulp task when a file is being
 * changed.
 */

function log(event) {
  console.log(`File ${event.path} was ${event.type}, running tasks...`); // eslint-disable-line
}

gulp.task('watch',() => {
  gulp.watch('src/**/*.scss', ['sass']).on('change', log);
});

// -----------------------------------------------------------------------------
// Default task
// -----------------------------------------------------------------------------

gulp.task('default', ['watch']);
