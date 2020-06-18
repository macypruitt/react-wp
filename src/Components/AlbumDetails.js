import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import '../App.css'

class AlbumDetails extends Component {
 
    render(){
        let bandcampPlayer;
        let albumDescription;
        
        if(this.props.activeAlbum){
            bandcampPlayer = this.props.activeAlbum.bandcampLink;
            albumDescription = this.props.activeAlbum.blurb;
        }

    return (
        <div className="album-details-container">

            { ReactHtmlParser(albumDescription) }

            <div className="bandcamp-player">
                 { ReactHtmlParser(bandcampPlayer) }
            </div>

        </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return { activeAlbum: state.activeAlbumReducer.item }
}

export default connect(mapStoreToProps)(AlbumDetails);