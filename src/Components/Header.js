import React, {Component} from 'react';
import dstroySignature from '../images/dstroysig.png';
import {connect} from 'react-redux';
import '../App.css'
import emailIcon from '../images/wt_icon_email.png';
import fbIcon from '../images/wt_icon_fb.png';
import igIcon from '../images/wt_icon_ig.png';
import scIcon from '../images/wt_icon_sc.png';
import twitIcon from '../images/wt_icon_twit.png';
import ytIcon from '../images/wt_icon_yt.png';

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
                    <div className="header-icons">
                        
                        {/* <a href="https://www.facebook.com/LeonardDstroyMusic/"><img src={fbIcon} className="icon"></img> </a> */}
                        <a href="https://www.instagram.com/leonarddstroy/"><img src={igIcon} className="icon"></img></a>
                        <a href="https://soundcloud.com/leonarddstroymusic"><img src={scIcon} className="icon"></img></a>
                        <a href="https://twitter.com/leonarddstroy?lang=en"><img src={twitIcon} className="icon"></img></a>
                        <a href="mailto:leonarddstroy@gmail.com"><img src={emailIcon} className="icon"></img></a>
                        {/* <img src={ytIcon} className="icon"></img> */}
                    </div>

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