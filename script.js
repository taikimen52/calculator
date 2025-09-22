//必要なグローバル関数、一つ目の入力数a,二つ目の入力数b
let inputA = 0;
let inputB = 0;
let answer = 0;
let op = ""

const display = document.querySelector(".display");

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForOperand: false,
  operator: null
};

display.innerText = calculator.displayValue;

// 各演算関数をオブジェクトに
const operations ={
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "*" : (a, b) => a * b,
    "/" : (a, b) => a / b
}

//number buttons
const num = document.querySelectorAll(".num");
num.forEach(el => {
    el.addEventListener("click", ()=>{
        if(calculator.waitingForOperand){
            calculator.displayValue += el.value;
            display.innertext = calculator.displayValue;
        }else{
            calculator.displayValue += el.value;
            display.innerText = calculator.displayValue;
        }
        
    })
})

//リセット関数
function reset(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForOperand = false;
    calculator.operator = null;
    display.innerText = "";
}

//ACボタンにリセット関数をセット
const acBtn = document.querySelector(".ac");
acBtn.addEventListener("click", reset);

//演算子をクリックした時の挙動
const opBtn = document.querySelectorAll(".op");
opBtn.forEach(el => {
    el.addEventListener("click",()=>{
        if(calculator.waitingForOperand){
            //2つのオペランドを計算
            calculator.displayValue = operations[op](parseFloat(calculator.firstOperand), parseFloat(calculator.displayValue));
            display.innerText = calculator.displayValue;
            op = el.value;
            console.log(op)
        }else{
            calculator.waitingForOperand = true;
            op = el.value;
            calculator.firstOperand = parseFloat(calculator.displayValue);
            calculator.displayValue = "0";
            console.log(calculator.firstOperand);
        }
    })
});

const eqBtn = document.querySelector(".eq");
eqBtn.addEventListener("click", ()=>{
    if(calculator.firstOperand != null){
        calculator.waitingForOperand = false;
        calculator.displayValue = operations[op](calculator.firstOperand, parseFloat(calculator.displayValue));
        calculator.firstOperand = calculator.displayValue;
        display.innerText = calculator.displayValue;
    }
    
});