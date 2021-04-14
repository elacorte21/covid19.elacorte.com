import React from 'react';
import './App.css';

//fetch("https://covid19.mathdro.id/api/countries/NZ")

class Blog extends React.Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // Workaround for CORS issues on Codepen
        let noCorsURL = "https://cors-anywhere.herokuapp.com/"

        // Endpoint you want to hit
        let endpoint = "posts"

        // WP API base. Don't include the protocol.
        let dataURL = noCorsURL + "css-tricks.com/wp-json/wp/v2/" + endpoint

        fetch(dataURL)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
    }

    render() {

        let posts = this.state.posts.map((post) => {
            return <div key={post.id}>
                <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <button><a href={post.link}>Read Post</a></button>
            </div>
        })

        return (
            <div>
                <h1>WordPress REST API &mdash; Starter Pen</h1>
                {posts}
            </div>
        );
    }
}

export default Blog;
