import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/home/HomePage.vue";
import LoginPage from "./components/login/LoginPage.vue";

Vue.use(Router); // プラグイン（どこでも使える機能）を適用するために記載

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/login", // URL
      component: LoginPage, // 上記URLのときに表示するコンポーネント
    },
    {
      path: "/",
      component: HomePage,
    },
  ],
});
