import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.scss' // Importing global styles

createApp(App).use(router).mount('#app')