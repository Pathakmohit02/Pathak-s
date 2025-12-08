import React from 'react';
import './MentalHealth.css';

const MentalHealth = () => {
  return (
    <div className="mental-health-section">
      <div className="mental-health-header">
        
        <h2>Products</h2>
        <p>Fertilizers are products used to improve soil quality and provide essential nutrients to plants. They help in better growth, higher yield, and overall plant health.</p>
      </div>
      <div className="mental-health-cards">
        <div className="mental-health-card">
          <img src="/urea.jpg" alt="Mood Disorders" className="card-image" />
          <h3>UREA (46% Nitrogen)</h3>
          <p>Urea is the most widely used nitrogen fertilizer,Helps plants grow faster by improving leaf formation and overall greenery,Best for crops like wheat, rice, maize, sugarcane, and vegetables,Should be used in proper moisture for best results.</p>
        </div>
        <div className="mental-health-card">
          <img src="/DAP.jpeg" alt="Eating Disorders" className="card-image" />
          <h3>DAP – Diammonium Phosphate (18-46-0)</h3>
          <p>Contains 18% Nitrogen and 46% Phosphorus,Used at the beginning of the crop cycle for strong root development,Helps in seed germination and early plant growth,Strong jaden (roots) and early plant strength.</p>
        </div>
         <div className="mental-health-card">
          <img src="/NPK.webp" alt="Eating Disorders" className="card-image" />
          <h3>NPK Fertilizer</h3>
          <p>NPK stands for Nitrogen (N), Phosphorus (P), and Potassium (K).
Available in different ratios like 12-32-16, 10-26-26, 19-19-19, etc,N → Leaf growth,P → Root and flower development,,K → Disease resistance & fruit quality</p>
        </div>
         <div className="mental-health-card">
          <img src="/MOP.jpg" alt="Eating Disorders" className="card-image" />
          <h3>MOP – Muriate of Potash (60% Potassium)</h3>
          <p>Contains high amount of Potassium (K2O),Increases crop resistance against diseases, drought, and stress,Improves fruit size, color, and taste,Best for: Sugarcane, potatoes, bananas, fruits & vegetables.</p>
        </div>
         <div className="mental-health-card">
          <img src="/super.jpeg" alt="Eating Disorders" className="card-image" />
          <h3>SUPER – Single Super Phosphate (SSP 16% P2O5)</h3>
          <p>Contains Phosphorus, Sulphur, and Calcium,Boosts root growth, improves soil fertility, and supports flowering,Helpful for oilseeds like mustard, soybean, and groundnut,Benefit: Phool aur phal me sudhar + soil fertility increase.</p>
        </div>
        <div className="mental-health-card">
          <img src="/calcium.jpeg" alt="Anxiety Disorders" className="card-image" />
          <h3>Calcium Fertilizer</h3>
          <p>Calcium strengthens plant cell walls,Prevents blossom-end rot (common in tomatoes & chilies),Improves fruit firmness, shelf life, and overall plant health,Helps neutralize soil acidity.
            Benefit: Majboot plant, achhi quality ke phal aur sabziyan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
