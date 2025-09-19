//必要なグローバル関数、最初の入力数a,演算子の後の入力数b
let a = 0;
let b =0;

const display = document.querySelector(".display");
let operator ="";

// 各演算関数
const add = (a, b) => a + b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const division = (a, b) => a/b;

// =の挙動
function getResult(a, b, operator){
    if(operator === "+"){
        return add(a, b);
    }else if(operator === "-"){
        return subtract(a, b);
    }else if(operator === "*"){
        return multiply(a, b);
    }else if(operator === "/"){
        return division(a, b);
    }
};

//number buttons
const six = document.querySelector("#six");
six.addEventListener("click", ()=>{
    display.innerText += "6"
});

const seven = document.querySelector("#seven");
seven.addEventListener("click", ()=>{
    display.innerText += "7"
});

const eight = document.querySelector("#eight");
eight.addEventListener("click", ()=>{
    display.innerText += "8"
});

const nine = document.querySelector("#nine");
nine.addEventListener("click", ()=>{
    display.innerText += "9"
});

//ACボタン
const acBtn = document.querySelector(".ac");
acBtn.addEventListener("click", ()=>{
    a = 0;
    b = 0;
    display.innerText = "";
});

const addBtn = document.querySelector("#plus");
addBtn.addEventListener("click",()=>{
    a = parseFloat(display.innerText)
    display.innerText += "+";
    op = "+";
    console.log(a)
    console.log(typeof a)
});

const eqBtn = document.querySelector("#eq");
eqBtn.addEventListener("click", ()=>{
    b = display.innerText;
    console.log(op)
    getResult(a, b, op);
});