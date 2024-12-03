const travelerData = {
  data: {
    travelerInsights: [
      {
        travelerPredicates: {
          age: 32,
          verifiedMemberships: [
            {
              tierLevel: "SILVER"
            }
          ]
        },
        travelerDeclaredProfileInsights: {
          preferences: [
            { name: "seatPreference", value: "WINDOW" },
            { name: "mealPreference", value: "VGML" }
          ]
        },
        travelerDeclaredHistoryInsights: {
          mostBookedMeal: "VGML",
          preferredTravelCabin: "PREMIUM_ECONOMY",
          preferredTrips: [
            { origin: "NCE", destination: "LON", rank: 1 },
            { origin: "PAR", destination: "NYC", rank: 2 }
          ]
        }
      }
    ]
  }
};

window.onload = () => {
  displayInsights();
};

function displayInsights() {
  const insightsContainer = document.getElementById("insights");
  const insights = travelerData.data.travelerInsights[0];
  const profile = insights.travelerDeclaredProfileInsights;
  const history = insights.travelerDeclaredHistoryInsights;

  const insightHTML = `
    <p><strong>Age:</strong> ${insights.travelerPredicates.age}</p>
    <p><strong>Seat Preference:</strong> ${profile.preferences[0].value}</p>
    <p><strong>Meal Preference:</strong> ${history.mostBookedMeal}</p>
    <p><strong>Preferred Cabin:</strong> ${history.preferredTravelCabin}</p>
    <p><strong>Frequent Trips:</strong></p>
    <ul>
      <li>${history.preferredTrips[0].origin} to ${history.preferredTrips[0].destination}</li>
      <li>${history.preferredTrips[1].origin} to ${history.preferredTrips[1].destination}</li>
    </ul>
  `;
  insightsContainer.innerHTML = insightHTML;
}

function subscribe(plan) {
  alert(`You have subscribed to the ${plan} Plan!`);
}

function redirectToSubscription() {
  window.location.href = "family-subscription.html";
}
