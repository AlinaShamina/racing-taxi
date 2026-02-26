import React from "react";
import "../index.css";
import etsyData from "../data/etsy.json";

export default function Listing() {
  return (
    <div className="container">
      <div className="product-grid">
        {etsyData.map((item) => {
          let stockClass = "";
          if (item.quantity <= 5) stockClass = "stock-low";
          else if (item.quantity <= 20) stockClass = "stock-medium";
          else stockClass = "stock-high";

          return (
            <div className="product-card" key={item.listing_id}>
              {item.is_digital && <div className="digital-badge">Digital</div>}

              <img
                src={item.MainImage?.url_570xN || "https://via.placeholder.com/240"}
                alt={item.title}
                className="product-image"
              />

              <div className="product-info">
                <div className="product-title">{item.title}</div>
                <div className="price-container">
                  <div className="product-price">
                    {item.currency_code === "USD" ? "$" :
                     item.currency_code === "EUR" ? "€" :
                     item.currency_code}
                    {item.price}
                  </div>
                  <div className={`stock-badge ${stockClass}`}>
                    {item.quantity} left
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
