import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/core/services/store";
import ApiService from "@/core/services/api.service";
import MockService from "@/core/mock/mock.service";
  
Vue.config.productionTip = false;

import "popper.js";
import "tooltip.js";
import PerfectScrollbar from "perfect-scrollbar";
window.PerfectScrollbar = PerfectScrollbar;
import ClipboardJS from "clipboard";
window.ClipboardJS = ClipboardJS;

import i18n from "@/core/plugins/vue-i18n";
import vuetify from "@/core/plugins/vuetify";
import "@/core/plugins/portal-vue";
import "@/core/plugins/bootstrap-vue";
import "@/core/plugins/perfect-scrollbar";
import "@/core/plugins/highlight-js";
import "@/core/plugins/inline-svg";
import "@/core/plugins/apexcharts";
import "@/core/plugins/treeselect";
import "@/core/plugins/metronic";
import "@mdi/font/css/materialdesignicons.css";
import "@/core/plugins/formvalidation";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD2wT8IDYvdppD7jFG5Xh23wkdhjRAZM7A",
    libraries: "places" // necessary for places input
  }
});

ApiService.init();

MockService.init();

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
