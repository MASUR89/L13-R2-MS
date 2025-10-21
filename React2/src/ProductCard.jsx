import { useState } from "react";

function ProductCard({ name, price, image, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        textAlign: "center",
        width: "250px",
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        boxShadow: isHovered
          ? "0 8px 16px rgba(0, 0, 0, 0.2)"
          : "0 2px 6px rgba(0, 0, 0, 0.1)",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)"
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "8px" }}
      />
      <h3>{name}</h3>
      <p style={{ color: "gray" }}>{description}</p>
      <h4 style={{ color: "#007bff" }}>${price}</h4>
    </div>
  );
}

export default ProductCard;