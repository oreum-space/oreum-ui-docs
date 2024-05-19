import '@/styles/index.scss'
import 'oreum-ui/oreum-ui.css'
import App from '@/App.vue'
import appWidthPlugin from '@/plugins/appWidthPlugin'
import oreumIcons from 'oreum-ui/icons.svg'
import router from '@/router'
import { createApp } from 'vue'
import { oreumIconsPlugin } from 'oreum-ui'
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import scss from 'highlight.js/lib/languages/scss'

import 'highlight.js/styles/hybrid.min.css'

hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('scss', scss);

createApp(App)
  .use(hljsVuePlugin)
  .use(router)
  .use(oreumIconsPlugin, { oreumIcons })
  .use(appWidthPlugin)
  .mount('.app')
