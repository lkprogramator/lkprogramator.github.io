  (function ($) {

      "use strict";
      /*	
       // Cache selectors
       var lastId,
       topMenu = $(".menu-holder"),
       topMenuHeight = 50,
       // All list items
       menuItems = topMenu.find("a"),
       // Anchors corresponding to menu items
       scrollItems = menuItems.map(function(){
       var item = $($(this).attr("href"));
       
       if (item.length) { 
       return item; 
       }
       });
       
       // Bind click handler to menu items
       // so we can get a fancy scroll animation
       menuItems.click(function(e){
       var href = $(this).attr("href");
       var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1; ;
       
       $('html, body').stop().animate({ 
       scrollTop: offsetTop
       }, 300);
       
       e.preventDefault();
       });
       */
      // Bind to scroll
      $(window).scroll(function () {
          /* 
           
           // Get container scroll position
           var fromTop = $(this).scrollTop()+topMenuHeight;
           
           // Get id of current scroll item
           var cur = scrollItems.map(function(){
           if ($(this).offset().top < fromTop)
           return this;
           });
           
           // Get the id of the current element
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           
           if (lastId !== id && id != "") {
           lastId = id;
           // Set/remove active class
           menuItems
           .parent().removeClass("active")
           .end().filter("[href=#"+id+"]").parent().addClass("active");
           }
           */
          /* Change navigation header on scroll
           -------------------------------------- */
          if ($(this).scrollTop()>$('.templatemo-header-image').height()-50) {
              $('.templatemo-header').addClass("sticky");
              $('.templatemo-header h2').addClass("hidden");
              // $('.templatemo-header nav').addClass("navbar-default");
          } else {
              $('.templatemo-header').removeClass("sticky");
              $('.templatemo-header h2').removeClass("hidden");
              // $('.templatemo-header nav').removeClass("navbar-default");
          }
      });

      //mobile menu and desktop menu
      $("#responsive-menu").css({"right": -1500});
      $("#mobile_menu").click(function () {
          $("#responsive-menu").show();
          $("#responsive-menu").animate({"right": 0});
          return false;
      });
      $(window).on("load resize", function () {
          if ($(window).width()>768) {
              $("#responsive-menu").css({"right": -1500});
          }
      });

      $("#responsive-menu a").click(function () {
          $("#responsive-menu").hide();
      });

  })(jQuery);
