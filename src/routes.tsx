import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateTeam from './pages/CreateTeam';

function Routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/newTeam" component={CreateTeam}></Route>
        </BrowserRouter>
    )
}

export default Routes;