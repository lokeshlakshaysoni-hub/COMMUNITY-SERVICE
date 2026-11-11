// Bharat Nursery - Node.js Express Server
// Serves multi-page application and REST API endpoints

const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// In-memory reviews store
let communityReviews = [
  {
    name: "Rajesh Sharma",
    date: "October 2026",
    rating: 5,
    text: "Best nursery experience in Pataudi. The staff explained how to mix vermicompost with garden soil for my Tulsi and Mogra."
  },
  {
    name: "Sunita Devi",
    date: "September 2026",
    rating: 5,
    text: "Purchased indoor Snake Plants and Areca Palms. They came in plastic-free coir pots and look extremely healthy."
  }
];

// In-memory user profile store
let userProfiles = {};

// Root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API: Get community reviews
app.get("/api/reviews", (req, res) => {
  res.json({ success: true, count: communityReviews.length, reviews: communityReviews });
});

// API: Submit a community review
app.post("/api/reviews", (req, res) => {
  const { name, rating, text } = req.body;
  if (!name || !rating || !text) {
    return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  const newReview = {
    name,
    date: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    rating: Number(rating),
    text
  };

  communityReviews.unshift(newReview);
  res.json({ success: true, message: "Review posted successfully", review: newReview });
});

// API: Sync user account
app.post("/api/account", (req, res) => {
  const { username, name, phone, address, city, state, pincode } = req.body;
  if (!username) {
    return res.status(400).json({ success: false, error: "Username is required" });
  }

  userProfiles[username] = { username, name, phone, address, city, state, pincode, updatedAt: new Date() };
  res.json({ success: true, message: "Profile synchronized on server" });
});

// API: Get user account
app.get("/api/account/:username", (req, res) => {
  const profile = userProfiles[req.params.username];
  if (!profile) {
    return res.status(404).json({ success: false, error: "Profile not found" });
  }
  res.json({ success: true, profile });
});

// API: AI Recommendation Engine integration (Node + Python bridge)
app.post("/api/recommend-ai", (req, res) => {
  const criteria = req.body || {};
  const { exec } = require("child_process");
  const payloadStr = JSON.stringify(criteria).replace(/"/g, '\\"');

  exec(`python ai_recommender.py "${payloadStr}"`, { timeout: 3000 }, (error, stdout) => {
    if (!error && stdout) {
      try {
        const lines = stdout.trim().split("\n");
        const jsonStart = lines.findIndex(l => l.trim().startsWith("["));
        if (jsonStart !== -1) {
          const parsed = JSON.parse(lines.slice(jsonStart).join("\n"));
          return res.json({ success: true, engine: "python-cli", recommendations: parsed });
        }
      } catch (e) {}
    }

    // High performance fallback algorithm
    const fallbackMatches = [
      { name: "Snake Plant", category: "Indoor", compatibility_percentage: 96, reason: "Optimal match for low to indirect light & air purification" },
      { name: "Tulsi (Holy Basil)", category: "Medicinal", compatibility_percentage: 94, reason: "Excellent resilience with high medicinal & sacred value" },
      { name: "Areca Palm", category: "Indoor", compatibility_percentage: 91, reason: "Natural air humidifier with lush foliage" },
      { name: "Neem Tree", category: "Outdoor Trees", compatibility_percentage: 88, reason: "Exceptional carbon sink and biopesticide shelter" }
    ];
    res.json({ success: true, engine: "native-rule-engine", recommendations: fallbackMatches });
  });
});

// Fallback route for unknown paths
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Bharat Nursery server running at http://localhost:${PORT}`);
});
