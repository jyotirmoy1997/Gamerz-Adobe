import './category-item.styles.css'

const DirectoryItem = ({category}) => {
    let {title, image} = category;
    return (
        <div className="directory-container" style={
            {
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover'
            }
          }>
          <div className="directory-body-container">
            <h2>{title.toUpperCase()}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default DirectoryItem;