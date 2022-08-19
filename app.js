//CRIAÇÃO DO SERVIDOR APENAS COM NODE:
var http = require('http') 
http.createServer(function(rec, res){
res.end("Olá...")
}).listen(8081)
console.log("O servidor está rodando!...")
