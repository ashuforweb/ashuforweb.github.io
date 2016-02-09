var score = 0;
var scpush = new Array();
window.onload = function() {
  document.getElementById('btn1').addEventListener('click', addToScore, false);
};

function addToScore() {

  scpush.push(getRandom(0, 6));
  score = scpush.sum();
  // console.log(scpush);
  // console.info("Score" + score);
  document.getElementById('fnscr').innerHTML = score;
  var scpushing = scpush;
  var sclength = scpush.length;
  if (sclength < 6) {
    scpushing.length = 6;
    scpushing.fill(0, sclength, 6);
    fnStream(scpushing);
  } else {
    scpushing.reverse();
    scpushing.length = 6;
    scpushing.reverse();
    fnStream(scpushing);
  }
  // console.log(scpush.slice(scpush.length - 6, scpush.length));

}

function fnStream(trm) {
  var strmdata = "";
  for (var j = 0; j < trm.length; j++) {
    if (j % 2 == 0) {
      strmdata += '<div class="strmi ball">' + trm[j] + '</div>';
    } else {
      strmdata += '<div class="strmi ball balle">' + trm[j] + '</div>';
    }
  }
console.log(strmdata);
  document.getElementById('strm').innerHTML = strmdata;
}

function getRandom(min, max) {

  var scr = Math.floor(Math.random() * (max - min) + min);
  // console.log(scr);
  return scr;
}

Array.prototype.sum = function() {
  var j = 0;
  for (var i = 0; i < this.length; i++) {
    j += this[i];
  }
  return j;
};
