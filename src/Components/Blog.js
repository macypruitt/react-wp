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
        
            let postsDetails = this.state.posts;
            

            let contentMapped = postsDetails.map((item, index) => {
                return ( 
                    <BlogPost item={item}/>  
                )
             })

        return (
            <div className="blogContainer">
                {contentMapped}
            </div>
        )
    }
}