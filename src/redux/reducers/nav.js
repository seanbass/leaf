import { AppNavigator } from '../../navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

function nav(state = initialState, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}

export default nav