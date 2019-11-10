import React from 'react';

import axios from 'axios';

export default class App extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://lightflecks.com/dstroy/wp-json/wp/v2/posts?_fields=author,id,excerpt,title,link`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {

    let title = 'yay';
    if( this.state.posts.length > 0){
      title = this.state.posts[0].title.rendered;
    }


    console.log('title is', title);
    return (
      <ul>
        <p>{title}</p>
      </ul>
    )
  }
}