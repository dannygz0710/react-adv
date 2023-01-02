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
    //   setShoppingCart( oldShoppingCart => {

    //     const newShoppingCart = { ...oldShoppingCart };

    //     count
    //     ? newShoppingCart[product.id] = { ...product, count  }
    //     : delete newShoppingCart[product.id];

    //     return newShoppingCart;
    // });

    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCar = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if ( Math.max( productInCart.count + count, 0 ) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return { ...rest };

      // if( count === 0 ) {
      //     const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
      //     return rest;
      // }

      // return {
      //     ...oldShoppingCart,
      //     [ product.id ]: { ...product, count }
      // }
    });
  };
  return {
    products,
    shoppingCart,
    onProductCountChange,
  };
};
