import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addPost } from "../redux/actions";

class AddPostItem extends React.Component {

    state = {
        post: {}
    }

    handleChange = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.id]: e.target.value
            }
        })
    }

    savePost = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.post);
        this.props.history.push("/");
    }

    render() {
        return (
            <React.Fragment>
                <div className="card border-primary">
                    <div className="card-header">
                        New Post
                    </div>
                    <div className="card-body p-3">
                        <form onSubmit={ this.savePost }>
                            <div className="form-group">

                                <label htmlFor="title">Title</label>
                                <input type="text"
                                       className="form-control"
                                       onChange={ this.handleChange }
                                       id="title"/>

                                <label htmlFor="content">Content</label>
                                <textarea className="form-control"
                                          onChange={ this.handleChange }
                                          id="content"/>

                            </div>
                            <div className={ 'd-flex align-items-center justify-content-end' }>
                                <button type="submit" className="btn btn-success m-1">Save</button>
                                <Link className="btn btn-dark m-1" to={`/`}>Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps) (withRouter(AddPostItem));
