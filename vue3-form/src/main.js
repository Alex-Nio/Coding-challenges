import "@/app/scss/global.scss"
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/app/router/index.js';

const app = createApp(App);

app.use(router).mount('#app')