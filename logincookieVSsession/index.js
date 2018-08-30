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
    // req.session.user = {name:123}
    // console.log(req.session)
    res.send('ok')
})

const islogin = (req,res,next)=>{
    if(req.session.islogin===true){
        next()
    }else{
        res.send("未登录")
    }
}

app.post('/login',(req,res)=>{
    if(req.body.username=='zs'&&req.body.password==1234){
        req.session = {user:'zs',password:1234}
        res.send("ok")
    }else{
        res.send("falie")
    }
})

app.listen(3000,()=>console.log("ok"))
