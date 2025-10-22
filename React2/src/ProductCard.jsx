import { useState } from "react";

function ProductCard({ name, price, image, description }) {

  return (
    <div
        style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        textAlign: "center",
        width: "250px",
        backgroundColor: "#fff",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <h3>{name}</h3>
      <p style={{ color: "gray", minHeight: "40px" }}>{description}</p>
      <h4 style={{ color: "#165fadff" }}>${price}</h4>
    </div>
  );
}

export default ProductCard;
