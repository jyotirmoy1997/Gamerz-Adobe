import { useContext, useEffect, useState, Fragment  } from "react"
import { useParams } from "react-router-dom"
import { CategoriesContext } from "../../contexts/categories.context"
import ProductCard from "../product-card/product-card.component"
import './category.styles.css'

const Category = () => {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
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