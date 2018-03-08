import App from './App';
import Home from './home';
import About from './about';
import Archive from './archive';
import Article from './article';
import Topic from './topic';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/hello',
    component: App
  },
  {
    path: '/archive',
    component: Archive
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/article',
    component: Article
  },
  {
    path: '/topic',
    component: Topic
  }
];

export default routes;
