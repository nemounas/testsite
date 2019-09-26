import React from 'react';
import c from './profile.module.css'
import Post from './posts/post'
import SendPost from './sendposts/sendposts'




const Content = (props) => {

      let CurrentPostMessage = props.mes.PostMessage
      .map(posts => <Post message={posts.textMes} like={posts.likecount} />)

    return (
        <div className={c.profileWraper}>
            {/* <div>
                <img className={c.img_content} alt="pic" src='#'></img>
            </div> */}
            <div>
            <SendPost />
            </div> 
            <div>
                {CurrentPostMessage}
            </div>
            
        </div>
    );
}

export default Content;