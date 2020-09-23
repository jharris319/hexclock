function setupTransitions() {
  document.body.style.transition = 'background-color 1s linear';
}

function updateClock() {
  var d = new Date();

  var hour    = (d.getHours()   < 10 ? '0' : '') + d.getHours();
  var minutes = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
  var seconds = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();

  var hex = '#' + (hour + minutes + seconds);

  document.getElementById('clock').innerHTML = hex;
  document.body.style.backgroundColor = hex;

  setTimeout(updateClock, 1000);
}

updateClock();
setTimeout(setupTransitions, 1000);