import './category-item.styles.css'
import { Link } from 'react-router-dom';

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
            <p><Link to={`/shop/${title.toLowerCase()}`}>Shop Now</Link></p>
          </div>
        </div>
    )
}

export default DirectoryItem;