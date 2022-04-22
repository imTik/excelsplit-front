import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/login/',
  },
  {
    path: '/login',
    name: 'loginIndex',
    meta: {
      title: '登录页',
    },
    component: () => import('../views/Login/index.vue'),
  },
  {
    path: '/register',
    name: 'registerIndex',
    meta: {
      title: '注册页'
    },
    component: () => import('../views/Register/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(), // createWebHashHistory()  createWebHistory()
  routes,
});

export default router;
