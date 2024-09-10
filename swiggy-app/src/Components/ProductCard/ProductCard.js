import cartIcon from "../../assets/images/cart-icon.png"
import "./ProductCard.css"

const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`

const ProductCard = (resData) => {
    return (
        <>
            <div className="productCard">
                <div>
                    <img src={IMG_CDN_URL + resData?.restaurant?.cloudinaryImageId} alt="placeholder" className="productCard-img" />
                </div>
                <div className="priceContainer">
                    <div className="productCost">{resData?.restaurant?.costForTwo}</div>
                    <div className="cartIcon"><img src={cartIcon} alt="cartIcon" className="cartIcon-img" /></div>
                </div>
                <div className="titleCard">
                <div>
                    {resData?.restaurant?.name.slice(0,20) + "..."}
                </div>
                <div className="subTitle">{resData?.restaurant?.areaName}</div>

                <div className="productRating">
                    {[1, 2, 3, 4, 5].map((star) => {
                        return (
                            <span
                                className='start'
                                style={{
                                    cursor: 'pointer',
                                    color: resData?.restaurant?.avgRating >= star ? 'black' : 'gray',
                                    fontSize: `15px`,

                                }}

                            >
                                {' '}
                                ★{' '}
                            </span>
                        )
                    })}
                </div>


            </div>
            </div>
            
        </>
    )
}

export default ProductCard;