$(function () {


    // SPメニュー
    
    $('.js-toggle-sp-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    // メニューをクリックしたらメニューを閉じる
    $('.js-close-menu').on('click', function () {
        $('.js-toggle-sp-menu').toggleClass('active');
        $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    //スライダー
    $('.slider').slick();
    
    var clickItemNum = 0;

    $('.js-show-modal-slider').on('click', function () {

        //モーダルを表示させる
        $(this).siblings('.js-show-modal-slider-target').fadeIn();
        //カバーを表示させる
        $('.js-show-modal-slider-cover').fadeIn();

        clickItemNum = $('.js-show-modal-slider').index(this);
       
        $('.slider-wrapper').slick('slickGoTo', clickItemNum, true); 
        
    });
   


    $('.js-hide-modal-slider').on('click', function () {
        $('.js-show-modal-slider-target').fadeOut("fast");
        $('.js-show-modal-slider-cover').fadeOut("fast");
        
    })

    $('.js-show-modal-slider-cover').on('click', function () {
        $('.js-show-modal-slider-target').fadeOut("fast");
        $('.js-show-modal-slider-cover').fadeOut("fast");
        
    })



    $('.js-show-modal').on('click', function () {
        //モーダルを表示させる
        $(this).siblings('.js-show-modal-target').fadeIn();
        //カバーを表示させる
        $('.js-show-modal-cover').fadeIn();
    });
    $('.js-hide-modal').on('click', function () {
        $('.js-show-modal-target').fadeOut("fast");
        $('.js-show-modal-cover').fadeOut("fast");
    })
    $('.js-show-modal-cover').on('click', function () {
        $('.js-show-modal-target').fadeOut("fast");
        $('.js-show-modal-cover').fadeOut("fast");
    })
    
    

});

