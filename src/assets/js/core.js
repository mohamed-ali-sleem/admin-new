function megaMenu(){
	$('.megamenu .dropdown').click('show.bs.dropdown', function (e) {
		var $dropdown = $(this).find('.dropdown-menu');
		var orig_margin_top = parseInt($dropdown.css('margin-top'));
		$dropdown.css({
			'margin-top': (orig_margin_top + 65) + 'px',
			opacity: 0
		}).animate({
			'margin-top': orig_margin_top + 'px',
			opacity: 1
		}, 420, function () {
			$(this).css({
				'margin-top': ''
			});
		});
	});
}

(function ($) {
  // Navigation
  megaMenu();

  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });

    "use strict";
	 var header = $("#header");
    $(window).scroll(function () {

	if ($(this).scrollTop() > 100) {
		header.addClass("sticky");
            $(".navbar").addClass("fixed");
	}
			else {
				 header.removeClass("sticky");
            $(".navbar").removeClass("fixed");
			}
    });

  // search
    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })

  // header share
    $('.card-share > a').on('click', function(e){
  		e.preventDefault() // prevent default action - hash doesn't appear in url
     		$(this).parent().find( 'div' ).toggleClass( 'card-social--active' );
  		$(this).toggleClass('share-expanded');
      });

})(jQuery);
