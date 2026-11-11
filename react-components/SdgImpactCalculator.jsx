import React, { useState, useMemo } from "react";

export default function SdgImpactCalculator() {
  const [plantCount, setPlantCount] = useState(6);
  const [spaceType, setSpaceType] = useState("balcony");
  const [irrigationType, setIrrigationType] = useState("drip");
  const [potType, setPotType] = useState("coir");

  const metrics = useMemo(() => {
    const co2PerPlantPerYear = 12.5;
    const totalCo2 = (plantCount * co2PerPlantPerYear).toFixed(1);

    const waterPerPlantFlood = 1.2;
    const waterPerPlantDrip = 0.55;
    const waterSavedPerDay = irrigationType === "drip" ? (waterPerPlantFlood - waterPerPlantDrip) * plantCount : 0;
    const waterSavedPerMonth = (waterSavedPerDay * 30).toFixed(0);

    const plasticSaved = potType === "coir" ? plantCount : 0;

    const oxygenDailyLitres = (plantCount * 45).toFixed(0);

    return {
      totalCo2,
      waterSavedPerMonth,
      plasticSaved,
      oxygenDailyLitres
    };
  }, [plantCount, spaceType, irrigationType, potType]);

  return (
    <div className="react-sdg-calculator">
      <div className="calc-header">
        <h3>Live SDG Sustainability & Carbon Estimator (React.js)</h3>
        <p>Interactive calculator measuring household ecological contribution mapped to UN SDGs 11, 12, 13, and 15.</p>
      </div>

      <div className="calc-body-grid">
        <div className="calc-controls">
          <div className="calc-control-group">
            <label>Number of Plants Adopted: <strong>{plantCount} saplings</strong></label>
            <input
              type="range"
              min="1"
              max="50"
              value={plantCount}
              onChange={(e) => setPlantCount(Number(e.target.value))}
              className="calc-slider"
            />
          </div>

          <div className="calc-control-group">
            <label>Growing Environment</label>
            <select
              value={spaceType}
              onChange={(e) => setSpaceType(e.target.value)}
              className="form-control"
            >
              <option value="balcony">Balcony / Apartment Railing</option>
              <option value="terrace">Rooftop / Terrace Garden</option>
              <option value="indoor">Indoor Living Room / Bedroom</option>
              <option value="ground">Ground Plot / Community Garden</option>
            </select>
          </div>

          <div className="calc-control-group">
            <label>Watering Technique</label>
            <select
              value={irrigationType}
              onChange={(e) => setIrrigationType(e.target.value)}
              className="form-control"
            >
              <option value="drip">Micro-Drip Irrigation (Water-Saving)</option>
              <option value="manual">Manual Hose / Flood Watering</option>
            </select>
          </div>

          <div className="calc-control-group">
            <label>Container / Potting Medium</label>
            <select
              value={potType}
              onChange={(e) => setPotType(e.target.value)}
              className="form-control"
            >
              <option value="coir">Biodegradable Coconut Coir Pots</option>
              <option value="plastic">Conventional Nursery Plastic</option>
            </select>
          </div>
        </div>

        <div className="calc-metrics-display">
          <div className="metric-tile">
            <span className="metric-tag">SDG 13 - Climate Action</span>
            <div className="metric-val">{metrics.totalCo2} kg</div>
            <div className="metric-desc">CO2 Sequestered Annually</div>
          </div>

          <div className="metric-tile">
            <span className="metric-tag">SDG 12 - Responsible Use</span>
            <div className="metric-val">{metrics.waterSavedPerMonth} L</div>
            <div className="metric-desc">Water Saved Monthly (vs Flood)</div>
          </div>

          <div className="metric-tile">
            <span className="metric-tag">SDG 12 - Zero Waste</span>
            <div className="metric-val">{metrics.plasticSaved} Units</div>
            <div className="metric-desc">Single-Use Plastic Pots Prevented</div>
          </div>

          <div className="metric-tile">
            <span className="metric-tag">SDG 11 - Sustainable Cities</span>
            <div className="metric-val">{metrics.oxygenDailyLitres} L</div>
            <div className="metric-desc">Daily Clean Oxygen Produced</div>
          </div>
        </div>
      </div>
    </div>
  );
}
