// src/env.d.ts
/// <reference types="vite/client" />

// 1. 声明uni-app全局uni对象
declare const uni: UniApp.Uni

// 2. 声明页面栈全局函数 getCurrentPages
declare function getCurrentPages(): Page.PageInstance<any, any>[]

// 扩展页面实例类型，兼容你自定义的页面方法
declare namespace Page {
  interface PageInstance<T = any, V = any> {
    $page: any
    data: T
    options: V
    route: string
    // 你自己的乘客列表刷新方法，提前声明类型
    requestPassenger?: () => void
  }
}