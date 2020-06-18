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

      return (
        <div className="discog-container">
            
            <div className="discog-albums">
                <br/>

                { albums.map((item, index) => {
                    return (
                        <div className="album-container" key={index}>
                        
                            <img className="album-img" data={item}
                                src={item.imageUrl}
                                onClick={(event)=>this.clickAlbum(event, item)}>
                            </img>

                            <br/>
                                {item.name}
                            <br/>
                            
                        </div>
                    )
                }) 
                }
          
            </div>
        </div>
      
    )
  }
}

const mapStoreToProps = (store) => ({
  store
})


export default connect(mapStoreToProps)(Discography);