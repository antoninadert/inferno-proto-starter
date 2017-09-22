//Definitely inspired from https://github.com/kriasoft/universal-router/issues/80
import Inferno from 'inferno'; //Necessary to write <Comp props={params} /> syntax
import '/imports/Store';
// import { Home } from '/imports/Home';
// import { Ad } from '/imports/Ads/Ad/Ad';
// import { About } from '/imports/_Global/About/About';
// import { Ideas } from '/imports/_Global/Ideas/Ideas';
// import { Fourofour } from '/imports/_Global/404/404';

const routes = [
  {
    path: '/',
    action() {
      const component = require('/imports/Home'); //conditional import is not allowed
      const Home = component.Home // equivalent to import { Home } from '/imports/Home'; 
      return {
        title: 'Home',
        component: <Home />
      };
    }
  },
  {
    path: '/ads',
    children: [
      {
        path: '/',
        action() {
          const component = require('/imports/Home');
          const Home = component.Home
          return {
            title: 'Ads',
            component: <Home />
          };
        }
      },
      {
        path: '/:ad',
        action({ params }) {
          const component = require('/imports/Ads/Ad/Ad');
          const Ad = component.Ad
          return {
            title: 'Ad #' + params.ad,
            component: <Ad id={params.ad} alone={true} />
          };
        }
      }
    ],
  },
  {
    path: '/about',
    action() {
      const component = require('/imports/_Global/About/About');
      const About = component.About
      return {
        title: 'About us',
        component: <About />
      };
    }
  }, {
    path: '/ideas',
    action() {
      const component = require('/imports/_Global/Ideas/Ideas');
      const Ideas = component.Ideas
      return {
        title: 'Partagez vos idées',
        component: <Ideas />
      };
    }
  },
  {
    path: '*',
    action() {
      const component = require('/imports/_Global/404/404');
      const Fourofour = component.Fourofour
      return {
        title: '404',
        component: <Fourofour />
      };
    }
  }
];

export default routes;