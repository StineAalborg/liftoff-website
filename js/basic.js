$(document).ready(function() {

  // If it's not a mobile device.
  if (!WURFL.is_mobile) {
    // Do stuff on scroll.
    $(window).scroll(function () {
      // Define section to move.
      var sections = $('.sections');
      // Don't do anything if we're passed the introduction.
      if ($(window).scrollTop() < sections.offset().top) {
        // Parallax effect.
        sections.css({
          'margin-top': -($(this).scrollTop() * 0.66) + "px"
        });
      }
    });
  }

  // Konami-code.
  cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
    // Define vars.
    var container = $('.secret-konami-unicorn-of-doom');
    // Source.
    var src = 'img/unicorn.jpg';
    container.attr('href', src);
    // Remove previous images.
    container.children('img').remove();
    container.append($('<img>', {'src': src}));
    container.attr('data-lightbox', 'konami-unicorn');
    container.trigger('click');
  });

  /**
   * This script will set a message after the contact/mail redirect.
   */
  // Container for mail-message.
  var mailTarget = $('footer form button');
  // Look for mail-success argument in the url.
  if (window.location.href.search("#success") >= 0) {
    // Go to the footer.
    $('html, body').scrollTop($(document).height());
    // Set success message & add class.
    mailTarget.addClass('mail-success');
  }
  // Look for mail-error argument in the url.
  else if (window.location.href.search("#error") >= 0) {
    // Go to the footer.
    $('html, body').scrollTop($(document).height());
    // Set error message & add class.
    mailTarget.addClass('mail-error');
  }
});
