import './product-card.component.css'



const ProductCard = ({product}) => {
    const {name, imageURL, price} = product
    console.log(imageURL)
    return(
        <div className="product-card-container" >
            <div className='product-card-box'>
                <img src={imageURL} alt="" srcset="" />
                <button className='el7'>Add to Cart</button>
            </div>
            <div className="product-card-footer">
                <span>
                    {name}
                </span>
                <span>
                    {price}
                </span>
            </div>
        </div>
    )
}

export default ProductCard