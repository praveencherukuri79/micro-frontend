import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./components/app/App.vue";
import "./style.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
