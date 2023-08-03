import commonjs from 'vite-plugin-commonjs'
// 另一个插件@originjs/vite-plugin-commonjs：https://www.npmjs.com/package/@originjs/vite-plugin-commonjs，可以兼容两种情况（暂未校验）

export const ConfigCommonJs = () => {
  return commonjs()
}
