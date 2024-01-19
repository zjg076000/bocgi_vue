import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

 import Icons from 'unplugin-icons/vite'
 import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      eslintrc: {
        enabled: true
       // enabled: true,
				//filepath: './.eslintrc-auto-import.json',
				//globalsPropValue: true,
      },
      resolvers: [ElementPlusResolver(),
        
      // Auto import icon components
        // 自动导入图标组件
        IconsResolver(),
      ],
    
    }),
    Components({
      resolvers: [ElementPlusResolver(),
       // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }), 
    
    
    Icons({
      autoInstall: true,
    }),


  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
