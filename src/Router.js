import React from 'react';
import { Route, Switch} from "react-router-dom";

//Layout Component
import Home from './Layouts/Home';
import Search from './Layouts/Search';
import Profile from './Layouts/Profile';

const Social = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/profile" component={Profile}/>
        {/* <Route exact path="/logout" component={}/> */}
    </Switch>
)

export default Social;
