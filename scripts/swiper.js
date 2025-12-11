const bnrSwiper = new Swiper ('#bnr_wrap',{
    slidesPerView:1,
    loop:true,
    autoplay:{delay:5000,},
    pagination:{
        el:".bnr_page_wrap .swiper-pagination",
        type:'progressbar',
    },
    navigation:{
        prevEl:"#bnr_wrap .swiper-button-prev",
        nextEl:"#bnr_wrap .swiper-button-next"
    },
})
const bnrSwiper2 = new Swiper ('#bnr_wrap', {
    pagination: {
        el:".bnr_page_wrap .swiper-pagination2",
        type:'fraction',
    }
})
bnrSwiper.controller.control = bnrSwiper2;
/* row2 best */
const bestSwiper = new Swiper ("#best_prod_wrap",{
    slidesPerView:2,
    loop:true,
    breakpoints : {
        740 : {
            slidesPerView:4,
        },
        1250 : {
            slidesPerView:5,
        },
        1640 : {
            slidesPerView:4,
        }
    },
    navigation:{
        prevEl:'#best_prod_wrap .swiper-button-prev',
        nextEl:'#best_prod_wrap .swiper-button-next',
    },
});
/* row4 featured */
const featuredSwiper = new Swiper ("#featured_prod_wrap",{
    slidesPerView:2,
    loop:true,
    breakpoints : {
        740 : {
            slidesPerView:3,
        },
        850 : {
            slidesPerView:4,
        },
    },
    navigation:{
        prevEl:'#featured_prod_wrap .swiper-button-prev',
        nextEl:'#featured_prod_wrap .swiper-button-next',
    }
})
const projectSwiper = new Swiper ("#project_prod_wrap",{
    slidesPerView:3,
    loop:true,
    navigation:{
        prevEl:'#project_prod_wrap .swiper-button-prev',
        nextEl:'#project_prod_wrap .swiper-button-next',
    }
})