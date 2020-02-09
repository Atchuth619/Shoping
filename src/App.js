import React from 'react';
import Homepage from './homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Directory/Shop/ShopPage';

function App() {
  return (
    <Switch>
      <Route exact path = "/" component={Homepage}/>
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
