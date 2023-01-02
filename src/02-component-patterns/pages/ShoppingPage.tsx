import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";



export const ShoppingPage = () => {
  
  const { onProductCountChange, shoppingCart, products } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            className="bg-dark text-white"
            key={ product.id }
            product={ product }
            onChange={ onProductCountChange}
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white  text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        { Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            className="bg-dark"
            style={{ width: "100px" }}
            product={ product }
            onChange={ onProductCountChange }
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
