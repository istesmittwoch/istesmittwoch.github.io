import { rm } from 'fs'
import { dest, parallel, series, src, watch } from 'gulp'

import cleanCSS from 'gulp-clean-css'
import htmlmin from 'gulp-htmlmin'
import inlineSource from 'gulp-inline-source'
import rename from 'gulp-rename'
import uglify from 'gulp-uglify'

export const clean = async () => await rm('./dist', { recursive: true }, () => console.error)

function styles() {
  return src('src/assets/*.css', { sourcemaps: true })
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/assets/'))
}

function scripts() {
  return src('src/assets/*.js', { sourcemaps: true })
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest('dist/assets/'))
}

function html() {
  return src('src/*.html')
    .pipe(inlineSource())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removecomments: true
    }))
    .pipe(dest('dist/'))
}

function watchFiles() {
  watch('src/assets/*.css', styles)
  watch('src/assets/*.js', scripts)
  watch('src/**/*', html)
}
export { watchFiles as watch }

export const build = series(clean, parallel(styles, scripts), html)
export default build
