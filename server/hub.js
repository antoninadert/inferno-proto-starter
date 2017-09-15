// All the routes, components, <head> are passing here. 
import { renderToString } from "inferno-server";
import { onPageLoad } from "meteor/server-render";
import UniversalRouter from 'universal-router/legacy'; //legacy because meteor use old node version
import Routes from '../both/_Routes'

const Router = new UniversalRouter(Routes);

function renderPage(thatSink) {
  Router.resolve({path: thatSink.request.url.pathname}).then(route  => {
    thatSink.renderIntoElementById("app", renderToString(
      route.component
    ));
    const title = "<title>"+route.title+"</title>";
    thatSink.appendToHead(title);
  });
}

//onPageLoad generates new static HTML on every page request. 
onPageLoad(async sink => {
  //The sink contains the url / request / path data
  //Async, await because we need to use the sink inside a promise (router.resolve())
  await renderPage(sink);
});