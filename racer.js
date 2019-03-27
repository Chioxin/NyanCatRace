var p1Pos = 0;
var p2Pos = 0;
var winBox = document.getElementById('winBox')
var winner = false;
var speed = 25;

var didWin = function (element, racer) {
  let length = element.style.marginLeft.length;
  if (element.style.marginLeft.substring(0, length-2) > window.innerWidth-250) {
    winBox.textContent = 'We have a winner!';
    winner = true;
  }
}

var moveCar = function (element, pos) {
  element.style.marginLeft = pos + 'px';
}

var checkKey = function (e) {
  if (!winner) {
    if (e.key == 'q' || e.key == 'e') {
      let element = document.getElementById('player1')
      p1Pos += speed;
      moveCar(element, p1Pos);
      didWin(element, 'player1');
    }
    if (e.key == 'i' || e.key == 'p') {
      p2Pos += speed;
      let element = document.getElementById('player2')
      moveCar(element, p2Pos);
      didWin(element, 'player2');
    }
  }
}

document.addEventListener('keydown', checkKey);
