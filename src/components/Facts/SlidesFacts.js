import React from 'react';

const SlidesFacts = ({item}) => {
    return (
        <div className="facts-slide" >
            <img src={item.imgUrl} alt="slide image" />
            <p className="facts-slide-desc">{item.desc}</p>
        </div>
    );
};


export default SlidesFacts;
