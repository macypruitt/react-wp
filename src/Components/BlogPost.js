import React from 'react';


export default class Layout extends React.Component {
  state = {
    posts: []
  }
    render(){

        let post;
        let postTitle;
        let postContent;

        if(this.props.postData != null) {
            post = this.props.postData;
            postTitle = post.title.rendered;
            
            postContent = post.excerpt.rendered;
        }
        
        const blogPostStyles = {
            border: 'solid 1px'
        }
        
    return (
     <div styles={blogPostStyles}>
         {postTitle}

         <br/>

         {`${postContent}` }
         
     </div>
    )
  }
}