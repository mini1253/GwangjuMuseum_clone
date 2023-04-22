//메뉴
$('.menu > li').mouseenter(function () {
  $('.sub , .sub_bg').show();
});
$('.menu > li').mouseleave(function () {
  $('.sub , .sub_bg').hide();
});

//family
$('.family_btn button').mouseenter(function () {
  $(this).siblings('.family_list').show();
  // $(this).parent().siblings().children(".family_list")
  // -> 필요한 만큼 작성 가능
  // this -> 내가 위에서 선택한 요소
  // .siblings() -> 형제 관계에 있는 요소
  // .parent() -> 부모 관계에 있는 요소
  // .children() -> 자식 관계에 있는 요소
});
$('.family_btn').mouseleave(function () {
  $('.family_list').hide();
});

// m_menu
/* 1. .m_nav_bg 가리기.
   2. 모바일 메뉴 버튼을 클릭했을 때, .m_nav_bg 나옴.
   3. 닫기 버튼을 눌렀을 때, .m_nav_bg 가려짐.
   
   -> 모바일 메뉴 나타났다 사라지는 효과*/

$('.m_nav_bg').hide();
$('.m_btn').click(function () {
  $('.m_nav_bg').show();
});
$('.m_close').click(function () {
  $('.m_nav_bg').hide();
});

/* 메뉴에 있는 li를 클릭했을 때 .addcolor 클래스가 추가 되고
      다른 li를 클릭했을 때 원래 들어가 있던 .addcolor 클래스가 삭제 되면서
      제일 최근에 클릭한 li에 addcolor 클래스가 추가.
      
      -> li 스타일 효과*/

$('.m_sub').hide();
$('.m_menu > li').click(function () {
  $(this).children('a').addClass('addcolor');
  $(this).siblings().children('a').removeClass('addcolor');
  $(this).children('.m_sub').slideToggle();
  // slideDown() -> slide돼서 내려오는 효과
  // slideUp() -> slide돼서 올라가는 효과
  // slideToggle() -> slideDown, slideUp 합쳐진 효과
  $(this).siblings().children('.m_sub').slideUp();
});

// main slide
let main = new Swiper('.main .swiper-container', {
  navigation: {
    nextEl: '.main .swiper-button-next',
    prevEl: '.main .swiper-button-prev',
  },
  pagination: {
    el: '.main .swiper-pagination',
  },
  loop: true,
  autoplay: {
    delay: 3000,
    //1000 -> 1초
  },
});

// box1 slide
let box1Slide = new Swiper('.box1 .swiper-container', {
  pagination: {
    el: '.box1 .swiper-pagination',
    type: 'fraction',
    // fraction -> 개수로 pagination 표현
  },
  navigation: {
    prevEl: '.box1 .box_prev',
    nextEl: '.box1 .box_next',
  },
  loop: true,
  autoplay: {
    delay: '2000',
    disableOnInteraction: false,
  },
});

// box1 slide play-stop
$('.play_img').hide();
$('.stop_img').click(function () {
  $('.play_img').show();
  $('.stop_img').hide();
  box1Slide.autoplay.stop();
});

$('.play_img').click(function () {
  $('.stop_img').show();
  $('.play_img').hide();
  box1Slide.autoplay.start();
});
