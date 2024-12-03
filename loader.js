// Extract the plan from the URL
const urlParams = new URLSearchParams(window.location.search);
const plan = urlParams.get("plan");

window.onload = function () {
  const loader = document.getElementById("loader");
  const confirmationIcon = document.getElementById("confirmation-icon");
  const loaderMessage = document.getElementById("loader-message");
  const planMessage = document.getElementById("plan-message");

  // Show "Proceeding to Payment" first
  loaderMessage.textContent = "Proceeding to QuickSilver Payment Page...";

  // After 3 seconds, show "Payment Complete!" and display the check mark
  setTimeout(() => {
    loader.style.display = "none"; // Hide loader
    confirmationIcon.style.display = "block"; // Show check mark
    loaderMessage.textContent = "Payment Complete!";
    planMessage.textContent = `You have subscribed to the Family ${plan} Plan!`;
  }, 3000);

  // Redirect to home page after 6 seconds
  setTimeout(() => {
    window.location.href = "index.html?subscribed=true";
  }, 6000);
};