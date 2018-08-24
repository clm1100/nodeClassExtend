const express = require('express')
const app = express();
const bodyParser = require('body-parser')
app.use(express.static('./static'));
app.use(express.static('./node_modules'));
app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())
app.post("/api/test",(req,res)=>{
    console.log(req.headers);
    res.json(req.body);
})
app.listen("3000",()=>{console.log("ok")})