define(function(require, exports, module) {
    // 引入计算模块:
    // 加法模块
    var sum = require('./module/sum')
    // 减法模块
    var abstract = require('./module/abstract')
    // 乘法模块
    var multiply = require('./module/multiply')
    // 除法模块
    var divide = require('./module/divide')
    // 取模模块
    var mod = require('./module/mod')
    // 初识化模块
    var init = require('./module/init')
    // 构造函数+原型
    function Calculate(cId) {
        this.container = document.getElementById(cId);
        this.btn = this.container.getElementsByTagName('input')[2];
        this.a = this.container.getElementsByTagName('input')[0];
        this.b = this.container.getElementsByTagName('input')[1];
        this.flag = this.container.getElementsByTagName('select')[0];
        this.result = this.container.getElementsByTagName('div')[0];
    }

    Calculate.prototype.init = init
    Calculate.prototype.sum = sum
    Calculate.prototype.abstract = abstract
    Calculate.prototype.multiply = multiply
    Calculate.prototype.divide = divide
    Calculate.prototype.mod = mod

    module.exports = Calculate;
});
