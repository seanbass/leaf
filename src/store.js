import {
    applyMiddleware,
    compose
  } from 'redux';

  import { createLogger } from 'redux-logger';
  import createSagaMiddleware from 'redux-saga';

  import reducer from './redux/reducers';
  import rootSaga from './redux/sagas';

  import Reactotron from 'reactotron-react-native';

  const logger = createLogger({
    level : 'log',
  });
  
export default () => {
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: Reactotron.createSagaMonitor()
  })
  const middleware = applyMiddleware(logger, sagaMiddleware)
  const store = Reactotron.createStore(reducer, compose(middleware))
  sagaMiddleware.run(rootSaga)
  return store
}