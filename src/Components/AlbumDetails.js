import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import '../App.css'

class AlbumDetails extends Component {
 
    
    render(){

        let iFrame;

        if(this.props.store.activeAlbumReducer.item != undefined){
            iFrame = this.props.store.activeAlbumReducer.item.bandcampLink;
        }


    return (
        <div className="album-details-container">
            <div className="bandcamp-player">
                 {ReactHtmlParser(iFrame)}
            </div>
        </div>
    )
  }
}

const mapStoreToProps = (store) => ({
  store
})

export default connect(mapStoreToProps)(AlbumDetails);