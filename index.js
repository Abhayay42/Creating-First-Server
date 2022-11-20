const express = require('express');
const port = 9000;
const app = express();

app.get('/',function(req,res){
    res.send('<h1> Hello this is my first server</h1>')
   
})
app.get('/1',function(req,res){
    res.send('<h2> never mind this page doesnt looks so good but we will make it look good soon!!</h1>')
})


app.listen(port,function(err){
    if(err){
        console.log('error in running the server',err)
    }
    console.log('server is running on port -- ', port)
})