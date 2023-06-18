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


function openPopupalan() {
  var popup1 = document.getElementById('popup-alan');
  popup1.classList.add('active');
}

function closePopupalan() {
  var popup2 = document.getElementById('popup-alan');
  popup2.classList.remove('active');
}



function openPopupalice() {
  var popup3 = document.getElementById('popup-alice');
  popup3.classList.add('active');
}

function closePopupalice() {
  var popup4 = document.getElementById('popup-alice');
  popup4.classList.remove('active');
}



function openPopupsource() {
  var popup3 = document.getElementById('popup-source');
  popup3.classList.add('active');
}

function closePopupsource() {
  var popup4 = document.getElementById('popup-source');
  popup4.classList.remove('active');
}