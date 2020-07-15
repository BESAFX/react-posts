import React from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import { getPosts } from "../redux/actions";

class PostItems extends React.Component {

    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        const postsList = this.props.posts.map((post, index) => {
            return <PostItem key={ index + 1 } number={index + 1} post={ post }/>
        });

        return (
            <React.Fragment>
                <div className="card mb-3">
                    <div className="card-body">
                        { postsList.length === 0 ? 'Empty List' : postsList}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItems);
