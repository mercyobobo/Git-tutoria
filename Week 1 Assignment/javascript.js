let num1 = 10;
let num2 = 20;
const name = "Obobo";
let total;
 
 
total = num1 + num2;
console.log(`addition: ${total}`);
document.getElementById("addition").innerText= `addition ${total}`;
 
 
total = num1 - num2;
console.log(`substraction: ${total}`);
document.getElementById("substraction").innerText= `substraction ${total}`;
 
total = num1 * num2;
console.log(`multiplication: ${total}`);
document.getElementById("multiplication").innerText= `multiplication ${total}`;
 
total = num1 / num2;
console.log(`division: ${total}`);
document.getElementById("division").innerText= `division ${total}`;
 
document.getElementById("message").innerText= `Hello ${name}, the result of num1 + num2 is ${num1 + num2}`;
 
 
 