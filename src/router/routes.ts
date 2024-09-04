import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/ProductsList.vue") },
      { path: "/account/create", component: () => import("src/pages/RegisterPage.vue") },
      { path: "/product/:productName", component: () => import("src/pages/ProductDetails.vue") },
      { path: "/brands", component: () => import("src/pages/admin/BrandsPage.vue") },
      { path: "/profile", component: () => import("src/pages/users/ProfilePage.vue") },
    ],
  },
  {
    path: "/management",
    component: () => import("layouts/MainLayoutAdmin.vue"),
    children: [
      { path: "", component: () => import("src/pages/admin/AdminIndexPage.vue") },
      { path: "brands", name: "admin-brands", component: () => import("src/pages/admin/BrandsPage.vue") },
      { path: "external-users", name: "external-users", component: () => import("src/pages/admin/users/UsersPage.vue") },
      { path: "product-category", name: "product-category", component: () => import("src/pages/admin/products/ProductCategoryPage.vue") },
      { path: "product-subcategory", name: "product-subcategory", component: () => import("src/pages/admin/products/ProductSubCategoryPage.vue") },
      { path: "product-types", name: "product-types", component: () => import("src/pages/admin/products/ProductTypesPage.vue") },
      { path: "products", name: "products", component: () => import("src/pages/admin/products/ProductPage.vue") },
      { path: "products-variants", name: "products-variants", component: () => import("src/pages/admin/products/ProductVariantPage.vue") },
      { path: "orders", name: "orders", component: () => import("src/pages/admin/orders/OrdersPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
