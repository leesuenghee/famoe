// main

let gridSwiper = new Swiper('.main_slide_img', {
    slidesPerView: 'auto',
    loop: true,
    speed: 800,
    parallax: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
})

let bgSwiper = new Swiper('.main_bg', {
    slidesPerView: 'auto',
    direction: 'vertical',
    effect: 'fade',
    fadeEffect: {
        crossFade:true
    },
    loop: true,
    pagination: {
        el: '.slide_count',
        type: 'fraction',
        // 파라미터에 담긴 내용에서 0이라는 문자열을 추가한 후 slice를 사용해서 01,02 이런 식으로 숫자가 남게 만든다.
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   '/' +
                   '<span class="' + totalClass + '"></span>';
        }
    },

})
bgSwiper.on('beforeSlideChangeStart',()=>{
    let effectTxt = document.querySelector('.main_txt_wrap');
            effectTxt.classList.add('active');
            console.log("실행하기 전");
})

bgSwiper.on('slideChange',()=>{
    let effectTxt = document.querySelector('.main_txt_wrap');
            effectTxt.classList.remove('active');
            console.log("실행");
})



gridSwiper.controller.control = bgSwiper;
bgSwiper.controller.control = gridSwiper;


// designer
let swiperDesigner = new Swiper(".designer_slider .swiper", {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 70,
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        // 파라미터에 담긴 내용에서 0이라는 문자열을 추가한 후 slice를 사용해서 01,02 이런 식으로 숫자가 남게 만든다.
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                   ' / ' +
                   '<span class="' + totalClass + '"></span>';
        }
    },
    on: {
        slideChange: function () {
            let changeTXT = document.querySelector(".designer_name");
            //각 슬라이드에 해당하는 제목을 저장한 배열이다
            let slideTitles = ['NOAH NAM', 'KIM JISU', 'KIM AYOUNG', 'HYUNJOO KWAK', 'JIMIN LEE', 'CHOI CHUNGHUN'];
            //현재 실제로 보여지고 있는 슬라이드의 인덱스 번호다.
            let currentSlideIndex = swiperDesigner.realIndex;
            //현재 슬라이드에 해당하는 제목 가져오기
            let currentSlideTitle = slideTitles[currentSlideIndex];
            //Html에 있는 designer_name 변경
            changeTXT.textContent = currentSlideTitle;
        }
    }
})

// codi
let swiper = new Swiper(".codi .swiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})



let swiperMagazine = new Swiper(".magazine .swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    loopedSlides:3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

// line up

let thumbSwiper = new Swiper('.gallery-thumb-swiper', {
    spaceBetween: 28,
    loop: true,
    speed:600,
    slidesPerView: 4,
    loopedSlides: 4,
    navigation: {
        nextEl: '.swiper-gallery-next',
        prevEl: '.swiper-gallery-prev'
    },
});

// line up main slider

let mainSwiper = new Swiper('.gallery-main-swiper', {
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade:true
    },
    allowTouchMove: false,
    loop: true, 
    loopedSlides: 4,
})

mainSwiper.controller.control = thumbSwiper;
thumbSwiper.controller.control = mainSwiper;


// social

let socailSwiper = new Swiper('.social_swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',  
    },
})

// brand
let brandSwiper = new Swiper('.brand_list_wrapper', {
    spaceBetween: 80,
    slidesPerView: 'auto',
    loop: true,
    freeMode: true,
    speed:2000,
    autoplay: {
        delay:0.1,
        disableOnInteraction: false,
    }

    
})




