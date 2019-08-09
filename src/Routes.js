import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Panel from './pages/Panel';
import { isauthenticate } from './services/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        console.log(isauthenticate()) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <PrivateRoute path="/painel" component={Panel} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;