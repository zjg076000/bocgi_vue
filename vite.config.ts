import { fileURLToPath, URL } from 'node:url'

<<<<<<< HEAD
import { defineConfig, loadEnv } from 'vite'
=======
import { defineConfig } from 'vite'
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

<<<<<<< HEAD
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    proxy: {

      '/tipos2': 'http://127.0.0.1:9000/',

      // 带选项写法：http://localhost:5173/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: loadEnv('', process.cwd()),
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },

=======
 import Icons from 'unplugin-icons/vite'
 import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      eslintrc: {
        enabled: true
<<<<<<< HEAD
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


=======
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
    
    
>>>>>>> 1ee38ff982f594d9c6f938c98505b3fd689a1fc8
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
