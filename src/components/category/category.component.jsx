import { useEffect, useState, Fragment  } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../product-card/product-card.component"
import './category.styles.css'
import { selectCategoriesMap } from "../../store/category/category-selection"
import { useSelector } from "react-redux"


const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    console.log(category)

    return(
        <Fragment>
            <h1 className="category-title">{category.toUpperCase()}</h1>
            <div className="category-container"> 
                {
                    products && products.map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </div>
        </Fragment>
        
    )
}

export default Category