$(document).ready(function(){
//to-top
    $('#arrow').click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
//search
    $('#nav_search').on('click', function() {
        $('#search').addClass('active');
    });
    $('#search').on('click', function() {
        $("#search").removeClass('active');
    });
    $('#nav_search').on('click', function() {
        $('#search-child').addClass('active-child');
    });
    $('#search').on('click', function() {
        $("#search-child").removeClass('active-child');
    });
//pagination
    var blogItems = $('.blog-list .blog-item');
    var paginationItems = $('.ctrl-number-item button');

    for (var i = 0; i < blogItems.length; i++) {
        if (i < 8) {
          $(blogItems[i]).show();
        } else {
          $(blogItems[i]).hide();
        }
      }
      
    // 
    paginationItems.on('click', function() {
        var pageNumber = parseInt($(this).text());

        var startIndex = (pageNumber - 1) * 8;
        var endIndex = startIndex + 8;

        blogItems.hide().slice(startIndex, endIndex).show();

        paginationItems.removeClass('active');
        $(this).addClass('active');
    });
    //
    $('.ctrl-next').on('click', function() {
        var activeItem = $('.pagination-item.active');
        var nextItem = activeItem.parent().next().find('.pagination-item');
      
        if (nextItem.length) {
          activeItem.removeClass('active');
          nextItem.addClass('active');
      
          $('.blog-list .blog-item').hide();
      
          var currentPage = parseInt(nextItem.text());
          var startIndex = (currentPage - 1) * 8;
          var endIndex = startIndex + 8;
          blogItems.hide().slice(startIndex, endIndex).show();
        }
      });  
    //nav-moblie 
    $("#nav-res").on("click", function() {
      $("#nav-mobile").addClass("show");
      $("#layer_mobile").addClass('show');
    });
    
    $("#quit").on("click", function() {
      $("#nav-mobile").removeClass('show');
      $("#layer_mobile").removeClass('show');
    });
    
    $("#layer_mobile").on("click", function() {
      $("#nav-mobile").removeClass('show');
      $("#layer_mobile").removeClass('show');
    });  
    //
    $(".cart-click").on("click", function() {
      $("#nav-cart").addClass("show");
      $("#layer_mobile").addClass('show');
    });
    
    $(".nav_quit").on("click", function() {
      $("#nav-cart").removeClass('show');
      $("#layer_mobile").removeClass('show');
    });
    
    $("#layer_mobile").on("click", function() {
      $("#nav-cart").removeClass('show');
      $("#layer_mobile").removeClass('show');
    }); 
    // Initialize Swiper
    var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 10000, 
        disableOnInteraction: false,
      },
    });
    var wrapper = $('.wrapper-header-home');
    var tempImage = new Image();
    var imageUrls = [
      '/assets/images/header/home/headerBg.png',
      '/assets/images/header/home/headerBg-2.png',
    ];
    var currentImageIndex = 0;
    
    function changeBackgroundImage() {
      var imageUrl = imageUrls[currentImageIndex];
    
      tempImage.onload = function() {
        wrapper.addClass('transitioning');
        setTimeout(function() {
          wrapper.css('background-image', 'url("' + imageUrl + '")');
        }, 100);
        setTimeout(function() {
          wrapper.removeClass('transitioning');
        }, 100);
      };
    
      tempImage.src = imageUrl;
    
      currentImageIndex++;
      if (currentImageIndex >= imageUrls.length) {
        currentImageIndex = 0;
      }
    }
    
    function startSlideShow() {
      changeBackgroundImage();
      setInterval(changeBackgroundImage, 10000);
    }
    
    startSlideShow();
    // 
    var swiper = new Swiper("#features_h .mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 40,
      autoplay: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
});
