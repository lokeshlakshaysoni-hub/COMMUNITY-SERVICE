# Bharat Nursery - Smart Horticulture & Sustainable Landscaping System

An academic community service and technological platform developed in collaboration with **Bharat Nursery (Pataudi, Haryana)**.

---

## 1. Project Basic Details

- **Project Title:** AI-Assisted Smart Nursery Management and Sustainable Landscaping Recommendation System
- **Collaborative Organization:** Bharat Nursery, Main Pataudi Road, Pataudi, Gurugram, Haryana - 122503
- **Primary SDG:** SDG 11 - Sustainable Cities and Communities
- **Supporting SDGs:** SDG 12 (Responsible Consumption), SDG 13 (Climate Action), SDG 15 (Life on Land)
- **Technology Stack:**
  - Frontend: Semantic HTML5, Modular CSS3, Modern JavaScript (ES6+), React.js (React 18 Hooks)
  - Backend Server & APIs: Node.js, Express.js
  - AI / ML Recommendation Module: Python 3 scoring engine & JavaScript microclimate evaluator
  - External APIs: OpenStreetMap Nominatim Reverse Geocoding API & Indian Postal Pincode API
  - Version Control & Environment: GitHub, VS Code

---

## 2. File & Directory Structure

```
Community_Service/
├── index.html            # Page 1: Home, Why Visit Us, SDG Explanation Hub & React SDG Live Calculator
├── about.html            # Page 2: About Nursery, Instagram (@bharat_nursery01), Google Maps (Pataudi), Community Ratings
├── plants.html           # Page 3: 20 Indigenous & Acclimatized Plants with Prices, Soil, Environment & Seasonal Specs
├── recommend.html        # Page 4: Smart Recommendation Filter based on Client Environmental Constraints
├── account.html          # Page 5: User Account with Username, Password, PFP Upload, Name, Phone & Address APIs
├── login.html            # Authentication interface for User Login and Registration
├── css/
│   └── style.css         # Unified stylesheet with nature-green palette, responsive grid, and zero emojis
├── js/
│   ├── main.js           # Global navigation toggle, navbar login state, and helpers
│   ├── plants.js         # Comprehensive 20-plant database, category filtering, search, and detail modal
│   ├── recommend.js      # Multi-factor microclimate compatibility algorithm
│   ├── account.js        # Profile management, PFP base64 preview, Geolocation API & Postal Pincode API
│   └── react-sdg-app.js  # React 18 browser runtime integration for live SDG impact calculation
├── react-components/
│   ├── SdgImpactCalculator.jsx  # Modular React component for household CO2, water, and plastic estimation
│   └── PlantComparator.jsx      # React component for side-by-side botanical attribute comparison
├── server.js             # Node.js Express server serving pages and REST API endpoints (/api/reviews, /api/account, /api/recommend-ai)
├── ai_recommender.py     # Python microservice script for botanical recommendation scoring
├── package.json          # Node.js dependencies and run scripts
└── README.md             # Complete project documentation and SDG justification
```

---

## 3. How to Run the Website

### Option 1: Direct File Launch (No Server Required)
1. Open Windows File Explorer and navigate to:
   `C:\Users\acer\OneDrive\Documents\Community_Service`
2. Double-click **`index.html`**.
3. The website will open in your default browser (Google Chrome, Microsoft Edge, or Mozilla Firefox).
4. All client-side features (catalog search, category filters, smart recommendation engine, address geolocation API, and local storage account profile) work directly.

### Option 2: Running via Node.js Express Server
1. Open the terminal or VS Code in this directory:
   ```powershell
   cd C:\Users\acer\OneDrive\Documents\Community_Service
   ```
2. Start the Express server:
   ```powershell
   npm start
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

### Option 3: Running the Python Recommendation Module
To test the Python AI scoring engine independently:
```powershell
python ai_recommender.py
```

---

## 4. Multi-Page Architecture Overview

### Page 1: Home, Why Visit Us & SDG Hub (`index.html`)
- **Front Page Hero:** Introduces the project mission, partner nursery in Pataudi, and direct call-to-actions.
- **Why Visit Us:** Four core nursery pillars: 100% Acclimatized Indian flora, Zero Single-Use Plastic Pots, Personalized Microclimate Care, and Vermicompost enriched soils.
- **SDG Explanation Hub:** In-depth breakdown of how the project maps to UN SDGs 11, 12, 13, and 15.

### Page 2: About Nursery, Instagram, Maps & Ratings (`about.html`)
- **About Bharat Nursery:** Nursery history since 2014, propagation facilities, and organic mission.
- **Instagram Profile Section:** Connects users to official handle `@bharat_nursery01` with post previews, follower count, and reels highlights.
- **Google Maps Section:** Embedded interactive Google Maps location for Bharat Nursery in Pataudi, Haryana with driving directions, landmark, and hours.
- **Community Ratings & Reviews:** Real average score (4.8 / 5.0) with star breakdown, verified customer testimonials, and an interactive review submission form.

### Page 3: Plants Catalog & Cultivation Guide (`plants.html`)
- **20 Verified Species:** Tulsi, Snake Plant, Neem Tree, Mogra, Areca Palm, Aloe Vera, Curry Leaf, Bougainvillea, Money Plant, Peace Lily, Spider Plant, Hibiscus, Indian Desi Rose, Jade Plant, Ashoka Tree, Marigold, Syngonium, Peepal, Lemon Tree, and Boston Fern.
- **Every Plant Includes:** Current price (in INR), botanical name, growth guide (how it grows well), soil type needed, environment & sunlight, and seasonal care.
- **Interactive Features:** Real-time search bar, category filter pills, and click-to-open detailed botanical modal.

### Page 4: Smart Recommendation Filter (`recommend.html`)
- **Client Input Parameters:** Sunlight exposure (direct, partial, indirect, low), growing space (balcony, indoor, ground, desk), soil type (cocopeat, loamy, sandy, clayey), watering capacity, purpose, and season.
- **Recommendation Engine:** Calculates compatibility percentage (e.g., 96% Match) and explains why each recommended plant will grow best under the client's conditions.

### Page 5: Account & Address API Integration (`account.html`)
- **Profile Fields:** Username, Password (with show/hide toggle), Profile Picture (PFP upload and preview), Full Name, Phone Number, and Address.
- **Address API Integrations:**
  1. *Browser Geolocation + OpenStreetMap Reverse Geocoding API:* Automatically retrieves latitude/longitude and resolves full street address, city, and state.
  2. *Indian Postal Pincode API:* Queries postal databases to auto-populate district, post office, and state from a 6-digit PIN code.

### Authentication (`login.html`)
- Simple Sign In and Account Registration forms saving session status in `localStorage` and syncing with the server.

---

## 5. UN Sustainable Development Goals (SDG) Alignment

### Primary SDG: SDG 11 - Sustainable Cities and Communities
- **Target 11.7:** Universal access to safe, inclusive, accessible green spaces.
- **Implementation:** Promotes urban balcony and terrace gardening, bringing functional greenery into congested residential areas. Helps mitigate urban heat island effects and filters airborne dust particles.

### Supporting SDG: SDG 12 - Responsible Consumption and Production
- **Target 12.5:** Substantially reduce waste generation through prevention, reduction, and recycling.
- **Implementation:** Eliminates the cycle of buying and discarding dead plants by prescribing correct microclimate matches. Uses 100% biodegradable coconut coir pots and recycles green waste into organic vermicompost.

### Supporting SDG: SDG 13 - Climate Action
- **Target 13.3:** Improve education, awareness-raising, and human capacity on climate change mitigation.
- **Implementation:** Promotes native high-carbon sequestering tree saplings (Neem, Peepal) and teaches water-saving drip irrigation practices.

### Supporting SDG: SDG 15 - Life on Land
- **Target 15.5:** Take urgent and significant action to reduce the degradation of natural habitats and halt biodiversity loss.
- **Implementation:** Protects and propagates indigenous Indian flora, restoring vital pollinator pathways for wild bees and native birds.

---

## 6. How Our Project Solves These SDGs

| Traditional Problem | How Bharat Nursery Solves It | SDG Addressed |
| :--- | :--- | :--- |
| 35% to 50% of purchased urban plants die within 4 weeks due to wrong placement. | Algorithmic microclimate filter matches plants to the client's exact sunlight and watering routine. | SDG 12, SDG 11 |
| Millions of black plastic polybags are discarded into landfills every season. | Saplings are distributed in biodegradable coconut coir pots and recycled cloth root-bags. | SDG 12, SDG 15 |
| Chemical pesticides harm soil microbiomes and poison urban pollinating bees. | Exclusively uses cold-pressed neem formulations and organic vermicompost. | SDG 15, SDG 12 |
| Rapid urban concretization causes heat islands and high ambient dust (PM2.5). | Promotes urban residential forestry with high-foliage native species (Neem, Peepal, Ashoka). | SDG 11, SDG 13 |

---

## 7. Why This Project is an SDG Community Solution (Not a Commercial Business Idea)

During project evaluation, it is essential to distinguish this initiative from a commercial e-commerce enterprise:

1. **Mission Centered on Plant Survival, Not Replacement Volume:**
   Commercial plant businesses benefit financially when a customer's plant dies, because the customer returns to buy another. Our platform exists to prevent plant death through transparent horticultural data and microclimate filtering.

2. **Open Environmental Education:**
   All cultivation manuals, soil preparation ratios, and seasonal care tips are provided completely free to the public, empowering citizens to propagate their own plants rather than remain dependent on commercial purchases.

3. **Protection of Native Ecological Heritage:**
   Commercial nurseries prioritize fast-growing imported hybrids that look attractive in showrooms but fail outdoors and disrupt local insect biodiversity. Bharat Nursery prioritizes resilient native Indian species that support regional ecosystems.

4. **Zero Single-Use Plastic Mandate:**
   Commercial models prioritize cheap single-use plastic nursery bags. This project advocates for biodegradable coir planters and community vermicomposting units, prioritizing ecological health over short-term commercial margins.

5. **Community Collaboration in Pataudi:**
   The project connects local rural growers and horticulture students directly with urban plant adopters, fostering community stewardship and green public spaces under SDG 11.
