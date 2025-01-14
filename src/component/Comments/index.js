import image from './image/image.png'
import './style.css'
function Comment() {
    return (
        <>
            <div className='container'>
                <div className="list-comment">
                    <div className="item-comment">
                        <div className='left-comment' >
                            <img src={image} alt=""></img>
                        </div>
                        <div className='right-comment'>
                            <div className='name'>Phuc Bui</div>
                            <div className='comment'>Com adasda sádád dasdaas dadsaddaddment</div>
                            <button>Trả lời</button>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className='left-comment' >
                            <img src={image} alt=""></img>
                        </div>
                        <div className='right-comment'>
                            <div className='name'>Phuc Bui</div>
                            <div className='comment'>Comment</div>
                            <button>Trả lời</button>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className='left-comment' >
                            <img src={image} alt=""></img>
                        </div>
                        <div className='right-comment'>
                            <div className='name'>Phuc Bui</div>
                            <div className='comment'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                            <button>Trả lời</button>
                        </div>
                    </div>
                    <div className="item-comment">
                        <div className='left-comment' >
                            <img src={image} alt=""></img>
                        </div>
                        <div className='right-comment'>
                            <div className='name'>Phuc Bui</div>
                            <div className='comment'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </div>
                            <button>Trả lời</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;