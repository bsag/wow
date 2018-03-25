// Static comments
// from: https://github.com/eduardoboucas/popcorn/blob/gh-pages/js/main.js
(function ($) {
  var $comments = $('.js-comments');

  $('.js-form').submit(function () {
    var form = this;
    var std = $('#standard');
    var loading = $('#loading');

    $(std).removeClass('dib').addClass('dn');
    $(loading).removeClass('dn').addClass('dib');

    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        showModal('Perfect!', 'Thanks for your comment! It will show on the site once the site has been automatically rebuilt.');
        $(std).removeClass('dn').addClass('dib');
        $(loading).removeClass('dib').addClass('dn');
        $(form).trigger("reset");
      },
      error: function (err) {
        console.log(err);
        showModal('Error', 'Sorry, there was an error with the submission!');
        $(std).removeClass('dn').addClass('dib');
        $(loading).removeClass('dib').addClass('dn');
      }
    });

    return false;
  });

  $('.js-close-modal').click(function () {
    $('.modal').addClass('dn');
  });

  function showModal(title, message) {
    $('.js-modal-title').text(title);
    $('.js-modal-text').html(message);

    $('.modal').removeClass('dn');
  }
})(jQuery);
