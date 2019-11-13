import React, { Component } from 'react';
import albums from '../DiscogData/albums';
import {connect} from 'react-redux';

 class Discography extends Component {

    clickAlbum = (event, item) => {
        this.props.dispatch({
            type: 'SET_ALBUM',
            payload: {
              view: 'album',
              item
            }
        })
    }
  
  

    render(){

      console.log(albums)
      let albumsArray;

      if(albums){

          albumsArray = albums.map((item, index) => {
              return (
                  
                  <div className="album-container" key={index}>
                  
                      <img className="album-img" data={item}
                        src={item.imageUrl}
                        onClick={(event)=>this.clickAlbum(event, item)}></img>

                      <br></br>
                      {item.name}
                      <br></br>
                      
                  </div>
              )

          })
      }

    return (
      <div className="discog-container">
          
          <div className="discog-albums">
         <br/>
         {albumsArray}
         
     </div>
      </div>
    
    )
  }
}

const mapStoreToProps = (store) => ({
  store
})


export default connect(mapStoreToProps)(Discography);