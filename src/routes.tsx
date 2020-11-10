import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import AddTask from './pages/AddTask';

const PrivateRoute: React.FC = ({children, ...rest}): any => {
    return (
        <Route
            {...rest}
            render={({location}) => localStorage.getItem('token') ? 
                ( children ) : 
                ( <Redirect to={{ pathname: "/", state: { from: location } }} /> )
            }
        />
    );
}

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login}/>
                <PrivateRoute>
                    <Route path="/home" component={Home}/>
                    <Route path="/newTask" component={AddTask}/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}