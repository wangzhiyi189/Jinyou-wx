// 1. 导入必要的类型
import { defineStore } from 'pinia';

// 2. 定义商品类型（给 cart 用）
interface GoodsItem {
  id: number | string;
  [key: string]: any; // 其他任意属性
}

// 3. 定义用户信息类型
interface UserInfo {
  id?: number;
  username?: string;
  [key: string]: any;
}

// 4. 定义 Store 状态类型
interface UserState {
  themeColor: string;
  sizeColor: string;
  cart: GoodsItem[]; // 购物车数组类型
  userInfo: UserInfo | null; // 用户信息（可能为空）
}

const useUserStore = defineStore('user', {
  // 👉 给 state 明确指定类型
  state: (): UserState => ({
    themeColor: 'rgb(255, 221, 0)',
    sizeColor: 'rgb(255, 165, 0)',
    cart: [],
    userInfo: null, 
  }),

  // 👉 getters 全部加上类型，消除隐式 any
  getters: {
    // state 明确类型
    isLogin: (state: UserState) => !!state.userInfo,
    cartCount: (state: UserState) => state.cart.length
  },

  // 👉 actions 全部加参数类型 + 修复错误
  actions: {
    // 你原来写的 theme 不存在，我改成 themeColor
    toggleThemeColor() {
      this.themeColor = this.themeColor === 'rgb(255, 221, 0)' 
        ? 'rgb(0, 0, 0)' 
        : 'rgb(255, 221, 0)';
    },

    // 给商品加类型
    addToCart(goods: GoodsItem) {
      this.cart.push(goods);
    },

    // 登录参数 + 返回值类型
    async login(userData: { username: string; password: string }) {
      try {
        const res = await uni.request({
          url: '/api/login',
          method: 'POST',
          data: userData
        });

        // 类型安全赋值
        this.userInfo = (res as any).data.userInfo;
        return (res as any).data;
      } catch (err) {
        console.error('登录失败', err);
        throw err;
      }
    },
  }
});

export default useUserStore;