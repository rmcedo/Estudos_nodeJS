const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')



//Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
    app.set('view engine', 'handlebars')

    //Body Parser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())


 

//Rotas

app.get('/cad', function (req, res) {
    res.render('formulario')
    //res.render -> Para que o Express renderize o formulario que está dentro do folder 'Views'
})

app.post('/add', function (req, res) {
    //Para métodos de formulário do Tipo POST, precisamos mudar do 'app.get' para o 'app.post'
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})


app.listen(8081, function () {
    console.log("Servido rodando na URL http://localhost:8081");
})