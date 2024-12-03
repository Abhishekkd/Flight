const familyTravelerData = {
  data: {
    travelerInsights: [
      {
        travelerPredicates: {
          familySize: "2 Adults, 2 Children",
          preferredCabin: "PREMIUM_ECONOMY",
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
        }
      }
    ]
  }
};

window.onload = () => {
  displayFamilyInsights();
};

function displayFamilyInsights() {
  const insightsContainer = document.getElementById("insights");
  const insights = familyTravelerData.data.travelerInsights[0];
  const profile = insights.travelerDeclaredProfileInsights;

  const insightHTML = `
    <p><strong>Family Size:</strong> ${insights.travelerPredicates.familySize}</p>
    <p><strong>Preferred Cabin:</strong> ${insights.travelerPredicates.preferredCabin}</p>
    <p><strong>Seat Preference:</strong> ${profile.preferences[0].value}</p>
    <p><strong>Meal Preference:</strong> ${profile.preferences[1].value}</p>
  `;
  insightsContainer.innerHTML = insightHTML;
}

function subscribe(plan) {
  alert(`You have subscribed to the ${plan} Family Plan!`);
}
