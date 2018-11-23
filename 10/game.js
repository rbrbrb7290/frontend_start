var wrapWidth = 300;
var bugWidth = 30;
var box = document.querySelector('.box');
var $bug = document.querySelector('#bug');
var $point = document.querySelector('#point')
var $life = document.querySelector("#life");
var point = 0;
var life = 10;

function life() {
  console.log('box');
 life -= 1;
 $life.innerHTML = life;
}

function addpoint() {
  console.log('bug');
  point +=1;
  $point.innerHTML = point;
}

function move() {
  var x = random(wrapWidth - bugWidth);
  var y = random(wrapWidth - bugWidth);
  console.log(x, y);

  $bug.style.left = x + 'px';
  $bug.style.top = y + 'px';
}
function random(max) { //난수생성을해서 임의로 위치변경
  return Math.floor(Math.random() * max);
}
setInterval(move, 900);

if(EventTarget == 'box')
{
  box.addEventListener("click", life);

} else{

  $bug.addEventListener("click", addpoint);
}



