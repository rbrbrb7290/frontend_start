console.log('1boon');
var count = 10;
var url = `http://1boon.kakao.com/ch/trending.json?page=1&pagesize=${count}`;

function print(json, event){
  console.log(json);

  var str = '';

  for(var i=0; i < json.data.length; i++){

    var title = json.data[i].title;
    var path =json.data[i].path; //주소값
    // str += '<a href="https://1boon.kakao.com/'+path+'">' + title + '</a><br>';
    str += `<a href="https://1boon.kakao.com/${path}">${title}</a><br>`
    //여러개 문자들을 쓸필요없이 ` `를 써서 간단하게 쓸수있음
  }
  if(event === 'BUTTON') {
    document.getElementById('list').innerHTML += str;
  }
  else {
    document.getElementById('list').innerHTML = str;
  }
}
getUrlData(url, print, "noe")


function getUrlData(url, callback, event) {
  fetch(url)
    .then(function(response) {
      response.json().then(function(data) {
        // console.log('json data:', data);
        console.log(event);
        callback(data, event)
      });
    })
    .catch(function(err) {
      console.log('Fetch Error :-S', err);//오류코드출력해줌 ex 404
    });
}
 var button = document.querySelector('.btn');
 button.addEventListener('click' , function(event){
    count += 1;
  url = `https://1boon.kakao.com/ch/enter.json?pagesize=10&page=${count}`;
  console.log(count)//count확
  getUrlData(url, print, event.target.tagName)

 })
