# Estudos_nodeJS
Repositório destinado para estudos da linguagem nodeJS

## Instalação Express Utilizando NPM:

* Primeiramente verificamos a versão do npm através do comando:

        npm -v

* Para instalação do Express, utizamos o comando:

         npm install express --save 

* Para a instalação do Nodemon (Para que nossas atualizações sejam aplicadas sem que tenhamos que derrubar nosso servidor sempre)

         npm install nodemon -g

* Utilizamos a tag -g para que seja instalado globalmente dentro de nosso sistemas
>> Após a instalação do Nodemon, iremos executar o módulo nodemon

* Dentro desses estudos, utilizamos o Banco de Dados MySQL:

> Para acessarmos nosso banco de dados no terminal do Windows, precisamos modificar nossas variaveis de ambientes. Utilizamos o caminho do diretório onde foi instalado o Server do MySQL(mais precisamente a pasta BIN) e adicionamos ele ao PATH.

>> Já dentro do Terminal do Windows, para acessarmos o MySQL, utilizamos o seguinte comando:

     mysql -h localhost -u root -p

>>> Em seguida, é solicitado a senha que cadastramos durante a instalação do MySQL. E assim, temos acesso e podemos utilizar o MySQL via Terminal do Windows.


* Para instalação do Sequelize(Esse módulo ajuda a trabalhar com o Banco de Dados diretamente do NodeJS)

> Utilizamos o seguinte código para instalar o Sequelize

     npm install --save sequelize

 >> Para utilizarmos o MySQL, utilizamos o seguinte código(Para outros banco de dados, procure no site do NPM por Sequelize):

        npm install --save mysql2

* Para a instalação do Handlebars, um template engine, que dá muitas funcionalidades dentro do HTML. Conseguimos apresentar dados do backend lá no HTML

> Utilizamos o seguinte código dentro do terminal

     npm instal --save express-handlebars


