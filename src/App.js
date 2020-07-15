import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from "./layout/Header";
import PostItemDetails from "./components/PostItemDetails";
import EditPostItem from "./components/EditPostItem";
import AddPostItem from "./components/AddPostItem";

class App extends React.Component {
    render() {
       return (
           <Router>
               <div>
                   <Header />
                   <div className={ 'pt-5' }/>
                   <div className={ 'pt-3' }/>
                   <div className={ 'container-fluid' }>
                       <Route path="/" exact component={ Home } />
                       <Route path="/about" component={ About } />
                       <Route path="/details/:id" component={ PostItemDetails } />
                       <Route path="/addPost" component={ AddPostItem } />
                       <Route path="/editPost/:id" component={ EditPostItem } />
                   </div>
               </div>
           </Router>
       );
   }
}

export default App;
