import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  


  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      
       
          <ProductCard
            className="bg-dark text-white"
            key={ product.id }
            product={ product }
            initialValues={{
              count:2,
              maxCount: 12
            }}
           
          >

            {
              ({ reset, count, maxCount, increaseBy, isMaxCountReached, }) => (
                <>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white  text-bold" />
                <ProductButtons className="custom-buttons" /> 
                 <button onClick={ reset }>Reset</button>
                 <button onClick={ ()=> increaseBy(-2) }>-2</button>
                 {
                   !isMaxCountReached && <button onClick={ ()=> increaseBy(+2) }>+2</button>
                 }
                 
                 <span>{ count } - { maxCount }</span>

                </>
                
                )
          
            }
          </ProductCard>
    </div>
  );
};
