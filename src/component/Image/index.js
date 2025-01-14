import "./style.css"
import image from './image/image.png'

function Image() {
    return (
        <>
            <div className="container">
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
                <div className="box">
                    <img src={image} alt="imagae" />
                </div>
            </div>

        </>
    );
}

export default Image;