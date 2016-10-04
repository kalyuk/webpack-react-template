import App from './app/app.jsx';
import Homepage from './app/homepage/homepage.jsx';
import Catalog from './app/catalog/catalog.jsx';


export default function () {
  return {
    component: App,
    path: '/',
    indexRoute: {
      component: Homepage
    },
    childRoutes: [
      {
        path: '/catalog',
        component: Catalog
      }
    ]
  };
}
