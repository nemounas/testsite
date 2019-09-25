import React from 'react';
import p from './post.module.css'

const Post = (props) => {
    console.log(props.message);
    return (

        <div className={p.post}>
            <div>
                <img className={p.img_post} alt="pic" src="https://banner2.kisspng.com/20180205/uow/kisspng-yellow-hair-chicken-little-yellow-chicken-vector-cute-little-yellow-chicken-5a79291ced0ff3.967813141517889820971.jpg"></img>
            </div>
            <div>
                {props.message} 
           </div>
           <div>
                {props.like} 
           </div>
        </div>
    );
}

export default Post;