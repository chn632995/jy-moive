import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
    loading: "https://2url.cc/1OwrB",
});

Vue.config.productionTip = false;

// 将事件总线挂载到原型上
Vue.prototype.eventBus = new Vue();

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
