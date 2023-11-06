function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    daysSpan.innerHTML = ('0' + t.days).slice(-2);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 1 * 4 * 60 * 60 * 1000); // for endless timer
initializeClock('timer', deadline);

var deadline = new Date(Date.parse(new Date()) + 1 * 4 * 60 * 60 * 1000);





var phoneInput = document.querySelector('.input__tel input');

phoneInput.addEventListener('input', function () {
  var phoneNumber = phoneInput.value.replace(/\D/g, '');
  var formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  phoneInput.value = formattedPhoneNumber;
});

function formatPhoneNumber(phoneNumber) {
  var formattedPhoneNumber = '';

  if (phoneNumber.length > 0) {
    formattedPhoneNumber += '(' + phoneNumber.substring(0, 3);
  }

  if (phoneNumber.length >= 4) {
    formattedPhoneNumber += ') ' + phoneNumber.substring(3, 6);
  }

  if (phoneNumber.length >= 7) {
    formattedPhoneNumber += '-' + phoneNumber.substring(6, 8);
  }

  if (phoneNumber.length >= 9) {
    formattedPhoneNumber += '-' + phoneNumber.substring(8, 10);
  }

  return formattedPhoneNumber;
}
