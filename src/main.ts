import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';

createApp(App)
  .use(router)
  .component('DefaultLayout', DefaultLayout)
  .component('GuestLayout', GuestLayout)
  .mount('#app')
