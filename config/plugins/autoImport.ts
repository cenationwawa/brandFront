/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入高频依赖的变量
 */
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export const AutoImportDeps = () => {
  return AutoImport({
    // 生成对应的.d.ts文件
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        '@vueuse/core': []
      }
    ],
    eslintrc: {
      enabled: true
    },
    resolvers: [
      // 是否可以现实“自动引入element-plus元素的typescript类型”？
      ElementPlusResolver(),
      // 自动按需引入icon组件, 目前的写法与全局注册存在重复问题 TODO:待优化
      IconsResolver({
        prefix: 'Icon'
      })
    ]
  })
}
