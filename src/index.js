import { Router } from "@vaadin/router";

import './components/login-lit';
import './components/register-user';

const router = new Router(document.getElementById('outlet'));

const routes = [
  { path: '/', component: 'login-lit' },
  { path: '/register', component: 'register-user' },
];

router.setRoutes(routes);

