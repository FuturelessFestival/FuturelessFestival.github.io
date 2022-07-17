var point = 0;
var op = 1;
var texts = new Array();
texts.push("10/08: Candyland, 17:00");
texts.push("11/08: Färgfabriken, 17:00");
texts.push("12-14/08: Blivande, (all day)");

var intervalId = window.setInterval(function(){
  myFunction();
}, 5000);


function myFunction() {
  var elem = document.getElementById('fadeInOut');
  if(point < texts.length - 1){
    point ++;
  }else{
    point = 0;
  }
  elem.innerHTML = texts[point];
}
