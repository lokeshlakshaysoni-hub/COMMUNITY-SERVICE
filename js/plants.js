// Bharat Nursery - Plants Catalog and Data Module
// Contains minimum 20 plants with complete horticultural specifications

const PLANTS_DATABASE = [
  {
    id: "p1",
    name: "Tulsi (Holy Basil)",
    scientific: "Ocimum sanctum",
    category: "Medicinal",
    price: 99,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    description: "Revered sacred herb with powerful adaptogenic, antimicrobial, and respiratory healing properties.",
    growthGuide: "Requires regular pinching of flower spikes to promote dense lateral branching. Thrives with 4 to 6 hours of daily sunlight and consistent moderate moisture.",
    soilType: "Well-draining loamy soil enriched with 30% organic vermicompost and 10% coarse sand.",
    environment: "Warm tropical and subtropical climate. Temperature 20C to 35C. Direct morning sunlight.",
    seasonal: "Vigorous growth during monsoon and summer. Needs frost protection and reduced watering in peak winter.",
    maintenance: "Low",
    watering: "Daily in summer, alternate days in winter"
  },
  {
    id: "p2",
    name: "Snake Plant (Sansevieria)",
    scientific: "Dracaena trifasciata",
    category: "Indoor",
    price: 249,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80",
    description: "Hardy architectural succulent renowned for releasing oxygen at night and absorbing indoor toxins.",
    growthGuide: "Extremely resilient. Grows well when root-bound. Avoid overwatering at all costs to prevent rhizome rot.",
    soilType: "Porous succulent potting mix (50% grit/sand, 30% cocopeat, 20% compost).",
    environment: "Tolerates low light to bright indirect sunlight. Adapts to air-conditioned indoor rooms (15C to 32C).",
    seasonal: "Active growth during spring and rainy season. Minimal water required during winter months.",
    maintenance: "Very Low",
    watering: "Once every 10 to 14 days"
  },
  {
    id: "p3",
    name: "Neem Tree",
    scientific: "Azadirachta indica",
    category: "Outdoor Trees",
    price: 149,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Miracle indigenous tree known for natural pest deterrence, air filtration, and medicinal neem bark.",
    growthGuide: "Deep taproot system that becomes self-sufficient once established. Prune lower branches to develop a high shade canopy.",
    soilType: "Adapts to poor soils including red, sandy, and stony soils with neutral to alkaline pH.",
    environment: "Full blazing sun (6+ hours). Highly drought-tolerant once roots anchor into ground soil.",
    seasonal: "Sheds leaves lightly in early spring followed by lush flowering and dense monsoon canopy.",
    maintenance: "Low",
    watering: "Weekly for saplings; rain-fed once mature"
  },
  {
    id: "p4",
    name: "Mogra (Arabian Jasmine)",
    scientific: "Jasminum sambac",
    category: "Flowering",
    price: 129,
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
    description: "Popular fragrant flowering shrub producing clusters of intensely aromatic white blossoms.",
    growthGuide: "Requires periodic pruning right after every blooming cycle to stimulate fresh flowering wood and flower bud clusters.",
    soilType: "Rich, fertile loamy soil with high organic matter, compost, and good moisture retention.",
    environment: "Direct outdoor sunlight (at least 5 hours). High humidity promotes larger blooms.",
    seasonal: "Abundant blooming from March to October (summer and monsoon). Dormant during cold winter.",
    maintenance: "Medium",
    watering: "Keep soil consistently moist"
  },
  {
    id: "p5",
    name: "Areca Palm",
    scientific: "Dypsis lutescens",
    category: "Indoor",
    price: 349,
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80",
    description: "Graceful feather-like indoor palm that acts as an efficient natural indoor humidifier and air purifier.",
    growthGuide: "Prefers tight root zones and gentle liquid feeding every 6 weeks. Avoid placing directly under cold AC air currents.",
    soilType: "Peat or cocopeat-based well-draining soil with perlite and leaf mold.",
    environment: "Bright filtered indirect sunlight. Sensitive to direct scorching afternoon sun.",
    seasonal: "Year-round indoor growth. Mist fronds during dry summer weeks to prevent yellow leaf tips.",
    maintenance: "Medium",
    watering: "Water when top 2 inches of soil feel dry"
  },
  {
    id: "p6",
    name: "Aloe Vera",
    scientific: "Aloe barbadensis miller",
    category: "Medicinal",
    price: 89,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
    description: "Succulent herb with fleshy gel-filled leaves used for soothing skin burns, wounds, and detox drinks.",
    growthGuide: "Fast multiplying plant that produces side pups. Water deeply but infrequently; ensure container has unobstructed drainage.",
    soilType: "Fast-draining sandy soil or commercial cactus mix (pH 6.5 to 7.5).",
    environment: "Bright sunny windowsill or outdoor patio receiving 4 to 6 hours of sunlight.",
    seasonal: "Tolerates extreme heat waves. Protect from continuous monsoon waterlogging to stop leaf decay.",
    maintenance: "Very Low",
    watering: "Once every 7 to 10 days"
  },
  {
    id: "p7",
    name: "Curry Leaf Plant (Kadi Patta)",
    scientific: "Murraya koenigii",
    category: "Medicinal",
    price: 79,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    description: "Essential culinary shrub with aromatic compound leaves used daily across traditional Indian cuisine.",
    growthGuide: "Benefits from sour curd / buttermilk diluted with water applied once a month to boost rich foliage and aroma.",
    soilType: "Slightly acidic, well-aerated soil rich in cow dung compost or vermicompost.",
    environment: "Warm sunny balcony or kitchen garden receiving 5+ hours of sun.",
    seasonal: "Rapid growth in warm humid monsoon months. Semi-dormant during peak North Indian winter.",
    maintenance: "Low",
    watering: "Moderate; allow soil surface to dry slightly"
  },
  {
    id: "p8",
    name: "Bougainvillea",
    scientific: "Bougainvillea glabra",
    category: "Flowering",
    price: 159,
    image: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=600&q=80",
    description: "Vibrant ornamental climber with vivid magenta, pink, or red papery bracts creating dramatic floral walls.",
    growthGuide: "Thrives on controlled neglect. Slight water stress actually triggers heavy flowering rather than foliage growth.",
    soilType: "Well-draining gritty garden soil. Not demanding about soil fertility.",
    environment: "Unrestricted direct sunlight (6 to 8 hours daily). Hot and dry conditions.",
    seasonal: "Peaks in spring and dry summer. Heavy monsoon rain increases green foliage at the expense of bracts.",
    maintenance: "Low",
    watering: "Low; water only when soil is dry"
  },
  {
    id: "p9",
    name: "Money Plant (Golden Pothos)",
    scientific: "Epipremnum aureum",
    category: "Indoor",
    price: 119,
    image: "https://images.unsplash.com/photo-1572688484437-18ef557140f7?auto=format&fit=crop&w=600&q=80",
    description: "Classic trailing climber with golden-variegated heart-shaped leaves, popular for indoor decor and feng shui.",
    growthGuide: "Grows readily in both water jars and soil pots. Train along moss poles to encourage larger leaf development.",
    soilType: "Lightweight potting mix with 50% cocopeat, 30% vermicompost, and 20% perlite.",
    environment: "Bright indirect light to medium indoor shade. Avoid direct harsh sunlight which scorches leaves.",
    seasonal: "Fast growth from March to September. Wipe leaves monthly to keep photosynthesis optimal.",
    maintenance: "Very Low",
    watering: "Twice a week in summer, weekly in winter"
  },
  {
    id: "p10",
    name: "Peace Lily",
    scientific: "Spathiphyllum",
    category: "Indoor",
    price: 299,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=600&q=80",
    description: "Elegant air-filtering plant featuring deep glossy green foliage and serene white flower spathes.",
    growthGuide: "Leaves droop visibly when thirsty, giving a clear watering signal. Rebounds quickly after watering.",
    soilType: "Rich organic potting soil that retains moisture without becoming soggy.",
    environment: "Low to medium indirect light. Perfect for interior rooms, bedrooms, and office cubicles.",
    seasonal: "Blooms in spring and summer. Maintain higher ambient humidity by occasional misting.",
    maintenance: "Medium",
    watering: "When topsoil starts to dry; approx every 5 to 7 days"
  },
  {
    id: "p11",
    name: "Spider Plant",
    scientific: "Chlorophytum comosum",
    category: "Indoor",
    price: 139,
    image: "https://images.unsplash.com/photo-1572688484437-18ef557140f7?auto=format&fit=crop&w=600&q=80",
    description: "Graceful arching foliage with white central stripes; produces dangling spiderettes ideal for hanging baskets.",
    growthGuide: "Very easy to propagate from baby plantlets. Tolerates occasional missed waterings due to thick fleshy roots.",
    soilType: "Standard potting mix with good drainage and compost.",
    environment: "Bright indirect light. Direct afternoon sun can burn the delicate ribbon foliage.",
    seasonal: "Produces runners and baby shoots during warm summer and monsoon seasons.",
    maintenance: "Very Low",
    watering: "Moderate; once or twice weekly"
  },
  {
    id: "p12",
    name: "Hibiscus (Gudhul)",
    scientific: "Hibiscus rosa-sinensis",
    category: "Flowering",
    price: 119,
    image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80",
    description: "Classic tropical shrub producing dramatic large trumpet-shaped flowers in red, orange, yellow, and pink.",
    growthGuide: "Heavy feeder. Apply potassium-rich organic manure or banana peel fertilizer every 3 weeks for continuous buds.",
    soilType: "Loamy, slightly acidic soil enriched with well-rotted cow dung compost.",
    environment: "Direct full sunshine (minimum 5 to 6 hours daily).",
    seasonal: "Profuse flowering from March through October. Prune in early spring before fresh shoots emerge.",
    maintenance: "Medium",
    watering: "Daily during hot summer months"
  },
  {
    id: "p13",
    name: "Indian Desi Rose (Gulab)",
    scientific: "Rosa indica",
    category: "Flowering",
    price: 169,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "Intensely fragrant indigenous rose variety used for making rose water (gulab jal), gulkand, and garlands.",
    growthGuide: "Perform hard pruning in October in North India. Mulch the base with dried leaves or compost to protect root temperature.",
    soilType: "Rich clayey loam with generous vermicompost and bone meal.",
    environment: "Full outdoor direct sunlight for at least 6 hours daily.",
    seasonal: "Peak blooming period is from November to March (winter and early spring) across India.",
    maintenance: "Medium",
    watering: "Deep watering every 2 to 3 days"
  },
  {
    id: "p14",
    name: "Jade Plant",
    scientific: "Crassula ovata",
    category: "Indoor",
    price: 199,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    description: "Symbol of good luck and prosperity with thick woody stems and glossy jade-green succulent leaves.",
    growthGuide: "Easily trained as miniature bonsai. Only water when the leaves feel slightly soft to the touch.",
    soilType: "Fast draining succulent gritty soil with perlite, pumice, and sand.",
    environment: "Bright sunny spot, sunny window sill, or morning sun balcony.",
    seasonal: "Growth slows in peak winter. Keep completely sheltered from cold rain to avoid stem rot.",
    maintenance: "Very Low",
    watering: "Once every 10 to 12 days"
  },
  {
    id: "p15",
    name: "Ashoka Tree (Pendula)",
    scientific: "Polyalthia longifolia",
    category: "Outdoor Trees",
    price: 189,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Tall columnar evergreen tree widely planted for sound barriers, urban dust control, and architectural avenues.",
    growthGuide: "Naturally maintains a slender upright mast shape. Requires zero side pruning and minimal space footprint.",
    soilType: "Adapts to nearly all soil types provided there is no chronic waterlogging.",
    environment: "Full sun to partial sun. Highly tolerant of urban traffic pollution.",
    seasonal: "Produces fresh coppery-bronze foliage during spring that turns deep lustrous green.",
    maintenance: "Low",
    watering: "Weekly when young; independent once mature"
  },
  {
    id: "p16",
    name: "Marigold (Genda)",
    scientific: "Tagetes erecta",
    category: "Flowering",
    price: 49,
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    description: "Cheerful golden-orange blooms that act as a natural companion plant to repel vegetable garden nematodes.",
    growthGuide: "Pinch early seedling shoots to induce branching. Deadhead faded flowers immediately for non-stop blooms.",
    soilType: "Average garden soil with compost and good aeration.",
    environment: "Full direct sun. Tolerates warm dry conditions.",
    seasonal: "Grown as winter annual in plains and summer/monsoon annual in hills.",
    maintenance: "Low",
    watering: "Water every 2 days when soil surface dries"
  },
  {
    id: "p17",
    name: "Syngonium (Arrowhead Plant)",
    scientific: "Syngonium podophyllum",
    category: "Indoor",
    price: 129,
    image: "https://images.unsplash.com/photo-1572688484437-18ef557140f7?auto=format&fit=crop&w=600&q=80",
    description: "Hardy tropical foliage plant with arrow-shaped variegated leaves that naturally purify indoor air.",
    growthGuide: "Versatile plant that can be kept compact in pots or allowed to climb up a coir pole.",
    soilType: "Cocopeat rich soil with perlite and compost for moisture retention.",
    environment: "Medium to bright indirect light. Avoid direct harsh sun.",
    seasonal: "Lush growth during warm monsoon season. Maintain normal room temperatures in winter.",
    maintenance: "Low",
    watering: "Water 2 times weekly"
  },
  {
    id: "p18",
    name: "Peepal Sapling / Bonsai",
    scientific: "Ficus religiosa",
    category: "Outdoor Trees",
    price: 219,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Sacred fig tree with characteristic tail-tipped leaves that generate high oxygen output day and night.",
    growthGuide: "Extremely vigorous root structure. Best planted in large park areas or maintained in shallow bonsai pots.",
    soilType: "Highly adaptable; grows in loamy, rocky, or alkaline soil substrates.",
    environment: "Full sun outdoors. Resilient to wide climatic variations from 5C to 45C.",
    seasonal: "Sheds old leaves in spring followed by vibrant translucent pink-green new leaves.",
    maintenance: "Low",
    watering: "Water twice a week during dry months"
  },
  {
    id: "p19",
    name: "Lemon Tree (Kagzi Nimbu)",
    scientific: "Citrus limon",
    category: "Medicinal",
    price: 179,
    image: "https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=600&q=80",
    description: "Fruit-bearing citrus shrub producing thin-skinned juicy lemons rich in vitamin C and culinary citric acid.",
    growthGuide: "Apply bone meal, mustard cake, and epsom salts quarterly. Ensure at least 6 hours of unshaded sunlight.",
    soilType: "Well-draining sandy loam with pH between 5.5 and 6.5.",
    environment: "Full sun exposure. Warm, sunny terrace or open courtyard.",
    seasonal: "Flowers in spring and monsoon; fruits ripen through summer and winter.",
    maintenance: "Medium",
    watering: "Consistent deep watering; avoid standing water"
  },
  {
    id: "p20",
    name: "Boston Fern",
    scientific: "Nephrolepis exaltata",
    category: "Indoor",
    price: 199,
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
    description: "Lush cascading sword-fern that excels in absorbing indoor formaldehyde and buffering dry air.",
    growthGuide: "Thrives in hanging baskets in bathrooms, balconies, or verandas with high humidity. Mist foliage weekly.",
    soilType: "Porous organic mix rich in peat moss, compost, and leaf mold.",
    environment: "Bright indirect light or shaded porch. Zero direct harsh sunlight.",
    seasonal: "Continues lush growth year-round in humid climates. Shield from dry hot summer winds.",
    maintenance: "Medium",
    watering: "Keep soil lightly damp at all times"
  }
];

// Initialize catalog on plants.html
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("plants-catalog-grid");
  if (!container) return;

  renderPlants(PLANTS_DATABASE);
  setupFilters();
  setupSearch();
});

// Render plant cards into catalog
function renderPlants(plants) {
  const container = document.getElementById("plants-catalog-grid");
  if (!container) return;

  if (plants.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">No plants found matching your search.</div>`;
    return;
  }

  container.innerHTML = plants.map(plant => `
    <div class="plant-card-item">
      <div class="plant-img-wrapper">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80';">
        <span class="category-tag">${plant.category}</span>
      </div>
      <div class="plant-card-body">
        <h3 class="plant-title">${plant.name}</h3>
        <p class="botanical-title">${plant.scientific}</p>
        <div class="plant-price-row">
          <span class="plant-price">Rs. ${plant.price}</span>
          <span class="stock-tag">In Stock</span>
        </div>
        <div class="plant-specs-snippet">
          <div class="spec-line"><strong>Soil:</strong> ${plant.soilType.split(',')[0]}</div>
          <div class="spec-line"><strong>Sunlight:</strong> ${plant.environment.split('.')[0]}</div>
          <div class="spec-line"><strong>Maintenance:</strong> ${plant.maintenance}</div>
        </div>
        <button class="plant-card-btn" onclick="openPlantModal('${plant.id}')">View Full Details</button>
      </div>
    </div>
  `).join("");
}

// Category filter setup
function setupFilters() {
  const buttons = document.querySelectorAll(".pill-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      buttons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const category = this.getAttribute("data-category");

      if (category === "All") {
        renderPlants(PLANTS_DATABASE);
      } else {
        const filtered = PLANTS_DATABASE.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
        renderPlants(filtered);
      }
    });
  });
}

// Search input setup
function setupSearch() {
  const searchInput = document.getElementById("plant-search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    const filtered = PLANTS_DATABASE.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.scientific.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
    renderPlants(filtered);
  });
}

// Open plant details modal
function openPlantModal(plantId) {
  const plant = PLANTS_DATABASE.find(p => p.id === plantId);
  if (!plant) return;

  const modal = document.getElementById("plant-modal");
  const modalBody = document.getElementById("modal-body-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <h2 style="color: #143621; margin-bottom: 2px;">${plant.name}</h2>
    <p style="font-style: italic; color: #718096; margin-bottom: 15px;">Botanical Name: ${plant.scientific}</p>
    <div style="font-size: 1.3rem; font-weight: 800; color: #1b4332; margin-bottom: 15px;">Current Price: Rs. ${plant.price} per plant</div>

    <div class="modal-grid">
      <div class="modal-spec-box">
        <strong>Category</strong>
        <span>${plant.category}</span>
      </div>
      <div class="modal-spec-box">
        <strong>Maintenance Level</strong>
        <span>${plant.maintenance}</span>
      </div>
      <div class="modal-spec-box">
        <strong>Watering Regimen</strong>
        <span>${plant.watering}</span>
      </div>
      <div class="modal-spec-box">
        <strong>Stock Status</strong>
        <span>Available at Bharat Nursery, Pataudi</span>
      </div>
    </div>

    <div class="modal-text-block">
      <h4>Overview & Need for Plant</h4>
      <p>${plant.description}</p>
    </div>

    <div class="modal-text-block">
      <h4>Botanical Characteristics & Traits</h4>
      <div class="modal-spec-box" style="margin-top: 8px;">
        <ul style="margin: 4px 0 4px 18px; font-size: 0.9rem; color: #333; line-height: 1.6;">
          <li><strong>Growth Pattern:</strong> ${plant.maintenance === "Very Low" ? "Hardy low-intervention growth" : "Responsive seasonal canopy"}</li>
          <li><strong>Ecological Trait:</strong> ${plant.category === "Indoor" ? "NASA rated airborne toxin filtration" : (plant.category === "Outdoor Trees" ? "High carbon sequestration & thermal microclimate buffer" : (plant.category === "Flowering" ? "Aromatic pollinator attractor for native honeybees" : "Ayurvedic immunity and medicinal phyto-compounds"))}</li>
          <li><strong>Acclimatization:</strong> 100% conditioned to Haryana/NCR climate at Bharat Nursery, Pataudi</li>
        </ul>
      </div>
    </div>

    <div class="modal-text-block">
      <h4>How it Grows Very Well (Growth Guide)</h4>
      <p>${plant.growthGuide}</p>
    </div>

    <div class="modal-text-block">
      <h4>Soil Type Needed</h4>
      <p>${plant.soilType}</p>
    </div>

    <div class="modal-text-block">
      <h4>Environment & Sunlight</h4>
      <p>${plant.environment}</p>
    </div>

    <div class="modal-text-block">
      <h4>Seasonal Care</h4>
      <p>${plant.seasonal}</p>
    </div>
  `;

  modal.style.display = "flex";
}

// Close plant details modal
function closePlantModal() {
  const modal = document.getElementById("plant-modal");
  if (modal) {
    modal.style.display = "none";
  }
}
