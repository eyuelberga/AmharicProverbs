import "animate.css";
import { createApp } from "vue";
import router from "./utils/router";
import i18n from "./utils/i18n";
import App from "./App.vue";

createApp(App).use(router).use(i18n).mount("#app");
