import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import '../App.css'
import albums from '../DiscogData/albums';

class AlbumDetails extends Component {
 
    
    render(){

        let iFrame;

        let albumDescription;
        
        if(this.props.store.activeAlbumReducer.item != undefined){
            iFrame = this.props.store.activeAlbumReducer.item.bandcampLink;
            albumDescription = this.props.store.activeAlbumReducer.item.blurb;

        }


    return (
        <div className="album-details-container">
            {ReactHtmlParser(albumDescription)}
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