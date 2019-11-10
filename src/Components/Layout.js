import React from 'react';
import Header from './Header';
import Blog from './Blog';

export default class Layout extends React.Component {
  state = {
    posts: []
  }
    render(){
    return (
     <div>
       <Header/>
       <Blog />
     </div>
    )
  }
}