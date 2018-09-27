console.log('chess');

var wrap = document.querySelector('.wrap');
//CSS선택자로 요소선택가능, 선택자에 해당하는 첫 요소만 선택.
var str = '';
var className = '';
var isWhite = false;

for(var i = 0; i < 16; i++){

    if(isWhite) {
        className = 'black';
    }
    else{
        className = 'white';
    }

    str += '<div class="'+ className +'"></div>';//조건에 맞는 클래스를 넣음

    //여기까지만하면 isWhite가 계속 false이기때문에 16개 칸이 white로됨
    
  isWhite = !isWhite; //!isWhite는 true가 되며, white,black칸을 번갈아 형성

     if(i % 4 == 3){
        isWhite = !isWhite;
     }

}

wrap.innerHTML = str;
//HTML문서의 wrap요소에 접근해 str을 넣는 과정 

var boards = document.querySelectorAll('.wrap > div'); //선택자 모두를 불러옴
var selectedDom = null;

//모든 선택자(boards)에 click함수를 호출하는 클릭 이벤트를 추가)
for(var i = 0; i < 16; i++) {
    console.log(boards[i]);
    boards[i].addEventListener('click' , click)
}

// 클릭이벤트 함수
function click(e) {
    var board = event.currentTarget;
    console.log(className);
    board.style.backgroundColor = "green";

    if(className == 'black') 
    { color = "black" }
    else {color = 'white'}
}


    // if(selectedDom){
    //     selectedDom.className = selectedDom.className.replace(' select', '');
    // }
    // board.className += ' select';
    // selectedDom = board; //선택된 보드를 Dom에 저장



   
   

    


