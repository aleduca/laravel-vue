import './bootstrap';

import { createApp } from 'vue';
import App from './components/App.vue';
import Products from "./components/Products.vue";

const app = createApp();

app.component('app', App);
app.component('products', Products);

app.mount('#app');