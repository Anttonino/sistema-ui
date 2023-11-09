import { RouteRecordRaw } from 'vue-router';
import navbar from 'layouts/navbar.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: navbar,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../pages/home/index.vue'),
      },
      {
        path: '/chatbot',
        name: 'chatbot',
        component: () => import('../pages/chat/index.vue'),
      },
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
      },
    ],
  },
];

export default routes;
