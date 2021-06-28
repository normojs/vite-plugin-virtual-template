
import type { Plugin } from 'vite'
import { parse, compileTemplate, SFCTemplateCompileOptions, SFCTemplateBlock } from '@vue/compiler-sfc'
import { MODULE_IDS, MODULE_ID_VIRTUAL } from './constants'

function compile(opts: Omit<SFCTemplateCompileOptions, 'id'>) {
  return compileTemplate({
    ...opts,
    id: '',
  })
}
function virtualPlugin(userOptions: {}): Plugin {
  let config: {} | undefined
  return {
    name: 'vite-plugin-virtual',
    enforce: 'pre',
    configResolved(_config) {
      config = _config
      console.log(userOptions)
    },
    resolveId(id) {
      return MODULE_IDS.includes(id) || MODULE_IDS.some(i => id.startsWith(i))
        ? MODULE_ID_VIRTUAL
        : null
    },
    load(id) {
      if (id === MODULE_ID_VIRTUAL) {
        const template = parse(
          `
          <template>
            <router-view />
          </template>
          `,
          { filename: 'anonymous.vue', sourceMap: true },
        ).descriptor.template as SFCTemplateBlock
        const result = compile({
          filename: 'anonymous.vue',
          source: template.content,
          preprocessLang: template.lang,
        })
        return result.code
        // return 'export const msg = "from virtual file"'
      }
    },
  }
}

export default virtualPlugin
