import React, { Component } from 'react';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import Discography from './Discography';
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

import '../App.css'

class AlbumDetails extends Component {
 
    
    render(){

    console.log('reducer deets', this.props.store.activeAlbumReducer)
    let iFrame;

    if(this.props.store.activeAlbumReducer.item != undefined){
        console.log(`haaay`, this.props.store.activeAlbumReducer.item)
        iFrame = this.props.store.activeAlbumReducer.item.bandcampLink;
    }


    return (
        <div className="album-details-container">
         {ReactHtmlParser(iFrame)}
        </div>
    )
  }
}

const mapStoreToProps = (store) => ({
  store
})

export default connect(mapStoreToProps)(AlbumDetails);