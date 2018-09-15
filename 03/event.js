var btn = document.querySelector('#btn');
console.log(btn);


function click(evnet){
console.log('click' , event);
window.open('http://m.daum.net' , '','width = 100, height =100')
}

btn.addEventListener('click', click)
