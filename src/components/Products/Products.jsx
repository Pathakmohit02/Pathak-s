import React from 'react';
import './Products.css';

const Products = () => {
  return (
    <div className="Products-section">
      <div className="Products-header">
        
        <h2>Products</h2>
        <p>Fertilizers are products used to improve soil quality and provide essential nutrients to plants. They help in better growth, higher yield, and overall plant health.</p>
      </div>
      <div className="Products-cards">
        <div className="Products-card">
          <img src="/regent.jpeg" alt="Mood Disorders" className="card-image" />
          <h3>Regent</h3>
          <p>“Regent” products use Fipronil — a phenylpyrazole insecticide,Its main use is to control insect pests. For example: stem borer, leaf folder in rice; early shoot borer, termites in sugar-cane; other chewing or destructive pests,Fipronil disrupts insect nervous systems — it interferes with the GABA-regulated chloride channels in insects’ nerve cells, causing hyperexcitation, paralysis and eventual death</p>
        </div>
        <div className="Products-card">
          <img src="/dharti.webp" alt="Eating Disorders" className="card-image" />
          <h3>Dharti Gold Zyme</h3>
          <p>Dharti Gold Zyme is marketed as a “Plant Growth Promoter” / Bio-fertilizer / organic-manure-type product, not a single-nutrient chemical fertilizer,The company describes Zyme as high-purity granules / “zyme” (organic in nature) — meant to improve soil health and support plant growth</p>
        </div>
         <div className="Products-card">
          <img src="/mono.png" alt="Eating Disorders" className="card-image" />
          <h3>Mono Zinc</h3>
          <p>Mono Zinc is a micronutrient fertilizer whose main job is to supply zinc (Zn) — often in the form of zinc sulphate monohydrate,Typically it contains around 33% zinc (Zn) and in many blends also some sulphur (S) (e.g. ~15%) which further supports plant nutrition,It’s considered a “single-nutrient” (micronutrient) khad, not a full NPK or macronutrient fertilizer.</p>
        </div>
         <div className="Products-card">
          <img src="/kala.jpg" alt="Eating Disorders" className="card-image" />
          <h3>Kala Sona</h3>
          <p>Kala Sona — in many contexts — refers to a humic-acid based soil conditioner / organic-manure / soil-enhancer rather than a standard NPK fertilizer,The product is often described as having roughly 95 % humic acid (or high humic-acid content), plus “minor minerals, gypsum and clays,It’s available in powder or granular form (or sometimes “humic acid powder / granules”) suitable for mixing into soil or applying via fertigation / drip / foliar spray.</p>
        </div>
         <div className="Products-card">
          <img src="/humic.jpg" alt="Eating Disorders" className="card-image" />
          <h3>Humic Gold</h3>
          <p> Humic Gold is basically a humic acid / humus-derived soil conditioner / bio-stimulant — not a straight NPK fertilizer supplying large amounts of nitrogen/phosphorus/potassium. Its core ingredient — humic acid — is an organic matter derived from decayed plant/animal material (or from natural lignite/leonardite), rich in humus,Some variants of Humic Gold also include fulvic acids, amino acids, and other organic-matter complexes for broader soil and plant benefits.</p>
        </div>
        <div className="Products-card">
          <img src="/fertis.jpeg" alt="Anxiety Disorders" className="card-image" />
          <h3>Sulphur</h3>
          <p>Sulphur is an essential plant nutrient — often considered the “4th major nutrient” after N (nitrogen), P (phosphorus), and K (potassium),Sulphur is required for the formation of proteins, amino acids (like cysteine and methionine), enzymes, and also helps in chlorophyll formation, photosynthesis, oil synthesis in oilseeds, and general healthy growth,Adequate sulphur improves crop yield and quality — for example, better protein content in grains, more oil content in oilseeds, good seed/flower formation, and more robust, healthy plants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
