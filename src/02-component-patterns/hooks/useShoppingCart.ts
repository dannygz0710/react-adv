import { useState } from "react";
import { Product, ProductInCar } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCar;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    
    setShoppingCart((oldShoppingCart) => {
      
      if( count === 0 ) {
        const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
        return rest;
      }
      
      return {
        ...oldShoppingCart,
        [ product.id ]: { ...product, count }
      }
    });
  };
  
  //   setShoppingCart( oldShoppingCart => {

  //     const newShoppingCart = { ...oldShoppingCart };

  //     count
  //     ? newShoppingCart[product.id] = { ...product, count  }
  //     : delete newShoppingCart[product.id];

  //     return newShoppingCart;
  // });

  

  return {
    products,
    shoppingCart,
    onProductCountChange,
  };
};
