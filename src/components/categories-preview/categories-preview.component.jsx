import { useContext, Fragment } from "react";
import CategoryPreview from "../category-preview/category-preview.component";
import './categories-preview.styles.css'
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category-selection";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    // const {categoriesMap} = useContext(CategoriesContext);
    return(
        <div className="shop-container" >
            {
                Object.keys(categoriesMap).map((title) => (<CategoryPreview title={title} products={categoriesMap[title]} />))
            }
        </div>
       
    )
}

export default CategoriesPreview;