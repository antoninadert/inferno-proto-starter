import Inferno from 'inferno'; //Necessary to write <Comp props={params} /> syntax
import { Store } from '/imports/Store';
const routes = [
  {
    path: '/',
    action() {
      import { Home } from '/imports/Home';      
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
          import { Home } from '/imports/Home';          
          return {
            title: 'Ads',
            component: <Home />
          };
        }
      },
      {
        path: '/:ad',
        action({ params }) {
          import { Ad } from '/imports/Ads/Ad/Ad';
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
      import { About } from '/imports/_Global/About/About';
      return {
        title: 'About us',
        component: <About />
      };
    }
  }, {
    path: '/ideas',
    action() {
      import { Ideas } from '/imports/_Global/Ideas/Ideas';      
      return {
        title: 'Partagez vos idées',
        component: <Ideas />
      };
    }
  },
  {
    path: '*',
    action() {
      import { Fourofour } from '/imports/_Global/404/404';
      return {
        title: '404',
        component: <Fourofour />
      };
    }
  }
];

export default routes;