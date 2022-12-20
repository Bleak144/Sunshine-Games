const express = require('express');
const app = express();
const mongoose = require('mongoose')
const password = 'Mateo144'
const dbname = 'Sunshine'
const uri = `mongodb+srv://Bleak:${password}@cluster0.vnjep00.mongodb.net/${dbname}?retryWrites=true&w=majority`


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} )
    .then(()=>{
        console.log("Database connected")
    })
    .catch(()=>
        console.log("Error")
    )


module.exports = app