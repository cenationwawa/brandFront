import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import './index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Button, Tabbar, TabbarItem  } from 'vant';
const app = createApp(App)
app.use(router)
app.use(Vant)
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
app.mount('#app')
