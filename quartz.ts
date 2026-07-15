import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig({
  Plugin.ClickableImages(),
})
export default config
export const layout = await loadQuartzLayout()
