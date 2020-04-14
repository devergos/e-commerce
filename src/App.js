import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/homepage/HomepageComponent';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/Sign-in-and-sign-up';
import ShopPage from './pages/shop/ShopPageComponent';
import Header from './components/header/HeaderComponent';
import Checkout from './pages/checkout/CheckoutComponent';

import './App.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector'

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.props.setCurrentUser(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
                <SignInAndSignUpPage />
              )
          }
          />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        {/* <HomePage /> */}
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToprops)(App);
