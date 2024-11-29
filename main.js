$(document).ready(function(){
    $('.aircraft_gallery').slick({
        dots: true, 
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        responsive: [
            {
                breakpoint: 380, 
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
});
