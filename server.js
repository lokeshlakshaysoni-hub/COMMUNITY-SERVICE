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

// Fallback route for unknown paths
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Bharat Nursery server running at http://localhost:${PORT}`);
});
