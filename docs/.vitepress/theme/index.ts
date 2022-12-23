import Theme from 'vitepress/dist/client/theme-default'
import TinyUI from '../../../src/entry'

import "vitepress-theme-demoblock/theme/styles/index.css"
import Deomo from "vitepress-theme-demoblock/components/Demo.vue"
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue"

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(TinyUI)
    app.component('Demo', Deomo)
    app.component('DemoBlock', DemoBlock)
  },
}
