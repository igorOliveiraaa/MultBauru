$(document).ready(function () {
    // Alternar menu mobile
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-xmark'); // Alterna entre ícones
    });

    // Fecha o menu mobile ao clicar em um link
    $('#mobile_nav_list .nav-item a').on('click', function () {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn i').addClass('fa-bars').removeClass('fa-xmark');
    });

    // Atualiza a classe active no menu ao clicar
    const navLinks = $('.nav-item a');
    navLinks.on('click', function () {
        navLinks.parent().removeClass('active'); // Remove active de todos os itens
        $(this).parent().addClass('active'); // Adiciona active ao item clicado
    });

    // Atualiza a classe active com base na rolagem
    const sections = $('section');
    $(window).on('scroll', function () {
        let currentSection = '';

        sections.each(function () {
            const sectionTop = $(this).offset().top - 100; // Compensa a altura do header
            const sectionBottom = sectionTop + $(this).outerHeight();

            if ($(window).scrollTop() >= sectionTop && $(window).scrollTop() < sectionBottom) {
                currentSection = $(this).attr('id'); // Obtém o ID da seção visível
            }
        });

        // Atualiza os links com a classe active
        navLinks.parent().removeClass('active'); // Remove active de todos os itens
        navLinks.each(function () {
            if ($(this).attr('href').includes(currentSection)) {
                $(this).parent().addClass('active'); // Adiciona active ao item correspondente
            }
        });
    });

    // Garantir que ao carregar a página a seção visível esteja marcada como ativa
    $(window).trigger('scroll');
});
