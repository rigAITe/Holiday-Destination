import React from 'react'

const VisMis = ({ data : { title, content, image, alt } }) => {

    return(
        <div className="content clearfix">

            <div className='photo-container'>
                <p>{title}</p>
                <div className="photo slides">
                    <img src={image} alt={alt}/>
                    <div className="photo-overlay">
                        <p>{content}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VisMis