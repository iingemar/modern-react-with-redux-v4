import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../actions";
import _ from 'lodash';


class PostsIndex extends Component {
    componentDidMount() {
        console.log('PostsIndex.componentDidMount');
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                    </Link>
                    <p>{post.content}</p>
                    <p>{post.categories}</p>
                    <p>{post.id}</p>
                </li>
            );
        });
    }

    render() {
        console.log('PostsIndex.render', this.props.posts);

        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        New post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

// Shortcut! { fetchPosts } is the same as doing
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }
// export default connect(null, mapDispatchToProps)(PostsIndex);
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);