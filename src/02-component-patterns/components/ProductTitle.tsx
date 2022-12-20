import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';


export interface Props {
  className?: string;
  title?: { title: string };
  style?: CSSProperties;
}



export const ProductTitle = ({  className, title, style }: Props  ) => {

    const { product } = useContext(ProductContext)
  
    return(
      <span className={ `${ styles.productDescription } ${ className }` }  style={ style }>{ product.title ? product.title : title }</span>
      )
  };
  