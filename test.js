const Sequelize = require('sequelize')
const sequelize = new Sequelize('testes','root','Mysql123@',{
    host: "localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(function() {
    console.log("Conectado com Sucesso!");
    
}).catch(function(erro){
    console.log("Falha ao se conectar: "+ erro);
})

//then -> funciona como um função de callback, função especial que é executada quando um evento acontece. nesse caso 'sequelize.authenticate()'. Esse evento só poderá ser bem sucedida ou falhar. Caso a conexão seja autenticada chamaremos a função 'then'. Caso a conexão seja falha, então chamaremos a função 'catch'