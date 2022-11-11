import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data/shop-data";
import { addCollectionandDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    products : []
})

export const ProductProvider = ({children}) => {
    const [products, setProduct] = useState(SHOP_DATA);

    // Uploading the Data to FireStore
    // useEffect(() => {
    //     addCollectionandDocuments('categories', SHOP_DATA)
    // }, [])
    const value = {products}
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}