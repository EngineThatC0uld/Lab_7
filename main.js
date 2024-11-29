$(document).ready(function(){
    $('.aircraft_gallery').slick({
        dots: true, 
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
            {
                breakpoints: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    });
});
