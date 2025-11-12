//서브메뉴 클릭 시 swiper 자체 변화,,, 추가 swiper 제작,, 애니메이션 e.preventDefault()
//검색 아이콘 클릭 시 팝업?!


//fav 버튼 클릭 시 채워지기 & 비워지기
const favBtn = document.querySelectorAll('.fav')
const favBtnImg = document.querySelector('.fav img')
console.log(favBtn, favBtnImg)

favBtn.forEach(function(obj,ind,arr){
    console.log(obj,ind,arr)
    let isFav = false; //기본값: 비워진 하트 상태
    obj.addEventListener('click',(e)=>{
        e.preventDefault();
        isFav = !isFav; //클릭할 때마다 상태 반전
        if(isFav) {
            obj.children[0].src="../images/favorite_fill_icon.png"
        } else {
            obj.children[0].src="../images/favorite_icon.png"
        }
    })
})


//햄버거 메뉴 클릭 시 nav page 뜨기 & 슬라이드 효과
const menuAll = document.querySelector('a.menu');
const navPage = document.querySelector('#nav_page')
console.log(menuAll, navPage)
let isMenu = false;

menuAll.addEventListener('click',()=>{
    isMenu = !isMenu;
    navPage.style.transform = isMenu ? "translateY(0)" : "translateY(-440px)";
})


//scrollTrigger -> 헤더 배경 흰색
const header = document.querySelector('#header')
const bnrSection = document.querySelector('#bnr')
console.log(header, bnrSection)

window.addEventListener('scroll',()=>{
    const scrollY = window.scrollY;
    const bnrSectionEnd = bnrSection.offsetHeight;
    if(scrollY>bnrSectionEnd){
        header.style.backgroundColor = "#fff"
    }else{header.style.backgroundColor = "transparent"}
})

//swiper pagination, btn


