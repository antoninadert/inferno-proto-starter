import Inferno from 'inferno'; //Necessary to write <Comp props={params} /> syntax
import { About } from '/imports/_Global/About/About';
import { Fourofour } from '/imports/_Global/404/404';
import { Ideas } from '/imports/_Global/Ideas/Ideas';
import { Home } from '/imports/Home';
import { Ads } from '/imports/Ads/Ads';
import { Ad } from '/imports/Ads/Ad/Ad';

const routes = [
  {
    path: '/',
    action() {
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
          return {
            title: 'Ads',
            component: <Home />
          };
        }
      },
      {
        path: '/:ad',
        action({ params }) {
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
      return {
        title: 'About us',
        component: <About />
      };
    }
  }, {
    path: '/ideas',
    action() {
      return {
        title: 'Partagez vos idées',
        component: <Ideas />
      };
    }
  },
  {
    path: '*',
    action() {
      return {
        title: '404',
        component: <Fourofour />
      };
    }
  }
];

export default routes;