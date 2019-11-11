import React from 'react';


export default class BlogPost extends React.Component {
  state = {
    posts: []
  }
    render(){
        
    return (
     <div className="blog-post">            
        <h2>{this.props.item.title.rendered} </h2>
        <div dangerouslySetInnerHTML={{__html: this.props.item.content.rendered}}></div>
        <div>{this.props.item.date} </div> 
     </div>
    )
  }
}