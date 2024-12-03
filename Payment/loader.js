window.onload = function () {
    const loader = document.getElementById("loader");
    const confirmationIcon = document.getElementById("confirmation-icon");
    const loaderMessage = document.getElementById("loader-message");
    const loaderStatus = document.getElementById("loader-status");

    // Step 1: Display "Payment Confirmed" after a short delay
    setTimeout(() => {
        loader.style.display = "none"; // Hide loader
        confirmationIcon.style.display = "block"; // Show check mark
        loaderMessage.textContent = "Payment Confirmed!";
        loaderStatus.textContent = "Booking is being confirmed...";
    }, 1000);

    // Step 2: Display "Booking Confirmed" after 3 more seconds
    setTimeout(() => {
        loaderMessage.textContent = "Booking Confirmed!";
        loaderStatus.textContent = "Thank you for booking with BWers Airlines.";
    }, 3000);

    // Step 3: Redirect back to home or another target page after 6 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 80000);
};
