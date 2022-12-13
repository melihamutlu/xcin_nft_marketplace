$(document).ready(function() {
    
    "use strict";
    

    var simulateClick = function (elem) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !elem.dispatchEvent(evt);
    };
   
    let wavesConfig = {
        // How long Waves effect duration 
        // when it's clicked (in milliseconds)
        duration: 400
    };
   
    Waves.init(wavesConfig);

    if ($('.material-design-hamburger__icon').length === 1) {
        document.querySelector('.material-design-hamburger__icon').addEventListener(
            'click',
            function() {      
                let child;
                document.body.classList.toggle('background--blur');
                this.parentNode.nextElementSibling.classList.toggle('menu--on');

                child = this.childNodes[1].classList;

                if (child.contains('material-design-hamburger__icon--to-arrow')) {
                    child.remove('material-design-hamburger__icon--to-arrow');
                    child.add('material-design-hamburger__icon--from-arrow');
                } else {
                    child.remove('material-design-hamburger__icon--from-arrow');
                    child.add('material-design-hamburger__icon--to-arrow');
                }
            }
        );
    }
    
    $(".fixed-sidebar .navigation-toggle a").removeClass('button-collapse');
    $(".fixed-sidebar .navigation-toggle a").addClass('reverse-icon');
    
    $('.account-settings-link').on('click', function(){
        $('.page-sidebar-settings').toggleClass('hidden');
        $('.sidebar-accordion-menu').toggleClass('hidden');
    });
    
    $('.button-collapse').on('click', function(){
        $('body').toggleClass('sidebar-collapsed');
    });

    if($(window).innerWidth() < 992 && !$('body').hasClass('sidebar-collapsed')) {
        var navToggle = document.querySelector('.button-collapse');
        simulateClick(navToggle);
    }

    if($('body').hasClass('sidebar-collapsed')) {
        $('.material-design-hamburger__icon .material-design-hamburger__layer').addClass('material-design-hamburger__icon--to-arrow');
    }
    
    $('.right-sidebar-link').on('click', function(e){
        $('body').toggleClass('right-sidebar-show');
        e.preventDefault();
    });
    
    $('.page-right-sidebar .chat-message').on('click', function(){
        $('body').toggleClass('chat-sidebar-show');
    });
    
    $('.chat-message-link').on('click', function(){
        $('body').toggleClass('chat-sidebar-show');
    });

    $('.search-link').on('click', function(){
        $('.search').toggleClass('shown');
    });

    $('#close-search-input').on('click', function(){
        $('.search').toggleClass('shown');
    });
    
    $('.sidebar-menu li:not(".active-page") ul.accordion-submenu').slideUp(0);
    
    $('.sidebar-menu li a').on('click', function(){
        if($(this).next('.accordion-submenu').length > 0) {
            if($(this).next('.accordion-submenu').is(':visible')) {
                $(this).next('.accordion-submenu').slideUp(200);
                $(this).toggleClass('shown-menu');
            } else {
                $('.shown-menu').next('.accordion-submenu').slideUp(200);
                $('.shown-menu').toggleClass('shown-menu');
                $(this).next('.accordion-submenu').slideDown(200);
                $(this).toggleClass('shown-menu');
            }
            return false;
        }
    });
    
    const delay = (function(){
        let timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();
    
    const search_f = function() {
        $('.search input').on('input', function() {
            let value = $(this).val();
            if(value.length > 0) {
                $('body').addClass('searching');
                $('span.search-input-value').html(value);
            } else {
                $('body').removeClass('searching');
            }
            $('.search-results .search-result-list').fadeOut(1);
            delay(function(){
                if(!$.trim($('.search input').val()).length != 0) {
                    $('.search-results .search-result-list').fadeOut(1);
                } else {
                    $('.search-results .search-result-list').fadeIn();
                }
            }, 500 );
        });
        
        $(document).keyup(function(e) {
            if($('body').hasClass('searching')) {
                if (e.keyCode === 27) {
                    $('body').removeClass('searching');
                } // Close on escape
            }
        });
        
        $(document).mouseup(function (e){
            let container = $(".search-results");
            let container2 = $(".search input");
            if (!container.is(e.target)
                && !container2.is(e.target)
                && container.has(e.target).length === 0
                && container2.has(e.target).length === 0) {
                $('body').removeClass('searching');
            }
        });
        
        $('#closeSearch').on('click', function(){
            $('body').removeClass('searching');
        });
        
        $('.search input').on('focus', function() {
            let value = $(this).val();
           if(value.length > 0) {
                $('body').addClass('searching');
                $('span.search-input-value').html(value);
           } 
        });
 
    }
    
    const material_tabs = function() {
        $('.nav-tabs').append('<span class="indicator"></span>');
        
        
        $('.nav-tabs').each(function() {
            let this_tab = $(this);
            let indicator = this_tab.find('.indicator');
            let active_tab = this_tab.find('.active');
            let active_position = active_tab.position();
            
            indicator.css('left', active_position.left);
            indicator.css('right', this_tab.width() - active_position.left - active_tab.outerWidth());
            
            let indicator_pos = indicator.position();
            
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
                let indicator = this_tab.find('.indicator');
                let active_tab = this_tab.find('.active');
                let active_position = active_tab.position();
                
                indicator.css('left', active_position.left);
                indicator.css('right', this_tab.width() - active_position.left - active_tab.outerWidth());
            });
        });
    }

    const inputs = function(){

        $('input').focusin(function(){

            if($(this).next('label').length > 0) {
                $(this).next('label').addClass('active');
            }

            if($(this).prev('label').length > 0) {
                $(this).prev('label').addClass('active');
            }

        });

        $('input').focusout(function(){
            console.log($(this));
            if($(this).next('label').length > 0 && $(this).val() == 0) {
                $(this).next('label').removeClass('active');
            }

            if($(this).prev('label').length > 0 && $(this).val() == 0) {
                $(this).prev('label').removeClass('active');
            }

        });


        $('textarea').focusin(function(){

            if($(this).next('label').length > 0) {
                $(this).next('label').addClass('active');
            }

            if($(this).prev('label').length > 0) {
                $(this).prev('label').addClass('active');
            }

        });

        $('textarea').focusout(function(){
            console.log($(this));
            if($(this).next('label').length > 0 && $(this).val() == 0) {
                $(this).next('label').removeClass('active');
            }

            if($(this).prev('label').length > 0 && $(this).val() == 0) {
                $(this).prev('label').removeClass('active');
            }

        });

        $('input').each(function(i){
            if($(this).val() != 0 && $(this).attr('type') != "radio" && $(this).attr('type') != "checkbox" && $(this).attr('type') != "radio") {
                if($(this).next('label').length > 0) {
                    $(this).next('label').addClass('active');
                }
    
                if($(this).prev('label').length > 0) {
                    $(this).prev('label').addClass('active');
                }
            }
        });

        $('.input-group-prepend').each(function(i){
            var marginSize = $(this).outerWidth() + 16;
            $(this).next('label').css('margin-left', marginSize);
        });

        if($('select').prev('label').length > 0) {
            $('select').prev('label').hide();
        }

        $('')
    }
    
    const plugin_init = function(){
        
        // Slimscroll
        $('.slimscroll').slimScroll({
            wheelStep: 5
        });
        Waves.attach('.btn',['waves-light']);

        $('[data-toggle="popover"]').popover();
        $('[data-toggle="tooltip"]').tooltip();
    }
    
    
    search_f();
    plugin_init();
    inputs();
    material_tabs();
});

window.onload = function() {
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1000);
    setTimeout(function(){
        $('.loader').fadeOut('400');
    }, 600);
}