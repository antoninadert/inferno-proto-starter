import { Tracker } from 'meteor/tracker';
import ViewModel from 'viewmodel-react';
ViewModel.Tracker = Tracker; //link ViewModel's reactivity to Meteor's

import { render } from 'inferno';
require('inferno-devtools')

import createHistory from 'history/createBrowserHistory'
const History = createHistory()

import universalRouter from 'universal-router';
import routes from '/Hub/_Routes'
const Router = new universalRouter(routes);


renderLocation(History.location);
//Render initial HTML based on URL
History.listen((anylocation) => {
  //Render HTML on every url change.
  renderLocation(anylocation)
});

function renderLocation(location) {
  Router.resolve({ pathname: location.pathname }).then(route => {
    //route is what action() returns in _Router
    render(route.component, document.getElementById("app"));
    document.title = route.title;
  });
}

export { History };