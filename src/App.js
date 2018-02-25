import React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import ListView from './components/ListView';
import ListLayout from './components/ProductView';
import NoMatch from './components/NoMatch';
import Navbar from './components/NavBar';


const App =()=> {
    return (
        <div>
          <Navbar/>
          <BrowserRouter>
          <Switch>
          <Route exact path="/" component={ListView} />
          <Route exact path="/search/:id" component={ListLayout}/>
          </Switch>
          </BrowserRouter>
        </div>)
  
}

export default App;
