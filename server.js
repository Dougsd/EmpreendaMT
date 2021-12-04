//SERVIDOR HTTP EXPRESS
// import express from 'express';
const bodyParser = require('body-parser')
const express = require('express')
const cron = require('node-cron')//Modulo para task para o servidor
const database = require('./database')

var routines = cron.schedule('* * 7 * *', () =>  {
    console.log('stopped task');
  }, {
    scheduled: false
  });

routines.start();
const app  = express()
const port = 5000
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.use(function(req,res,next){
    
//         console.log('acess')
//         next()
    
// })
app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send('Welcome in server express Doug! :D')
})
//View Project Documentation
app.post('/save_project',(request,response)=>{
    if(request.body!=null){
        database.save_project(request.body)
    }else{
        console.error('Vazio=>')
    }
    
})

app.post('/update_project',(request,response)=>{
    database.update_project(request.body)
    console.log()
})

app.post('/search', async function(req, res){
    try{
        var temp=req.body
        var search = database.search(temp,res)
        
    }catch(e){
        console.log(e)
    }
})

app.post('/buildFap', async function(req, res){
    try{
        var temp=req.body
        
    }catch(e){
        console.log(e)
    }
})

app.post('/init',(req, res)=>{
    try{
        var temp=req.body
        var init = database.init(res)
        
    }catch(e){
        console.log(e)
    }
})
app.listen(port, ()=>
    console.log(`Server listening on port ${port}`) 
)








// MODELO CLIENTE-REQUEST AND CLIENTE-SEND 
// var req = new XMLHttpRequest();
// req.overrideMimeType("application/json");
// req.open('GET', url, true);
// req.onload  = function() {
//    var jsonResponse = JSON.parse(req.responseText);
//    // do something with jsonResponse
// };
// req.send(null);