const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const template = require('express-art-template');
const ejs = require('ejs');

console.log(ejs);
const app  = express()
// app.engine('html',template);
app.engine('html',ejs.__express);
app.set('view engine','html');

app.set('views','./views');

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser());
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'abc'
}))


app.use((req,res,next)=>{
    console.log(req.session.user)
    res.locals = req.session.user;
    console.log(res.locals)
    next()
})


app.get('/',(req,res)=>{
    console.log(res.locals,"========");
    res.render('index',{a:'2323232'});
})

const islogin = (req,res,next)=>{
    console.log(req.session)
    if(req.session.islogin===true){
        next()
    }else{
        res.send("未登录")
    }
}

app.get('/login/:username/:password',(req,res)=>{
    if(req.params.username=='zs'&&req.params.password==1234){
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
