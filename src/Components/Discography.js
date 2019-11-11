import React from 'react';
import albums from '../DiscogData/albums';

export default class Discography extends React.Component {
  state = {
    posts: []
  }
    render(){

      console.log(albums)
      let albumsArray;

      if(albums){

          albumsArray = albums.map((item, index) => {
              return (<div className="album-container" key={index}>
                  
                  <img className="album-img" src={item.imageUrl}></img>
                  <br></br>
                  {item.name}
                  <br></br>
              </div>
              )

          })
      }

    return (
     <div className="discog-container">
         <h3>RELEASES</h3>
         {albumsArray}
         
     </div>
    )
  }
}