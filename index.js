//CRIAÇÃO DO SERVIDOR HTTP JÁ COM O MÓDULO EXPRESS (FRAMEWORK):

const express = require("express");
const app = express();

app.get("/", function(rec, res){
    res.send("Seja bem vindo ao meu app!")
})

app.get("/sobre", function(rec, res){
res.send("Minha página sobre")    
})

app.get("/blog", function(rec, res){
  res.send("Bem vindo ao meu blog!")  
})

app.listen(8081, function(){
console.log("Servidor esta rodando na url: http://localhost:8081")    
});