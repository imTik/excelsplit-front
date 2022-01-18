import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/excelsplit-front/',
  },
  {
    path: '/excelsplit-front/',
    name: 'index',
    meta: {
      title: 'excelsplit-front',
    },
    component: () => import('../views/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory()
  routes,
});

export default router;
