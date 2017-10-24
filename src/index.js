import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import redux-thunk
import thunk from 'redux-thunk';
// import react-redux
import { Provider } from 'react-redux';
// import the previously created reducer
import { reducer } from './reducers';
// import stuff from redux
import { createStore, applyMiddleware } from 'redux';
// import some stuff to sync the react-router with redux
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { FormulaOneApp, ChampionsPage, WinnersListPage, NotFound } from './components';
import './index.css';

if (!window.Symbol) {
  window.Symbol = Symbol;
}

const store = createStore(reducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);


class RoutedApp extends Component {
    render() {
        return (
            <Provider store={store}>
              <Router history={history}>
                <Route path="/" component={FormulaOneApp}>
                  <IndexRoute component={ChampionsPage} />
                  <Route path="/WinnersList/:year/:champion" component={WinnersListPage}  />
                  <Route path="*" component={NotFound} />
                </Route>
              </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
