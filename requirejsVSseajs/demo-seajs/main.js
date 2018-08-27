define(function(require,exports,module){
    
    var Calculate = require('./calculation.js');
    var cal = new Calculate('calculate');
    cal.init();
    exports.showLog = function(){
        console.log('init');
    }
});