const express = require('express')

const app = express()

app.get('/todo',(req,res)=>{
    res.json({
        message : 'my name is Lumax and I work  whole night and rest whole day'
    })
})

app.listen(3000,()=>{
    console.log('listening');
    
})



