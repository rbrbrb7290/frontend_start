console.log('1boon');
var count = 10;
var url = `https://1boon.kakao.com/ch/enter.json?page=1&pagesize=${count}`;

function print(json){
  console.log( json );

  var str = '';

  for(var i=0; i < json.data.length; i++){

    var title = json.data[i].title;
    var path =json.data[i].path; //주소값
    // str += '<a href="https://1boon.kakao.com/'+path+'">' + title + '</a><br>';
    str += `<a href="https://1boon.kakao.com/${path}">${title}</a><br>`
    //여러개 문자들을 쓸필요없이 ` `를 써서 간단하게 쓸수있음
  }

  document.getElementById('wrap').innerHTML = str;
}
getUrlData(url, print)


function getUrlData(url, callback) {
  fetch(url)
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
 var button = document.getElementById('more');
 button.addEventListener('click' , function(){
 
  count += 3;
  url = `https://1boon.kakao.com/ch/enter.json?page=1&pagesize=${count}`;
  console.log(count)//count확인
  

  getUrlData(url, print)

 })
