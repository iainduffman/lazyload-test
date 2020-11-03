import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import uk from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
uk.use(Icons);
import Blast from 'blast-vanilla';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

new Blast('.letters', { delimiter: 'word', returnGenerated: true, tag: 'span' })

