define([
    'sum',
    'abstract',
    'multiply',
    'divide',
    'mod',
    'init'
], function (sum, abstract, multiply, divide, mod, init) {

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

    return Calculate
});