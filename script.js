// Disable the return date field unless "Round Trip" is selected
const tripOptions = document.querySelectorAll('input[name="trip"]');
const returnField = document.getElementById('return');

tripOptions.forEach(option => {
  option.addEventListener('change', () => {
    if (option.value === 'roundtrip') {
      returnField.disabled = false;
    } else {
      returnField.disabled = true;
    }
  });
});

// Handle form submission
const form = document.querySelector('.booking-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  alert('Searching for flights...');
});

// function redirectToSubscription() {
//   window.location.href = "family-subscription.html";
// }

