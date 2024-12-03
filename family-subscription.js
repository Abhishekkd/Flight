const familyTravelerData = {
  adults: 2,
  children: 2,
  seatPreferences: ["WINDOW", "AISLE"],
  mealPreferences: ["VGML", "CHML"],
  baggage: {
    carryOn: 2,
    checked: 4
  },
  travelHistory: {
    preferredCabin: "PREMIUM ECONOMY",
    mostBookedAncillary: "XBAG",
    frequentTrips: [
      { origin: "NCE", destination: "LON", frequency: "2 trips/year" },
      { origin: "PAR", destination: "NYC", frequency: "1 trip/year" }
    ]
  }
};

window.onload = () => {
  displayFamilyInsights();
};

function displayFamilyInsights() {
  const insightsContainer = document.querySelector(".traveler-insights .insight-cards");

  const profileCard = `
    <div class="insight-card">
      <h3>Family Profile</h3>
      <p><strong>Adults:</strong> ${familyTravelerData.adults}</p>
      <p><strong>Children:</strong> ${familyTravelerData.children}</p>
      <p><strong>Seat Preferences:</strong> ${familyTravelerData.seatPreferences.join(" and ")}</p>
      <p><strong>Meal Preferences:</strong> ${familyTravelerData.mealPreferences.join(", ")}</p>
      <p><strong>Baggage:</strong> ${familyTravelerData.baggage.carryOn} Carry-On, ${familyTravelerData.baggage.checked} Checked</p>
    </div>
  `;

  const historyCard = `
    <div class="insight-card">
      <h3>Travel History</h3>
      <p><strong>Preferred Cabin:</strong> ${familyTravelerData.travelHistory.preferredCabin}</p>
      <p><strong>Most Booked Ancillary:</strong> ${familyTravelerData.travelHistory.mostBookedAncillary}</p>
      <p><strong>Frequent Trips:</strong></p>
      <ul>
        ${familyTravelerData.travelHistory.frequentTrips
          .map(
            trip => `<li>${trip.origin} to ${trip.destination} (${trip.frequency})</li>`
          )
          .join("")}
      </ul>
    </div>
  `;

  insightsContainer.innerHTML = profileCard + historyCard;
}

function subscribe(plan) {
  // Redirect to the loader page with the selected plan as a query parameter
  window.location.href = `loader.html?plan=${plan}`;
}

