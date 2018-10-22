console.log('1boon');
var count = 4;
var page =1;  
var url = `http://1boon.kakao.com/ch/trending.json?page=${page}&pagesize=${count}`;
var trending = document.getElementById('trending');
var issue = document.getElementById('issue');
var enter = document.getElementById('enter');
var temp;



function print(json, event){
  //console.log(json);

  var str = ''; 

  for(var i=0; i < json.data.length; i++){
    var path =json.data[i].path; //주소값
    var coverImage = json.data[i].coverImage;
    var title = json.data[i].title;
    var totalView = json.data[i].totalView
    str +=`<div class = "box"><h3><a href="http://1boon.kakao.com/${path}"><img src= ${coverImage}><h4>${title}</h4></h3></a>`
    //이미지와 제목을 a태그로 묶어서 클릭시 이동할 수 있게함 
        str += `<h5>조회수 : ${totalView}</h5></div>`
  }
  

  if(event === 'BUTTON') {
    document.getElementById('list').innerHTML += str;
  }
  else {
    document.getElementById('list').innerHTML = str;
  }
      // //로딩중 마크업의 display의 속성을 none으로 설정
     
      loading.style.display= "";
      list.innerHTML += '';

}
function init() {
  getUrlData(url, print, "event");
}

function getUrlData(url, callback, event) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log('json data:', data);
        //console.log(event);
        callback(data, event)
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);//오류코드출력해줌 ex 404
    });
}
/*트랜딩 탭 이벤트 */
trending.addEventListener('click', trending_tab);
function trending_tab(trending){
  console.log('trending_road!');
  getUrlData(url = `http://1boon.kakao.com/ch/trending.json?page=1&pagesize=${count}`, print, trending);
  trending.className = 'active'
  issue.className = '';
  enter.className = '';

  temp = trending;

}
/*이슈 탭 이벤트 */
issue.addEventListener('click', issue_tab);
function issue_tab(issue){
  console.log('issue_log!');
  
  getUrlData(url = `http://1boon.kakao.com/ch/issue.json?page=1&pagesize=${count}`, print, issue);

  trending.className = '';
  issue.className = 'active'
  enter.className = '';

  temp = issue;
  console.log(temp);
}
/*엔터 탭 이벤트 */
enter.addEventListener('click', enter_tab);
function enter_tab(enter){
  console.log('enter_log!!')  
  getUrlData(url = `http://1boon.kakao.com/ch/enter.json?page=1&pagesize=${count}`, print, enter);

  trending.className = '';
  issue.className = '';
  enter.className = 'active'

  temp = enter;
  console.log(temp);
}

 var button = document.querySelector('.btn');
 var loading = document.querySelector('.loading');
 button.addEventListener('click' , function(event){

++page;
url = `http://1boon.kakao.com/ch/trending.json?page=${page}&pagesize=${count}`;
getUrlData(url, print, event.target.tagName)
  // if(temp == trending) {
  //   getUrlData(url =`http://1boon.kakao.com/ch/${temp}.json?page=1&pagesize=${count}`, print, event.target.tagName)
  // } else if(temp == issue)  { 
  //   getUrlData(url =`http://1boon.kakao.com/ch/${temp}.json?page=1&pagesize=${count}`, print, event.target.tagName)
  // } else if(temp == enter) {
  //   getUrlData(url =`http://1boon.kakao.com/ch/${temp}.json?page=1&pagesize=${count}`, print, event.target.tagName)
  // }
 })

//  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
//   var target = $(e.target).attr("href") // activated tab
//   alert('fds');
//   getUrlData(url, print, "event");

// });

/* 초기화면 설정*/ 
document.body.onload = init;  