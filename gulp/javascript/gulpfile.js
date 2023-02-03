const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false, // não vai comentários
            presets: ["env"] //pega a versao mais do no js
        }))
        .pipe(uglify()) //pega todo o código e minimiza o tamanho
        .on('error', err => console.log(err)) //.on = caso aconteça
        .pipe(concat('codigo.min.js')) //min = convenção quando o arquivo é minimizado
        .pipe(gulp.dest('build'))

    return cb() // ou return lá em cima ex: return gulp.src('src/)....
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)