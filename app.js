const myNodeList = document.querySelectorAll('li');
let i;

for (i = 0; i < myNodeList.length; i++) {
    const span = document.createElement('span');
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
};

const close = document.getElementsByClassName("close");
console.log(close)

for (i = 0; i < close.length; i++) {
    console.log(close[i])
    close[i].onclick = function() {
        console.log(close[i]);
        let div = this.parentElement;
        console.log(this.parentElement)
        div.style.display = "none";
    };
};

const list = document.querySelector('ul');


function newElement() {
    // console.log("click");
    const li = document.createElement('li');
    let inputValue = document.querySelector('#myInput').value;
    // console.log(inputValue);
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.querySelector('#myUl').appendChild(li);
    };
    document.querySelector('#myInput').value = "";

    const span = document.createElement('span');
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        console.log('click');
        close[i].onclick = function() {
            console.log('click');
            let div = this.parentElement;
            div.style.display = "none";
        };
    };
};

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    };
});