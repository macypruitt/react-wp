import React from 'react';
import dstroySignature from '../images/dstroysig.png';


export default class Header extends React.Component {
  state = {
    posts: []
  }

   
    render(){

        let headerStyle = {
            color: 'green',
            width: '100%',
            height: '110px',
            margin: '0px',
            padding: '0px',
            background: 'black',
            padding: '5px',
        }

    return (
            <div className="header" style={headerStyle}>
              <div>
                <img src={dstroySignature} style={{height: '100px'}}></img>
              </div>
              
            </div>
        )
  }
}