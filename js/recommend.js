// Bharat Nursery - Smart Plant Recommendation Engine
// Matches user microclimate criteria against plant botanical specifications

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("recommend-filter-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    calculateRecommendations();
  });

  // Run initial simulation with default selected values
  calculateRecommendations();
});

function calculateRecommendations() {
  const sunlight = document.getElementById("filter-sunlight").value;
  const space = document.getElementById("filter-space").value;
  const soil = document.getElementById("filter-soil").value;
  const watering = document.getElementById("filter-watering").value;
  const purpose = document.getElementById("filter-purpose").value;
  const season = document.getElementById("filter-season").value;

  // Use plants from PLANTS_DATABASE
  if (typeof PLANTS_DATABASE === "undefined") return;

  const scoredPlants = PLANTS_DATABASE.map(plant => {
    let score = 50; // base score
    let reasons = [];

    // 1. Sunlight matching
    if (sunlight === "direct" && (plant.environment.toLowerCase().includes("direct") || plant.environment.toLowerCase().includes("full sun"))) {
      score += 15;
      reasons.push("Matches your direct full sun exposure");
    } else if (sunlight === "partial" && (plant.environment.toLowerCase().includes("partial") || plant.environment.toLowerCase().includes("morning"))) {
      score += 15;
      reasons.push("Thrives with your 3 to 6 hours partial sun setup");
    } else if (sunlight === "indirect" && plant.environment.toLowerCase().includes("indirect")) {
      score += 15;
      reasons.push("Prefers bright indirect light without burning");
    } else if (sunlight === "low" && (plant.environment.toLowerCase().includes("low") || plant.maintenance.toLowerCase().includes("very low"))) {
      score += 15;
      reasons.push("Highly tolerant of indoor low light conditions");
    }

    // 2. Space matching
    if (space === "balcony" && (plant.category === "Medicinal" || plant.category === "Flowering")) {
      score += 10;
      reasons.push("Compact growth suitable for balcony pots");
    } else if (space === "indoor" && plant.category === "Indoor") {
      score += 12;
      reasons.push("Acclimatized indoor species with air cleaning traits");
    } else if (space === "ground" && plant.category === "Outdoor Trees") {
      score += 12;
      reasons.push("Develops strong roots and canopy in ground soil");
    } else if (space === "desk" && (plant.name.includes("Jade") || plant.name.includes("Aloe") || plant.name.includes("Snake") || plant.name.includes("Money"))) {
      score += 10;
      reasons.push("Ideal compact size for desks and window sills");
    }

    // 3. Soil matching
    if (soil === "sandy" && (plant.soilType.toLowerCase().includes("sand") || plant.soilType.toLowerCase().includes("succulent"))) {
      score += 8;
      reasons.push("Compatible with sandy, gritty fast-draining soil");
    } else if (soil === "loamy" && plant.soilType.toLowerCase().includes("loam")) {
      score += 8;
      reasons.push("Thrives in nutrient-rich loamy soil");
    } else if (soil === "cocopeat" && (plant.soilType.toLowerCase().includes("cocopeat") || plant.category === "Indoor")) {
      score += 8;
      reasons.push("Optimal for lightweight cocopeat container mix");
    }

    // 4. Watering matching
    if (watering === "low" && (plant.maintenance.includes("Very Low") || plant.watering.includes("10") || plant.watering.includes("Weekly"))) {
      score += 10;
      reasons.push("Requires minimal watering, preventing rot");
    } else if (watering === "daily" && (plant.watering.toLowerCase().includes("daily") || plant.category === "Flowering")) {
      score += 8;
      reasons.push("Responds well to regular daily moisture");
    }

    // 5. Purpose matching
    if (purpose === "air" && plant.category === "Indoor") {
      score += 12;
      reasons.push("Top-ranked NASA air purifying capabilities");
    } else if (purpose === "fragrance" && plant.category === "Flowering") {
      score += 12;
      reasons.push("Produces aromatic blooms and continuous flowering");
    } else if (purpose === "medicinal" && plant.category === "Medicinal") {
      score += 12;
      reasons.push("High therapeutic, immunity, and culinary value");
    } else if (purpose === "shade" && plant.category === "Outdoor Trees") {
      score += 12;
      reasons.push("Creates dense thermal shade canopy and dust filter");
    }

    // Cap score at 98%
    const finalScore = Math.min(score, 98);

    return {
      plant,
      score: finalScore,
      reasons: reasons.slice(0, 3)
    };
  });

  // Sort descending by match score
  scoredPlants.sort((a, b) => b.score - a.score);

  // Take top 6 recommendations
  const topMatches = scoredPlants.slice(0, 6);
  renderRecommendationResults(topMatches);
}

function renderRecommendationResults(matches) {
  const container = document.getElementById("recommendation-results-grid");
  const countSpan = document.getElementById("matched-count-text");
  if (!container) return;

  if (countSpan) {
    countSpan.textContent = `Found ${matches.length} highly compatible plants for your conditions`;
  }

  container.innerHTML = matches.map(item => `
    <div class="match-card">
      <div class="match-score-badge">${item.score}% Match</div>
      <h4>${item.plant.name}</h4>
      <p class="match-scientific">${item.plant.scientific}</p>
      
      <div class="match-reason">
        <strong>Why It Grows Best:</strong>
        <ul style="margin: 6px 0 0 16px; padding: 0; font-size: 0.86rem;">
          ${item.reasons.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>

      <div class="match-specs">
        <div><strong>Category:</strong> ${item.plant.category}</div>
        <div><strong>Price:</strong> Rs. ${item.plant.price} per sapling</div>
        <div><strong>Water Need:</strong> ${item.plant.watering}</div>
        <div><strong>Soil:</strong> ${item.plant.soilType.split(",")[0]}</div>
      </div>

      <button class="plant-card-btn" onclick="openPlantModal('${item.plant.id}')">View Complete Profile</button>
    </div>
  `).join("");
}
