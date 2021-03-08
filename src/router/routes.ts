import { RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import authRoutes from './auth'

const router: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  ...authRoutes,
];

export default router
