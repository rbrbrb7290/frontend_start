console.log('app')
var pagesize;
var query; 
var appkey = 'f3716205ee56e3a1b62c89ae7e5bffdd';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`;
var search = document.querySelector('.search');


var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK f3716205ee56e3a1b62c89ae7e5bffdd');

var options = {
    method: 'GET',
    headers : myHeaders
};

function print(json){
  console.log( json );

  var str = '';

  for(var i=0; i < json.documents.length; i++){
    var url =json.documents[i].url;
    var title = json.documents[i].title;
    var contents =json.documents[i].contents; //주소값
    // str += '<a href="https://1boon.kakao.com/'+path+'">' + title + '</a><br>';
    str += `<a href = ${url}>${title}</a><br>${contents}<br>`;
    //여러개 문자들을 쓸필요없이 ` `를 써서 간단하게 쓸수있음
  }
  document.getElementById('wrap').innerHTML = str;
}
function getUrlData(query, options, callback) {
  url = `https://dapi.kakao.com/v2/search/web?query=${query}&size=${pagesize}`;
  fetch(url, options)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log('json data:', data);
        callback(data)
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);//오류코드출력해줌 ex 404
    });
}

var button = document.querySelector('.btn');
button.addEventListener('click', function(){
  query = search.value;
  console.log(query)
  getUrlData(query,options, print)
})

//enter키 입력함수  //엔터키 함수가 클릭이벤트 전에는 실행x ,클릭이벤트후에 엔터키함수가 console에서는 실행되는데 출력은 안되고있음
function onKeyDown()
{
     if(event.keyCode == 13)
     {
      // button.addEventListener('click', function(){
      //   query = search.value;
      //   console.log(query)
      //   getUrlData(query,options, print)
      // })
     }
}
