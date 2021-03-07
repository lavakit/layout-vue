import Home from "@/views/Home.vue";
import authRoutes from './auth'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      layout: 'DefaultLayout'
    }
  },
  ...authRoutes,
]
