"use strict";
const common_vendor = require("../../common/vendor.js");
const useLocationStore = common_vendor.defineStore("location", {
  // 👇 【修改】给 state 明确指定类型，消除隐式 any 警告
  state: () => ({
    latitude: null,
    longitude: null,
    address: null,
    province: null,
    city: null,
    district: null
  }),
  actions: {
    // ====================
    // 1. 获取当前定位坐标
    // ====================
    async getLocation() {
      return new Promise((resolve, reject) => {
        common_vendor.index.getLocation({
          type: "gcj02",
          success: (res) => {
            common_vendor.index.__f__("log", "at store/modules/location.ts:33", res);
            this.latitude = res.latitude;
            this.longitude = res.longitude;
            resolve(res);
          },
          fail: (err) => {
            common_vendor.index.showToast({ title: "定位失败", icon: "none" });
            reject(err);
          }
        });
      });
    },
    // ====================
    // 2. 高德逆地理编码（坐标转地址）
    // ====================
    // 👇 【修改】给参数 lat,lng 加上类型：number
    async getAddressByCoords(lat, lng) {
      const amapKey = "58c792ca77861de43aef7c1e1e309bc7";
      return new Promise((resolve, reject) => {
        common_vendor.index.request({
          url: "https://restapi.amap.com/v3/geocode/regeo",
          data: {
            key: amapKey,
            location: `${lng},${lat}`,
            extensions: "base",
            output: "json"
          },
          // 👇 【修改】res 增加类型，消除 any 警告
          success: (res) => {
            if (res.data.status === "1") {
              const info = res.data.regeocode;
              this.address = info.formatted_address;
              this.province = info.addressComponent.province;
              this.city = info.addressComponent.city;
              this.district = info.addressComponent.district;
              resolve(info);
            } else {
              reject(res.data);
            }
          },
          fail: (err) => {
            common_vendor.index.showToast({ title: "获取地址失败", icon: "none" });
            reject(err);
          }
        });
      });
    },
    // ====================
    // 3. 一键获取：定位 + 地址
    // ====================
    async getCurrentAddress() {
      try {
        await this.getLocation();
        const addressInfo = await this.getAddressByCoords(this.latitude, this.longitude);
        return addressInfo;
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
exports.useLocationStore = useLocationStore;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/modules/location.js.map
