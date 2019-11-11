import React from 'react';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import Discography from './Discography';

import '../App.css'

export default class Layout extends React.Component {
  state = {
    posts: []
  }
    render(){
    return (
        <div className="layout-container">
            <Header/>

        <div className="main-div">
            <div className="main-left">
                <Blog/> 
            </div>

            <div className="main-right">
                <Discography />
            </div>
        </div>
      


       <Footer />
     </div>
    )
  }
}