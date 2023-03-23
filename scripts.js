const httpRequest = new XMLHttpRequest();

function loadDoc(page) {
    httpRequest.onload = function() {
      document.getElementById("content").innerHTML = this.responseText;
      }
    if (page == 1) {
        httpRequest.open("GET", "./Pages/Proj1/index.html", true);
        httpRequest.send();
    }
    if (page == 2) {
        httpRequest.open("GET", "./Pages/Proj2/index.html", true);
        httpRequest.send();
    }
    if (page == 3) {
        httpRequest.open("GET", "./Pages/Proj41/index.html", true);
        httpRequest.send();
    }
    if (page == 4) {
        httpRequest.open("GET", "./Pages/index.html", true);
        httpRequest.send();
    }
  }