import React from 'react';



export default class Header extends React.Component {
  state = {
    posts: []
  }

   
    render(){

        let headerStyle = {
            color: 'green',
            width: '100%',
            height: '30px',
            // ['margin-bottom']: '0px',
            padding: '0px',
            float: 'bottom',
            background: 'black',
            position:'absolute',
            bottom:'0',
           
            height:'60px',
        }

    return (
            <div className="header" style={headerStyle}>
            </div>
        )
  }
}