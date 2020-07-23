import React from "react";
import PostItems from "../components/PostItems";
import {Link} from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className={ 'd-flex flex-row align-items-center justify-content-end' }>
                    <Link className="btn btn-success m-1" to={`/addPost`}>New Post</Link>
                </div>
                <PostItems></PostItems>
            </React.Fragment>
        );

    }
}

export default Home;
