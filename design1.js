var slideIndex = 0;
    // showSlides();
function currentSlide(n) {
    if (n > slides.length) {n = 1}
        else if(n < 1) {n = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
        else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

setInterval(showSlides, 5000); // Change image every 5 seconds

//-------------------------------------------------------------------------------------------------------
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
loop:true,
margin:10,
nav:true,
dots: true,
autoplay:true,
responsive:{
  0:{
      items:2
  },
  600:{
      items:3
  },
  1000:{
      items:5
  }
}
});
});
//-----------------------------------------------------------------------------------------------------
$(document).ready(function(){
    $(".wish-icon i").click(function(){
      $(this).toggleClass("fa-heart fa-heart-o");
    });
  });
//----------------------------------------------------------------------------------------------------



                               	
                                