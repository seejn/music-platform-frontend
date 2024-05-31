import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import '@fontsource/inter'; // Defaults to weight 400 with normal style.

const app = createApp(App)

app.use(router)

app.mount('#app')
