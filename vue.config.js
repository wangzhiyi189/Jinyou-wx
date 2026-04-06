import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import pxToViewport from 'postcss-px-to-viewport'
export default defineConfig({
  resolve: {
    alias: {
      'uview-plus': path.resolve(__dirname, 'node_modules/uview-plus')
    }
  },
  plugins: [
    uni()
  ],
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          // 设计稿宽度：375对应主流移动端设计稿，750对应2x设计稿
          viewportWidth: 375,
          // 转换后单位：uni-app用rpx
          viewportUnit: 'rpx',
          // 字体单位
          fontViewportUnit: 'rpx',
          // 最小转换单位：小于1px不转
          minPixelValue: 1,
          // 转换媒体查询
          mediaQuery: true,
          // 排除node_modules（避免转换uview-plus等第三方库）
          exclude: /node_modules/,
          // 包含所有样式文件（.vue/.css/.scss等）
          include: /\/src\//,
          selectorBlackList: [/^data-v-/]
        })
      ]
    }
  }
})