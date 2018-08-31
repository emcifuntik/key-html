$('.drop_down_btn').click(function(e) {
    e.stopPropagation();
    $(this).find('.drop_down_menu').fadeToggle();
});


$('.drop_down_menu').click(function(e) {
    e.stopPropagation();
});

$('body').click(function() {
    $('.drop_down_menu').fadeOut();
});


var $car = $('.live-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 1000
});


function add_live() {
    var live_box = $('.live-carousel').find('.carousel-cell');
    var i = 0;
    var timer = setInterval(function() {
        second = Math.round(Math.random() * 5 + 3);
        $car.flickity('append', $(live_box[i]).clone());
        i++;
        if (i == live_box.length) {
            add_live();
        }
    }, 5000);
}

add_live();

$('.slider-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
});


$('.search_inp').focus(function() {
    $('.dropdown_search_box').fadeIn();
});
$('.search_inp').blur(function() {
    $('.dropdown_search_box').fadeOut();
});

$('.rulet-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
});

$('#myRange').change(function() {
    var val = $(this).val();
    if (val < 10) {
        val = 0 + val;
    }
    $('.step_val').html(val);
});


// $('#happy').modal();