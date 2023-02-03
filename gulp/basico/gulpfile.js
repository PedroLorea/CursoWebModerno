const gulp = require('gulp')
const { series, parallel } = require('gulp') //várias, para ser executado em série
//ou
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB')) // pipe para ir fazendo tarefas, transformações
    return cb()
}
//gulp.src('pastaA/**/*.txt') pega todos os arquivos da que tiver na pastaA que são txt

const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}
module.exports.default = series( //tem que exportar para default, é por onde o gulp acha
    parallel(antes1,antes2),
    copiar,
    fim)