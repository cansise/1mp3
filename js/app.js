$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'linear',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


function openPopup() {
  var popup = document.querySelector('.popup-container');
  popup.classList.add('active');
}

function closePopup() {
  var popup = document.querySelector('.popup-container');
  popup.classList.remove('active');
}
