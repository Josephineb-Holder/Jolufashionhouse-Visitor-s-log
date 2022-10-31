var myCarousel = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mypic");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myCarousel++;
    if (myCarousel > x.length) {myCarousel = 1}    
    x[myCarousel-1].style.display = "flex";  
    setTimeout(carousel, 3000); 
  }
  