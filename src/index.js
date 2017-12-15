import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Front from './components/Front';
import { createStore } from 'redux'
import devApp from './states/reducers'
import { addDev } from './states/actions';
import {
  ADD_DEV,
  REMOVE_DEV,
  LOAD_DEVS
} from './states/actions'

let store = createStore(devApp)

store.dispatch(addDev('Learn about actions'))



console.log(store.getState())
const Root = () => {
  return (
    <BrowserRouter basename="/taqa0/">
      <div>
        <Match exactly pattern="/" component={Front} />
        <Match exactly pattern="/dev" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
