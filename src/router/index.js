import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    component: () => import("../views/FrontView.vue"),
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "products",
        component: () => import("../views/ProductsView.vue"),
      },
      {
        path: "product/:id",
        component: () => import("../views/ProductView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/CartView.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/DashboardView.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/AdminProducts.vue"),
      },
      {
        path: "coupon",
        component: () => import("../views/AdminCoupon.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", // bootstrap樣式
});

export default router;
