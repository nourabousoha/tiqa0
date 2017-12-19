import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Front from './components/Front';
import { createStore } from 'redux'
import devApp from './states/reducers'
//import { addDev } from './states/actions';
import { Provider } from 'react-redux'
/*import {
  ADD_DEV,
  REMOVE_DEV,
  LOAD_DEVS
} from './states/actions'
*/
let store = createStore(devApp, {
  devs: [{
    name: 'Bill Gates',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Bill_Gates_June_2015.jpg',
    desc: " informaticien et entrepreneur américain, pionnier dans le domaine de la micro-informatique. Il a fondé en 1975, à l'âge de 20 ans, avec son ami Paul Allen, la société de logiciels de micro-informatique Micro-Soft (rebaptisée depuis Microsoft).",
    price: 1724,
    status: 'available',
    id:1
  },{
    name: 'King Crab',
    image: 'http://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg',
    desc: 'Crack these open and enjoy them plain or with one of our cocktail sauces',
    price: 4234,
    status: 'available',
    id:5
  },{
    name: 'Atlantic Salmon',
    image: 'http://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-fish.jpg',
    desc: 'This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!',
    price: 1453,
    status: 'available',
    id: 6
  }]
},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
