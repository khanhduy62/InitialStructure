import AppNavigator from '../navigator';

const initialState = {
  index: 0,
  routes: [{ key: 'Init', routeName: 'Home' }],
};

export default (state = initialState, action) => {
  const getStateForAction = AppNavigator.router.getStateForAction(action, state);
  const routes = getStateForAction.routes
  const index = getStateForAction.index
  const routeName = routes[index].routeName
  return getStateForAction
}
