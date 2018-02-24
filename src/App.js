import React from 'react';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import ListView from './components/ListView';
import ListLayout from './components/ProductView';
import NoMatch from './components/NoMatch';



const App =()=> {
    return (
        <div>
          <BrowserRouter>
          <Switch>
          <Route exact path="/" component={ListView}/>
          <Route exact path="/search/:id" component={ListLayout}/> */}
          <Route component={NoMatch}/>
          </Switch>
          </BrowserRouter>
        </div>)
  
}

export default App;
