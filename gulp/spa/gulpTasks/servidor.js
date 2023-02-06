//Na prática não se usa um arquivo sendo servidor.js, mas para desenvolver fica bem mais fáicl

const gulp = require('gulp')

function monitorarArquivos(cb){
    return cb()
}

function servidor(cb){
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}