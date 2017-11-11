import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import MainScreenNavigator from '../screens/MainScreen';

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreenNavigator },
}, {
  headerMode: 'none'
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AppWithNavigationState);