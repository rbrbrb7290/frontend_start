console.log('app')

var appkey = 'f3716205ee56e3a1b62c89ae7e5bffdd';
var query = '가나';
var url = `https://dapi.kakao.com/v2/search/web?query=${query}`

var myHeaders = new Headers();
myHeaders.append('Authorization', 'KakaoAK f3716205ee56e3a1b62c89ae7e5bffdd');

var options = {
    method: 'GET',
    headers : myHeaders
};

fetch(url, options).then(function(response){
    response.json().then(function(data){
      console.log('json data:',data);
    });
  })