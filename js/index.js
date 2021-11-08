const list = document.querySelector('#ToDoList');

const form = document.querySelector('form');
const CrtInpt = document.querySelector('#CrtInpt');
const CrtDate = document.querySelector('#CrtDate');

const SrchInpt = document.querySelector('#SrchInpt');
const SrchDate = document.querySelector('#SrchDate');

const SrtByAlph = document.querySelector('#SrtByAlph');
const SrtByDate = document.querySelector('#SrtByDate');
const SrtReset = document.querySelector('#SrtReset');

const EmptyMasMsg = document.createElement('label');
EmptyMasMsg.innerHTML = 'No elements like this';

let Mas = [];
let El;

let UpdateList = function (mas) {
    if (list.childElementCount != 0) { list.innerHTML = ''; }
    for (let i = 0; i < mas.length; i++) {
        let div = document.createElement('div');
        div.className = 'ToDos';
        let Num = document.createElement('label');
        Num.innerHTML = i + 1;
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

let AddToList = function (txt, dte) {
    let el = { text: txt, date: dte };
    Mas.push(el);
    UpdateList(Mas);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    AddToList(CrtInpt.value, CrtDate.value);
});

list.onclick = function (e) {
    let target = e.target;
    if (target.id == 'Complete') { ChangeCom(target); }
    else if (target.id == 'Delete') { DelEl(target); }
    else return;
}

let ChangeCom = function (Com) {
    if (Com.innerHTML == 'Complete') { Com.innerHTML = 'Not complete'; }
    else { Com.innerHTML = 'Complete'; }
}

let DelEl = function (Del) {
    if (Del.parentElement.lastElementChild.previousSibling.innerHTML == 'Complete') {
        for (let i = Number(Del.parentElement.firstElementChild.innerHTML) - 1; i < Mas.length; i++) {
            if (i < Mas.length - 1) { Mas[i].text = Mas[i + 1].text; Mas[i].date = Mas[i + 1].date; }
            else { Mas.pop(); }
        }
        UpdateList(Mas);
    }
    else { alert('ToDo need to be completed!'); }
}

SrchInpt.onchange = function (e) {
    let inp = SrchInpt.value;
    if ((inp != '') && (e.code = 'Enter')) {
        let Mas1 = [];
        for (let i = 0; i < Mas.length; i++) {
            if (Mas[i].text == inp) { Mas1.push(Mas[i]); }
        }
        if (Mas1 != '') { UpdateList(Mas1); }
        else { UpdateList(Mas1); list.append(EmptyMasMsg); }
    }
    else { UpdateList(Mas); }
}

SrchDate.onkeydown = function (e) {
    let inp = SrchDate.value;
    if ((inp != '') && (e.code == 'Enter')) {
        let Mas1 = [];
        for (let i = 0; i < Mas.length; i++) {
            if (Mas[i].date == inp) { Mas1.push(Mas[i]); }
        }
        if (Mas1 != '') { UpdateList(Mas1); }
        else { UpdateList(Mas1); list.append(EmptyMasMsg); }
    }
    else { UpdateList(Mas); }
}

SrtByAlph.onclick = function () {
    let Mas1 = Mas.slice();
    Mas1 = Mas1.sort(function (a, b) {
        if (a.text > b.text) return 1;
        else if (a.text < b.text) return -1;
        else return 0;
    });
    UpdateList(Mas1);
}

SrtByDate.onclick = function () {
    let Mas1 = Mas.slice();
    Mas1 = Mas1.sort(function (a, b) {
        if (a.date > b.date) return 1;
        else if (a.date < b.date) return -1;
        else return 0;
    });
    UpdateList(Mas1);
}

SrtReset.onclick = function () {
    UpdateList(Mas);
}