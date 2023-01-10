
//creating a constructor function, the calculator object can call it
const Calculator = function (){
    this.add = function (num1, num2) {
        return num1 + num2;
    };
    this.subtract = function (num1, num2){
        return num1 - num2;
    };
    this.multiply = function (num1, num2){
        return num1 * num2;
    };
    this.divide = function (num1, num2){
        return num1 / num2;
    };
    this.modulus = function (num1, num2){
        return num1 % num2;
    }
}

const OddOrEven = function(){
        this.oddOrEven = function (num){
    if(num % 2===0){
        return 'Even'
    } else {
        return 'Odd'
    };
}
}

module.exports = {
    Calculator,
    OddOrEven};


