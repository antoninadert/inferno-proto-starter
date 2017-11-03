// All the routes, components, <head> are passing here. 
  import { renderToString } from "inferno-server";
  import { onPageLoad } from "meteor/server-render";

  import universalRouter from 'universal-router/legacy'; //legacy because meteor use old node version
  import routes from '/Hub/_Routes'

  const Router = new universalRouter(routes);



  //onPageLoad generates new static HTML on every page request. 
  onPageLoad(async sink => {
    await renderPage(sink);
  });
  function renderPage(thatSink) {
    //Async, await because we need to use the sink inside this promise
    Router.resolve({ pathname: thatSink.request.url.pathname }).then(route => {
      thatSink.renderIntoElementById("app", renderToString(
        route.component
      ));
      const title = "<title>" + route.title + "</title>";
      thatSink.appendToHead(title);
    });
  }