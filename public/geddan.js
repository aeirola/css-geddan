function random() {
  return Math.random() * 2 - 1;
}

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function geddanify() {
  var geddans = document.getElementsByClassName('geddan');

  var imgUrl = getParameterByName('img');
  for(var i = 0; i < geddans.length; i++) {
    var element = geddans.item(i);
    if (imgUrl) {
      element.style.backgroundImage = 'url(' + imgUrl + ')';
    } else {
      element.style.backgroundColor = 'black';
    }
  }

  window.setInterval(function geddanStep() {
    for(var i = 0; i < geddans.length; i++) {
      var element = geddans.item(i);
      var transform = 'matrix(' + random() + ',' + random() + ',' + random() + ',' + random() + ',' + random() + ',' + random() + ')';
      element.style.transform = transform;
    }
  }, 20);

}

window.onload = geddanify;
