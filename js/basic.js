$(document).ready(function() {

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

});
