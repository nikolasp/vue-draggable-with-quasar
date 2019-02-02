// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Quasar from "quasar-framework";
import "quasar-extras/roboto-font";
import "quasar-extras/material-icons";
import "./assets/quasar.css";
import VueDraggable from "vue-draggable";

window.__THEME = "mat";
Vue.use(Quasar);
Vue.use(VueDraggable);
Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: "#app",
    router,
    render: h => h(App)
  });
});
