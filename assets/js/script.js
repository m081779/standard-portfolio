$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash!=="") {
      event.preventDefault();
      var hash = this.hash;
      $('html').animate({
        scrollTop: $(hash).offset().top - 70

      },500, function () {
        window.location.hash = ''
      });
    }
  });
})