import { createApp } from "vue";
import "bootstrap";
import axios from "axios"; // 新增axios
import VueAxios from "vue-axios"; // 新增vue-axios
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.mount("#app");
