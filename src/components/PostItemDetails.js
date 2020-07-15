import React from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {delPost, getPost} from "../redux/actions";

class PostItemDetails extends React.Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    handleDelPost = () => {
        this.props.delPost(this.props.post.id);
        this.props.history.push("/");
    }

    render() {
        const { post } = this.props;
        let postDetails;
        if(post) {
            postDetails = (
                <React.Fragment>
                    <div className={ 'd-flex flex-row align-items-center justify-content-end' }>
                        <Link className="btn btn-success m-1" to={`/addPost`}>New Post</Link>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header">
                            Post {post.id}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.content}</p>
                            <div className={ 'd-flex flex-row align-items-center' }>
                                <div className={ 'd-flex justify-content-end flex-grow-1' }>
                                    <Link className="btn btn-warning m-1" to={`/editPost/${post.id}`}>Update</Link>
                                    <button className="btn btn-danger m-1" onClick={this.handleDelPost}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            postDetails = (
                <React.Fragment>
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Item Cannot be Found.</h5>
                        </div>
                    </div>
                </React.Fragment>
            )
        }

        return postDetails;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.postsReducer.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (id) => dispatch(getPost(id)),
        delPost: (id) => dispatch(delPost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItemDetails);
