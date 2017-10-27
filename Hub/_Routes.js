//Definitely inspired from https://github.com/kriasoft/universal-router/issues/80
import Inferno from 'inferno'; //Necessary to write <Comp props={params} /> syntax
import '/Hub/Store';
import { Home } from '/imports/Home';
import { Ad } from '/imports/Ads/Ad/Ad';
import { About } from '/imports/_Global/About/About';
import { Ideas } from '/imports/_Global/Ideas/Ideas';
import { Fourofour } from '/imports/_Global/404/404';


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
          console.log(params)
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
  }, 
  {
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
        component:  <div><Fourofour /> <About /></div>
      };
    }
  }
];

export default routes;