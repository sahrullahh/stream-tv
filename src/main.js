import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "./assets/tailwind.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import Vue3VideoPlayer from "@cloudgeek/vue3-video-player";
import "@cloudgeek/vue3-video-player/dist/vue3-video-player.css";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
const options = {
  color: "#171717",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    app.config.globalProperties.$Progress.start();

    return config;
  },
  function (error) {
    // Do something with request error
    app.config.globalProperties.$Progress.fail();
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    app.config.globalProperties.$Progress.finish();

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    app.config.globalProperties.$Progress.fail();

    return Promise.reject(error);
  }
);

const app = createApp(App);
app.use(VueProgressBar, options);
app.use(router);
app.use(Vue3VideoPlayer, {
  lang: "en",
});
app.component("v-select", vSelect);
app.config.globalProperties.$baseURL = "https://iptv-org.github.io/api/";
app.mount("#app");
