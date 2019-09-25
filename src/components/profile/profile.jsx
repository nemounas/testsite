import React from 'react';
import c from './profile.module.css'
import Post from './posts/post'
import SendPost from './sendposts/sendposts'




const Content = (props) => {

      let PostMessage = [
          {id:'1', textMes:'Hi, I am here', likecount:23},
          {id:'2', textMes:'First Post', likecount:3},
          {id:'3', textMes:'hi'}
      ]

      let CurrentPostMessage = PostMessage
      .map(posts => <Post message={posts.textMes} like={posts.likecount} />)

    return (
        <div className={c.content}>
            <div>
                <img className={c.img_content} alt="pic" src='#'></img>
            </div>
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