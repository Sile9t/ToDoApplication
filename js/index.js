const wrap = document.querySelector('.wrapper');

const form = document.querySelector('form');
const CrtInpt = document.querySelector('#CrtInpt');
const CrtDate = document.querySelector('#CrtDate');

const t = document.querySelector('#ToDoEl');
const Num = t.content.querySelector('#Num');
const Do = t.content.querySelector('#Do');
const Dt = t.content.querySelector('#Date');
const ComBtn = t.content.querySelector('#Complete');
const DelBtn = t.content.querySelector('#Delete');

form.addEventListener('submit',function() {
    let El = t.content.cloneNode(true); 
    Do.textContent = CrtInpt.Value;
    Dt.textContent = CrtDate.Value;
    wrap.append(El);
});