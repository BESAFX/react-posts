import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { getPost, updatePost } from "../redux/actions";

class EditPostItem extends React.Component {

    state = {
        post: {}
    }

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
            .then(() => this.setState({ post: this.props.post }));
    }

    handleChange = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.id]: e.target.value
            }
        })
    }

    updatePost = (e) => {
        e.preventDefault();
        this.props.updatePost(this.state.post);
    }

    render() {
        const { post } = this.state;
        return (
            <React.Fragment>
                <div className="card border-primary">
                    <div className="card-header">
                        Update Post {}
                    </div>
                    <div className="card-body p-3">
                        <form onSubmit={ this.updatePost }>
                            <div className="form-group">

                                <label htmlFor="title">Title</label>
                                <input type="text"
                                       className="form-control"
                                       onChange={ this.handleChange }
                                       value={ post.title || ''}
                                       id="title"/>

                                <label htmlFor="content">Content</label>
                                <textarea className="form-control"
                                          onChange={ this.handleChange }
                                          value={ post.content || '' }
                                          id="content"/>

                            </div>
                            <div className={ 'd-flex align-items-center justify-content-end' }>
                                <button type="submit" className="btn btn-warning m-1">Update</button>
                                <Link className="btn btn-dark m-1" to={`/`}>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
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
        updatePost: (post) => dispatch(updatePost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditPostItem);
