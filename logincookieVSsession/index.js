const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app  = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'abc'
}))

app.get('/',(req,res)=>{
    req.session.user = {name:123}
    console.log(req.session)
    res.send('ok')
})

app.post('/login',(req,res)=>{
    if(req.body.username=='zs'&&req.body.password==1234){

    }
})

app.listen(3000,()=>console.log("ok"))
