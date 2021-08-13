$(document).ready(function(){


    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

});






$('section').each(function(){
    var id =$(this).attr('id');
    var height = $(this).height();
    var offset=$(this).offset().top - 200;
    var top = $(window).scrollTop();
    if(top >= offset && top < offset + height){
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#' + id + '"]').addClass('active');
    }
});



/* image slider dstart */
var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  
/*image slider ends*/