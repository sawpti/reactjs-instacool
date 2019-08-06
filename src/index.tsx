import createHistory  from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router} from 'react-router'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer} from 'redux-form'

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import * as reducers from './ducks'
import services from './service';
const store= createStore(combineReducers({
  ...reducers,
  form: formReducer,

}), applyMiddleware(thunk.withExtraArgument(services)));
const history = createHistory();
ReactDOM.render(
  <Provider store={store as any}>
  <Router history={history}  >
      <App />
  </Router>

  </Provider>,

  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
