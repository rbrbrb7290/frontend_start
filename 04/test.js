console.log('chess');

var wrap = document.querySelector('.wrap');
//CSS선택자로 요소선택가능, 선택자에 해당하는 첫 요소만 선택.
var str = '';
var className = '';
var isWhite = false;

for(var i = 0; i < 16; i++){

    if(isWhite) {
        className = 'white';
    }
    else{
        className = 'black';
    }

    str += '<div class="'+ className +'"></div>';//white,black 클래스를 번갈아 넣음

    //여기까지만하면 isWhite가 계속 false이기때문에 16개 칸이 white로됨
    
    isWhite = !isWhite; //조건문 else를 충족시키면서 white,black칸을 번갈아 형성

}

wrap.innerHTML = str;
//HTML문서의 wrap요소에 접근해 str을 넣는 과정 
