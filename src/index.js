import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Front from './components/Front';

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
