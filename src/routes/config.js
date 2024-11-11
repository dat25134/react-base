import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Contact from '../pages/Contact/Contact';
import Profile from '../pages/Profile/Profile';
import AdminDashboard from '../pages/AdminDashboard/AdminDashboard';
import { PATHS } from './paths';
import { ROLES } from '../contexts/AuthContext';

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
    roles: [ROLES.USER],
  },
  {
    path: PATHS.PROFILE.ROOT,
    component: Profile,
    roles: [ROLES.USER, ROLES.ADMIN],
  },
  {
    path: PATHS.ADMIN.DASHBOARD,
    component: AdminDashboard,
    roles: [ROLES.ADMIN],
  },
]; 