"use strict";
const common_vendor = require("../../../../common/vendor.js");
const api_core_passenger = require("../../../../api/core/passenger.js");
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_form_item2 = common_vendor.resolveComponent("u-form-item");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  const _easycom_u_form2 = common_vendor.resolveComponent("u-form");
  (_easycom_u_navbar2 + _easycom_u_input2 + _easycom_u_form_item2 + _easycom_u_button2 + _easycom_u_form2)();
}
const _easycom_u_navbar = () => "../../../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_input = () => "../../../../node-modules/uview-plus/components/u-input/u-input.js";
const _easycom_u_form_item = () => "../../../../node-modules/uview-plus/components/u-form-item/u-form-item.js";
const _easycom_u_button = () => "../../../../node-modules/uview-plus/components/u-button/u-button.js";
const _easycom_u_form = () => "../../../../node-modules/uview-plus/components/u-form/u-form.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_input + _easycom_u_form_item + _easycom_u_button + _easycom_u_form)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("新增旅客");
    const formRef = common_vendor.ref();
    const formData = common_vendor.reactive({
      passengerId: 0,
      name: "",
      phone: "",
      idType: 1,
      idCard: "",
      ticketType: 1
    });
    const rules = common_vendor.reactive({
      name: [
        { required: true, message: "请输入姓名", trigger: "blur" },
        { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
      ],
      phone: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }
      ]
    });
    common_vendor.onLoad((options) => {
      common_vendor.index.__f__("log", "at pages/my/passenger/add/index.vue:66", options.id);
      if (options.id) {
        title.value = "修改旅客";
        handleDetails(options.id);
      }
    });
    const handleDetails = async (id) => {
      const { data, code, msg } = await api_core_passenger.getPassengerDetail({ id });
      common_vendor.index.__f__("log", "at pages/my/passenger/add/index.vue:74", data, code, msg);
      if (code == 200) {
        formData.passengerId = data.passengerId;
        formData.name = data.name;
        formData.phone = data.phone;
        formData.idCard = data.idCard;
        formData.ticketType = data.ticketType;
        formData.idType = data.idType;
      }
    };
    const handleSubmit = async () => {
      formRef.value.validate().then(async (res) => {
        var opt;
        if (title.value == "新增旅客") {
          opt = await api_core_passenger.postPassengerAdd(formData);
        } else {
          opt = await api_core_passenger.putPassengerUpdate(formData);
        }
        common_vendor.index.__f__("log", "at pages/my/passenger/add/index.vue:93", opt);
        if (opt.code == 200) {
          common_vendor.index.showToast({
            title: opt.msg,
            icon: "success"
          });
          handleBack();
        } else {
          common_vendor.index.showToast({
            title: opt.msg,
            icon: "error"
          });
        }
      }).catch((res) => {
      });
    };
    const handleBack = () => {
      const pages = getCurrentPages();
      const prevPage = pages[pages.length - 2];
      common_vendor.index.__f__("log", "at pages/my/passenger/add/index.vue:114", prevPage.$vm.requestPassenger);
      if (prevPage.$vm.requestPassenger) {
        prevPage.$vm.requestPassenger();
      }
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          leftIconColor: "#fff",
          title: title.value,
          autoBack: true,
          fixed: true,
          placeholder: true
        }),
        b: common_vendor.o(($event) => formData.name = $event),
        c: common_vendor.p({
          border: "none",
          placeholder: "请输入乘客姓名",
          modelValue: formData.name
        }),
        d: common_vendor.p({
          label: "乘客姓名",
          prop: "name",
          borderBottom: true
        }),
        e: common_vendor.o(($event) => formData.phone = $event),
        f: common_vendor.p({
          type: "number",
          border: "none",
          placeholder: "请输入乘客手机号",
          modelValue: formData.phone
        }),
        g: common_vendor.sr("item1", "1476b38e-4,1476b38e-1"),
        h: common_vendor.p({
          label: "手机号码",
          prop: "phone",
          borderBottom: true
        }),
        i: common_vendor.o(handleSubmit),
        j: common_vendor.p({
          type: "primary"
        }),
        k: common_vendor.sr(formRef, "1476b38e-1", {
          "k": "formRef"
        }),
        l: common_vendor.p({
          model: formData,
          rules,
          labelWidth: 100
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1476b38e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/my/passenger/add/index.js.map
