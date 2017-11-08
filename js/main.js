$(document).ready(function () {
        $(window).scroll(function () {
          if ($(window).width() >= 1024) {
            if ($(window).scrollTop() == 0) {
              $('.navbar').css('background-color', 'rgba(128, 128, 128, 1)');
            } else {
              $('.navbar').css('background-color', 'rgba(128, 128, 128, 0.2)');
            }
          }
        })


      $('#links__dropdown-button').click(function() {
        $('#links__dropdown-content a').toggleClass("links__show");
      });


     window.onclick = function(event) {
      if (!event.target.matches('.links__dropbtn')) {
        var dropdowns = document.getElementsByClassName("links__dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove('links__show');
        }
      }
    }

    var $carouselItems = $('ol.carousel-indicators li');

    $('.history__navigation_prev').click(function(e) {
      e.stopPropagation();
      if($carouselItems.eq(1).hasClass('active')) {
        $(this).addClass('disabled');
        return false;
      }
      else {
      $('.history__navigation_next').removeClass('disabled');
      }

      $carouselItems.each(function(index, el) {
        var pos = $(this).offset().left;
        var width = $(this).outerWidth(true);
        $( this ).offset({ left : pos + width});
      });

      $('#history__carousel').carousel('prev');
      if($carouselItems.eq(1).hasClass('active')) {
        $(this).addClass('disabled');
        $('.history__navigation_next').removeClass('disabled');
      }

      return false;
    });

    $('.history__navigation_next').click(function(e) {
      e.stopPropagation();

      if($carouselItems.eq($carouselItems.length - 2).hasClass('active')) {
        $(this).addClass('disabled');
        return false;
      }
      else {
      $('.history__navigation_prev').removeClass('disabled');
      }

      $carouselItems.each(function(index, el) {
        var pos = $(this).offset().left;
        var width = $(this).outerWidth(true);
        $( this ).offset({ left : pos - width});
      });

      $('#history__carousel').carousel('next');
      if($carouselItems.eq($carouselItems.length - 2).hasClass('active')) {
        $(this).addClass('disabled');
        $('.history__navigation_prev').removeClass('disabled');
      }
      return false;
    });

    $('a.nav-link[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });


  var backTopElem = document.createElement('div');
  backTopElem.className = "back-top";
  document.body.appendChild(backTopElem);


	$(".back-top").hide();

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('.back-top').fadeIn();
			} else {
				$('.back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('.back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});



});