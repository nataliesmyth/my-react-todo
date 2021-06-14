import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/todos' component={ TodosContainer }/>
      </Switch>
    </div>
  );
};

export default App;