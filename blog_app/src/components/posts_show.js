import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from "../actions";

class PostsShow extends Component {
    componentDidMount() {
        console.log('PostsShow.componentDidMount');
        // params will contain all wildcard parameters for this url.
        const postId = this.props.match.params.id;
        this.props.fetchPost(postId);
    }


    onDeleteClick() {
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
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
                <Link to="/">Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete post
                </button>
                <h3>{post.title}</h3>
                <p>Categories: {post.categories}</p>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);