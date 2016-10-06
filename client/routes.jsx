import App from './app/app.jsx';
import Homepage from './app/homepage/homepage.jsx';
import About from './app/about/about.jsx';


export default function () {
  return {
    component: App,
    path: '/',
    indexRoute: {
      component: Homepage
    },
    childRoutes: [
      {
        path: '/about',
        component: About
      }
    ]
  };
}
