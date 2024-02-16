import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/css/custom.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vuetify from 'vuetify';




AOS.init();



createApp(App)
.use(router)
.use(Vuetify)
.mount('#app')

