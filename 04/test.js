console.log('chess');

var wrap = document.querySelector('.wrap');
//CSS선택자로 요소선택가능, 선택자에 해당하는 첫 요소만 선택.
var str = '';
var className = '';
var isWhite = false;

for(var i = 0; i < 16; i++){

    str += '<div class = "black"></div>'; 
}

wrap.innerHTML = str;
//HTML문서의 wrap요소에 접근해 str을 넣는 과정 
