import image from './image/image.png'
import "./style.css"

function Card() {
    return (
        <>
            <div className="container">
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>
                <div className="product-card">
                    <img className='product-image' src={image} alt="" />
                    <span className='product-name'>Product name</span>
                    <button className='button-add-to-cart'>Add to cart</button>
                </div>

            </div>
        </>
    );
}

export default Card;