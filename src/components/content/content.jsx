import React from 'react';
import c from './content.module.css'
import Post from '../posts/post.jsx'
import Bar from '../../img/Nature-Transparent-Grass-PNG.png';

const Content = () => {
    return (
    <div className={c.content}>
        <div>
       <img className={c.img_content} alt="pic" src={Bar}></img>
       </div>
    <textarea />
     <button>Послать</button><button>Удалить</button>
       <Post message="Hi, I am here" like="15" />
       <Post message="First Post" like="20"/>
    </div> 
    );
}

export default Content;