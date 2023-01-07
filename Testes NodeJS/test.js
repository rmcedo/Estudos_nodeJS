const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes','root','Mysql123@',{
    host: "localhost",
    dialect:"mysql"
})


const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING 
        //Ao chamar o Sequelize, e identificando como STRING, estou definindo que o 'título' será do tipo VARCHAR
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})


const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
})
/*Usuario.create({
    nome: "Rafael",
    sobrenome:"Macedo",
    idade: 28,
    email:"rafael9408@gmail.com"
})*/

// Usuario.sync({force: true})
// Postagem.sync({force: true}) 
// 'sync' para gerar o model dentro do SQL.
// force: true é para garantir que ocorra a criação da tabela
// RECOMENDADO COMENTAR O 'SYNC' ASSIM QUE EXECUTAR PARA QUE NÃO CRIE NOVAMENTE.
// RECOMENDADO PARAR O SERVIDOR PARA CRIAÇÃO DE TABELAS


sequelize.authenticate().then(function() {
    console.log("Conectado com Sucesso!");
    
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro);
})

//then -> funciona como um função de callback, função especial que é executada quando um evento acontece. nesse caso 'sequelize.authenticate()'. Esse evento só poderá ser bem sucedida ou falhar. Caso a conexão seja autenticada chamaremos a função 'then'. Caso a conexão seja falha, então chamaremos a função 'catch'