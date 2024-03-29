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

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, //só vai funcionar se tiver o app usando body parser
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // formas de pegar os dados
    // req.body
    // req.query -> localhost:8080/parOuImpar?numero=4
    // req.params -> localhost:8080/parOuImpar/:numero -> /4

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})



// app.get('/teste', (req, res) => res.send(console.log('Ok'))) //Função Middleware
app.listen(8080, () => console.log('Executando...'))