import './category-item.styles.css'

const CategoryItem = ({category}) => {
    let {title, image} = category;
    return (
        <div className="category-container" style={
            {
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover'
            }
          }>
          {/* <img/> */}
          <div className="category-body-container">
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem;