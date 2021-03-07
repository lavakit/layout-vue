import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

export default [
  {
    path: '/auth/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'GuestLayout'
    }
  },
  {
    path: '/auth/register',
    name: 'register',
    component: Register,
    meta: {
      layout: 'GuestLayout'
    }
  }
]
