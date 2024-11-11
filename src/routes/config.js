import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Contact from '../pages/Contact/Contact';
import { PATHS } from './paths';

export const publicRoutes = [
  {
    path: PATHS.HOME,
    component: Home,
    exact: true,
  },
  {
    path: PATHS.LOGIN,
    component: Login,
  },
  {
    path: PATHS.CONTACT,
    component: Contact,
  },
];

export const privateRoutes = [
  {
    path: PATHS.ABOUT,
    component: About,
  },
  // Thêm các protected routes khác ở đây
]; 