function random() {
  return Math.random() * 2 - 1;
}

function geddanify() {
  var geddans = document.getElementsByClassName('geddan');

  window.setInterval(function geddanStep() {
    for(var i = 0; i < geddans.length; i++) {
      var element = geddans.item(i);
      var transform = 'matrix(' + random() + ',' + random() + ',' + random() + ',' + random() + ',' + random() + ',' + random() + ')';
      element.style.transform = transform;
    }
  }, 20);

}

window.onload = geddanify;
