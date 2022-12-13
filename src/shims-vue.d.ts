declare module "*.vue" {
  import { DefineComponent } from "vue"
  // 范性拓展，第一个是props，第二个是RawBindings
  const component: DefineComponent<{}, {}, any>
  export default component
}