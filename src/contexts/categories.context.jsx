import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data/shop-data.js'
import { getCollectionandDocuments, addCollectionandDocuments } from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap : {}
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // Uploading the Data to FireStore
    // useEffect(() => {
    //     addCollectionandDocuments('categories', SHOP_DATA)
    // }, [])

    // Fetching the data from firestore database
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionandDocuments()
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])
    const value = {categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}