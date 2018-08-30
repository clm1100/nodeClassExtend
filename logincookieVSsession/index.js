const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const template = require('express-art-template');


const app  = express()
app.engine('html',template);
app.set('view engine','html');
app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'abc'
}))

app.get('/',(req,res)=>{
    res.locals = req.session.user;
    res.render('index');
})

const islogin = (req,res,next)=>{
    console.log(req.session)
    if(req.session.islogin===true){
        next()
    }else{
        res.send("未登录")
    }
}

app.post('/login',(req,res)=>{
    if(req.body.username=='zs'&&req.body.password==1234){
        req.session.user = {user:'zs',password:1234}
        req.session.islogin = true;
        res.send("ok")
    }else{
        res.send("falie")
    }
})

app.get("/home",(req,res)=>{
    res.send("home")
})

app.get("/user",islogin,(req,res)=>{
    res.send("user")
})
app.get("/movie",islogin,(req,res)=>{
    res.send(req.session)
})

app.listen(3000,()=>console.log("ok"))
