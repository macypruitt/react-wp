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
                  ljk
                    {/* <img src={dstroySignature} className="logo" onClick={this.clickLogo}></img> */}
                </div>

                <div className="header-nav">
                    <div className="header-icons">
                        <img src={emailIcon} className="icon"></img>
                        <img src={fbIcon} className="icon"></img>
                        <img src={igIcon} className="icon"></img>
                        <img src={scIcon} className="icon"></img>
                        <img src={twitIcon} className="icon"></img>
                        <img src={ytIcon} className="icon"></img>
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