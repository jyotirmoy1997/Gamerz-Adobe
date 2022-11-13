import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../category-preview/category-preview.component";
import './categories-preview.styles.css'

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return(
        <div className="shop-container" >
            {
                Object.keys(categoriesMap).map((title) => (<CategoryPreview title={title} products={categoriesMap[title]} />))
            }
        </div>
       
    )
}

export default CategoriesPreview;