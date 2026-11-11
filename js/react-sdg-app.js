// Bharat Nursery - React.js SDG Sustainability & Carbon Estimator
// Renders live React 18 component into #react-sdg-root

(function () {
  const e = React.createElement;

  function SdgLiveCalculator() {
    const [plantCount, setPlantCount] = React.useState(8);
    const [spaceType, setSpaceType] = React.useState("balcony");
    const [irrigation, setIrrigation] = React.useState("drip");
    const [potType, setPotType] = React.useState("coir");

    const totalCo2 = (plantCount * 12.5).toFixed(1);
    const waterSaved = irrigation === "drip" ? ((1.2 - 0.55) * plantCount * 30).toFixed(0) : "0";
    const plasticSaved = potType === "coir" ? plantCount : 0;
    const oxygenDaily = (plantCount * 45).toFixed(0);

    return e("div", { className: "react-sdg-card" },
      e("div", { className: "react-calc-header" },
        e("span", { className: "react-badge" }, "Interactive React.js Component"),
        e("h3", null, "Household SDG Ecological Impact Estimator"),
        e("p", null, "Adjust your gardening setup below to calculate real-time environmental metrics mapped to UN SDGs 11, 12, 13, and 15.")
      ),
      e("div", { className: "react-calc-grid" },
        e("div", { className: "react-inputs" },
          e("div", { className: "react-input-group" },
            e("label", null, "Saplings Cultivated: ", e("strong", null, plantCount + " plants")),
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
            e("label", null, "Growing Location"),
            e("select", {
              value: spaceType,
              onChange: (evt) => setSpaceType(evt.target.value),
              className: "form-control"
            },
              e("option", { value: "balcony" }, "Balcony Container / Railing"),
              e("option", { value: "terrace" }, "Rooftop / Terrace Garden"),
              e("option", { value: "indoor" }, "Indoor Rooms / Living Space"),
              e("option", { value: "ground" }, "Open Ground Plot / Park")
            )
          ),
          e("div", { className: "react-input-group" },
            e("label", null, "Irrigation Method"),
            e("select", {
              value: irrigation,
              onChange: (evt) => setIrrigation(evt.target.value),
              className: "form-control"
            },
              e("option", { value: "drip" }, "Micro-Drip Irrigation (45% Water Saving)"),
              e("option", { value: "flood" }, "Conventional Hose / Bucket Watering")
            )
          ),
          e("div", { className: "react-input-group" },
            e("label", null, "Potting Medium"),
            e("select", {
              value: potType,
              onChange: (evt) => setPotType(evt.target.value),
              className: "form-control"
            },
              e("option", { value: "coir" }, "100% Biodegradable Coconut Coir Pots"),
              e("option", { value: "plastic" }, "Standard Commercial Plastic Nursery Bags")
            )
          )
        ),
        e("div", { className: "react-metrics-grid" },
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 13 - Climate Action"),
            e("div", { className: "metric-num" }, totalCo2 + " kg"),
            e("div", { className: "metric-sub" }, "Annual CO2 Absorption")
          ),
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 12 - Responsible Use"),
            e("div", { className: "metric-num" }, waterSaved + " Litres"),
            e("div", { className: "metric-sub" }, "Water Conserved Every Month")
          ),
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 12 - Zero Plastic Waste"),
            e("div", { className: "metric-num" }, plasticSaved + " Units"),
            e("div", { className: "metric-sub" }, "Plastic Polybags Kept from Landfills")
          ),
          e("div", { className: "react-metric-box" },
            e("span", { className: "metric-sdg-tag" }, "SDG 11 - Sustainable Cities"),
            e("div", { className: "metric-num" }, oxygenDaily + " Litres"),
            e("div", { className: "metric-sub" }, "Daily Clean Oxygen Released")
          )
        )
      )
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    const rootEl = document.getElementById("react-sdg-root");
    if (!rootEl || typeof ReactDOM === "undefined") return;

    if (ReactDOM.createRoot) {
      const root = ReactDOM.createRoot(rootEl);
      root.render(e(SdgLiveCalculator));
    } else {
      ReactDOM.render(e(SdgLiveCalculator), rootEl);
    }
  });
})();
