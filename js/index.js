const list = document.querySelector('#ToDoList');

const form = document.querySelector('form');
const CrtInpt = document.querySelector('#CrtInpt');
const CrtDate = document.querySelector('#CrtDate');

const ToDoEl = document.querySelector('#ToDoEl');
const Num = ToDoEl.content.querySelector('label');
const DoText = ToDoEl.content.querySelector('#Do');
const Dodate = ToDoEl.content.querySelector('#Date');
const ComBtn = ToDoEl.content.querySelector('#Complete');
const DelBtn = ToDoEl.content.querySelector('#Delete');

let mas = [];
let El;

let UpdateList = function () {
    if (list.childElementCount != 0) {list.innerHTML = '';}
    for (let i=0;i<mas.length;i++){
        Num.textContent = i+1;
        DoText.textContent = mas[i].text;
        Dodate.textContent = mas[i].date;
        El = ToDoEl.content.cloneNode(true);
        list.append(El);
    }
}

let AddToList = function (txt,dte) {
    let el = { text: txt, date: dte};
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
    if (this.innerHTML == 'Complete') {this.innerHTML = 'Not complete';}
    else {this.innerHTML = 'Complete';}
});

DelBtn.addEventListener('click', function() {
    if (this.parentElement.lastElementChild.prevElementSibling.innerHTML == 'Complete') {
        for (let i = this.parentElement.firstElementChild.innerHTML - 1;i<mas.length;i++){
            if (i<mas.length) {mas[i].text = mas[i+1].text; mas[i].date=mas[i+1].date;}
            else {mas.pop();}
        }
        UpdateList();
    }
    else {prompt('ToDo need to be completed!');}
});