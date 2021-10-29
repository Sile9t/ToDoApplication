const list = document.querySelector('#ToDoList');

const form = document.querySelector('form');
const CrtInpt = document.querySelector('#CrtInpt');
const CrtDate = document.querySelector('#CrtDate');

const t = document.querySelector('#ToDoEl');
const Num = t.content.querySelector('label');
const Do = t.content.querySelector('#Do');
const Dt = t.content.querySelector('#Date');
const ComBtn = t.content.querySelector('#Complete');
const DelBtn = t.content.querySelector('#Delete');

let mas = [];
let El;

form.addEventListener('submit',function() { 
    mas.push([CrtInpt.Value,CrtDate.Value]);
});

mas.push(['sgawgag','11.11.1111']); 

for (let i=0;i<mas.length;i++){
    Num.textContent = i+1;
    Do.textContent = mas[i][0];
    Dt.textContent = mas[i][1];
    El = t.content.cloneNode(true);
    list.append(El);
}