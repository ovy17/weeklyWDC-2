//  $('nav a').on('click', function () {
//   const goToSection = "#" + $(this).attr('href');
//   $('body, html').animate({
//    scrollTop: $(goToSection).offset().top
//   })
//  })
$('a[href^="#"]').click(function () {
    $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top - 100
    }, 500), !1
})

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 2) {
        $('nav').addClass('active-navbar');

    } else {
        $('nav').removeClass('active-navbar');
    }


})

function changeText() {
    // console.log("działa")
    const scrollHeight = $(document).scrollTop();
    // console.log(wielkoscSkrola);

    const section1 = $('header');
    const section2 = $('.about');
    const section3 = $('.services');
    const section1 = $('.gallery');
    const section2 = $('.blog');
    const section3 = $('.contact');
    //   const section4 = $('.sekcja4').height();



    //   const heightFromsection1 = $('.sekcja1').offset().top;

    if (scrollHeight < section1.height) {
        $('nav li:nth-of-type(1)').addClass('active')
    } else if (scrollHeight < section2.height + section2.offset().top) {
        $('nav li:nth-of-type(2)').addClass('active')
    } else if (scrollHeight < section3.height + section3.offset().top) {
        $('nav li:nth-of-type(3)').addClass('active')
    } else if (scrollHeight < section4.height + section4.offset().top) {
        $('nav li:nth-of-type(4)').addClass('active')
    } else if (scrollHeight < section5.height + section5.offset().top) {
        $('nav li:nth-of-type(5)').addClass('active')
    } else {
        $('nav li:nth-of-type(6)').addClass('active')
    }
}
$(document).on('scroll', changeText)
