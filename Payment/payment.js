// JavaScript to toggle showing payment details when clicked
function togglePaymentDetails(paymentId) {
    // Get the payment details element for the clicked payment option
    const paymentDetails = document.getElementById(paymentId);

    // Toggle the visibility of the payment details
    if (paymentDetails.style.display === "none" || paymentDetails.style.display === "") {
        paymentDetails.style.display = "block";
    } else {
        paymentDetails.style.display = "none";
    }
}

function confirmPayment() {
    alert("Payment has been confirmed.");
}
