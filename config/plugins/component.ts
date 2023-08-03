// https://www.npmjs.com/package/unplugin-vue-components
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export const AutoRegistryComponents = () => {
  return Components({
    dirs: ['src/components'],
    extensions: ['vue', 'md'],
    deep: true,
    dts: 'types/components.d.ts',
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    // exclude 未生效，预期想要过滤“src/components”下的路径中包含bpmnProcessDesigner的组件，
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/, /[\\/]bpmnProcessDesigner[\\/]/],
    resolvers: [
      ElementPlusResolver(),
      VueUseComponentsResolver(),
      // 自动按需引入icon组件,与全局注册存在重复问题
      IconsResolver({
        enabledCollections: ['ep']
      })
    ]
  })
}
