import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Fractional from "../pages/Fractional";
import Minting from "../pages/Minting";
import Designers from "../pages/Designers";
import Login from "../components/Auth/Login";
import Admin from "../components/Admin";
// import App from './containers/App/App';
// import asyncComponent from './helpers/AsyncFunc';
// import Auth0 from './helpers/auth0';
const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (isLoggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: `${process.env.PUBLIC_URL}/signin`,
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
    <Header />

      <Route
        exact
        path='/'
        component={ Landing }
      />
      <Route
        exact
        path='/enter'
        component={ Home }
      />
      <Route
        exact
        path='/fractional'
        component={ Fractional }
      />
      <Route
        exact
        path='/minting'
        component={ Minting }
      />
      <Route
        exact
        path='/login'
        component={ Login }
      />
      <Route
        exact
        path='/designers'
        component={ Designers }
      />
      {/* <Route
        exact
        path={`${process.env.PUBLIC_URL}/signin`}
        component={asyncComponent(() => import('./containers/Page/signin'))}
      /> */}
      {/* <RestrictedRoute
        path={`${process.env.PUBLIC_URL}/dashboard`}
        component={App}
        isLoggedIn={isLoggedIn}
      /> */}
      <Route
      
        path='/admin'
        component={ Admin }
      />

      <Footer />
    </div>
  </ConnectedRouter>
);

// export default connect(state => ({
//   isLoggedIn: state.auth.idToken !== null,
// }))(PublicRoutes);
export default PublicRoutes