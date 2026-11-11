import React, { useState } from "react";

export default function PlantComparator({ plants = [] }) {
  const [plantAId, setPlantAId] = useState(plants[0]?.id || "p1");
  const [plantBId, setPlantBId] = useState(plants[1]?.id || "p2");

  const plantA = plants.find((p) => p.id === plantAId) || plants[0];
  const plantB = plants.find((p) => p.id === plantBId) || plants[1];

  return (
    <div className="react-comparator">
      <div className="comparator-header">
        <h3>Interactive Plant Comparison Tool (React.js)</h3>
        <p>Compare two species across soil needs, sunlight, maintenance, and seasonal performance.</p>
      </div>

      <div className="comparator-select-row">
        <div>
          <label>First Plant:</label>
          <select value={plantAId} onChange={(e) => setPlantAId(e.target.value)} className="form-control">
            {plants.map((p) => (
              <option key={p.id} value={p.id}>{p.name} (Rs. {p.price})</option>
            ))}
          </select>
        </div>

        <div>
          <label>Second Plant:</label>
          <select value={plantBId} onChange={(e) => setPlantBId(e.target.value)} className="form-control">
            {plants.map((p) => (
              <option key={p.id} value={p.id}>{p.name} (Rs. {p.price})</option>
            ))}
          </select>
        </div>
      </div>

      {plantA && plantB && (
        <div className="comparator-table-wrapper">
          <table className="comparator-table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>{plantA.name}</th>
                <th>{plantB.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Category</td>
                <td>{plantA.category}</td>
                <td>{plantB.category}</td>
              </tr>
              <tr>
                <td>Current Price</td>
                <td>Rs. {plantA.price}</td>
                <td>Rs. {plantB.price}</td>
              </tr>
              <tr>
                <td>Sunlight / Environment</td>
                <td>{plantA.environment}</td>
                <td>{plantB.environment}</td>
              </tr>
              <tr>
                <td>Soil Type</td>
                <td>{plantA.soilType}</td>
                <td>{plantB.soilType}</td>
              </tr>
              <tr>
                <td>Watering Regimen</td>
                <td>{plantA.watering}</td>
                <td>{plantB.watering}</td>
              </tr>
              <tr>
                <td>Seasonal Care</td>
                <td>{plantA.seasonal}</td>
                <td>{plantB.seasonal}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
