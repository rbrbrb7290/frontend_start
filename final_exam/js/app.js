console.log('my-note app.js');

// .value로 memo안에있는 내용을 선택
var reset_btn = document.querySelector('.btn-newnote');
var save_btn = document.querySelector('.btn-savenote');
var full_btn = document.querySelector('.btn-full');
var download = document.querySelector('.btn_download');
var about_btn = document.querySelector('.btn-about');
var a = document.querySelector("#memo"); 

//popup on/off
function close_popup() {
  document.querySelector('.about').style.visibility = "hidden";
}
function popup() {
  document.querySelector('.about').style.visibility = "visible";
}
//메모입력한 날짜받아오는 함수 
function Get_date() {
var d = new Date(); 
var date= (d.getFullYear() + '.'+(d.getMonth() + 1) + '.'+d.getDate() + ' ' +d.getHours() + ':'+ d.getMinutes());
return date;
}

//메모 내역 다운로드
function memo_download() {
  
  if(localStorage.getItem('num')== null)
  {
    alert("저장된 메모가 없습니다! 메모를 저장해주세요.");
  } else {
    var savetext = ""; 
      for(var i = 1; i < localStorage.getItem('num'); i++)
      {
        memo[i] = JSON.parse(localStorage.getItem(i));
        console.log(memo[i]);
       savetext += `메모:${memo[i].memo} || 날짜:${memo[i].date}\n`;
      }
      var blob = new Blob([savetext], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "memo.txt");
    }
  }

//입력 중 메모 초기화
function reset_Text() {
    document.getElementById('memo').value = " ";
}
//메모 저장
function save_Text() {
    var date = Get_date();
    var num = localStorage.getItem('num');
     //같은key의 중복입력되는 경우를 방지하기 위해서 'num'을 불러와서 마지막 입력했던 key다음 순서로 입력하게함
    if('num'== null){
      localStorage.setItem(0, JSON.stringify({"memo":a.value ,"date":date}));
    } else {
    num = localStorage.getItem('num');
    localStorage.setItem(num, JSON.stringify({"memo":a.value ,"date":date}));
    }
    num++;
    localStorage.setItem('num', num);
    console.log("memo1 : "+localStorage.memo1);
}

//전체화면으로 전환
function toggleFullScreen() {
  if (screenfull.enabled) {
		screenfull.request();
	} else {
		alter("실패"); 
	}
}

reset_btn.addEventListener('click', reset_Text);
save_btn.addEventListener('click', save_Text);
full_btn.addEventListener('click', toggleFullScreen);
download.addEventListener('click', memo_download);
about_btn.addEventListener('click', popup);
document.querySelector('.about').addEventListener('click', close_popup);

