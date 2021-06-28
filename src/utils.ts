import Debug from 'debug'

export const debug = {
  // 代码生成
  gen: Debug('vite-plugin-virtual:gen'),
  // transform
  transform: Debug('vite-plugin-virtual:transform'),
  // 热加载
  hmr: Debug('vite-plugin-virtual:hmr'),
}
