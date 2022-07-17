$(function(){
  var str = '#len'; //increment by 1 up to 1-nelemnts
  $(document).ready(function(){
    var i, stop;
    i = 1;
    stop = 5; //num elements
    setInterval(function(){
      if (i > stop){
        return;
      }
      $('#len'+(i++)).toggleClass('bounce');
    }, 500)
  });
});

var point = 0;
var texts = new Array();
texts.push("10/08: Candyland, 17:00");
texts.push("11/08: Färgfabriken, 17:00");
texts.push("12-14/08: Blivande, (all day)");

var intervalId = window.setInterval(function(){
  myFunction();
}, 5000);


function myFunction() {
  var elem = document.getElementById('fadeInOut');
  fade(elem);
  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  }
  elem.innerHTML = texts[point];
  unfade(elem);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.opacity = 0;
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
