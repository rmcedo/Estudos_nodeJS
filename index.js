const express = require('express');

const app = express();

// Essa variavel possui uma cópia inteira do framework Express, sempre que formos utilizarmos algo do framework, utilizaremos uma constante app;

app.get('/', function (req, res) {

    res.sendFile(__dirname+"/html/index.html")

    //Utilizamos o sendFile para mandar arquivos HTML
    // __dirname =  para que o diretório seja o raiz do projeto
    // __dirname irá juntar o caminho raiz com a concatenação que passei no parametro

})

/*  CRIAÇÃO DE ROTAS    */

app.get('/sobre', function (req, res) {

    res.sendFile(__dirname+"/html/sobre.html")
})

app.get('/blog', function (req, res) {

    res.send("Bem-vindo ao meu blog")
})

app.get('/Ola/:cargo/:nome', function (req, res) {

    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo: " + req.params.cargo + "</h2>")

    //o req é responsavel por receber dados de uma requisição
    // send só pode ser enviado uma vez
})
/**/
app.listen(8081, function () {
    console.log("\nServidor rodando na URL http://localhost:8081");
})

// Criar e abrir um servidor utilizando o framework Express. Esse comando deve ser o último a chamar o Express, não poderemos ter mais nenhuma chamada abaixo desse comando.

