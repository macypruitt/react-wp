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
              return (<div key={index}>
                  {item.id}
                  <img className="album-img" src={item.imageUrl}></img>
              </div>
              )

          })
      }

    return (
     <div>
         sdfsdfsd
         {albumsArray}
     </div>
    )
  }
}