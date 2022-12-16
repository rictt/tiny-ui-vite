import { App } from "vue"
import VButton from "./button"

// 单独导出
export {
  VButton
}

// 全部导出
export default {
  install(app: App): void {
    app.component(VButton.name, VButton)
  }
}
