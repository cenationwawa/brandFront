// 封装plugins
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

import { AutoImportDeps } from './autoImport'
import { AutoRegistryComponents } from './component'
import { ConfigProgressPlugin } from './progress'
import { ConfigSvgIconsPlugin } from './svgIcons'
import { ConfigIconsPlugin } from './icons'
import { ConfigCommonJs } from './commonjs'
import { ConfigPurgeIconPlugin } from './purgeIcons'
export function createVitePlugins(isBuild:boolean) {
  const vitePlugins:(PluginOption|PluginOption[])[] = [
    vue(),
    vueJsx(),
    // setup语法糖组件名支持
    vueSetupExtend()
  ]
  // 兼容commonjs语法
  vitePlugins.push(ConfigCommonJs())
  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps())
  vitePlugins.push(ConfigProgressPlugin())
  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents())
  // 压缩合并svg图片
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild))
  vitePlugins.push(ConfigIconsPlugin())
  vitePlugins.push(ConfigPurgeIconPlugin())
  return vitePlugins
}
