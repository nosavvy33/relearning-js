const express = require('express')
const app = express()
const request = require('request-promise')
app.set('view engine','pug')
const port = 3000

// for mysql usage, check lib/dp_ops
// for making HTTP requests from this server to another, check lib/ext-http
/*
A middleware is like a pipeline, it is a chain of procedures that are singular
for their granularity. The input at the beginning of the chain can suffer
modifications as it passes through the middlewares. Herein resides the
potential of middlewares as they can add up stuff to objects and relieving
devs from boilerplate code or too low level or too complicated stuff, such
as HTTP handling
*/
app.use((req,res,next) => {
    console.log(req.headers)
    next()
})

app.use((req,res,next)=>{
    req.chance = Math.random()
    next()
})

app.get('/', (req,res) => {
 //res.send('Hello from Express!')
//    res.json({chance: req.chance})
 //   throw new Error('UwU')
 //res.render('index',{title: "Hey", message: "Hello there!"})
})

/*app.use((err,req,res,next)=>{
    console.log(err)
    res.status(500).send("Sth uwu happened")
})*/

app.listen(port, (err)=>{
 if(err){return console.log('sth bad happened',err);}
 console.log('server is listening on ',port)
})
