import { createContext, ReactElement, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';





export interface Props {
    product: Product;
    children?: ReactElement | ReactElement [];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs)=> void;
    value?: number
 }

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {

  const { counter, increaseBy } = useProduct({ onChange, product, value, });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div 
      className={ `${ styles.productCard } ${ className }` }
      style={ style }
      >
        { children }

        {/* <ProductImage img={ product.img } />

        <ProducTitle title={ product.title }/>

        <ProductButtons  counter={ counter } increaseBy={ increaseBy }/> */}
      </div>
    </Provider>
  );
};
