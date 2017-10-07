//Definitely inspired from https://github.com/kriasoft/universal-router/issues/80
import Inferno from 'inferno'; //Necessary to write <Comp props={params} /> syntax
import '/Hub/Store';
// import { Home } from '/imports/Home';
// import { Ad } from '/imports/Ads/Ad/Ad';
// import { About } from '/imports/_Global/About/About';
// import { Ideas } from '/imports/_Global/Ideas/Ideas';
// import { Fourofour } from '/imports/_Global/404/404';

const routes = [
  {
    path: '/',
    action() {
      const Home = require('/imports/Home').Home; //conditional import is not allowed, so we use require
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
          const Home = require('/imports/Home').Home;
          return {
            title: 'Ads',
            component: <Home />
          };
        }
      },
      {
        path: '/:ad',
        action({ params }) {
          const Ad = require('/imports/Ads/Ad/Ad').Ad;
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
      const About = require('/imports/_Global/About/About').About;
      return {
        title: 'About us',
        component: <About />
      };
    }
  }, {
    path: '/ideas',
    action() {
      const Ideas = require('/imports/_Global/Ideas/Ideas').Ideas;
      return {
        title: 'Partagez vos idées',
        component: <Ideas />
      };
    }
  },
  {
    path: '*',
    action() {
      const Fourofour = require('/imports/_Global/404/404').Fourofour;
      return {
        title: '404',
        component: <Fourofour />
      };
    }
  }
];

export default routes;