const bodyParser = require('body-parser') //interpreta os dados e manipula e deixa pronto
const express = require('express')
const app = express()

//middlware
app.use(express.static('.')) //pode usar arquivos estáticos(html, fontes..) da pasta
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null, './upload') // . = pasta atual
    },
    filename: function(req, file, callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo') //arquivo é o input no html

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if(err){
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})



// app.get('/teste', (req, res) => res.send(console.log('Ok'))) //Função Middleware
app.listen(8080, () => console.log('Executando...'))