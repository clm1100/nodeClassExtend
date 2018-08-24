const fs = require('fs');
fs.readdir("./img", (err, res) => {
    let jpg = [];
    let png = [];
    for (let i = 0; i < res.length; i++) {
        if (res[i].indexOf('jpg') > -1) {
            jpg.push(res[i]);
        } else if (res[i].indexOf('png') > -1) {
            png.push(res[i]);
        }
    }
    jpg.forEach((e,i)=>{
        fs.readFile("./img/"+e,(err,data)=>{
            fs.writeFile('./jpg/'+"clm_"+i+"."+e.split(".")[1],data,(err)=>{
                if(err) return console.log(err)
            })  
        })
    })
    png.forEach((e,i)=>{
        fs.readFile("./img/"+e,(err,data)=>{
            fs.writeFile('./png/'+"clm_"+i+"."+e.split(".")[1],data,(err)=>{
                if(err) return console.log(err)
            })
        })
    })
})