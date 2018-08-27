var Script = document.createElement('script');
document.getElementsByTagName('head')[0].appendChild(Script);
Script.src = './calc.js';
Script.onload = function(){
    console.log(111111);
    var cal = new Calculate('calculate');
    cal.init();
}
console.log("ok");