import '@/styles/index.scss'
import 'oreum-ui/oreum-ui.css'
import App from '@/App.vue'
import appWidthPlugin from '@/plugins/appWidthPlugin'
import oreumIcons from 'oreum-ui/icons.svg'
import router from '@/router'
import { createApp } from 'vue'
import { oreumIconsPlugin } from 'oreum-ui'

createApp(App)
  .use(router)
  .use(oreumIconsPlugin, { oreumIcons })
  .use(appWidthPlugin)
  .mount('.app')
