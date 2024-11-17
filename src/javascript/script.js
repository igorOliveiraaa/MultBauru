$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-xmark'); 
    });

    $('#mobile_nav_list .nav-item a').on('click', function () {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn i').addClass('fa-bars').removeClass('fa-xmark');
    });

    const navLinks = $('.nav-item a');
    navLinks.on('click', function () {
        navLinks.parent().removeClass('active'); 
        $(this).parent().addClass('active'); 
    });

    const sections = $('section');
    $(window).on('scroll', function () {
        let currentSection = '';

        sections.each(function () {
            const sectionTop = $(this).offset().top - 100; 
            const sectionBottom = sectionTop + $(this).outerHeight();

            if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() < sectionBottom) {
                currentSection = $(this).attr('id'); 
            }
        });

        
        navLinks.parent().removeClass('active'); 
        navLinks.each(function () {
            if ($(this).attr('href').includes(currentSection)) {
                $(this).parent().addClass('active'); 
            }
        });
    });

    $(window).trigger('scroll');
});
