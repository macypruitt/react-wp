import React, {Component} from 'react';
import dstroySignature from '../images/dstroysig.png';
import {connect} from 'react-redux';
import '../App.css'

class Header extends Component {

    clickLogo= () => {
      this.props.dispatch({
        type: 'SET_ALBUM',
        payload: {
          view: 'blog'
        }
    })
    } 
   
    render(){

      

    return (
            <div className="page-header">
              <div className="header-contents">
                <img src={dstroySignature} className="logo" onClick={this.clickLogo}></img>
                
              </div>

              <div className="header-nav">
              <span className="header-text"></span>
              </div>
              
            </div>
        )
  }
}

const mapStoreToProps = (store) => ({
  store
})

export default connect(mapStoreToProps)(Header);