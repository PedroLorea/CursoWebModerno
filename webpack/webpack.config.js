const webpack = require('webpack')

//comando: npm start && node public/principal.js


module.exports = {
    mode: 'development', //"production faz o codigo do webpack minimizado"
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    }
}