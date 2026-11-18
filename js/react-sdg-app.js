// Bharat Nursery - React.js SDG 11 Urban Sustainability & Clean Air Calculator
// Author: Punit Kumar (UI/UX & React Engineer)
// Architecture & Wireframe: Lokesh Verma (Lead Architect)
// Framework: React 18 browser runtime | Primary Mandate: UN SDG 11

(function () {
  const e = React.createElement;

  function Sdg11UrbanCalculator() {
    const [plantCount, setPlantCount] = React.useState(12);
    const [spaceType, setSpaceType] = React.useState("balcony");
    const [irrigation, setIrrigation] = React.useState("drip");

    // SDG 11 Specific Urban Environmental Calculations
    const dailyOxygen = (plantCount * 48).toFixed(0); // Litres/day
    const urbanCanopyArea = (plantCount * 2.4).toFixed(1); // Sq ft of green canopy
    const ambientCoolingFactor = (plantCount * 0.12).toFixed(2); // Estimated microclimate cooling index (deg C reduction)
    const pm25FilteredGrams = (plantCount * 1.8).toFixed(1); // Airborne particulate matter trapped (grams/month)

    return e("div", { className: "react-sdg-card pop-card" },
      e("div", { className: "react-calc-header" },
        e("span", { className: "react-badge" }, "Primary Focus: UN SDG 11 - Sustainable Cities"),
        e("h3", null, "Household Urban Canopy & Clean Air Calculator"),
        e("p", null, "Calculate how your domestic plant setup directly advances UN SDG Target 11.7 (Inclusive Green Spaces & Urban Microclimate Cooling).")
      ),
      e("div", { className: "react-calc-grid" },
        e("div", { className: "react-inputs" },
          e("div", { className: "react-input-group" },
            e("label", null, "Domestic Saplings Maintained: ", e("strong", { style: { color: "var(--primary)" } }, plantCount + " plants")),
            e("input", {
              type: "range",
              min: "1",
              max: "50",
              value: plantCount,
              onChange: (evt) => setPlantCount(Number(evt.target.value)),
              className: "calc-slider"
            })
          ),
          e("div", { className: "react-input-group" },
            e("label", null, "Urban Location Type (SDG 11 Space Category)"),
            e("select", {
              value: spaceType,
              onChange: (evt) => setSpaceType(evt.target.value),
              className: "form-control"
            },
              e("option", { value: "balcony" }, "Apartment Balcony / Railing Garden"),
              e("option", { value: "terrace" }, "Rooftop Urban Terrace Garden"),
              e("option", { value: "indoor" }, "Indoor Living Room & Window Sills"),
              e("option", { value: "veranda" }, "Courtyard / Ground Plot")
            )
          ),
          e("div", { className: "react-input-group" },
            e("label", null, "Water Conservation Mode"),
            e("select", {
              value: irrigation,
              onChange: (evt) => setIrrigation(evt.target.value),
              className: "form-control"
            },
              e("option", { value: "drip" }, "Micro-Drip System (Zero Runoff Waste)"),
              e("option", { value: "bucket" }, "Manual Root Sprinkling")
            )
          )
        ),
        e("div", { className: "react-metrics-grid" },
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 11 Clean Air Output"),
            e("div", { className: "metric-num" }, dailyOxygen + " L"),
            e("div", { className: "metric-sub" }, "Daily Clean Oxygen Released")
          ),
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 11 Urban Canopy"),
            e("div", { className: "metric-num" }, urbanCanopyArea + " Sq Ft"),
            e("div", { className: "metric-sub" }, "New Urban Green Cover Added")
          ),
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 11 Microclimate Buffer"),
            e("div", { className: "metric-num" }, "-" + ambientCoolingFactor + " C"),
            e("div", { className: "metric-sub" }, "Local Heat Island Reduction")
          ),
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 11 Air Quality"),
            e("div", { className: "metric-num" }, pm25FilteredGrams + " g"),
            e("div", { className: "metric-sub" }, "Monthly PM2.5 Dust Trapped")
          )
        )
      )
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    const rootEl = document.getElementById("react-sdg-root");
    if (rootEl && window.React && window.ReactDOM) {
      const root = ReactDOM.createRoot(rootEl);
      root.render(e(Sdg11UrbanCalculator));
    }
  });
})();
