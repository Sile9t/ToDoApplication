const list = document.querySelector('#ToDoList');

const form = document.querySelector('form');
const CrtInpt = document.querySelector('#CrtInpt');
const CrtDate = document.querySelector('#CrtDate');

const ToDoEl = document.querySelector('#ToDoEl');
const Num = ToDoEl.content.querySelector('label');
const Do = ToDoEl.content.querySelector('#Do');
const Dt = ToDoEl.content.querySelector('#Date');
const ComBtn = ToDoEl.content.querySelector('#Complete');
const DelBtn = ToDoEl.content.querySelector('#Delete');

let mas = [];
let El;

let UpdateList = function (){
    if (list.childElementCount != 0) {list.innerHTML = '';}
    for (let i=0;i<mas.length;i++){
        Num.textContent = i+1;
        Do.textContent = mas[i].text;
        Dt.textContent = mas[i].date;
        El = ToDoEl.content.cloneNode(true);
        list.append(El);
    }
}

let AddToList = function (t,d){
    let el = { text: t, date: d};
    mas.push(el);
    UpdateList();
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    AddToList(CrtInpt.value,CrtDate.value);
    //console.log(list.firstElementChild.firstElementChild.nextElementSibling.innerHTML);
    //console.log(list.remove(list.firstElementChild.firstElementChild));
});

ComBtn.addEventListener('click', function() {
    if (ComBtn.innerHTML == 'Complete') {ComBtn.innerHTML = 'Not complete';}
    else {ComBtn.innerHTML = 'Complete';}
});