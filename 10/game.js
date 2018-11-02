var wrapWidth = 300;
var bugWidth = 30;
var box = document.querySelector('.box');
var $bug = document.querySelector('#bug');
var $point = document.querySelector('#point')
var $life = document.querySelector("#life");
var point = 0;
var life = 0;

// function life() {
//  life -= 1;
//  $life.innerHTML = life;
// }


function addpoint() {
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
function random(max) {
  return Math.floor(Math.random() * max);
}

// box.addEventListener("click", life);
$bug.addEventListener("click", addpoint);


setInterval(move, 1000);
