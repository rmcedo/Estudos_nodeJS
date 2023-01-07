const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//Config
    //Template Engine
       app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')

    //Conexão com o banco de dados MySQL
    const sequelize = new Sequelize('testes','root','Mysql123@',{
        host: "localhost",
        dialect:"mysql"
    })    

//Rotas

app.get('/cad', function(req,res){
    res.send('Rota de Cadastro de Posts')
})


app.listen(8081, function(){
    console.log("Servido rodando na URL http://localhost:8081");
})