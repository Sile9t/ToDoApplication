const list = document.querySelector('#ToDoList');

const form = document.querySelector('form');
const CrtInpt = document.querySelector('#CrtInpt');
const CrtDate = document.querySelector('#CrtDate');

let mas = [];
let El;

let UpdateList = function () {
    if (list.childElementCount != 0) {list.innerHTML = '';}
    for (let i=0;i<mas.length;i++){
        let div = document.createElement('div');
        div.className = 'ToDos';
        let Num = document.createElement('label');
        Num.innerHTML = i+1;
        let DoText = document.createElement('label');
        DoText.innerHTML = mas[i].text;
        let DoDate = document.createElement('label');
        DoDate.innerHTML = mas[i].date;
        let ComBtn = document.createElement('button');
        ComBtn.innerHTML = 'Not complete';
        ComBtn.id = 'Complete';
        ComBtn.className = 'ListBtn';
        let DelBtn = document.createElement('button');
        DelBtn.innerHTML = 'Delete';
        DelBtn.id = 'Delete';
        DelBtn.className = 'ListBtn';
        div.append(Num);
        div.append(DoText);
        div.append(DoDate);
        div.append(ComBtn);
        div.append(DelBtn);
        list.append(div);
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
});

list.onclick = function(event) {
    let target = event.target;
    if (target.id == 'Complete') {ChangeCom(target);}
    else if (target.id == 'Delete') {DelEl(target);}
    else return;
}

let ChangeCom = function(Com) {
    if (Com.innerHTML == 'Complete') {Com.innerHTML = 'Not complete';}
    else {Com.innerHTML = 'Complete';}
}

let DelEl = function(Del) {
    console.log(Del.parentElement.lastElementChild.prevElementSibling.id);
    console.log(Del.parentElement.firstElementChild.innerHTML);
    if (Del.parentElement.lastElementChild.prevElementSibling.innerHTML == 'Complete'){
        console.log(Del.parentElement.lastElementChild.prevElementSibling);
        console.log(Del.parentElement.firstElementChild.innerHTML);
        for (let i = Number(Del.parentElement.firstElementChild.innerHTML) - 1;i<mas.length;i++){
            if (i<mas.length) {mas[i].text = mas[i+1].text; mas[i].date=mas[i+1].date;}
            else {mas.pop();}
        }
        UpdateList();
    }
    else {prompt('ToDo need to be completed!');}
}