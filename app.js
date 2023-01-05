var http = require('http')

http.createServer(function(req,res){


    res.end("Ola")

    // res - resposta -> serve para mandar uma mensagem para o usuário

}).listen(8081) 

//-> listen irá criar uma porta para nosso servidor


console.log("O servidor rodando");