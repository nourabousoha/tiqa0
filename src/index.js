import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Front from './components/Front';
import {loadDevs} from './states/actions'
import { createStore ,applyMiddleware } from 'redux'
import devApp from './states/reducers'
//import { addDev } from './states/actions';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
/*import {
  ADD_DEV,
  REMOVE_DEV,
  LOAD_DEVS
} from './states/actions'
*/
let store = createStore(devApp,{},applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  store.dispatch(loadDevs());
console.log(store.getState())
const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/taqa0/">
        <div>
          <Match exactly pattern="/" component={Front} />
          <Match exactly pattern="/dev" component={App} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

render(<Root />, document.querySelector('#main'));
