import { createContext, useState } from "react";
import PRODUCTS from '../shop-data/processors-data.json'

export const ProductsContext = createContext({
    products : []
})

export const ProductProvider = ({children}) => {
    const [products, setProduct] = useState(PRODUCTS);
    const value = {products}
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}