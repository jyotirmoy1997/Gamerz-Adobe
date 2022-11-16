import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../components/categories-preview/categories-preview.component";
import Category from "../../components/category/category.component";
import { setCategoriesMap } from "../../store/category/category-action";
import { getCollectionandDocuments } from "../../utils/firebase/firebase.utils";
import { useDispatch } from "react-redux";

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionandDocuments()
            dispatch(setCategoriesMap(categoryMap))
        }
        getCategoriesMap();
    }, [])
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;