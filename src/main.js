import { createApp } from 'vue'
import './style/main.scss';
// import com from './js/common.js';
import createRouter from './router';
import store from './store';
import App from './App.vue'

const router = createRouter()
createApp(App).use(router).use(store).mount('#app')
// app.config.globalProperties.$com = com;
