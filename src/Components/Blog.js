import React from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';

export default class Blog extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        ////getting posts from Wordpress API, storing in state
        axios.get(`https://lightflecks.com/dstroy/wp-json/wp/v2/posts`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
            console.log('res', res.data)
        })
    }

    render(){

        let renderThis = 'yay';
        let contentMapped;
        let postsDetails;

         if( this.state.posts.length > 0){
            postsDetails = this.state.posts

             contentMapped = postsDetails.map((item, index) => {
                return ( 
                   <div>              
                    <div>{item.title.rendered} </div>
                    <div>{item.content.rendered} </div>
                    <div>{item.date} </div>
                   </div>     
                 )
             })
        }
        console.log('contennnnnt is', contentMapped);
        console.log('postsDetails is', postsDetails);

        const blogStyles = {
           
        }

        return (
            <div className="blogContainer" style={blogStyles}>
                {contentMapped}
            </div>
        )
    }
}