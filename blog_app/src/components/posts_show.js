import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from "../actions";

class PostsShow extends Component {
    componentDidMount() {
        console.log('PostsShow.componentDidMount');
        // params will contain all wildcard parameters for this url.
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId);
    }

    render() {
        console.log('PostsShow.render');
        const { post } = this.props;

        if (!post) {
            return (
                <div>Loading ...</div>
            );
        }

        return (
            <div>
                Posts show!
                <h3>{post.title}</h3>
                <p>{post.categories}</p>
                <p>{post.content}</p>
            </div>
        );
    }
}

// ownProps is the props from the PostsShow component
function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);