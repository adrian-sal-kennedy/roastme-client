import React, { Component} from 'react';
import Post from '../shared/Post';

export default class profile extends Component {
    async componentDidMount() {
        try {
        const response = await fetch(
            `${process.env.REACT_APP_BACKEND_URL}/user`,
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            }
        );
        if (response.status >= 400) {
            throw new Error("You must be logged in to do this!");
        } else {
            const posts= await response.json();
            
            this.setState({ posts: posts });
        }
        } catch (err) {
        this.setState({
            errMessage: err.message,
        });
        }
    }

    render() {
        return (
            <div>
                <p>profile component</p>
                {this.state?.posts &&
                    this.state?.posts.map((post, idx) => {
                    return (
                        <div className="main-component flex-tile" key={idx + 1}>
                        {<Post username={post.author.username} title={post.recipe.title} blog={post.recipe.blog} post={post.post.post} recipeId={post.recipe.id} userId={post.author.id} />}
                        </div>
              );
            })}
            </div>
        )
    }
}