// Extract the plan from the URL
const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get("plan");

window.onload = function () {
  const loaderMessage = document.getElementById("loader-message");
  const planMessage = document.getElementById("plan-message");

  // Show "Proceeding to Payment" first
  loaderMessage.textContent = "Proceeding to Payment...";

  // After 3 seconds, show "You have subscribed to the Family [Plan Name] Plan!"
  setTimeout(() => {
    loaderMessage.textContent = "Payment Complete!";
    planMessage.textContent = `You have subscribed to the Family ${plan} Plan!`;
  }, 3000);

  // Redirect to home page after 6 seconds
  setTimeout(() => {
    window.location.href = "index.html?subscribed=true";
  }, 6000);
};
