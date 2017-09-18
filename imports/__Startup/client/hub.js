import { Tracker } from 'meteor/tracker';
import ViewModel from 'viewmodel-react';
ViewModel.Tracker = Tracker; //link ViewModel's reactivity to Meteor's

import UniversalRouter from 'universal-router';
import createHistory from 'history/createBrowserHistory'
import { render } from 'inferno';
require('inferno-devtools')
import Routes from '../_Routes'


const History = createHistory()
const Router = new UniversalRouter(Routes);


function renderLocation(location) {
  Router.resolve({ path: location.pathname }).then(route => {
    //route is what our action() returns for a specific path
    document.title = route.title;
    render(route.component, document.getElementById("app"));
  });
}

//Initialize the first page render with current history
renderLocation(History.location);
//listen to URL(location) changes and render the new layout based on URL automatically
History.listen((anylocation) => {
  renderLocation(anylocation)
});

export { History };