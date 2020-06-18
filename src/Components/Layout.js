import React, { Component } from 'react';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import Discography from './Discography';
import AlbumDetails from './AlbumDetails';
import {connect} from 'react-redux';

import '../App.css'

class Layout extends Component {
 
    componentDidMount(){
    
          this.props.dispatch({
              type: 'SET_ALBUM',
              payload: {
                view: 'blog'
              }
        })
    }
    render(){

        let leftSideContent = <Blog/>

        if(this.props.store.activeAlbumReducer.view != 'blog'){
          leftSideContent = <AlbumDetails/>
        }

    return (
        <div className="layout-container">
            <Header/>

        <div className="main-div">
            <div className="main-left">
                {leftSideContent}
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