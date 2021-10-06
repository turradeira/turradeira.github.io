function myFunction() {
    var x = document.getElementById("menu");
    var y = document.getElementById("ComponentsPos");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.height = "150px";
    } else {
      x.style.display = "block";
      y.style.height = "310px";
    }
  }
  

  