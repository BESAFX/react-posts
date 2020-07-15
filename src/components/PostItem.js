import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {delPost} from "../redux/actions";

class PostItem extends React.Component {

    handleDelPost = () => {
        this.props.delPost(this.props.post.id);
    }

    render() {
        const { id, title, content } = this.props.post;
        const index = this.props.number;
        return (
            <React.Fragment>
                <div className="card mb-3">
                    <div className="card-header">
                        Post {index}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <div className={ 'd-flex flex-row align-items-center justify-content-end' }>
                            <Link className="btn btn-primary m-1" to={`/details/${id}`}>Read More</Link>
                            <button className="btn btn-danger m-1" onClick={ this.handleDelPost }>Delete</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delPost: (id) => dispatch(delPost(id))
    }
}

export default connect(null, mapDispatchToProps) (PostItem);
