//Na prática não se usa um arquivo sendo servidor.js, mas para desenvolver fica bem mais fáicl

const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor(cb){
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true, //abrir o browser
            livereload: true
        }))
}

function monitorarArquivos(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}