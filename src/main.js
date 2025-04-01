import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

let app = createApp(App);

app.use(VueSmoothScroll);

app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");

// SEO

// https://www.npmjs.com/search?q=keywords:vue%20seo
// https://www.youtube.com/watch?v=Op8Q8bUAKNc&list=WL&index=2
// https://www.youtube.com/watch?v=b2Fuh6cBJes&list=WL&index=3
// https://www.youtube.com/watch?v=qzkdP9z5DLY&list=WL&index=4
// https://www.youtube.com/watch?v=El7CfgD_6XE&list=WL&index=5
