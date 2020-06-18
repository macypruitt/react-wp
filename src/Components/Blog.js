import React from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';

export default class Blog extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        // Get posts from Wordpress API (i.e. https://yoursite.com/blog/wp-json/wp/v2/posts)
        axios.get(process.env.WORDPRESS_API_URL)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
        })
    }

    render(){
        
        return (
            <div className="blogContainer">
                
                {this.state.posts.map((item, index) => {
                    return <BlogPost item={item}/>  
                })}

            </div>
        )
    }
}