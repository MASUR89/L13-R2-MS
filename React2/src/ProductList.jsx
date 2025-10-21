import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      name: "iPhone 15",
      price: 999,
      image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-select-2023?wid=940&hei=1112&fmt=png-alpha&.v=1692912413083",
      description: "The latest Apple smartphone with A16 Bionic chip."
    },
    {
      name: "Honor",
      price: 450,
      image: "https://www.hihonor.com/content/dam/honor/gb/product-list/phone/honor-90/honor-90-black.png",
      description: "Stylish and powerful smartphone from Honor."
    },
    {
      name: "Samsung Galaxy Watch",
      price: 299,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-r965fzeains/gallery/in-galaxy-watch6-r965-sm-r965fzeains-537114351?$684_547_PNG$",
      description: "Smartwatch for fitness and productivity."
    }
  ];

  return (
    <div style={{
      display: "flex",
      gap: "24px",
      justifyContent: "center",
      flexWrap: "wrap",
      padding: "32px"
    }}>
      {products.map((product, index) => (
        <ProductCard
          key={index}
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
