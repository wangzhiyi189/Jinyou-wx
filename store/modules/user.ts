// 1. 导入必要的类型
import { defineStore } from 'pinia';
import { wxLogin , getUserInfo } from '@/api'; // 导入登录接口
import { getRedirectUrl, clearRedirectUrl } from '@/api/request'
import { removeToken, setToken, getToken , getUser , setUser } from '@/utils/auth';
// 2. 定义商品类型（给 cart 用）
interface GoodsItem {
  id: number | string;
  [key: string]: any; // 其他任意属性
}

// 3. 定义用户信息类型
interface UserInfo {
  id?: number;
  username?: string;
  openid?: string;
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
    userInfo: getUser() ? JSON.parse(getUser()) : null // 从缓存获取用户信息，注意解析, 
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
    async login() : Promise<void> {
      try {
        const loginRes = await uni.login()
        const appid = loginRes.code
        // const appid = 'orGxR5TJmekzY11QXQ7aON7PTHT0'
		    const {data,code,message} = await wxLogin(appid)
        console.log(data)
        setToken(data);
        this.info();
        const redirectUrl = getRedirectUrl()
        if(redirectUrl){
          // 有回跳地址 → 优先跳回用户之前的页面
          uni.redirectTo({
            url: redirectUrl
          })
          // 跳转后清空回跳地址，防止下次缓存错乱
          clearRedirectUrl()
        }else{
          // 无回跳地址（用户主动从首页点登录）→ 跳回你原来的首页
          uni.reLaunch({
            url: '/pages/index/index'
          })
        }
      } catch (err) {
        console.error('登录失败', err);
        throw err;
      }
    },
    async info(){
      const { data } = await getUserInfo();
      this.userInfo = data;
      setUser(JSON.stringify(data))
    }
  }
});

export default useUserStore;