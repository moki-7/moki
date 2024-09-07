import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

import AutoImport  from 'unplugin-auto-import/vite'
import Components  from 'unplugin-vue-components/vite'
import{ElementPlusResolver} from 'unplugin-vue-components/resolvers'


// https://vitejs.dev/config/
export default defineConfig({
  //插件
  plugins: [
    vue(),
    AutoImport({
      imports:['vue','vue-router','vuex'],
      resolvers:[ElementPlusResolver()]
    }),
    Components({resolvers:[ElementPlusResolver()]})
  ],
  //路径解析
  resolve: {
    //将'./src'用别名'@'表示，以后输入路径用@代替
    alias: {'@': path.resolve(__dirname,'./src'), },
  },  
})
