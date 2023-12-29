import { Router } from "@vaadin/router";

import './components/login-lit';
import './components/register-user';
import './components/home-component';
import './components/footer-component';

const router = new Router(document.getElementById('outlet'));

const routes = [
  { path: '/', component: 'home-component' },
  { path: '/login', component: 'login-lit'},
  { path: '/register', component: 'register-user' },
];

router.setRoutes(routes);

