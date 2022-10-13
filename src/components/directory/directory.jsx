import CategoryItem from "../category-item/category-item-component";
import './directory.css'

const Directory = ({categories}) => {
    return(
    <div className="directory">
        {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
        ))}
    </div>
    )
}

export default Directory;