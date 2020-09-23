function updateClock() {
  var d = new Date();

  var hour    = (d.getHours()   < 10 ? '0' : '') + d.getHours();
  var minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  var seconds = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();

  var hex = '#' + (hour + minutes + seconds);

  var brightness = Math.round(((parseInt(hour)    * 299) +
                               (parseInt(minutes) * 587) +
                               (parseInt(seconds) * 114)) / 1000);

  var textColor = (brightness > 125) ? '#000000' : '#FFFFFF';

  document.getElementById('clock').style.color = textColor;
  document.getElementById('clock').innerHTML = hex;
  document.body.style.backgroundColor = hex;
}

document.addEventListener('DOMContentLoaded', function(){ 
  window.setInterval(function(){
    updateClock();
  }, 1000);
}, false);