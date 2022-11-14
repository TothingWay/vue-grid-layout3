import App from './App.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import GridLayout from '../../vue-grid-layout3/dist/vue-grid-layout3.mjs'
import  '../../vue-grid-layout3/dist/style.css'
import { createApp } from 'vue'

const app = createApp(App)

app.use(GridLayout)

app.mount('#app')
