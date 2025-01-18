import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import "./assets/scss/app.scss";

Vue.config.productionTip = false;
Vue.prototype.$getLanguageText = function (text, args = []) {
  return text;
};

Vue.prototype.$formatCurrency = function (text, args = []) {
  return text;
};

Vue.prototype.$linkCDN = "http://95.164.35.57/";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
