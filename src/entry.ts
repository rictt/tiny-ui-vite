import { App } from "vue"
import RenderButton from "./button/tsbutton"
import TSButton from "./button/index.vue"
import TSXButton from "./button/tsxbutton"

// 单独导出
export { 
  RenderButton,
  TSButton,
  TSXButton
}

// 全部导出
export default {
  install(app: App): void {
    app.component(RenderButton.name, RenderButton)
    app.component(TSButton.name, TSButton)
    app.component(TSXButton.name, TSXButton)
  }
}