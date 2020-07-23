import React from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";
import {getPosts, getPostsReport} from "../redux/actions";

class PostItems extends React.Component {

    componentDidMount() {
        this.props.getPosts();
        this.props.getPostsReport();
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
        posts: state.postsReducer.posts,
        posts_report: state.postsReducer.posts_report
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
        getPostsReport: () => dispatch(getPostsReport())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItems);
