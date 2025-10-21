import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    { name: "iPhone 17 Pro Max", price: 1399, image: "https://kontakt.ge/media/catalog/product/cache/a404967cc40694dc557cd869288440a4/t/m/tm-dg-sbp-1105-sm-26817.webp", description: "The latest Apple smartphone with e-sim." },
    { name: "Honor X9c", price: 399, image: "https://i.ebayimg.com/images/g/pyIAAeSw2txoysj-/s-l1600.webp", description: "Stylish and powerful smartphone from Honor." },
    { name: "Samsung Galaxy Watch", price: 299, image: "https://i.ebayimg.com/images/g/QvUAAOSwlsVhFmUH/s-l960.webp", description: "Smartwatch for fitness and productivity." }
  ];

  return (
    <div style={{
      display: "flex",
      gap: "24px",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "32px"
    }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default ProductList;