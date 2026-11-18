// Bharat Nursery - Comprehensive Plants & Botanical Catalog Database
// Lead Botanical Database Architect: Akshat Tomar
// Data Integration & Market Pricing: Akshat Tomar & Lokesh Verma
// Contains categorized species: High O2 Releases, Decorative Palms, Avenue & Boundary Trees, Flowering & Decorating, and Medicinal
// Real Indian nursery wholesale & sapling market pricing. Strictly zero emojis.

const PLANTS_DATABASE = [
  // --- SECTION 1: HIGH OXYGEN RELEASES (SDG 11 CLEAN AIR) ---
  {
    id: "o2-1",
    name: "Peepal Tree (Sacred Fig)",
    scientific: "Ficus religiosa",
    category: "High O2 Release",
    priceRange: "Rs. 120 - 450",
    saplingPrice: 120,
    maturePrice: 450,
    o2Rating: "Maximum (24-Hour Continuous O2 Release)",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Renowned for producing continuous oxygen day and night through Crassulacean Acid Metabolism (CAM). Essential for urban heat island reduction.",
    growthGuide: "Rapid growing canopy. Prune lower side stems if maintaining in large patio planters or shallow bonsai containers.",
    soilType: "Adaptable to all soils; thrives in well-draining garden loam.",
    environment: "Full direct sun (6+ hours). Highly resilient to temperature shifts.",
    seasonal: "Vibrant pink-green new leaves emerge in spring; dense shade during hot summers.",
    maintenance: "Low",
    watering: "Moderate; weekly for young saplings"
  },
  {
    id: "o2-2",
    name: "Neem Tree",
    scientific: "Azadirachta indica",
    category: "High O2 Release",
    priceRange: "Rs. 80 - 350",
    saplingPrice: 80,
    maturePrice: 350,
    o2Rating: "High (Air Purification & Natural Pest Repellent)",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    description: "Miracle indigenous tree acting as an active environmental bio-filter, trapping PM2.5 particulates and absorbing heavy urban toxins.",
    growthGuide: "Deep taproot system that becomes drought-proof once anchored. Excellent boundary shade tree.",
    soilType: "Poor to fertile soils with sandy or loamy texture.",
    environment: "Direct full sunshine. Highly heat and drought tolerant.",
    seasonal: "Fragrant white blossoms in spring; dense cooling monsoon foliage.",
    maintenance: "Very Low",
    watering: "Low; rain-fed once established"
  },
  {
    id: "o2-3",
    name: "Snake Plant (Sansevieria)",
    scientific: "Dracaena trifasciata",
    category: "High O2 Release",
    priceRange: "Rs. 150 - 450",
    saplingPrice: 150,
    maturePrice: 450,
    o2Rating: "High Nocturnal O2 (NASA Clean Air Study)",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=600&q=80",
    description: "Hardy architectural succulent that converts nighttime carbon dioxide into oxygen and filters formaldehyde and benzene.",
    growthGuide: "Thrives on neglect. Allow soil to dry completely between waterings to prevent rhizome rot.",
    soilType: "Fast draining gritty potting mix with perlite or coarse sand.",
    environment: "Low light to bright filtered sunlight. Perfect for bedrooms and office desks.",
    seasonal: "Year-round indoor growth.",
    maintenance: "Very Low",
    watering: "Once every 10 to 14 days"
  },
  {
    id: "o2-4",
    name: "Tulsi (Holy Basil)",
    scientific: "Ocimum sanctum",
    category: "High O2 Release",
    priceRange: "Rs. 40 - 150",
    saplingPrice: 40,
    maturePrice: 150,
    o2Rating: "Continuous Oxygen & Bio-Ozone Emission",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    description: "Sacred medicinal herb emitting active oxygen for up to 20 hours daily. Emits adaptogenic phytoncides that refresh domestic air.",
    growthGuide: "Pinch terminal flower spikes regularly to stimulate bushy lateral foliage.",
    soilType: "Rich organic loamy soil with 30% vermicompost.",
    environment: "4 to 6 hours of morning direct sunlight.",
    seasonal: "Lush growth in summer and monsoon; shelter from frost in winter.",
    maintenance: "Low",
    watering: "Daily in summer, alternate days in winter"
  },

  // --- SECTION 2: DECORATIVE PALMS (URBAN LANDSCAPING) ---
  {
    id: "palm-1",
    name: "Bottle Palm",
    scientific: "Hyophorbe lagenicaulis",
    category: "Decorative Palms",
    priceRange: "Rs. 350 - 2,600",
    saplingPrice: 350,
    maturePrice: 2600,
    heightSpec: "Rs. 350-650 (2-4 ft sapling) | Rs. 1,600-2,600 (10 ft landscape specimen)",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    description: "Exotic tropical palm with a unique swollen bottle-shaped trunk and compact arching fronds. Highly valued for luxury front-yard entries.",
    growthGuide: "Slow growing. Excellent specimen for container growing when young; transitions gracefully to open lawns.",
    soilType: "Well-aerated sandy loam with excellent organic drainage.",
    environment: "Full sun to mild afternoon shade in hot dry months.",
    seasonal: "Lush growth throughout summer and post-monsoon.",
    maintenance: "Medium",
    watering: "Water thoroughly when top 2 inches dry"
  },
  {
    id: "palm-2",
    name: "Foxtail Palm",
    scientific: "Wodyetia bifurcata",
    category: "Decorative Palms",
    priceRange: "Rs. 950 - 2,000",
    saplingPrice: 950,
    maturePrice: 2000,
    heightSpec: "Rs. 950-1,500 (4-6 ft plant) | Rs. 1,600-2,000 (8-10 ft specimen)",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    description: "Spectacular landscaping palm featuring bushy, plume-like fronds resembling a fox tail. Self-cleaning crownshaft with minimal pruning needed.",
    growthGuide: "Plant with root collar level with ground. Deep watering during first two summer seasons builds deep tap anchorage.",
    soilType: "Deep, porous garden soil enriched with vermicompost.",
    environment: "Unrestricted full sun exposure (6+ hours).",
    seasonal: "Vigorous crown expansion during warm monsoon weeks.",
    maintenance: "Low",
    watering: "Weekly deep soaking"
  },
  {
    id: "palm-3",
    name: "Areca Palm",
    scientific: "Dypsis lutescens",
    category: "Decorative Palms",
    priceRange: "Rs. 110 - 1,200",
    saplingPrice: 110,
    maturePrice: 1200,
    heightSpec: "Rs. 110-250 (potted clump) | Rs. 600-1,200 (6-8 ft tall specimen)",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80",
    description: "Graceful clustering palm with arching golden-green stems. Top choice for domestic indoor air humidification and corridor greening.",
    growthGuide: "Keep root zone slightly crowded. Feed with mild organic nitrogen liquid fertilizer quarterly.",
    soilType: "Cocopeat and leaf mold mixed with gritty garden soil.",
    environment: "Bright indirect light; protect from scorching direct midday sun.",
    seasonal: "Perennial green foliage indoors year-round.",
    maintenance: "Medium",
    watering: "Moderate; keep soil damp but never waterlogged"
  },
  {
    id: "palm-4",
    name: "Bismarckia Palm (Silver Palm)",
    scientific: "Bismarckia nobilis",
    category: "Decorative Palms",
    priceRange: "Rs. 1,500 - 2,500",
    saplingPrice: 1500,
    maturePrice: 2500,
    heightSpec: "Rs. 1,500-2,500 for 5 ft landscaping specimen",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    description: "Architectural masterpiece with gigantic metallic blue-silver fan fronds. Makes a stunning solitary centerpiece for open gardens.",
    growthGuide: "Requires ample spatial clearance (minimum 10 feet radius) to display magnificent frond spread.",
    soilType: "Sandy, well-drained loam. Highly drought-resistant once rooted.",
    environment: "Full blazing sun all day long.",
    seasonal: "Slow steady growth; frond silver sheen intensifies in strong sun.",
    maintenance: "Low",
    watering: "Low to moderate"
  },
  {
    id: "palm-5",
    name: "Washingtonia Palm (Mexican Fan Palm)",
    scientific: "Washingtonia robusta",
    category: "Decorative Palms",
    priceRange: "Rs. 2,500 - 3,400",
    saplingPrice: 2500,
    maturePrice: 3400,
    heightSpec: "Rs. 2,500-3,400 for 5-10 ft outdoor landscaping specimens",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    description: "Fast-growing towering palm with bold fan-shaped leaves and reddish-brown trunk fibers. Popular for villa boundaries and perimeter accents.",
    growthGuide: "Very fast vertical growth rate. Highly resilient against high winds and heat waves.",
    soilType: "Adapts to poor, sandy, and clayey soils provided drainage is clear.",
    environment: "Full outdoor sun (6 to 8 hours).",
    seasonal: "Active growth throughout hot summer and monsoon.",
    maintenance: "Low",
    watering: "Moderate during early growth; drought tolerant"
  },
  {
    id: "palm-6",
    name: "Traveller's Palm",
    scientific: "Ravenala madagascariensis",
    category: "Decorative Palms",
    priceRange: "Rs. 330 - 800",
    saplingPrice: 330,
    maturePrice: 800,
    heightSpec: "Rs. 330-800 for 4-5 ft healthy saplings",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    description: "Dramatic fan-shaped arrangement of paddle-like banana foliage. Forms a majestic green structural backdrop along boundary walls.",
    growthGuide: "Orient fan leaves perpendicular to primary wind direction to avoid frond shredding.",
    soilType: "Rich, fertile, organic-rich garden soil with good moisture holding.",
    environment: "Full sun to partial sun. Needs protection from extreme winter frost.",
    seasonal: "Rapid leaf emergence during warm humid monsoon season.",
    maintenance: "Medium",
    watering: "Regular moisture required"
  },
  {
    id: "palm-7",
    name: "Cycas Palm (Sago Palm)",
    scientific: "Cycas revoluta",
    category: "Decorative Palms",
    priceRange: "Rs. 250 - 3,000",
    saplingPrice: 250,
    maturePrice: 3000,
    heightSpec: "Rs. 250-600 (small pups) | Rs. 1,500-3,000 (mature specimen trunk)",
    image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
    description: "Living prehistoric cycad with symmetry, dark stiff glossy fronds, and thick rugged trunk. Outstanding container centerpiece.",
    growthGuide: "Very slow growing. Produces one or two flushes of new fronds annually. Never overwater.",
    soilType: "Gritty, sharply draining cactus or palm potting mix.",
    environment: "Bright indirect sun to partial direct sun.",
    seasonal: "Produces new whorl of feather fronds in late spring.",
    maintenance: "Very Low",
    watering: "Allow soil to dry almost completely before re-watering"
  },

  // --- SECTION 3: BOUNDARY & AVENUE TREES ---
  {
    id: "ave-1",
    name: "False Ashoka (Mast Tree)",
    scientific: "Polyalthia longifolia var. pendula",
    category: "Avenue Trees",
    priceRange: "Rs. 30 - 800",
    saplingPrice: 30,
    maturePrice: 800,
    heightSpec: "Rs. 30-60 (3-5 ft polybag) | Rs. 400-800 (7-10 ft tall pendula tree)",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Slender columnar evergreen tree with pendulous weeping foliage. The standard choice across India for noise barriers, privacy screens, and avenue boundaries.",
    growthGuide: "Maintains its upright pyramid shape naturally. Plant 3 to 4 feet apart for an impenetrable green privacy wall.",
    soilType: "Tolerates all standard garden soils; handles city dust and pollution.",
    environment: "Full sun to light shade.",
    seasonal: "Fresh coppery-red shoots in early spring maturing to deep lustrous green.",
    maintenance: "Low",
    watering: "Weekly for saplings; self-sufficient once root-anchored"
  },
  {
    id: "ave-2",
    name: "Sita Ashoka",
    scientific: "Saraca asoca",
    category: "Avenue Trees",
    priceRange: "Rs. 30 - 1,200",
    saplingPrice: 30,
    maturePrice: 1200,
    heightSpec: "Rs. 30-250 (small sapling) | Rs. 380-1,200 (6-8 ft mature tree)",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
    description: "Sacred indigenous rainforest tree with drooping foliage and fragrant orange-red floral clusters. Important ayurvedic and biodiversity species.",
    growthGuide: "Prefers sheltered partial shade when young before graduating to full sun. Mulch base generously.",
    soilType: "Rich, well-drained loamy soil with abundant leaf mold.",
    environment: "Filtered sun to full morning sun.",
    seasonal: "Abundant fragrant blooms from February to April.",
    maintenance: "Medium",
    watering: "Keep soil consistently damp"
  },
  {
    id: "ave-3",
    name: "Ficus Panda (Topiary Tree)",
    scientific: "Ficus microcarpa",
    category: "Avenue Trees",
    priceRange: "Rs. 85 - 4,000+",
    saplingPrice: 85,
    maturePrice: 4000,
    heightSpec: "Rs. 85-150 (small boundary plant) | Rs. 1,500-4,000+ (shaped topiary globe/pillar)",
    image: "https://images.unsplash.com/photo-1572688484437-18ef557140f7?auto=format&fit=crop&w=600&q=80",
    description: "Dense, glossy rounded leaves with compact branching. The premier plant for formal hedge shaping, decorative topiary balls, and boundary fences.",
    growthGuide: "Prune every 4 to 6 weeks during summer to maintain geometric topiary profiles.",
    soilType: "Versatile garden soil with good drainage.",
    environment: "Full sun to partial shade.",
    seasonal: "Lush green density maintained throughout the year.",
    maintenance: "Medium",
    watering: "Moderate watering"
  },
  {
    id: "ave-4",
    name: "Silver Oak",
    scientific: "Grevillea robusta",
    category: "Avenue Trees",
    priceRange: "Rs. 40 - 120",
    saplingPrice: 40,
    maturePrice: 120,
    heightSpec: "Rs. 40-120 for 3-5 ft saplings in regional nurseries",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    description: "Fast-growing straight evergreen timber tree with fern-like silvery-undersided leaves and golden-orange bottle-brush flowers.",
    growthGuide: "Plant along long perimeter boundaries. Provides rapid high-altitude windbreak and shade.",
    soilType: "Adapts well to slightly acidic, sandy, or loamy soil.",
    environment: "Full sun. Excellent tolerance to cold winters and dry heat.",
    seasonal: "Blooms in spring with golden brush flowers that attract native pollinators.",
    maintenance: "Very Low",
    watering: "Low once established"
  },
  {
    id: "ave-5",
    name: "Weeping Fig",
    scientific: "Ficus benjamina",
    category: "Avenue Trees",
    priceRange: "Rs. 100 - 1,800",
    saplingPrice: 100,
    maturePrice: 1800,
    heightSpec: "Rs. 100-250 (standard sapling) | Rs. 800-1,800 (braided trunk specimen)",
    image: "https://images.unsplash.com/photo-1572688484437-18ef557140f7?auto=format&fit=crop&w=600&q=80",
    description: "Graceful weeping tree with glossy pointed oval leaves. Can be trained with artistic braided stems in containers or grown into large avenue shade trees.",
    growthGuide: "Sensitive to frequent location relocations. Keep in a steady spot with consistent light.",
    soilType: "Standard potting mix enriched with compost.",
    environment: "Bright indirect light to outdoor partial sun.",
    seasonal: "Year-round glossy green canopy.",
    maintenance: "Low",
    watering: "Water when top 1 inch of soil dries"
  },

  // --- SECTION 4: FLOWERING ORNAMENTAL & DECORATING ---
  {
    id: "dec-1",
    name: "Gulmohar (Flamboyant Tree)",
    scientific: "Delonix regia",
    category: "Flowering & Decorating",
    priceRange: "Rs. 50 - 440",
    saplingPrice: 50,
    maturePrice: 440,
    heightSpec: "Rs. 50-150 (local nursery sapling) | Rs. 350-440 (potted sapling online)",
    image: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=600&q=80",
    description: "World-famous ornamental flowering avenue tree bursting with fiery scarlet-orange flower carpets across summer months.",
    growthGuide: "Broad spreading umbrella canopy. Plant in open lawns, park spaces, or wide street avenues.",
    soilType: "Well-draining garden soil, tolerant of saline and alkaline soils.",
    environment: "Direct full sunshine (6+ hours).",
    seasonal: "Spectacular scarlet flowering from April to July.",
    maintenance: "Low",
    watering: "Moderate; drought tolerant"
  },
  {
    id: "dec-2",
    name: "Amaltas (Golden Shower Tree)",
    scientific: "Cassia fistula",
    category: "Flowering & Decorating",
    priceRange: "Rs. 60 - 200",
    saplingPrice: 60,
    maturePrice: 200,
    heightSpec: "Rs. 60-200 for 4-6 ft saplings",
    image: "https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=600&q=80",
    description: "Indian native tree producing mesmerizing pendulous cascades of bright golden-yellow blossoms. Highly resilient to city heat.",
    growthGuide: "Drops leaves in spring right before exploding into full golden flower clusters.",
    soilType: "Deep loamy soil with fair drainage.",
    environment: "Full sun exposure.",
    seasonal: "Magnificent yellow bloom during peak summer (May to June).",
    maintenance: "Low",
    watering: "Low to moderate"
  },
  {
    id: "dec-3",
    name: "Neel Mohar (Jacaranda)",
    scientific: "Jacaranda mimosifolia",
    category: "Flowering & Decorating",
    priceRange: "Rs. 100 - 300",
    saplingPrice: 100,
    maturePrice: 300,
    heightSpec: "Rs. 100-300 for 2-4 ft live saplings",
    image: "https://images.unsplash.com/photo-1550950158-d0d960dff51b?auto=format&fit=crop&w=600&q=80",
    description: "Captivating avenue tree with fine fern-like bipinnate foliage and intense violet-blue bell-shaped blooms that carpet the ground.",
    growthGuide: "Prune young shoots to encourage a single strong trunk for avenue planting.",
    soilType: "Sandy, well-aerated loam.",
    environment: "Full sun in open gardens and front-yards.",
    seasonal: "Breathtaking violet-blue flowering in March and April.",
    maintenance: "Low",
    watering: "Moderate watering"
  },
  {
    id: "dec-4",
    name: "Pink Trumpet Tree",
    scientific: "Tabebuia rosea",
    category: "Flowering & Decorating",
    priceRange: "Rs. 150 - 250",
    saplingPrice: 150,
    maturePrice: 250,
    heightSpec: "Rs. 150-250 for young vigorous saplings",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    description: "Often called the Indian Cherry Blossom. Produces voluminous clusters of pink and rosy-lilac trumpet blooms that envelop the canopy.",
    growthGuide: "Fast growing in sunny tropical conditions. Ideal ornamental shade tree for campus walkways and front yards.",
    soilType: "Rich garden soil with moderate moisture.",
    environment: "Full outdoor sun.",
    seasonal: "Dense floral display in late winter and early spring.",
    maintenance: "Low",
    watering: "Regular during first two years"
  },
  {
    id: "dec-5",
    name: "Champa / Plumeria",
    scientific: "Plumeria alba / rubra",
    category: "Flowering & Decorating",
    priceRange: "Rs. 120 - 750+",
    saplingPrice: 120,
    maturePrice: 750,
    heightSpec: "Rs. 120-300 (2-3 ft sapling) | Rs. 750+ (5-6 ft mature blooming tree)",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=600&q=80",
    description: "Sculptural succulent branches adorned with fragrant white and yellow or deep crimson spiral flowers. Essential for patio decor.",
    growthGuide: "Cuttings root easily. Tolerates prolonged dry spells due to succulent stems.",
    soilType: "Gritty, highly porous garden soil with coarse compost.",
    environment: "Full sun (minimum 5 hours for profuse flowers).",
    seasonal: "Sweet-scented flowering throughout summer and monsoon.",
    maintenance: "Very Low",
    watering: "Low; water only when dry"
  },
  {
    id: "dec-6",
    name: "Bougainvillea (Tree/Bonsai Form)",
    scientific: "Bougainvillea spectabilis",
    category: "Flowering & Decorating",
    priceRange: "Rs. 50 - 1,500",
    saplingPrice: 50,
    maturePrice: 1500,
    heightSpec: "Rs. 50-160 (small sapling) | Rs. 500-1,500 (multi-grafted bonsai or tall form)",
    image: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=600&q=80",
    description: "Vibrant evergreen climber trained into colorful trees or boundary espaliers, covered in papery magenta, red, yellow, or white bracts.",
    growthGuide: "Prune sharply after flowering cycle to trigger immediate fresh flower bud flushes.",
    soilType: "Sandy, well-draining garden soil.",
    environment: "Intense full sun (6+ hours). Thrives in dry heat.",
    seasonal: "Non-stop floral flushes throughout spring, summer, and post-monsoon.",
    maintenance: "Very Low",
    watering: "Low; slight water stress enhances blooming"
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
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b; font-size: 1.1rem;">No species found matching your search. Please try another filter.</div>`;
    return;
  }

  container.innerHTML = plants.map(plant => `
    <div class="plant-card-item pop-card">
      <div class="plant-img-wrapper">
        <img src="${plant.image}" alt="${plant.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80';">
        <span class="category-tag">${plant.category}</span>
      </div>
      <div class="plant-card-body">
        <h3 class="plant-title">${plant.name}</h3>
        <p class="botanical-title">${plant.scientific}</p>
        <div class="plant-price-row">
          <span class="plant-price">${plant.priceRange || 'Rs. ' + plant.saplingPrice}</span>
          <span class="stock-tag">In Stock</span>
        </div>
        ${plant.heightSpec ? `<div style="font-size: 0.78rem; color: #475569; margin-bottom: 8px; line-height: 1.35;">${plant.heightSpec}</div>` : ''}
        ${plant.o2Rating ? `<div style="font-size: 0.78rem; font-weight: 700; color: #059669; margin-bottom: 8px;">O2: ${plant.o2Rating}</div>` : ''}
        <div class="plant-specs-snippet">
          <div class="spec-line"><strong>Soil:</strong> ${plant.soilType.split(',')[0]}</div>
          <div class="spec-line"><strong>Sunlight:</strong> ${plant.environment.split('.')[0]}</div>
          <div class="spec-line"><strong>Maintenance:</strong> ${plant.maintenance}</div>
        </div>
        <button class="plant-card-btn" onclick="openPlantModal('${plant.id}')">View Full Botanical Specs</button>
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
    <h2 style="color: #0f172a; margin-bottom: 2px; font-weight: 800;">${plant.name}</h2>
    <p style="font-style: italic; color: #2563eb; margin-bottom: 15px; font-weight: 600;">Botanical: ${plant.scientific}</p>
    <div style="font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">Indian Market Price: ${plant.priceRange || 'Rs. ' + plant.saplingPrice}</div>
    ${plant.heightSpec ? `<div style="background-color: #f1f5f9; padding: 8px 12px; border-radius: 6px; font-size: 0.85rem; color: #334155; margin-bottom: 15px; font-weight: 500;"><strong>Height Pricing:</strong> ${plant.heightSpec}</div>` : ''}

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
        <strong>Watering Need</strong>
        <span>${plant.watering}</span>
      </div>
      <div class="modal-spec-box">
        <strong>Acclimatization</strong>
        <span>Conditioned at Bharat Nursery, Pataudi</span>
      </div>
    </div>

    <div class="modal-text-block">
      <h4>Overview &amp; Urban Functionality</h4>
      <p>${plant.description}</p>
    </div>

    ${plant.o2Rating ? `
    <div class="modal-text-block">
      <h4>Oxygen Output &amp; SDG 11 Contribution</h4>
      <p style="color: #059669; font-weight: 600;">${plant.o2Rating}</p>
    </div>` : ''}

    <div class="modal-text-block">
      <h4>Growth Guide &amp; Pruning Protocol</h4>
      <p>${plant.growthGuide}</p>
    </div>

    <div class="modal-text-block">
      <h4>Soil &amp; Potting Requirements</h4>
      <p>${plant.soilType}</p>
    </div>

    <div class="modal-text-block">
      <h4>Sunlight &amp; Microclimate Tolerance</h4>
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
