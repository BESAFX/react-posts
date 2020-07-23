import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from "./layout/Header";
import PostItemDetails from "./components/PostItemDetails";
import EditPostItem from "./components/EditPostItem";
import AddPostItem from "./components/AddPostItem";
import POS from "./pages/POS";

class App extends React.Component {
    render() {
       return (
           <Router>
               <div>
                   <Header />
                   <div className={ 'pt-5' }/>
                   <div className={ 'pt-3' }/>
                   <Switch className={ 'container-fluid' }>
                       <Route path="/" exact component={ Home } />
                       <Route path="/about" component={ About } />
                       <Route path="/pos" component={ POS } />
                       <Route path="/details/:id" component={ PostItemDetails } />
                       <Route path="/addPost" component={ AddPostItem } />
                       <Route path="/editPost/:id" component={ EditPostItem } />
                   </Switch>
               </div>
           </Router>
       );
   }
}

export default App;
