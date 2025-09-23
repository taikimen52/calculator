let op = "";

//電卓の状態管理
const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForOperand: false,
  operator: null,
  justcalcurated: false
};

// 各演算関数をオブジェクトとして持つ
const operations ={
    "+" : (a, b) => a + b,
    "-" : (a, b) => a - b,
    "*" : (a, b) => a * b,
    "/" : (a, b) => a / b
}

const display = document.querySelector(".display");
display.innerText = calculator.displayValue;

//number buttons
const num = document.querySelectorAll(".num");
num.forEach(el => {
    el.addEventListener("click", ()=>{
        if(calculator.displayValue === "0"){
            calculator.displayValue = "";
            calculator.displayValue += el.value;
            display.innerText = calculator.displayValue;
            calculator.justcalcurated = false;
        }else if(calculator.justcalcurated){
            calculator.displayValue = ""
            calculator.displayValue += el.value;
            display.innerText = calculator.displayValue;
        }
        else{
            calculator.displayValue += el.value;
            display.innerText = calculator.displayValue;   
            calculator.justcalcurated = false;
        }        
    })
})

//リセット関数
function reset(){
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForOperand = false;
    calculator.operator = null;
    display.innerText = "0";
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
            calculator.firstOperand = operations[op](parseFloat(calculator.firstOperand), parseFloat(calculator.displayValue));
            calculator.displayValue = "0"
            display.innerText = calculator.firstOperand;
            op = el.value;
        }else{
            calculator.waitingForOperand = true;
            op = el.value;
            calculator.firstOperand = calculator.displayValue;
            calculator.displayValue = "0";
            display.innerText = calculator.firstOperand
        }
    })
});

//=ボタン
const eqBtn = document.querySelector(".eq");
eqBtn.addEventListener("click", ()=>{
    if(calculator.firstOperand != null){
        calculator.waitingForOperand = false;
        calculator.displayValue = operations[op](parseFloat(calculator.firstOperand), parseFloat(calculator.displayValue));
        calculator.firstOperand = calculator.displayValue;
        display.innerText = calculator.displayValue;
        calculator.justcalcurated = true;
    }
});

//小数点ボタン
const dotBtn = document.querySelector(".dot");
dotBtn.addEventListener("click", ()=>{
    if(!calculator.displayValue.includes(".")){
        calculator.displayValue += ".";
        display.innerText = calculator.displayValue;
    }
})