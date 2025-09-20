//必要なグローバル関数、一つ目の入力数a,二つ目の入力数b
let a = 0;
let b =0;
let operator = ""

const display = document.querySelector(".display");

// 各演算関数
const add = (a, b) => a + b;
const subtract = (a, b) => a-b;
const multiply = (a, b) => a*b;
const division = (a, b) => a/b;



//number buttons
const num = document.querySelectorAll(".num");
num.forEach(el => {
    el.addEventListener("click", ()=>{
        display.innerText += el.innerText;
    })
})

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
});