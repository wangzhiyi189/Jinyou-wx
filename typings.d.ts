// typings.d.ts
declare module '@dcloudio/uni-app' {
  // 复用官方类型
  export * from '@dcloudio/types'
  
  // 补充声明 onPageScroll、onShow 等页面级钩子
  export function onPageScroll(callback: (e: { scrollTop: number }) => void): void;
  export function onShow(callback: () => void): void;
  // 如果你还用到其他钩子，比如 onLoad、onUnload，也可以在这里补充
  export function onLoad(callback: (options: any) => void): void;
  export function onUnload(callback: () => void): void;
  export function onReachBottom(callback: () => void): void;
}

declare module 'lunar-javascript' {
  export class Lunar {
      static fromDate(date: Date): Lunar;
      toFullString(): string;
      // 你实际用到的其他方法也可以在这里补充
  }
  const LunarModule: any;
  export = LunarModule;
}

// 告诉 TypeScript：所有 .vue 文件都是 Vue 组件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

