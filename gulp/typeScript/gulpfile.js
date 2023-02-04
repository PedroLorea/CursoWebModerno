const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    return tsProject.src() //tem o caminho do src no tsconfig.json
        .pipe(tsProject()) //faz o processo de compilação
        .pipe(gulp.dest('build'))    
}

exports.default = series(transformacaoTS)