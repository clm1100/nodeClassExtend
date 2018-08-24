const fs = require('fs');
fs.readdir("./img",(err,res)=>{
    console.log(res)
    for (let i = 0; i < res.length; i++) {
        fs.readFile("./img/"+res[i],(err,data)=>{
            fs.writeFile('./img2/'+"clm_"+i+"."+res[i].split(".")[1],data,(err)=>{
                if(err) return console.log(err)
            })
        })
        
    }
})