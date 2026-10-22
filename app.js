/**
 * BHARAT NURSERY - SIMPLE JAVASCRIPT
 * 
 * This file contains simple, beginner-friendly JavaScript code.
 * It manages the "View Details" click for each plant card.
 * No complex libraries or frameworks are used.
 */

// Simple data object holding details for each plant
const plantData = {
  tulsi: {
    title: "Tulsi (Holy Basil)",
    scientific: "Botanical Name: Ocimum sanctum",
    category: "Medicinal / Herbal",
    sunlight: "4 to 6 Hours of direct morning sunlight",
    water: "Daily in summer, alternate days in winter",
    soil: "Well-draining garden soil mixed with compost",
    maintenance: "Low Maintenance",
    price: "Rs. 99",
    care: "Pinch the top leaves regularly to encourage bushy growth. Water when the top inch of soil feels dry."
  },
  snake: {
    title: "Snake Plant (Mother-in-Law's Tongue)",
    scientific: "Botanical Name: Dracaena trifasciata",
    category: "Indoor Air Purifier",
    sunlight: "Indirect sunlight, tolerates low-light rooms",
    water: "Once every 10 to 14 days (Do not overwater)",
    soil: "Sandy, well-draining succulent potting mix",
    maintenance: "Very Low Maintenance",
    price: "Rs. 249",
    care: "Allow soil to completely dry out between waterings. Wipe the leaves occasionally to remove dust."
  },
  neem: {
    title: "Neem Tree",
    scientific: "Botanical Name: Azadirachta indica",
    category: "Outdoor Shade & Native Tree",
    sunlight: "Full direct sun (6+ hours daily)",
    water: "Regular watering while young, drought tolerant when mature",
    soil: "Any standard garden or red soil",
    maintenance: "Low Maintenance",
    price: "Rs. 149",
    care: "Ensure plenty of open sunlight and space for the roots to grow. Protect young saplings from harsh frost."
  },
  mogra: {
    title: "Mogra (Arabian Jasmine)",
    scientific: "Botanical Name: Jasminum sambac",
    category: "Fragrant Flowering Plant",
    sunlight: "Direct sunlight for at least 5 to 6 hours",
    water: "Keep soil moist but not waterlogged",
    soil: "Rich loamy soil with organic vermicompost",
    maintenance: "Medium Maintenance",
    price: "Rs. 129",
    care: "Prune after flowering to encourage fresh flower buds. Add organic compost once a month for more fragrant blooms."
  }
};

/**
 * Function: showPlantDetails
 * Purpose: Takes the plant key (e.g. 'tulsi'), finds its data,
 *          and updates the HTML elements in the details box.
 */
function showPlantDetails(plantKey) {
  // 1. Get the plant data from our object
  const plant = plantData[plantKey];

  if (!plant) {
    return; // If plant not found, do nothing
  }

  // 2. Update the text content of the HTML elements
  document.getElementById("detail-title").textContent = plant.title;
  document.getElementById("detail-scientific").textContent = plant.scientific;
  document.getElementById("detail-category").textContent = plant.category;
  document.getElementById("detail-sunlight").textContent = plant.sunlight;
  document.getElementById("detail-water").textContent = plant.water;
  document.getElementById("detail-soil").textContent = plant.soil;
  document.getElementById("detail-maintenance").textContent = plant.maintenance;
  document.getElementById("detail-price").textContent = plant.price;
  document.getElementById("detail-care").textContent = plant.care;

  // 3. Smoothly scroll down to the details box so the user sees the info
  const detailsBox = document.getElementById("details-box");
  detailsBox.scrollIntoView({ behavior: "smooth" });
}
