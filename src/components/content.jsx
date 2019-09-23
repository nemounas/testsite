import React from 'react';
import c from './content.module.css'

const Content = () => {
    return (
    <div className={c.content}>
       <img className={c.img_content} alt="pic" src="https://w-dog.ru/wallpapers/1/26/512974281437448.jpg"></img>
    </div> 
    );
}

export default Content;