import React from 'react';

import Layout from './Components/Layout';

export default class App extends React.Component {
  state = {
    posts: []
  }

 

  render() {

    
    return (

      <div>
        <Layout/>

      </div>
     
    )
  }
}