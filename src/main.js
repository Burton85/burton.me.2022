import { createApp } from 'vue'
import './style/main.scss';
import com from './js/common.js';
import createRouter from './router';
import store from './store';
import App from './App.vue'

const router = createRouter()
app.config.globalProperties.$com = com;
const app = createApp(App).use(router).use(store).mount('#app')
