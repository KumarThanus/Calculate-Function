var num1 = document.getElementById('input-1');
var num2 = document.getElementById('input-2');
var display = document.getElementById('display');

function clear(){
    num1.value = '';
    num2.value = '';
    display.value = '';
}

function add(){
     display.innerHTML= parseFloat(num1.value) + parseFloat(num2.value);    
    clear();
}

function sub(){
    display.innerHTML = parseFloat(num1.value) - parseFloat(num2.value);
    clear();
}

function mul(){
    display.innerHTML = parseFloat(num1.value) * parseFloat(num2.value);
    clear();
}

function div(){
    display.innerHTML = parseFloat(num1.value) /   parseFloat(num2.value) ;
    clear();
}

