import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import "@mdi/font/css/materialdesignicons.min.css";

// // modales
// import Modal from "~/components/modal/modal";
// Vue.component("modal", Modal);

import ModalRight from "~/components/modal/modalRight";
Vue.component("modalRight", ModalRight);

import Modal from "~/components/modales/modal";
Vue.component("modal", Modal);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
