import React, { Component } from 'react';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import Discography from './Discography';
import {connect} from 'react-redux';

import '../App.css'

class Layout extends Component {
  state = {
    posts: []
  }

    componentDidMount(){
      console.log(`yaay`);
      this.props.dispatch({
        type: 'SET_ALBUM',
        payload: {
          yeah: 'boy'
        }
      })
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

const mapStoreToProps = (store) => ({
  store
})

export default connect(mapStoreToProps)(Layout);