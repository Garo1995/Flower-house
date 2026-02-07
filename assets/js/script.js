$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

$(document).ready(function () {
    $('select').styler();
})

$('.product__number ul li').click(function(){
    $('.product__number ul li').removeClass("product__number__active");
    $(this).addClass("product__number__active");
});
$('.color-for-filter').click(function(){
    $('.color-for-filter').removeClass("color-filter__active");
    $(this).addClass("color-filter__active");
});
$('.prod__raz ul li a').click(function(){
    $('.prod__raz ul li a').removeClass("prod__raz__active");
    $(this).addClass("prod__raz__active");
});

//  ================ -menu-click-start- ================
$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }
    });
});

//  ================ -menu-click-end- ================

$('.catalog-sort-name strong').on('click', function (e) {
    $(this).parent().toggleClass('click-open-leng');
    e.stopPropagation()
});

$('.catalog-sort-drop ul li a').on('click', function () {
    var text_in = $('.catalog-sort-name strong').html();
    let selected_text = $(this).html();
    $('.catalog-sort-name strong').html(selected_text);
    $(this).html(text_in)
    $('.catalog-sort-name').removeClass('click-open-leng');

});

$(window).on('click', function (e) {
    let menuSort = $('.catalog-sort-name');
    if (e.target !== menuSort) {
        menuSort.removeClass('click-open-leng')
    }
});

$(".asked-question-click").on('click',function () {
    $(this).parent().toggleClass('parameter-filter_close')
})

$('.open__catalog').on('click',function (e) {
    $(this).parent().toggleClass('open__catalog__act');
    e.stopPropagation()

});
$('.catalog__menu').on('click',function (e) {
    e.stopPropagation()
});

$(window).on('click', function (e) {
    let menuSort = $('.header__catalog');
    if (e.target !== menuSort) {
        menuSort.removeClass('open__catalog__act')
    }
});
var swiper = new Swiper(".policy-slide", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var prodswiper = new Swiper(".sphinx-photo-slid", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.entrance__close__mod').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100)

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100)

        }
    })
});

$('.show-sort-name strong').on('click', function (e) {
    $(this).parent().toggleClass('show-catalog-sort-act');
    e.stopPropagation()
});

$('.show-sort-drop ul li a').on('click', function () {
    var text_in = $('.show-sort-name strong').html();
    let selected_text = $(this).html();
    $('.show-sort-name strong').html(selected_text);
    $(this).html(text_in)
    $('.show-sort-name').removeClass('show-catalog-sort-act');
});

$(window).on('click', function (e) {
    let menuSort = $('.show-sort-name');
    if (e.target !== menuSort) {
        menuSort.removeClass('show-catalog-sort-act')
    }
});



$(document).ready(function () {

    $('.increment').on('click', incrementsVal);
    $('.decrement').on('click', decrementVal);

    function incrementsVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val++;
        $(parent_val).find('input[type=text]').val(input_val)
    }

    function decrementVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val--;
        if (input_val <= 1) {
            $(parent_val).find('input[type=text]').val('1')
        } else {
            $(parent_val).find('input[type=text]').val(input_val)

        }
    }

});

$('.close-filter-in-mob').on('click', function (e) {
    $('.catalog-cnt-left').toggleClass('catalog-filter-active');
    e.stopPropagation()
});
$('.catalog-filter-close').on('click', function () {
    $('.catalog-cnt-left').removeClass('catalog-filter-active')
});


let sliders = document.getElementsByClassName('nonlinear');
for (let i = 0; i < sliders.length; i++) {
    let slid = sliders[i];
    noUiSlider.create(slid, {
        connect: true,
        behaviour: 'tap',
        start: [document.getElementById(slid.getAttribute('data-id') + '-lower-value').value, document.getElementById(slid.getAttribute('data-id') + '-upper-value').value],
        range: {
            'min': [parseInt(slid.getAttribute('data-min'))],
            'max': [parseInt(slid.getAttribute('data-max'))]
        },
    });
    document.getElementById(slid.getAttribute('data-id') + '-lower-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([this.value, null]);
    });
    document.getElementById(slid.getAttribute('data-id') + '-upper-value').addEventListener('change', function () {
        sliders[this.getAttribute('data-index')].noUiSlider.set([null, this.value]);

    });
    slid.noUiSlider.on('slide', function (values, handle, unencoded, isTap, positions) {
        var nodes = [
            document.getElementById(this.target.getAttribute('data-id') + '-lower-value'), // 0
            document.getElementById(this.target.getAttribute('data-id') + '-upper-value'),  // 1
        ];
        nodes[handle].value = parseInt(values[handle]);
    });
    slid.noUiSlider.on('end', function (values, handle, unencoded, isTap, positions) {
        let data = $('form').serializeArray();
    });
}

