const express = require('express')

const app = express()

app.get('/todo',(req,res)=>{
    res.json({
        message : 'my name is bablu and this is my first devops project'
    })
})

app.listen(3000,()=>{
    console.log('listening');
    
})
