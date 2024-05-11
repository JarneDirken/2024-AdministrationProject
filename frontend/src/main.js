import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createAuth0 } from '@auth0/auth0-vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faBell,
  faUser,
  faClock,
  faPhone,
  faPencilAlt, // Edit icon
  faTrash, // Delete icon
} from '@fortawesome/free-solid-svg-icons';
import {
  faBars,
  faGear,
  faRightFromBracket,
  faChartSimple,
  faFileInvoice,
  faMoneyCheckDollar,
  faMagnifyingGlassChart,
  faStopwatch,
  faBox,
  faUsers,
  faChartLine,
  faTachometerAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { VueQueryPlugin } from '@tanstack/vue-query';

library.add(
  faEnvelope,
  faBell,
  faUser,
  faBars,
  faGear,
  faRightFromBracket,
  faChartSimple,
  faFileInvoice,
  faMoneyCheckDollar,
  faMagnifyingGlassChart,
  faStopwatch,
  faBox,
  faUsers,
  faChartLine,
  faTachometerAlt,
  faTimes,
  faClock,
  faPhone,
  faPencilAlt, // Added pencil icon
  faTrash // Added trash icon
);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(
  createAuth0({
    domain: "dev-2sg17n1hbz7mip76.us.auth0.com",
    clientId: "F2tQZ6MCp5Fdunwyv78Jccgaun7EEEC4",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  }),
);

app.use(VueQueryPlugin);

app.mount('#app');
