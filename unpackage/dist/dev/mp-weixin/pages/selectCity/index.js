"use strict";
const common_vendor = require("../../common/vendor.js");
const cityinfo = [
  {
    departures: [
      {
        cityname: "安康市",
        departtype: "1",
        findname: "安康市",
        id: "610900000000",
        tag: "陕西省"
      },
      {
        cityname: "安庆市",
        departtype: "1",
        findname: "安庆市",
        id: "340800000000",
        tag: "安徽省"
      },
      {
        cityname: "阿城区",
        departtype: "1",
        findname: "阿城区",
        id: "230181000000",
        tag: "哈尔滨市,黑龙江"
      },
      {
        cityname: "安国市",
        departtype: "1",
        findname: "安国市",
        id: "130683000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "敖汉旗",
        departtype: "1",
        findname: "敖汉旗",
        id: "150430000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "阿合奇县",
        departtype: "1",
        findname: "阿合奇县",
        id: "653023000000",
        tag: "克孜勒苏柯尔克孜自治州,新疆"
      },
      {
        cityname: "安化县",
        departtype: "1",
        findname: "安化县",
        id: "430923000000",
        tag: "益阳市,湖南省"
      },
      {
        cityname: "安吉县",
        departtype: "1",
        findname: "安吉县",
        id: "330523000000",
        tag: "湖州市,浙江省"
      },
      {
        cityname: "阿克苏市",
        departtype: "1",
        findname: "阿克苏市",
        id: "652901000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "阿克塞哈萨克族自治县",
        departtype: "1",
        findname: "阿克塞县",
        id: "620924000000",
        tag: "酒泉市,甘肃省"
      },
      {
        cityname: "阿鲁科尔沁旗",
        departtype: "1",
        findname: "阿鲁科尔沁旗",
        id: "150421000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "安陆市",
        departtype: "1",
        findname: "安陆市",
        id: "420982000000",
        tag: "孝感市,湖北省"
      },
      {
        cityname: "阿拉善右旗",
        departtype: "1",
        findname: "阿拉善右旗",
        id: "152922000000",
        tag: "阿拉善盟,内蒙古"
      },
      {
        cityname: "阿拉善左旗",
        departtype: "1",
        findname: "阿拉善左旗",
        id: "152921000000",
        tag: "阿拉善盟,内蒙古"
      },
      {
        cityname: "阿勒泰市",
        departtype: "1",
        findname: "阿勒泰市",
        id: "654301000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "安平县",
        departtype: "1",
        findname: "安平县",
        id: "131125000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "安丘市",
        departtype: "1",
        findname: "安丘市",
        id: "370784000000",
        tag: "潍坊市,山东省"
      },
      {
        cityname: "阿荣旗",
        departtype: "1",
        findname: "阿荣旗",
        id: "150721000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "阿图什市",
        departtype: "1",
        findname: "阿图什市",
        id: "653001000000",
        tag: "克孜勒苏柯尔克孜自治州,新疆"
      },
      {
        cityname: "安图县",
        departtype: "1",
        findname: "安图县",
        id: "222426000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "阿瓦提县",
        departtype: "1",
        findname: "阿瓦提县",
        id: "652928000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "安新县",
        departtype: "1",
        findname: "安新县",
        id: "130632000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "安溪县",
        departtype: "1",
        findname: "安溪县",
        id: "350524000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "安远县",
        departtype: "1",
        findname: "安远县",
        id: "360726000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "安岳县",
        departtype: "1",
        findname: "安岳县",
        id: "512021000000",
        tag: "资阳市,四川省"
      },
      {
        cityname: "安泽县",
        departtype: "1",
        findname: "安泽县",
        id: "141026000000",
        tag: "临汾市,山西省"
      },
      {
        cityname: "阿勒腾席热镇",
        departtype: "1",
        findname: "阿勒腾席热镇",
        id: "150627100000",
        tag: "伊金霍洛旗,鄂尔多斯市,内蒙古"
      }
    ],
    max: 100,
    key: "A"
  },
  {
    departures: [
      {
        cityname: "蚌埠市",
        departtype: "1",
        findname: "蚌埠市",
        id: "340300000000",
        tag: "安徽省"
      },
      {
        cityname: "白城市",
        departtype: "1",
        findname: "白城市",
        id: "220800000000",
        tag: "吉林省"
      },
      {
        cityname: "保定市",
        departtype: "1",
        findname: "保定市",
        id: "130600000000",
        tag: "河北省"
      },
      {
        cityname: "北海市",
        departtype: "1",
        findname: "北海市",
        id: "450500000000",
        tag: "广西"
      },
      {
        cityname: "宝鸡市",
        departtype: "1",
        findname: "宝鸡市",
        id: "610300000000",
        tag: "陕西省"
      },
      {
        cityname: "北京市",
        departtype: "1",
        findname: "北京市",
        id: "110000000000",
        tag: "北京市"
      },
      {
        cityname: "百色市",
        departtype: "1",
        findname: "百色市",
        id: "451000000000",
        tag: "广西"
      },
      {
        cityname: "白山市",
        departtype: "1",
        findname: "白山市",
        id: "220600000000",
        tag: "吉林省"
      },
      {
        cityname: "保山市",
        departtype: "1",
        findname: "保山市",
        id: "530500000000",
        tag: "云南省"
      },
      {
        cityname: "包头市",
        departtype: "1",
        findname: "包头市",
        id: "150200000000",
        tag: "内蒙古"
      },
      {
        cityname: "保亭县",
        departtype: "1",
        findname: "保亭县",
        id: "469035000000",
        tag: "海南省"
      },
      {
        cityname: "巴彦淖尔市",
        departtype: "1",
        findname: "巴彦淖尔市",
        id: "150800000000",
        tag: "内蒙古"
      },
      {
        cityname: "白银市",
        departtype: "1",
        findname: "白银市",
        id: "620400000000",
        tag: "甘肃省"
      },
      {
        cityname: "巴中市",
        departtype: "1",
        findname: "巴中市",
        id: "511900000000",
        tag: "四川省"
      },
      {
        cityname: "滨州市",
        departtype: "1",
        findname: "滨州市",
        id: "371600000000",
        tag: "山东省"
      },
      {
        cityname: "亳州市",
        departtype: "1",
        findname: "亳州市",
        id: "341600000000",
        tag: "安徽省"
      },
      {
        cityname: "宝安区",
        departtype: "1",
        findname: "宝安区",
        id: "440306000000",
        tag: "深圳市,广东省"
      },
      {
        cityname: "北安市",
        departtype: "1",
        findname: "北安市",
        id: "231181000000",
        tag: "黑河市,黑龙江"
      },
      {
        cityname: "博白县",
        departtype: "1",
        findname: "博白县",
        id: "450923000000",
        tag: "玉林市,广西"
      },
      {
        cityname: "巴楚县",
        departtype: "1",
        findname: "巴楚县",
        id: "653130000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "拜城县",
        departtype: "1",
        findname: "拜城县",
        id: "652926000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "宾川县",
        departtype: "1",
        findname: "宾川县",
        id: "532924000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "巴东县",
        departtype: "1",
        findname: "巴东县",
        id: "422823000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "保德县",
        departtype: "1",
        findname: "保德县",
        id: "140931000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "布尔津县",
        departtype: "1",
        findname: "布尔津县",
        id: "654321000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "班戈县",
        departtype: "1",
        findname: "班戈县",
        id: "542428000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "白河县",
        departtype: "1",
        findname: "白河县",
        id: "610929000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "博湖县",
        departtype: "1",
        findname: "博湖县",
        id: "652829000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "保康县",
        departtype: "1",
        findname: "保康县",
        id: "420626000000",
        tag: "襄阳市,湖北省"
      },
      {
        cityname: "巴里坤县",
        departtype: "1",
        findname: "巴里坤县",
        id: "650521000000",
        tag: "哈密市,新疆"
      },
      {
        cityname: "北流市",
        departtype: "1",
        findname: "北流市",
        id: "450981000000",
        tag: "玉林市,广西"
      },
      {
        cityname: "勃利县",
        departtype: "1",
        findname: "勃利县",
        id: "230921000000",
        tag: "七台河市,黑龙江"
      },
      {
        cityname: "博罗县",
        departtype: "1",
        findname: "博罗县",
        id: "441322000000",
        tag: "惠州市,广东省"
      },
      {
        cityname: "巴林右旗",
        departtype: "1",
        findname: "巴林右旗",
        id: "150423000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "巴林左旗",
        departtype: "1",
        findname: "巴林左旗",
        id: "150422000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "巴青县",
        departtype: "1",
        findname: "巴青县",
        id: "542429000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "比如县",
        departtype: "1",
        findname: "比如县",
        id: "542423000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "白沙黎族自治县",
        departtype: "1",
        findname: "白沙黎族自治县",
        id: "469025000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "八宿县",
        departtype: "1",
        findname: "八宿县",
        id: "542127000000",
        tag: "昌都地区,西藏"
      },
      {
        cityname: "北屯市",
        departtype: "1",
        findname: "北屯市",
        id: "659005000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "泊头市",
        departtype: "1",
        findname: "泊头市",
        id: "130981000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "巴塘县",
        departtype: "1",
        findname: "巴塘县",
        id: "513335000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "宾县",
        departtype: "1",
        findname: "宾县",
        id: "230125000000",
        tag: "哈尔滨市,黑龙江"
      },
      {
        cityname: "柏乡县",
        departtype: "1",
        findname: "柏乡县",
        id: "130524000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "宾阳县",
        departtype: "1",
        findname: "宾阳县",
        id: "450126000000",
        tag: "南宁市,广西"
      },
      {
        cityname: "泌阳县",
        departtype: "1",
        findname: "泌阳县",
        id: "411726000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "博野县",
        departtype: "1",
        findname: "博野县",
        id: "130637000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "霸州市",
        departtype: "1",
        findname: "霸州市",
        id: "131081000000",
        tag: "廊坊市,河北省"
      },
      {
        cityname: "彬州市",
        departtype: "1",
        findname: "彬州市",
        id: "610482000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "宝昌镇",
        departtype: "1",
        findname: "宝昌镇",
        id: "152527100000",
        tag: "太仆寺旗,锡林郭勒盟,内蒙古"
      },
      {
        cityname: "宝丰镇",
        departtype: "1",
        findname: "宝丰镇",
        id: "420323103000",
        tag: "竹山县,十堰市,湖北省"
      },
      {
        cityname: "碧口镇",
        departtype: "1",
        findname: "碧口镇",
        id: "621222101000",
        tag: "文县,陇南市,甘肃省"
      },
      {
        cityname: "宝泉岭农场",
        departtype: "1",
        findname: "宝泉岭",
        id: "230421506000",
        tag: "萝北县,鹤岗市,黑龙江"
      },
      {
        cityname: "宝清镇",
        departtype: "1",
        findname: "宝清镇",
        id: "230523100000",
        tag: "宝清县,双鸭山市,黑龙江"
      }
    ],
    max: 100,
    key: "B"
  },
  {
    departures: [
      {
        cityname: "长春市",
        departtype: "1",
        findname: "长春市",
        id: "220100000000",
        tag: "吉林省"
      },
      {
        cityname: "昌都地区",
        departtype: "1",
        findname: "昌都地区",
        id: "542100000000",
        tag: "西藏"
      },
      {
        cityname: "承德市",
        departtype: "1",
        findname: "承德市",
        id: "130800000000",
        tag: "河北省"
      },
      {
        cityname: "成都市",
        departtype: "1",
        findname: "成都市",
        id: "510100000000",
        tag: "四川省"
      },
      {
        cityname: "赤峰市",
        departtype: "1",
        findname: "赤峰市",
        id: "150400000000",
        tag: "内蒙古"
      },
      {
        cityname: "昌江县",
        departtype: "1",
        findname: "昌江县",
        id: "469031000000",
        tag: "海南省"
      },
      {
        cityname: "楚雄彝族自治州",
        departtype: "1",
        findname: "楚雄彝族自治州",
        id: "532300000000",
        tag: "云南省"
      },
      {
        cityname: "沧州市",
        departtype: "1",
        findname: "沧州市",
        id: "130900000000",
        tag: "河北省"
      },
      {
        cityname: "长治市",
        departtype: "1",
        findname: "长治市",
        id: "140400000000",
        tag: "山西省"
      },
      {
        cityname: "潮州市",
        departtype: "1",
        findname: "潮州市",
        id: "445100000000",
        tag: "广东省"
      },
      {
        cityname: "池州市",
        departtype: "1",
        findname: "池州市",
        id: "341700000000",
        tag: "安徽省"
      },
      {
        cityname: "崇左市",
        departtype: "1",
        findname: "崇左市",
        id: "451400000000",
        tag: "广西"
      },
      {
        cityname: "滁州市",
        departtype: "1",
        findname: "滁州市",
        id: "341100000000",
        tag: "安徽省"
      },
      {
        cityname: "淳安县",
        departtype: "1",
        findname: "淳安县",
        id: "330127000000",
        tag: "杭州市,浙江省"
      },
      {
        cityname: "察布查尔锡伯自治县",
        departtype: "1",
        findname: "察布查尔县",
        id: "654022000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "赤壁市",
        departtype: "1",
        findname: "赤壁市",
        id: "421281000000",
        tag: "咸宁市,湖北省"
      },
      {
        cityname: "长白朝鲜族自治县",
        departtype: "1",
        findname: "长白县",
        id: "220623000000",
        tag: "白山市,吉林省"
      },
      {
        cityname: "陈仓区",
        departtype: "1",
        findname: "陈仓区",
        id: "610304000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "澄城县",
        departtype: "1",
        findname: "澄城县",
        id: "610525000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "赤城县",
        departtype: "1",
        findname: "赤城县",
        id: "130732000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "曹妃甸区",
        departtype: "1",
        findname: "曹妃甸区",
        id: "130209000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "城固县",
        departtype: "1",
        findname: "城固县",
        id: "610722000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "巢湖市",
        departtype: "1",
        findname: "巢湖市",
        id: "340181000000",
        tag: "合肥市,安徽省"
      },
      {
        cityname: "淳化县",
        departtype: "1",
        findname: "淳化县",
        id: "610430000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "昌江黎族自治县",
        departtype: "1",
        findname: "昌江黎族自治县",
        id: "469026000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "昌吉市",
        departtype: "1",
        findname: "昌吉市",
        id: "652301000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "澄江县",
        departtype: "1",
        findname: "澄江县",
        id: "530422000000",
        tag: "玉溪市,云南省"
      },
      {
        cityname: "赤坎区",
        departtype: "1",
        findname: "赤坎区",
        id: "440802000000",
        tag: "湛江市,广东省"
      },
      {
        cityname: "长乐市",
        departtype: "1",
        findname: "长乐市",
        id: "350182000000",
        tag: "福州市,福建省"
      },
      {
        cityname: "策勒县",
        departtype: "1",
        findname: "策勒县",
        id: "653225000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "长岭县",
        departtype: "1",
        findname: "长岭县",
        id: "220722000000",
        tag: "松原市,吉林省"
      },
      {
        cityname: "澄迈县",
        departtype: "1",
        findname: "澄迈县",
        id: "469023000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "错那县",
        departtype: "1",
        findname: "错那县",
        id: "540530000000",
        tag: "山南市,西藏"
      },
      {
        cityname: "崇仁县",
        departtype: "1",
        findname: "崇仁县",
        id: "361024000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "常山县",
        departtype: "1",
        findname: "常山县",
        id: "330822000000",
        tag: "衢州市,浙江省"
      },
      {
        cityname: "长武县",
        departtype: "1",
        findname: "长武县",
        id: "610428000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "成县",
        departtype: "1",
        findname: "成县",
        id: "621221000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "磁县",
        departtype: "1",
        findname: "磁县",
        id: "130427000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "岑溪市",
        departtype: "1",
        findname: "岑溪市",
        id: "450481000000",
        tag: "梧州市,广西"
      },
      {
        cityname: "楚雄市",
        departtype: "1",
        findname: "楚雄市",
        id: "532301000000",
        tag: "楚雄彝族自治州,云南省"
      },
      {
        cityname: "慈溪市",
        departtype: "1",
        findname: "慈溪市",
        id: "330282000000",
        tag: "宁波市,浙江省"
      },
      {
        cityname: "长兴县",
        departtype: "1",
        findname: "长兴县",
        id: "330522000000",
        tag: "湖州市,浙江省"
      },
      {
        cityname: "崇信县",
        departtype: "1",
        findname: "崇信县",
        id: "620823000000",
        tag: "平凉市,甘肃省"
      },
      {
        cityname: "长垣县",
        departtype: "1",
        findname: "长垣县",
        id: "410728000000",
        tag: "新乡市,河南省"
      },
      {
        cityname: "崇阳县",
        departtype: "1",
        findname: "崇阳县",
        id: "421223000000",
        tag: "咸宁市,湖北省"
      },
      {
        cityname: "崇义县",
        departtype: "1",
        findname: "崇义县",
        id: "360725000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "柴沟堡镇",
        departtype: "1",
        findname: "柴沟堡镇",
        id: "130728100000",
        tag: "怀安县,张家口市,河北省"
      },
      {
        cityname: "蔡家坡镇",
        departtype: "1",
        findname: "蔡家坡镇",
        id: "610323101000",
        tag: "岐山县,宝鸡市,陕西省"
      }
    ],
    max: 100,
    key: "C"
  },
  {
    departures: [
      {
        cityname: "东莞市",
        departtype: "1",
        findname: "东莞市",
        id: "441900000000",
        tag: "广东省"
      },
      {
        cityname: "德宏傣族景颇族自治州",
        departtype: "1",
        findname: "德宏傣族景颇族自治州",
        id: "533100000000",
        tag: "云南省"
      },
      {
        cityname: "大理白族自治州",
        departtype: "1",
        findname: "大理白族自治州",
        id: "532900000000",
        tag: "云南省"
      },
      {
        cityname: "大庆市",
        departtype: "1",
        findname: "大庆市",
        id: "230600000000",
        tag: "黑龙江"
      },
      {
        cityname: "迪庆藏族自治州",
        departtype: "1",
        findname: "迪庆藏族自治州",
        id: "533400000000",
        tag: "云南省"
      },
      {
        cityname: "大同市",
        departtype: "1",
        findname: "大同市",
        id: "140200000000",
        tag: "山西省"
      },
      {
        cityname: "定西市",
        departtype: "1",
        findname: "定西市",
        id: "621100000000",
        tag: "甘肃省"
      },
      {
        cityname: "德阳市",
        departtype: "1",
        findname: "德阳市",
        id: "510600000000",
        tag: "四川省"
      },
      {
        cityname: "东营市",
        departtype: "1",
        findname: "东营市",
        id: "370500000000",
        tag: "山东省"
      },
      {
        cityname: "儋州市",
        departtype: "1",
        findname: "儋州市",
        id: "469003000000",
        tag: "海南省"
      },
      {
        cityname: "德州市",
        departtype: "1",
        findname: "德州市",
        id: "371400000000",
        tag: "山东省"
      },
      {
        cityname: "大安市",
        departtype: "1",
        findname: "大安市",
        id: "220882000000",
        tag: "白城市,吉林省"
      },
      {
        cityname: "德安县",
        departtype: "1",
        findname: "德安县",
        id: "360426000000",
        tag: "九江市,江西省"
      },
      {
        cityname: "定安县",
        departtype: "1",
        findname: "定安县",
        id: "469021000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "大埔县",
        departtype: "1",
        findname: "大埔县",
        id: "441422000000",
        tag: "梅州市,广东省"
      },
      {
        cityname: "德保县",
        departtype: "1",
        findname: "德保县",
        id: "451024000000",
        tag: "百色市,广西"
      },
      {
        cityname: "迭部县",
        departtype: "1",
        findname: "迭部县",
        id: "623024000000",
        tag: "甘南藏族自治州,甘肃省"
      },
      {
        cityname: "定边县",
        departtype: "1",
        findname: "定边县",
        id: "610825000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "大柴旦行委",
        departtype: "1",
        findname: "大柴旦行委",
        id: "632825000000",
        tag: "海西自治州,青海省"
      },
      {
        cityname: "大城县",
        departtype: "1",
        findname: "大城县",
        id: "131025000000",
        tag: "廊坊市,河北省"
      },
      {
        cityname: "郸城县",
        departtype: "1",
        findname: "郸城县",
        id: "411625000000",
        tag: "周口市,河南省"
      },
      {
        cityname: "稻城县",
        departtype: "1",
        findname: "稻城县",
        id: "513337000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "杜尔伯特蒙古族自治县",
        departtype: "1",
        findname: "杜尔伯特蒙县",
        id: "230624000000",
        tag: "大庆市,黑龙江"
      },
      {
        cityname: "东方市",
        departtype: "1",
        findname: "东方市",
        id: "469007000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "丹凤县",
        departtype: "1",
        findname: "丹凤县",
        id: "611022000000",
        tag: "商洛市,陕西省"
      },
      {
        cityname: "道孚县",
        departtype: "1",
        findname: "道孚县",
        id: "513326000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "东丰县",
        departtype: "1",
        findname: "东丰县",
        id: "220421000000",
        tag: "辽源市,吉林省"
      },
      {
        cityname: "大关县",
        departtype: "1",
        findname: "大关县",
        id: "530624000000",
        tag: "昭通市,云南省"
      },
      {
        cityname: "德格县",
        departtype: "1",
        findname: "德格县",
        id: "513330000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "东光县",
        departtype: "1",
        findname: "东光县",
        id: "130923000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "德惠市",
        departtype: "1",
        findname: "德惠市",
        id: "220183000000",
        tag: "长春市,吉林省"
      },
      {
        cityname: "敦煌市",
        departtype: "1",
        findname: "敦煌市",
        id: "620982000000",
        tag: "酒泉市,甘肃省"
      },
      {
        cityname: "敦化市",
        departtype: "1",
        findname: "敦化市",
        id: "222403000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "德化县",
        departtype: "1",
        findname: "德化县",
        id: "350526000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "丹江口市",
        departtype: "1",
        findname: "丹江口市",
        id: "420381000000",
        tag: "十堰市,湖北省"
      },
      {
        cityname: "大理市",
        departtype: "1",
        findname: "大理市",
        id: "532901000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "达拉特旗",
        departtype: "1",
        findname: "达拉特旗",
        id: "150621000000",
        tag: "鄂尔多斯市,内蒙古"
      },
      {
        cityname: "大荔县",
        departtype: "1",
        findname: "大荔县",
        id: "610523000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "东辽县",
        departtype: "1",
        findname: "东辽县",
        id: "220422000000",
        tag: "辽源市,吉林省"
      },
      {
        cityname: "多伦县",
        departtype: "1",
        findname: "多伦县",
        id: "152531000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "大名县",
        departtype: "1",
        findname: "大名县",
        id: "130425000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "德清县",
        departtype: "1",
        findname: "德清县",
        id: "330521000000",
        tag: "湖州市,浙江省"
      },
      {
        cityname: "岱山县",
        departtype: "1",
        findname: "岱山县",
        id: "330921000000",
        tag: "舟山市,浙江省"
      },
      {
        cityname: "砀山县",
        departtype: "1",
        findname: "砀山县",
        id: "341321000000",
        tag: "宿州市,安徽省"
      },
      {
        cityname: "东山县",
        departtype: "1",
        findname: "东山县",
        id: "350626000000",
        tag: "漳州市,福建省"
      },
      {
        cityname: "独山子区",
        departtype: "1",
        findname: "独山子区",
        id: "650202000000",
        tag: "克拉玛依,新疆"
      },
      {
        cityname: "大同区",
        departtype: "1",
        findname: "大同区",
        id: "230606000000",
        tag: "大庆市,黑龙江"
      },
      {
        cityname: "当涂县",
        departtype: "1",
        findname: "当涂县",
        id: "340521000000",
        tag: "马鞍山市,安徽省"
      },
      {
        cityname: "洞头县",
        departtype: "1",
        findname: "洞头县",
        id: "330322000000",
        tag: "温州市,浙江省"
      },
      {
        cityname: "大武口区",
        departtype: "1",
        findname: "大武口区",
        id: "640202000000",
        tag: "石嘴山市,宁夏"
      },
      {
        cityname: "大悟县",
        departtype: "1",
        findname: "大悟县",
        id: "420922000000",
        tag: "孝感市,湖北省"
      },
      {
        cityname: "东乌珠穆沁旗",
        departtype: "1",
        findname: "东乌珠穆沁旗",
        id: "152525000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "代县",
        departtype: "1",
        findname: "代县",
        id: "140923000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "德兴市",
        departtype: "1",
        findname: "德兴市",
        id: "361181000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "大新县",
        departtype: "1",
        findname: "大新县",
        id: "451424000000",
        tag: "崇左市,广西"
      },
      {
        cityname: "定兴县",
        departtype: "1",
        findname: "定兴县",
        id: "130626000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "当阳市",
        departtype: "1",
        findname: "当阳市",
        id: "420582000000",
        tag: "宜昌市,湖北省"
      },
      {
        cityname: "大冶市",
        departtype: "1",
        findname: "大冶市",
        id: "420281000000",
        tag: "黄石市,湖北省"
      },
      {
        cityname: "东阳市",
        departtype: "1",
        findname: "东阳市",
        id: "330783000000",
        tag: "金华市,浙江省"
      },
      {
        cityname: "大余县",
        departtype: "1",
        findname: "大余县",
        id: "360723000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "定远县",
        departtype: "1",
        findname: "定远县",
        id: "341125000000",
        tag: "滁州市,安徽省"
      },
      {
        cityname: "定州市",
        departtype: "1",
        findname: "定州市",
        id: "130682000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "东至县",
        departtype: "1",
        findname: "东至县",
        id: "341721000000",
        tag: "池州市,安徽省"
      },
      {
        cityname: "大板镇",
        departtype: "1",
        findname: "大板镇",
        id: "150423100000",
        tag: "巴林右旗,赤峰市,内蒙古"
      },
      {
        cityname: "大柳塔镇",
        departtype: "1",
        findname: "大柳塔",
        id: "610821104000",
        tag: "神木县,榆林市,陕西省"
      },
      {
        cityname: "大武镇",
        departtype: "1",
        findname: "大武镇",
        id: "632621100000",
        tag: "玛沁县,果洛藏族自治州,青海省"
      }
    ],
    max: 100,
    key: "D"
  },
  {
    departures: [
      {
        cityname: "鄂尔多斯市",
        departtype: "1",
        findname: "鄂尔多斯市",
        id: "150600000000",
        tag: "内蒙古"
      },
      {
        cityname: "鄂州市",
        departtype: "1",
        findname: "鄂州市",
        id: "420700000000",
        tag: "湖北省"
      },
      {
        cityname: "额济纳旗",
        departtype: "1",
        findname: "额济纳旗",
        id: "152923000000",
        tag: "阿拉善盟,内蒙古"
      },
      {
        cityname: "鄂伦春自治旗",
        departtype: "1",
        findname: "鄂伦春自治旗",
        id: "150723000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "二连浩特市",
        departtype: "1",
        findname: "二连浩特市",
        id: "152501000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "峨眉山市",
        departtype: "1",
        findname: "峨眉山市",
        id: "511181000000",
        tag: "乐山市,四川省"
      },
      {
        cityname: "额敏县",
        departtype: "1",
        findname: "额敏县",
        id: "654221000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "恩施市",
        departtype: "1",
        findname: "恩施市",
        id: "422801000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "洱源县",
        departtype: "1",
        findname: "洱源县",
        id: "532930000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "二道白河镇",
        departtype: "1",
        findname: "二道白河镇",
        id: "222426102000",
        tag: "安图县,延边,吉林省"
      }
    ],
    max: 100,
    key: "E"
  },
  {
    departures: [
      {
        cityname: "防城港市",
        departtype: "1",
        findname: "防城港市",
        id: "450600000000",
        tag: "广西"
      },
      {
        cityname: "佛山市",
        departtype: "1",
        findname: "佛山市",
        id: "440600000000",
        tag: "广东省"
      },
      {
        cityname: "阜阳市",
        departtype: "1",
        findname: "阜阳市",
        id: "341200000000",
        tag: "安徽省"
      },
      {
        cityname: "福州市",
        departtype: "1",
        findname: "福州市",
        id: "350100000000",
        tag: "福建省"
      },
      {
        cityname: "抚州市",
        departtype: "1",
        findname: "抚州市",
        id: "361000000000",
        tag: "江西省"
      },
      {
        cityname: "福安市",
        departtype: "1",
        findname: "福安市",
        id: "350981000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "防城港防城区",
        departtype: "1",
        findname: "防城港防城区",
        id: "450600000001",
        tag: "防城港市,广西"
      },
      {
        cityname: "丰城市",
        departtype: "1",
        findname: "丰城市",
        id: "360981000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "阜城县",
        departtype: "1",
        findname: "阜城县",
        id: "131128000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "富川瑶族自治县",
        departtype: "1",
        findname: "富川县",
        id: "451123000000",
        tag: "贺州市,广西"
      },
      {
        cityname: "福鼎市",
        departtype: "1",
        findname: "福鼎市",
        id: "350982000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "峰峰矿区",
        departtype: "1",
        findname: "峰峰矿区",
        id: "130406000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "扶风县",
        departtype: "1",
        findname: "扶风县",
        id: "610324000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "府谷县",
        departtype: "1",
        findname: "府谷县",
        id: "610822000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "奉化市",
        departtype: "1",
        findname: "奉化市",
        id: "330283000000",
        tag: "宁波市,浙江省"
      },
      {
        cityname: "福海县",
        departtype: "1",
        findname: "福海县",
        id: "654323000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "阜康市",
        departtype: "1",
        findname: "阜康市",
        id: "652302000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "阜南县",
        departtype: "1",
        findname: "阜南县",
        id: "341225000000",
        tag: "阜阳市,安徽省"
      },
      {
        cityname: "富宁县",
        departtype: "1",
        findname: "富宁县",
        id: "532628000000",
        tag: "文山壮族苗族自治州,云南省"
      },
      {
        cityname: "佛坪县",
        departtype: "1",
        findname: "佛坪县",
        id: "610730000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "阜平县",
        departtype: "1",
        findname: "阜平县",
        id: "130624000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "富平县",
        departtype: "1",
        findname: "富平县",
        id: "610528000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "凤庆县",
        departtype: "1",
        findname: "凤庆县",
        id: "530921000000",
        tag: "临沧市,云南省"
      },
      {
        cityname: "繁峙县",
        departtype: "1",
        findname: "繁峙县",
        id: "140924000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "抚松县",
        departtype: "1",
        findname: "抚松县",
        id: "220621000000",
        tag: "白山市,吉林省"
      },
      {
        cityname: "扶绥县",
        departtype: "1",
        findname: "扶绥县",
        id: "451421000000",
        tag: "崇左市,广西"
      },
      {
        cityname: "福田区",
        departtype: "1",
        findname: "福田区",
        id: "440304000000",
        tag: "深圳市,广东省"
      },
      {
        cityname: "凤台县",
        departtype: "1",
        findname: "凤台县",
        id: "340421000000",
        tag: "淮南市,安徽省"
      },
      {
        cityname: "房县",
        departtype: "1",
        findname: "房县",
        id: "420325000000",
        tag: "十堰市,湖北省"
      },
      {
        cityname: "凤县",
        departtype: "1",
        findname: "凤县",
        id: "610330000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "凤翔区",
        departtype: "1",
        findname: "凤翔区",
        id: "610305000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "肥乡县",
        departtype: "1",
        findname: "肥乡县",
        id: "130428000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "奉新县",
        departtype: "1",
        findname: "奉新县",
        id: "360921000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "汾阳市",
        departtype: "1",
        findname: "汾阳市",
        id: "141182000000",
        tag: "吕梁市,山西省"
      },
      {
        cityname: "扶余市",
        departtype: "1",
        findname: "扶余市",
        id: "220724000000",
        tag: "松原市,吉林省"
      },
      {
        cityname: "凤阳县",
        departtype: "1",
        findname: "凤阳县",
        id: "341126000000",
        tag: "滁州市,安徽省"
      },
      {
        cityname: "分宜县",
        departtype: "1",
        findname: "分宜县",
        id: "360521000000",
        tag: "新余市,江西省"
      },
      {
        cityname: "富源县",
        departtype: "1",
        findname: "富源县",
        id: "530325000000",
        tag: "曲靖市,云南省"
      },
      {
        cityname: "富蕴县",
        departtype: "1",
        findname: "富蕴县",
        id: "654322000000",
        tag: "阿勒泰地区,新疆"
      }
    ],
    max: 100,
    key: "F"
  },
  {
    departures: [
      {
        cityname: "广安市",
        departtype: "1",
        findname: "广安市",
        id: "511600000000",
        tag: "四川省"
      },
      {
        cityname: "贵港市",
        departtype: "1",
        findname: "贵港市",
        id: "450800000000",
        tag: "广西"
      },
      {
        cityname: "桂林市",
        departtype: "1",
        findname: "桂林市",
        id: "450300000000",
        tag: "广西"
      },
      {
        cityname: "固原市",
        departtype: "1",
        findname: "固原市",
        id: "640400000000",
        tag: "宁夏"
      },
      {
        cityname: "赣州市",
        departtype: "1",
        findname: "赣州市",
        id: "360700000000",
        tag: "江西省"
      },
      {
        cityname: "广州市",
        departtype: "1",
        findname: "广州市",
        id: "440100000000",
        tag: "广东省"
      },
      {
        cityname: "甘孜藏族自治州",
        departtype: "1",
        findname: "甘孜州",
        id: "513300000000",
        tag: "四川省"
      },
      {
        cityname: "公安县",
        departtype: "1",
        findname: "公安县",
        id: "421022000000",
        tag: "荆州市,湖北省"
      },
      {
        cityname: "固安县",
        departtype: "1",
        findname: "固安县",
        id: "131022000000",
        tag: "廊坊市,河北省"
      },
      {
        cityname: "高碑店市",
        departtype: "1",
        findname: "高碑店市",
        id: "130684000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "古城区",
        departtype: "1",
        findname: "古城区",
        id: "530702000000",
        tag: "丽江市,云南省"
      },
      {
        cityname: "恭城瑶族自治县",
        departtype: "1",
        findname: "恭城县",
        id: "450332000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "广昌县",
        departtype: "1",
        findname: "广昌县",
        id: "361030000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "故城县",
        departtype: "1",
        findname: "故城县",
        id: "131126000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "谷城县",
        departtype: "1",
        findname: "谷城县",
        id: "420625000000",
        tag: "襄阳市,湖北省"
      },
      {
        cityname: "广德县",
        departtype: "1",
        findname: "广德县",
        id: "341822000000",
        tag: "宣城市,安徽省"
      },
      {
        cityname: "贵德县",
        departtype: "1",
        findname: "贵德县",
        id: "632523000000",
        tag: "海南藏族自治州,青海省"
      },
      {
        cityname: "格尔木市",
        departtype: "1",
        findname: "格尔木市",
        id: "632801000000",
        tag: "海西自治州,青海省"
      },
      {
        cityname: "广丰县",
        departtype: "1",
        findname: "广丰县",
        id: "361122000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "甘谷县",
        departtype: "1",
        findname: "甘谷县",
        id: "620523000000",
        tag: "天水市,甘肃省"
      },
      {
        cityname: "根河市",
        departtype: "1",
        findname: "根河市",
        id: "150785000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "共和县",
        departtype: "1",
        findname: "共和县",
        id: "632521000000",
        tag: "海南藏族自治州,青海省"
      },
      {
        cityname: "贡觉县",
        departtype: "1",
        findname: "贡觉县",
        id: "542123000000",
        tag: "昌都地区,西藏"
      },
      {
        cityname: "巩留县",
        departtype: "1",
        findname: "巩留县",
        id: "654024000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "广灵县",
        departtype: "1",
        findname: "广灵县",
        id: "140223000000",
        tag: "大同市,山西省"
      },
      {
        cityname: "耿马傣族佤族自治县",
        departtype: "1",
        findname: "耿马傣族佤族自治县",
        id: "530926000000",
        tag: "临沧市,云南省"
      },
      {
        cityname: "高密市",
        departtype: "1",
        findname: "高密市",
        id: "370785000000",
        tag: "潍坊市,山东省"
      },
      {
        cityname: "广南县",
        departtype: "1",
        findname: "广南县",
        id: "532627000000",
        tag: "文山壮族苗族自治州,云南省"
      },
      {
        cityname: "广宁县",
        departtype: "1",
        findname: "广宁县",
        id: "441223000000",
        tag: "肇庆市,广东省"
      },
      {
        cityname: "高平市",
        departtype: "1",
        findname: "高平市",
        id: "140581000000",
        tag: "晋城市,山西省"
      },
      {
        cityname: "桂平市",
        departtype: "1",
        findname: "桂平市",
        id: "450881000000",
        tag: "贵港市,广西"
      },
      {
        cityname: "共青城市",
        departtype: "1",
        findname: "共青城市",
        id: "360482000000",
        tag: "九江市,江西省"
      },
      {
        cityname: "甘泉县",
        departtype: "1",
        findname: "甘泉县",
        id: "610627000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "广水市",
        departtype: "1",
        findname: "广水市",
        id: "421381000000",
        tag: "随州市,湖北省"
      },
      {
        cityname: "光山县",
        departtype: "1",
        findname: "光山县",
        id: "411522000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "固始县",
        departtype: "1",
        findname: "固始县",
        id: "411525000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "高台县",
        departtype: "1",
        findname: "高台县",
        id: "620724000000",
        tag: "张掖市,甘肃省"
      },
      {
        cityname: "馆陶县",
        departtype: "1",
        findname: "馆陶县",
        id: "130433000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "古田县",
        departtype: "1",
        findname: "古田县",
        id: "350922000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "高阳县",
        departtype: "1",
        findname: "高阳县",
        id: "130628000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "灌阳县",
        departtype: "1",
        findname: "灌阳县",
        id: "450327000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "涡阳县",
        departtype: "1",
        findname: "涡阳县",
        id: "341621000000",
        tag: "亳州市,安徽省"
      },
      {
        cityname: "固阳县",
        departtype: "1",
        findname: "固阳县",
        id: "150222000000",
        tag: "包头市,内蒙古"
      },
      {
        cityname: "沽源县",
        departtype: "1",
        findname: "沽源县",
        id: "130724000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "公主岭市",
        departtype: "1",
        findname: "公主岭市",
        id: "220381000000",
        tag: "四平市,吉林省"
      },
      {
        cityname: "甘孜县",
        departtype: "1",
        findname: "甘孜县",
        id: "513328000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "瓜州县",
        departtype: "1",
        findname: "瓜州县",
        id: "620922000000",
        tag: "酒泉市,甘肃省"
      },
      {
        cityname: "嘎鲁图镇",
        departtype: "1",
        findname: "嘎鲁图镇",
        id: "150626100000",
        tag: "乌审旗,鄂尔多斯市,内蒙古"
      }
    ],
    max: 100,
    key: "G"
  },
  {
    departures: [
      {
        cityname: "淮北市",
        departtype: "1",
        findname: "淮北市",
        id: "340600000000",
        tag: "安徽省"
      },
      {
        cityname: "海东市",
        departtype: "1",
        findname: "海东市",
        id: "630200000000",
        tag: "青海省"
      },
      {
        cityname: "邯郸市",
        departtype: "1",
        findname: "邯郸市",
        id: "130400000000",
        tag: "河北省"
      },
      {
        cityname: "哈尔滨市",
        departtype: "1",
        findname: "哈尔滨市",
        id: "230100000000",
        tag: "黑龙江"
      },
      {
        cityname: "合肥市",
        departtype: "1",
        findname: "合肥市",
        id: "340100000000",
        tag: "安徽省"
      },
      {
        cityname: "鹤岗市",
        departtype: "1",
        findname: "鹤岗市",
        id: "230400000000",
        tag: "黑龙江"
      },
      {
        cityname: "黄冈市",
        departtype: "1",
        findname: "黄冈市",
        id: "421100000000",
        tag: "湖北省"
      },
      {
        cityname: "红河哈尼族彝族自治州",
        departtype: "1",
        findname: "红河哈尼族彝族自治州",
        id: "532500000000",
        tag: "云南省"
      },
      {
        cityname: "呼和浩特市",
        departtype: "1",
        findname: "呼和浩特",
        id: "150100000000",
        tag: "内蒙古"
      },
      {
        cityname: "黑河市",
        departtype: "1",
        findname: "黑河市",
        id: "231100000000",
        tag: "黑龙江"
      },
      {
        cityname: "海口市",
        departtype: "1",
        findname: "海口市",
        id: "460100000000",
        tag: "海南省"
      },
      {
        cityname: "呼伦贝尔市",
        departtype: "1",
        findname: "呼伦贝尔市",
        id: "150700000000",
        tag: "内蒙古"
      },
      {
        cityname: "哈密地区",
        departtype: "1",
        findname: "哈密地区",
        id: "652200000000",
        tag: "新疆"
      },
      {
        cityname: "哈密市",
        departtype: "1",
        findname: "哈密市",
        id: "650500000000",
        tag: "新疆"
      },
      {
        cityname: "淮南市",
        departtype: "1",
        findname: "淮南市",
        id: "340400000000",
        tag: "安徽省"
      },
      {
        cityname: "衡水市",
        departtype: "1",
        findname: "衡水市",
        id: "131100000000",
        tag: "河北省"
      },
      {
        cityname: "黄山市",
        departtype: "1",
        findname: "黄山市",
        id: "341000000000",
        tag: "安徽省"
      },
      {
        cityname: "和田地区",
        departtype: "1",
        findname: "和田地区",
        id: "653200000000",
        tag: "新疆"
      },
      {
        cityname: "河源市",
        departtype: "1",
        findname: "河源市",
        id: "441600000000",
        tag: "广东省"
      },
      {
        cityname: "杭州市",
        departtype: "1",
        findname: "杭州市",
        id: "330100000000",
        tag: "浙江省"
      },
      {
        cityname: "汉中市",
        departtype: "1",
        findname: "汉中市",
        id: "610700000000",
        tag: "陕西省"
      },
      {
        cityname: "菏泽市",
        departtype: "1",
        findname: "菏泽市",
        id: "371700000000",
        tag: "山东省"
      },
      {
        cityname: "贺州市",
        departtype: "1",
        findname: "贺州市",
        id: "451100000000",
        tag: "广西"
      },
      {
        cityname: "惠州市",
        departtype: "1",
        findname: "惠州市",
        id: "441300000000",
        tag: "广东省"
      },
      {
        cityname: "湖州市",
        departtype: "1",
        findname: "湖州市",
        id: "330500000000",
        tag: "浙江省"
      },
      {
        cityname: "红安县",
        departtype: "1",
        findname: "红安县",
        id: "421122000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "惠安县",
        departtype: "1",
        findname: "惠安县",
        id: "350521000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "哈巴河县",
        departtype: "1",
        findname: "哈巴河县",
        id: "654324000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "和布克赛尔蒙古自治县",
        departtype: "1",
        findname: "和布克赛尔县",
        id: "654226000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "淮滨县",
        departtype: "1",
        findname: "淮滨县",
        id: "411527000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "韩城市",
        departtype: "1",
        findname: "韩城市",
        id: "610581000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "汉川市",
        departtype: "1",
        findname: "汉川市",
        id: "420984000000",
        tag: "孝感市,湖北省"
      },
      {
        cityname: "珲春市",
        departtype: "1",
        findname: "珲春市",
        id: "222404000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "华池县",
        departtype: "1",
        findname: "华池县",
        id: "621023000000",
        tag: "庆阳市,甘肃省"
      },
      {
        cityname: "会昌县",
        departtype: "1",
        findname: "会昌县",
        id: "360733000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "霍城县",
        departtype: "1",
        findname: "霍城县",
        id: "654023000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "桦甸市",
        departtype: "1",
        findname: "桦甸市",
        id: "220282000000",
        tag: "吉林市,吉林省"
      },
      {
        cityname: "霍尔果斯市",
        departtype: "1",
        findname: "霍尔果斯市",
        id: "654004000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "鹤峰县",
        departtype: "1",
        findname: "鹤峰县",
        id: "422828000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "壶关县",
        departtype: "1",
        findname: "壶关县",
        id: "140427000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "洪湖市",
        departtype: "1",
        findname: "洪湖市",
        id: "421083000000",
        tag: "荆州市,湖北省"
      },
      {
        cityname: "黄骅市",
        departtype: "1",
        findname: "黄骅市",
        id: "130983000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "红河县",
        departtype: "1",
        findname: "红河县",
        id: "532529000000",
        tag: "红河哈尼族彝族自治州,云南省"
      },
      {
        cityname: "河津市",
        departtype: "1",
        findname: "河津市",
        id: "140882000000",
        tag: "运城市,山西省"
      },
      {
        cityname: "和静县",
        departtype: "1",
        findname: "和静县",
        id: "652827000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "厚街镇",
        departtype: "1",
        findname: "厚街镇",
        id: "441900122000",
        tag: "东莞市,广东省"
      },
      {
        cityname: "湖口县",
        departtype: "1",
        findname: "湖口县",
        id: "360429000000",
        tag: "九江市,江西省"
      },
      {
        cityname: "海拉尔区",
        departtype: "1",
        findname: "海拉尔区",
        id: "150702000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "霍林郭勒市",
        departtype: "1",
        findname: "霍林郭勒",
        id: "150581000000",
        tag: "通辽市,内蒙古"
      },
      {
        cityname: "海林市",
        departtype: "1",
        findname: "海林市",
        id: "231083000000",
        tag: "牡丹江市,黑龙江"
      },
      {
        cityname: "海伦市",
        departtype: "1",
        findname: "海伦市",
        id: "231283000000",
        tag: "绥化市,黑龙江"
      },
      {
        cityname: "和龙市",
        departtype: "1",
        findname: "和龙市",
        id: "222406000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "虎林市",
        departtype: "1",
        findname: "虎林市",
        id: "230381000000",
        tag: "鸡西市,黑龙江"
      },
      {
        cityname: "怀来县",
        departtype: "1",
        findname: "怀来县",
        id: "130730000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "黄陵县",
        departtype: "1",
        findname: "黄陵县",
        id: "610632000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "黄龙县",
        departtype: "1",
        findname: "黄龙县",
        id: "610631000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "侯马市",
        departtype: "1",
        findname: "侯马市",
        id: "141081000000",
        tag: "临汾市,山西省"
      },
      {
        cityname: "黄梅县",
        departtype: "1",
        findname: "黄梅县",
        id: "421127000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "呼玛县",
        departtype: "1",
        findname: "呼玛县",
        id: "232721000000",
        tag: "大兴安岭地区,黑龙江"
      },
      {
        cityname: "惠农区",
        departtype: "1",
        findname: "惠农区",
        id: "640205000000",
        tag: "石嘴山市,宁夏"
      },
      {
        cityname: "海宁市",
        departtype: "1",
        findname: "海宁市",
        id: "330481000000",
        tag: "嘉兴市,浙江省"
      },
      {
        cityname: "河南蒙古族自治县",
        departtype: "1",
        findname: "河南县",
        id: "632324000000",
        tag: "黄南藏族自治州,青海省"
      },
      {
        cityname: "怀宁县",
        departtype: "1",
        findname: "怀宁县",
        id: "340822000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "桦南县",
        departtype: "1",
        findname: "桦南县",
        id: "230822000000",
        tag: "佳木斯市,黑龙江"
      },
      {
        cityname: "辉南县",
        departtype: "1",
        findname: "辉南县",
        id: "220523000000",
        tag: "通化市,吉林省"
      },
      {
        cityname: "会宁县",
        departtype: "1",
        findname: "会宁县",
        id: "620422000000",
        tag: "白银市,甘肃省"
      },
      {
        cityname: "鹤庆县",
        departtype: "1",
        findname: "鹤庆县",
        id: "532932000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "河曲县",
        departtype: "1",
        findname: "河曲县",
        id: "140930000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "怀仁县",
        departtype: "1",
        findname: "怀仁县",
        id: "140624000000",
        tag: "朔州市,山西省"
      },
      {
        cityname: "合山市",
        departtype: "1",
        findname: "合山市",
        id: "451381000000",
        tag: "来宾市,广西"
      },
      {
        cityname: "含山县",
        departtype: "1",
        findname: "含山县",
        id: "340522000000",
        tag: "马鞍山市,安徽省"
      },
      {
        cityname: "横山县",
        departtype: "1",
        findname: "横山县",
        id: "610823000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "和顺县",
        departtype: "1",
        findname: "和顺县",
        id: "140723000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "和硕县",
        departtype: "1",
        findname: "和硕县",
        id: "652828000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "霍山县",
        departtype: "1",
        findname: "霍山县",
        id: "341525000000",
        tag: "六安市,安徽省"
      },
      {
        cityname: "呼图壁县",
        departtype: "1",
        findname: "呼图壁县",
        id: "652323000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "红塔区",
        departtype: "1",
        findname: "红塔区",
        id: "530402000000",
        tag: "玉溪市,云南省"
      },
      {
        cityname: "和田市",
        departtype: "1",
        findname: "和田市",
        id: "653201000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "华亭市",
        departtype: "1",
        findname: "华亭市",
        id: "620824000000",
        tag: "平凉市,甘肃省"
      },
      {
        cityname: "和田县",
        departtype: "1",
        findname: "和田县",
        id: "653221000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "和县",
        departtype: "1",
        findname: "和县",
        id: "340523000000",
        tag: "马鞍山市,安徽省"
      },
      {
        cityname: "环县",
        departtype: "1",
        findname: "环县",
        id: "621022000000",
        tag: "庆阳市,甘肃省"
      },
      {
        cityname: "徽县",
        departtype: "1",
        findname: "徽县",
        id: "621227000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "辉县市",
        departtype: "1",
        findname: "辉县市",
        id: "410782000000",
        tag: "新乡市,河南省"
      },
      {
        cityname: "海兴县",
        departtype: "1",
        findname: "海兴县",
        id: "130924000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "海阳市",
        departtype: "1",
        findname: "海阳市",
        id: "370687000000",
        tag: "烟台市,山东省"
      },
      {
        cityname: "海原县",
        departtype: "1",
        findname: "海原县",
        id: "640522000000",
        tag: "中卫市,宁夏"
      },
      {
        cityname: "汉阴县",
        departtype: "1",
        findname: "汉阴县",
        id: "610921000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "汉源县",
        departtype: "1",
        findname: "汉源县",
        id: "511823000000",
        tag: "雅安市,四川省"
      },
      {
        cityname: "合阳县",
        departtype: "1",
        findname: "合阳县",
        id: "610524000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "淮阳县",
        departtype: "1",
        findname: "淮阳县",
        id: "411626000000",
        tag: "周口市,河南省"
      },
      {
        cityname: "怀远县",
        departtype: "1",
        findname: "怀远县",
        id: "340321000000",
        tag: "蚌埠市,安徽省"
      },
      {
        cityname: "浑源县",
        departtype: "1",
        findname: "浑源县",
        id: "140225000000",
        tag: "大同市,山西省"
      },
      {
        cityname: "横州市",
        departtype: "1",
        findname: "横州市",
        id: "450127000000",
        tag: "南宁市,广西"
      },
      {
        cityname: "合作市",
        departtype: "1",
        findname: "合作市",
        id: "623001000000",
        tag: "甘南藏族自治州,甘肃省"
      },
      {
        cityname: "互助土族自治县",
        departtype: "1",
        findname: "互助县",
        id: "630223000000",
        tag: "海东市,青海省"
      },
      {
        cityname: "和什托洛盖镇",
        departtype: "1",
        findname: "和什托洛盖镇",
        id: "654226101000",
        tag: "和布克赛尔县,塔城地区,新疆"
      }
    ],
    max: 100,
    key: "H"
  },
  {
    departures: [
      {
        cityname: "吉安市",
        departtype: "1",
        findname: "吉安市",
        id: "360800000000",
        tag: "江西省"
      },
      {
        cityname: "金昌市",
        departtype: "1",
        findname: "金昌市",
        id: "620300000000",
        tag: "甘肃省"
      },
      {
        cityname: "晋城市",
        departtype: "1",
        findname: "晋城市",
        id: "140500000000",
        tag: "山西省"
      },
      {
        cityname: "景德镇市",
        departtype: "1",
        findname: "景德镇市",
        id: "360200000000",
        tag: "江西省"
      },
      {
        cityname: "金华市",
        departtype: "1",
        findname: "金华市",
        id: "330700000000",
        tag: "浙江省"
      },
      {
        cityname: "九江市",
        departtype: "1",
        findname: "九江市",
        id: "360400000000",
        tag: "江西省"
      },
      {
        cityname: "吉林市",
        departtype: "1",
        findname: "吉林市",
        id: "220200000000",
        tag: "吉林省"
      },
      {
        cityname: "江门市",
        departtype: "1",
        findname: "江门市",
        id: "440700000000",
        tag: "广东省"
      },
      {
        cityname: "荆门市",
        departtype: "1",
        findname: "荆门市",
        id: "420800000000",
        tag: "湖北省"
      },
      {
        cityname: "佳木斯市",
        departtype: "1",
        findname: "佳木斯市",
        id: "230800000000",
        tag: "黑龙江"
      },
      {
        cityname: "济南市",
        departtype: "1",
        findname: "济南市",
        id: "370100000000",
        tag: "山东省"
      },
      {
        cityname: "济宁市",
        departtype: "1",
        findname: "济宁市",
        id: "370800000000",
        tag: "山东省"
      },
      {
        cityname: "酒泉市",
        departtype: "1",
        findname: "酒泉市",
        id: "620900000000",
        tag: "甘肃省"
      },
      {
        cityname: "嘉兴市",
        departtype: "1",
        findname: "嘉兴市",
        id: "330400000000",
        tag: "浙江省"
      },
      {
        cityname: "鸡西市",
        departtype: "1",
        findname: "鸡西市",
        id: "230300000000",
        tag: "黑龙江"
      },
      {
        cityname: "嘉峪关市",
        departtype: "1",
        findname: "嘉峪关市",
        id: "620200000000",
        tag: "甘肃省"
      },
      {
        cityname: "揭阳市",
        departtype: "1",
        findname: "揭阳市",
        id: "445200000000",
        tag: "广东省"
      },
      {
        cityname: "荆州市",
        departtype: "1",
        findname: "荆州市",
        id: "421000000000",
        tag: "湖北省"
      },
      {
        cityname: "晋中市",
        departtype: "1",
        findname: "晋中市",
        id: "140700000000",
        tag: "山西省"
      },
      {
        cityname: "集安市",
        departtype: "1",
        findname: "集安市",
        id: "220582000000",
        tag: "通化市,吉林省"
      },
      {
        cityname: "靖安县",
        departtype: "1",
        findname: "靖安县",
        id: "360925000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "靖边县",
        departtype: "1",
        findname: "靖边县",
        id: "610824000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "加查县",
        departtype: "1",
        findname: "加查县",
        id: "540528000000",
        tag: "山南市,西藏"
      },
      {
        cityname: "剑川县",
        departtype: "1",
        findname: "剑川县",
        id: "532931000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "江城哈尼族彝族自治县",
        departtype: "1",
        findname: "江城县",
        id: "530826000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "交城县",
        departtype: "1",
        findname: "交城县",
        id: "141122000000",
        tag: "吕梁市,山西省"
      },
      {
        cityname: "泾川县",
        departtype: "1",
        findname: "泾川县",
        id: "620821000000",
        tag: "平凉市,甘肃省"
      },
      {
        cityname: "建德市",
        departtype: "1",
        findname: "建德市",
        id: "330182000000",
        tag: "杭州市,浙江省"
      },
      {
        cityname: "旌德县",
        departtype: "1",
        findname: "旌德县",
        id: "341825000000",
        tag: "宣城市,安徽省"
      },
      {
        cityname: "景东彝族自治县",
        departtype: "1",
        findname: "景东彝族自治县",
        id: "530823000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "加格达奇",
        departtype: "1",
        findname: "加格达奇",
        id: "232701000000",
        tag: "大兴安岭地区,黑龙江"
      },
      {
        cityname: "景谷傣族彝族自治县",
        departtype: "1",
        findname: "景谷傣族彝族自治县",
        id: "530824000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "井冈山市",
        departtype: "1",
        findname: "井冈山市",
        id: "360881000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "蛟河市",
        departtype: "1",
        findname: "蛟河市",
        id: "220281000000",
        tag: "吉林市,吉林省"
      },
      {
        cityname: "景洪市",
        departtype: "1",
        findname: "景洪市",
        id: "532801000000",
        tag: "西双版纳傣族自治州,云南省"
      },
      {
        cityname: "晋江市",
        departtype: "1",
        findname: "晋江市",
        id: "350582000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "监利市",
        departtype: "1",
        findname: "监利市",
        id: "421088000000",
        tag: "荆州市,湖北省"
      },
      {
        cityname: "嘉黎县",
        departtype: "1",
        findname: "嘉黎县",
        id: "542422000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "静乐县",
        departtype: "1",
        findname: "静乐县",
        id: "140926000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "巨鹿县",
        departtype: "1",
        findname: "巨鹿县",
        id: "130529000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "吉木乃县",
        departtype: "1",
        findname: "吉木乃县",
        id: "654326000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "吉木萨尔县",
        departtype: "1",
        findname: "吉木萨尔",
        id: "652327000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "且末县",
        departtype: "1",
        findname: "且末县",
        id: "652825000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "景宁畲族自治县",
        departtype: "1",
        findname: "景宁畲族自治县",
        id: "331127000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "静宁县",
        departtype: "1",
        findname: "静宁县",
        id: "620826000000",
        tag: "平凉市,甘肃省"
      },
      {
        cityname: "金平苗族瑶族傣族自治县",
        departtype: "1",
        findname: "金平苗族瑶族傣族自治县",
        id: "532530000000",
        tag: "红河哈尼族彝族自治州,云南省"
      },
      {
        cityname: "江山市",
        departtype: "1",
        findname: "江山市",
        id: "330881000000",
        tag: "衢州市,浙江省"
      },
      {
        cityname: "界首市",
        departtype: "1",
        findname: "界首市",
        id: "341282000000",
        tag: "阜阳市,安徽省"
      },
      {
        cityname: "京山市",
        departtype: "1",
        findname: "京山市",
        id: "420882000000",
        tag: "荆门市,湖北省"
      },
      {
        cityname: "建始县",
        departtype: "1",
        findname: "建始县",
        id: "422822000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "建水县",
        departtype: "1",
        findname: "建水县",
        id: "532524000000",
        tag: "红河哈尼族彝族自治州,云南省"
      },
      {
        cityname: "嘉善县",
        departtype: "1",
        findname: "嘉善县",
        id: "330421000000",
        tag: "嘉兴市,浙江省"
      },
      {
        cityname: "伽师县",
        departtype: "1",
        findname: "伽师县",
        id: "653129000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "吉水县",
        departtype: "1",
        findname: "吉水县",
        id: "360822000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "景泰县",
        departtype: "1",
        findname: "景泰县",
        id: "620423000000",
        tag: "白银市,甘肃省"
      },
      {
        cityname: "金塔县",
        departtype: "1",
        findname: "金塔县",
        id: "620921000000",
        tag: "酒泉市,甘肃省"
      },
      {
        cityname: "景县",
        departtype: "1",
        findname: "景县",
        id: "131127000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "泾县",
        departtype: "1",
        findname: "泾县",
        id: "341823000000",
        tag: "宣城市,安徽省"
      },
      {
        cityname: "介休市",
        departtype: "1",
        findname: "介休市",
        id: "140781000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "靖西市",
        departtype: "1",
        findname: "靖西市",
        id: "451081000000",
        tag: "百色市,广西"
      },
      {
        cityname: "嘉祥县",
        departtype: "1",
        findname: "嘉祥县",
        id: "370829000000",
        tag: "济宁市,山东省"
      },
      {
        cityname: "金乡县",
        departtype: "1",
        findname: "金乡县",
        id: "370828000000",
        tag: "济宁市,山东省"
      },
      {
        cityname: "金秀瑶族自治县",
        departtype: "1",
        findname: "金秀县",
        id: "451324000000",
        tag: "来宾市,广西"
      },
      {
        cityname: "金溪县",
        departtype: "1",
        findname: "金溪县",
        id: "361027000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "集贤县",
        departtype: "1",
        findname: "集贤县",
        id: "230521000000",
        tag: "双鸭山市,黑龙江"
      },
      {
        cityname: "绩溪县",
        departtype: "1",
        findname: "绩溪县",
        id: "341824000000",
        tag: "宣城市,安徽省"
      },
      {
        cityname: "江源县",
        departtype: "1",
        findname: "江源县",
        id: "220625000000",
        tag: "白山市,吉林省"
      },
      {
        cityname: "嘉荫县",
        departtype: "1",
        findname: "嘉荫县",
        id: "230722000000",
        tag: "伊春市,黑龙江"
      },
      {
        cityname: "嘉鱼县",
        departtype: "1",
        findname: "嘉鱼县",
        id: "421221000000",
        tag: "咸宁市,湖北省"
      },
      {
        cityname: "靖远县",
        departtype: "1",
        findname: "靖远县",
        id: "620421000000",
        tag: "白银市,甘肃省"
      },
      {
        cityname: "泾源县",
        departtype: "1",
        findname: "泾源县",
        id: "640424000000",
        tag: "固原市,宁夏"
      },
      {
        cityname: "靖宇县",
        departtype: "1",
        findname: "靖宇县",
        id: "220622000000",
        tag: "白山市,吉林省"
      },
      {
        cityname: "缙云县",
        departtype: "1",
        findname: "缙云县",
        id: "331122000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "冀州区",
        departtype: "1",
        findname: "冀州区",
        id: "131181000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "九华镇",
        departtype: "1",
        findname: "九华镇",
        id: "341723110000",
        tag: "青阳县,池州市,安徽省"
      },
      {
        cityname: "经棚镇",
        departtype: "1",
        findname: "经棚镇",
        id: "150425100000",
        tag: "克什克腾,赤峰市,内蒙古"
      },
      {
        cityname: "建三江",
        departtype: "1",
        findname: "建三江",
        id: "230882500000",
        tag: "富锦市,佳木斯市,黑龙江"
      },
      {
        cityname: "吉亚乡",
        departtype: "1",
        findname: "吉亚乡",
        id: "653201204000",
        tag: "和田市,和田地区,新疆"
      }
    ],
    max: 100,
    key: "J"
  },
  {
    departures: [
      {
        cityname: "克拉玛依市",
        departtype: "1",
        findname: "克拉玛依",
        id: "650200000000",
        tag: "新疆"
      },
      {
        cityname: "昆明市",
        departtype: "1",
        findname: "昆明市",
        id: "530100000000",
        tag: "云南省"
      },
      {
        cityname: "喀什地区",
        departtype: "1",
        findname: "喀什地区",
        id: "653100000000",
        tag: "新疆"
      },
      {
        cityname: "克孜勒苏柯尔克孜自治州",
        departtype: "1",
        findname: "克孜勒苏柯尔克孜自治州",
        id: "653000000000",
        tag: "新疆"
      },
      {
        cityname: "康巴什区",
        departtype: "1",
        findname: "康巴什区",
        id: "150603000000",
        tag: "鄂尔多斯市,内蒙古"
      },
      {
        cityname: "康保县",
        departtype: "1",
        findname: "康保县",
        id: "130723000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "库车市",
        departtype: "1",
        findname: "库车市",
        id: "652923000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "宽城县",
        departtype: "1",
        findname: "宽城县",
        id: "130827000000",
        tag: "承德市,河北省"
      },
      {
        cityname: "克东县",
        departtype: "1",
        findname: "克东县",
        id: "230230000000",
        tag: "齐齐哈尔,黑龙江"
      },
      {
        cityname: "库尔勒市",
        departtype: "1",
        findname: "库尔勒市",
        id: "652801000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "科尔沁左翼后旗",
        departtype: "1",
        findname: "科尔沁左翼后旗",
        id: "150522000000",
        tag: "通辽市,内蒙古"
      },
      {
        cityname: "开化县",
        departtype: "1",
        findname: "开化县",
        id: "330824000000",
        tag: "衢州市,浙江省"
      },
      {
        cityname: "喀喇沁旗",
        departtype: "1",
        findname: "喀喇沁旗",
        id: "150428000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "开鲁县",
        departtype: "1",
        findname: "开鲁县",
        id: "150523000000",
        tag: "通辽市,内蒙古"
      },
      {
        cityname: "岢岚县",
        departtype: "1",
        findname: "岢岚县",
        id: "140929000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "柯坪县",
        departtype: "1",
        findname: "柯坪县",
        id: "652929000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "喀什市",
        departtype: "1",
        findname: "喀什市",
        id: "653101000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "克山县",
        departtype: "1",
        findname: "克山县",
        id: "230229000000",
        tag: "齐齐哈尔,黑龙江"
      },
      {
        cityname: "奎屯市",
        departtype: "1",
        findname: "奎屯市",
        id: "654003000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "康县",
        departtype: "1",
        findname: "康县",
        id: "621224000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "科尔沁右翼中旗",
        departtype: "1",
        findname: "科右中旗",
        id: "152222000000",
        tag: "兴安盟,内蒙古"
      },
      {
        cityname: "科尔沁镇",
        departtype: "1",
        findname: "科尔沁镇",
        id: "152221104000",
        tag: "科尔沁右翼前旗,兴安盟,内蒙古"
      }
    ],
    max: 100,
    key: "K"
  },
  {
    departures: [
      {
        cityname: "六安市",
        departtype: "1",
        findname: "六安市",
        id: "341500000000",
        tag: "安徽省"
      },
      {
        cityname: "来宾市",
        departtype: "1",
        findname: "来宾市",
        id: "451300000000",
        tag: "广西"
      },
      {
        cityname: "聊城市",
        departtype: "1",
        findname: "聊城市",
        id: "371500000000",
        tag: "山东省"
      },
      {
        cityname: "临沧市",
        departtype: "1",
        findname: "临沧市",
        id: "530900000000",
        tag: "云南省"
      },
      {
        cityname: "廊坊市",
        departtype: "1",
        findname: "廊坊市",
        id: "131000000000",
        tag: "河北省"
      },
      {
        cityname: "临汾市",
        departtype: "1",
        findname: "临汾市",
        id: "141000000000",
        tag: "山西省"
      },
      {
        cityname: "丽江市",
        departtype: "1",
        findname: "丽江市",
        id: "530700000000",
        tag: "云南省"
      },
      {
        cityname: "吕梁市",
        departtype: "1",
        findname: "吕梁市",
        id: "141100000000",
        tag: "山西省"
      },
      {
        cityname: "陇南市",
        departtype: "1",
        findname: "陇南市",
        id: "621200000000",
        tag: "甘肃省"
      },
      {
        cityname: "拉萨市",
        departtype: "1",
        findname: "拉萨市",
        id: "540100000000",
        tag: "西藏"
      },
      {
        cityname: "丽水市",
        departtype: "1",
        findname: "丽水市",
        id: "331100000000",
        tag: "浙江省"
      },
      {
        cityname: "凉山彝族自治州",
        departtype: "1",
        findname: "凉山彝族自治州",
        id: "513400000000",
        tag: "四川省"
      },
      {
        cityname: "临夏回族自治州",
        departtype: "1",
        findname: "临夏自治州",
        id: "622900000000",
        tag: "甘肃省"
      },
      {
        cityname: "辽源市",
        departtype: "1",
        findname: "辽源市",
        id: "220400000000",
        tag: "吉林省"
      },
      {
        cityname: "临沂市",
        departtype: "1",
        findname: "临沂市",
        id: "371300000000",
        tag: "山东省"
      },
      {
        cityname: "龙岩市",
        departtype: "1",
        findname: "龙岩市",
        id: "350800000000",
        tag: "福建省"
      },
      {
        cityname: "洛阳市",
        departtype: "1",
        findname: "洛阳市",
        id: "410300000000",
        tag: "河南省"
      },
      {
        cityname: "林芝地区",
        departtype: "1",
        findname: "林芝地区",
        id: "542600000000",
        tag: "西藏"
      },
      {
        cityname: "兰州市",
        departtype: "1",
        findname: "兰州市",
        id: "620100000000",
        tag: "甘肃省"
      },
      {
        cityname: "柳州市",
        departtype: "1",
        findname: "柳州市",
        id: "450200000000",
        tag: "广西"
      },
      {
        cityname: "临安市",
        departtype: "1",
        findname: "临安市",
        id: "330185000000",
        tag: "杭州市,浙江省"
      },
      {
        cityname: "来安县",
        departtype: "1",
        findname: "来安县",
        id: "341122000000",
        tag: "滁州市,安徽省"
      },
      {
        cityname: "乐安县",
        departtype: "1",
        findname: "乐安县",
        id: "361025000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "隆安县",
        departtype: "1",
        findname: "隆安县",
        id: "450123000000",
        tag: "南宁市,广西"
      },
      {
        cityname: "灵宝市",
        departtype: "1",
        findname: "灵宝市",
        id: "411282000000",
        tag: "三门峡市,河南省"
      },
      {
        cityname: "灵璧县",
        departtype: "1",
        findname: "灵璧县",
        id: "341323000000",
        tag: "宿州市,安徽省"
      },
      {
        cityname: "留坝县",
        departtype: "1",
        findname: "留坝县",
        id: "610729000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "萝北县",
        departtype: "1",
        findname: "萝北县",
        id: "230421000000",
        tag: "鹤岗市,黑龙江"
      },
      {
        cityname: "澜沧拉祜族自治县",
        departtype: "1",
        findname: "澜沧拉祜族自治县",
        id: "530828000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "利川市",
        departtype: "1",
        findname: "利川市",
        id: "422802000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "黎城县",
        departtype: "1",
        findname: "黎城县",
        id: "140426000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "黎川县",
        departtype: "1",
        findname: "黎川县",
        id: "361022000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "陵川县",
        departtype: "1",
        findname: "陵川县",
        id: "140524000000",
        tag: "晋城市,山西省"
      },
      {
        cityname: "柳城县",
        departtype: "1",
        findname: "柳城县",
        id: "450222000000",
        tag: "柳州市,广西"
      },
      {
        cityname: "洛川县",
        departtype: "1",
        findname: "洛川县",
        id: "610629000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "乐东黎族自治县",
        departtype: "1",
        findname: "乐东黎族自治县",
        id: "469027000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "两当县",
        departtype: "1",
        findname: "两当县",
        id: "621228000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "林甸县",
        departtype: "1",
        findname: "林甸县",
        id: "230623000000",
        tag: "大庆市,黑龙江"
      },
      {
        cityname: "隆德县",
        departtype: "1",
        findname: "隆德县",
        id: "640423000000",
        tag: "固原市,宁夏"
      },
      {
        cityname: "泸定县",
        departtype: "1",
        findname: "泸定县",
        id: "513322000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "来凤县",
        departtype: "1",
        findname: "来凤县",
        id: "422827000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "龙岗区",
        departtype: "1",
        findname: "龙岗区",
        id: "440307000000",
        tag: "深圳市,广东省"
      },
      {
        cityname: "岚皋县",
        departtype: "1",
        findname: "岚皋县",
        id: "610925000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "临高县",
        departtype: "1",
        findname: "临高县",
        id: "469024000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "临桂县",
        departtype: "1",
        findname: "临桂县",
        id: "450322000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "老河口市",
        departtype: "1",
        findname: "老河口市",
        id: "420682000000",
        tag: "襄阳市,湖北省"
      },
      {
        cityname: "临海市",
        departtype: "1",
        findname: "临海市",
        id: "331082000000",
        tag: "台州市,浙江省"
      },
      {
        cityname: "梁河县",
        departtype: "1",
        findname: "梁河县",
        id: "533122000000",
        tag: "德宏傣族景颇族自治州,云南省"
      },
      {
        cityname: "莲花县",
        departtype: "1",
        findname: "莲花县",
        id: "360321000000",
        tag: "萍乡市,江西省"
      },
      {
        cityname: "柳河县",
        departtype: "1",
        findname: "柳河县",
        id: "220524000000",
        tag: "通化市,吉林省"
      },
      {
        cityname: "炉霍县",
        departtype: "1",
        findname: "炉霍县",
        id: "513327000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "临江市",
        departtype: "1",
        findname: "临江市",
        id: "220681000000",
        tag: "白山市,吉林省"
      },
      {
        cityname: "龙井市",
        departtype: "1",
        findname: "龙井市",
        id: "222405000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "庐江县",
        departtype: "1",
        findname: "庐江县",
        id: "340124000000",
        tag: "合肥市,安徽省"
      },
      {
        cityname: "龙口市",
        departtype: "1",
        findname: "龙口市",
        id: "370681000000",
        tag: "烟台市,山东省"
      },
      {
        cityname: "隆林各族自治县",
        departtype: "1",
        findname: "隆林县",
        id: "451031000000",
        tag: "百色市,广西"
      },
      {
        cityname: "陆良县",
        departtype: "1",
        findname: "陆良县",
        id: "530322000000",
        tag: "曲靖市,云南省"
      },
      {
        cityname: "滦南县",
        departtype: "1",
        findname: "滦南县",
        id: "130224000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "洛南县",
        departtype: "1",
        findname: "洛南县",
        id: "611021000000",
        tag: "商洛市,陕西省"
      },
      {
        cityname: "乐平市",
        departtype: "1",
        findname: "乐平市",
        id: "360281000000",
        tag: "景德镇市,江西省"
      },
      {
        cityname: "罗平县",
        departtype: "1",
        findname: "罗平县",
        id: "530324000000",
        tag: "曲靖市,云南省"
      },
      {
        cityname: "洛浦县",
        departtype: "1",
        findname: "洛浦县",
        id: "653224000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "灵丘县",
        departtype: "1",
        findname: "灵丘县",
        id: "140224000000",
        tag: "大同市,山西省"
      },
      {
        cityname: "临泉县",
        departtype: "1",
        findname: "临泉县",
        id: "341221000000",
        tag: "阜阳市,安徽省"
      },
      {
        cityname: "礼泉县",
        departtype: "1",
        findname: "礼泉县",
        id: "610425000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "陵水黎族自治县",
        departtype: "1",
        findname: "陵水黎族自治县",
        id: "469028000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "涞水县",
        departtype: "1",
        findname: "涞水县",
        id: "130623000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "灵山县",
        departtype: "1",
        findname: "灵山县",
        id: "450721000000",
        tag: "钦州市,广西"
      },
      {
        cityname: "邻水县",
        departtype: "1",
        findname: "邻水县",
        id: "511623000000",
        tag: "广安市,四川省"
      },
      {
        cityname: "梨树县",
        departtype: "1",
        findname: "梨树县",
        id: "220322000000",
        tag: "四平市,吉林省"
      },
      {
        cityname: "龙胜各族自治县",
        departtype: "1",
        findname: "龙胜县",
        id: "450328000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "罗山县",
        departtype: "1",
        findname: "罗山县",
        id: "411521000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "鲁山县",
        departtype: "1",
        findname: "鲁山县",
        id: "410423000000",
        tag: "平顶山市,河南省"
      },
      {
        cityname: "卢氏县",
        departtype: "1",
        findname: "卢氏县",
        id: "411224000000",
        tag: "三门峡市,河南省"
      },
      {
        cityname: "乐亭县",
        departtype: "1",
        findname: "乐亭县",
        id: "130225000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "灵台县",
        departtype: "1",
        findname: "灵台县",
        id: "620822000000",
        tag: "平凉市,甘肃省"
      },
      {
        cityname: "临洮县",
        departtype: "1",
        findname: "临洮县",
        id: "621124000000",
        tag: "定西市,甘肃省"
      },
      {
        cityname: "轮台县",
        departtype: "1",
        findname: "轮台县",
        id: "652822000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "罗田县",
        departtype: "1",
        findname: "罗田县",
        id: "421123000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "类乌齐县",
        departtype: "1",
        findname: "类乌齐县",
        id: "542124000000",
        tag: "昌都地区,西藏"
      },
      {
        cityname: "灵武市",
        departtype: "1",
        findname: "灵武市",
        id: "640181000000",
        tag: "银川市,宁夏"
      },
      {
        cityname: "朗县",
        departtype: "1",
        findname: "朗县",
        id: "542627000000",
        tag: "林芝地区,西藏"
      },
      {
        cityname: "岚县",
        departtype: "1",
        findname: "岚县",
        id: "141127000000",
        tag: "吕梁市,山西省"
      },
      {
        cityname: "礼县",
        departtype: "1",
        findname: "礼县",
        id: "621226000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "陇县",
        departtype: "1",
        findname: "陇县",
        id: "610327000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "滦县",
        departtype: "1",
        findname: "滦县",
        id: "130223000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "兰溪市",
        departtype: "1",
        findname: "兰溪市",
        id: "330781000000",
        tag: "金华市,浙江省"
      },
      {
        cityname: "临夏市",
        departtype: "1",
        findname: "临夏市",
        id: "622901000000",
        tag: "临夏自治州,甘肃省"
      },
      {
        cityname: "郎溪县",
        departtype: "1",
        findname: "郎溪县",
        id: "341821000000",
        tag: "宣城市,安徽省"
      },
      {
        cityname: "兰西县",
        departtype: "1",
        findname: "兰西县",
        id: "231222000000",
        tag: "绥化市,黑龙江"
      },
      {
        cityname: "临西县",
        departtype: "1",
        findname: "临西县",
        id: "130535000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "林西县",
        departtype: "1",
        findname: "林西县",
        id: "150424000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "利辛县",
        departtype: "1",
        findname: "利辛县",
        id: "341623000000",
        tag: "亳州市,安徽省"
      },
      {
        cityname: "泸西县",
        departtype: "1",
        findname: "泸西县",
        id: "532527000000",
        tag: "红河哈尼族彝族自治州,云南省"
      },
      {
        cityname: "隆阳区",
        departtype: "1",
        findname: "隆阳区",
        id: "530502000000",
        tag: "保山市,云南省"
      },
      {
        cityname: "莱阳市",
        departtype: "1",
        findname: "莱阳市",
        id: "370682000000",
        tag: "烟台市,山东省"
      },
      {
        cityname: "涞源县",
        departtype: "1",
        findname: "涞源县",
        id: "130630000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "乐业县",
        departtype: "1",
        findname: "乐业县",
        id: "451028000000",
        tag: "百色市,广西"
      },
      {
        cityname: "凌云县",
        departtype: "1",
        findname: "凌云县",
        id: "451027000000",
        tag: "百色市,广西"
      },
      {
        cityname: "麟游县",
        departtype: "1",
        findname: "麟游县",
        id: "610329000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "隆尧县",
        departtype: "1",
        findname: "隆尧县",
        id: "130525000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "龙游县",
        departtype: "1",
        findname: "龙游县",
        id: "330825000000",
        tag: "衢州市,浙江省"
      },
      {
        cityname: "略阳县",
        departtype: "1",
        findname: "略阳县",
        id: "610727000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "莱州市",
        departtype: "1",
        findname: "莱州市",
        id: "370683000000",
        tag: "烟台市,山东省"
      },
      {
        cityname: "乐至县",
        departtype: "1",
        findname: "乐至县",
        id: "512022000000",
        tag: "资阳市,四川省"
      },
      {
        cityname: "临漳县",
        departtype: "1",
        findname: "临漳县",
        id: "130423000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "龙州县",
        departtype: "1",
        findname: "龙州县",
        id: "451423000000",
        tag: "崇左市,广西"
      },
      {
        cityname: "洛扎县",
        departtype: "1",
        findname: "洛扎县",
        id: "542228000000",
        tag: "西藏"
      },
      {
        cityname: "鹿寨县",
        departtype: "1",
        findname: "鹿寨县",
        id: "450223000000",
        tag: "柳州市,广西"
      },
      {
        cityname: "露水河镇",
        departtype: "1",
        findname: "露水河镇",
        id: "220621103000",
        tag: "抚松县,白山市,吉林省"
      }
    ],
    max: 100,
    key: "L"
  },
  {
    departures: [
      {
        cityname: "马鞍山市",
        departtype: "1",
        findname: "马鞍山市",
        id: "340500000000",
        tag: "安徽省"
      },
      {
        cityname: "牡丹江市",
        departtype: "1",
        findname: "牡丹江市",
        id: "231000000000",
        tag: "黑龙江"
      },
      {
        cityname: "茂名市",
        departtype: "1",
        findname: "茂名市",
        id: "440900000000",
        tag: "广东省"
      },
      {
        cityname: "绵阳市",
        departtype: "1",
        findname: "绵阳市",
        id: "510700000000",
        tag: "四川省"
      },
      {
        cityname: "梅州市",
        departtype: "1",
        findname: "梅州市",
        id: "441400000000",
        tag: "广东省"
      },
      {
        cityname: "麻城市",
        departtype: "1",
        findname: "麻城市",
        id: "421181000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "蒙城县",
        departtype: "1",
        findname: "蒙城县",
        id: "341622000000",
        tag: "亳州市,安徽省"
      },
      {
        cityname: "孟村回族自治县",
        departtype: "1",
        findname: "孟村县",
        id: "130930000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "渑池县",
        departtype: "1",
        findname: "渑池县",
        id: "411221000000",
        tag: "三门峡市,河南省"
      },
      {
        cityname: "弥渡县",
        departtype: "1",
        findname: "弥渡县",
        id: "532925000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "牟定县",
        departtype: "1",
        findname: "牟定县",
        id: "532323000000",
        tag: "楚雄彝族自治州,云南省"
      },
      {
        cityname: "民丰县",
        departtype: "1",
        findname: "民丰县",
        id: "653227000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "明光市",
        departtype: "1",
        findname: "明光市",
        id: "341182000000",
        tag: "滁州市,安徽省"
      },
      {
        cityname: "麦盖提县",
        departtype: "1",
        findname: "麦盖提县",
        id: "653127000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "梅河口市",
        departtype: "1",
        findname: "梅河口市",
        id: "220581000000",
        tag: "通化市,吉林省"
      },
      {
        cityname: "勐海县",
        departtype: "1",
        findname: "勐海县",
        id: "532822000000",
        tag: "西双版纳傣族自治州,云南省"
      },
      {
        cityname: "民和县",
        departtype: "1",
        findname: "民和县",
        id: "632122000000",
        tag: "海东地区,青海省"
      },
      {
        cityname: "漠河县",
        departtype: "1",
        findname: "漠河县",
        id: "232723000000",
        tag: "大兴安岭地区,黑龙江"
      },
      {
        cityname: "墨江哈尼族自治县",
        departtype: "1",
        findname: "墨江哈尼族自治县",
        id: "530822000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "莫力达瓦达斡尔族自治旗",
        departtype: "1",
        findname: "莫力达瓦旗",
        id: "150722000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "孟连傣族拉祜族佤族自治县",
        departtype: "1",
        findname: "孟连傣族拉祜族佤族自治县",
        id: "530827000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "木垒哈萨克自治县",
        departtype: "1",
        findname: "木垒哈萨克自治县",
        id: "652328000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "穆棱市",
        departtype: "1",
        findname: "穆棱市",
        id: "231085000000",
        tag: "牡丹江市,黑龙江"
      },
      {
        cityname: "米林县",
        departtype: "1",
        findname: "米林县",
        id: "542623000000",
        tag: "林芝地区,西藏"
      },
      {
        cityname: "民乐县",
        departtype: "1",
        findname: "民乐县",
        id: "620722000000",
        tag: "张掖市,甘肃省"
      },
      {
        cityname: "玛纳斯县",
        departtype: "1",
        findname: "玛纳斯县",
        id: "652324000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "民勤县",
        departtype: "1",
        findname: "民勤县",
        id: "620621000000",
        tag: "武威市,甘肃省"
      },
      {
        cityname: "芒市",
        departtype: "1",
        findname: "芒市",
        id: "533103000000",
        tag: "德宏傣族景颇族自治州,云南省"
      },
      {
        cityname: "密山市",
        departtype: "1",
        findname: "密山市",
        id: "230382000000",
        tag: "鸡西市,黑龙江"
      },
      {
        cityname: "马山县",
        departtype: "1",
        findname: "马山县",
        id: "450124000000",
        tag: "南宁市,广西"
      },
      {
        cityname: "墨脱县",
        departtype: "1",
        findname: "墨脱县",
        id: "542624000000",
        tag: "林芝地区,西藏"
      },
      {
        cityname: "眉县",
        departtype: "1",
        findname: "眉县",
        id: "610326000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "勉县",
        departtype: "1",
        findname: "勉县",
        id: "610725000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "岷县",
        departtype: "1",
        findname: "岷县",
        id: "621126000000",
        tag: "定西市,甘肃省"
      },
      {
        cityname: "茫崖行委",
        departtype: "1",
        findname: "茫崖市",
        id: "632824000000",
        tag: "海西自治州,青海省"
      },
      {
        cityname: "墨玉县",
        departtype: "1",
        findname: "墨玉县",
        id: "653222000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "满洲里市",
        departtype: "1",
        findname: "满洲里市",
        id: "150781000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "蒙自市",
        departtype: "1",
        findname: "蒙自市",
        id: "532503000000",
        tag: "红河哈尼族彝族自治州,云南省"
      },
      {
        cityname: "米脂县",
        departtype: "1",
        findname: "米脂县",
        id: "610827000000",
        tag: "榆林市,陕西省"
      }
    ],
    max: 100,
    key: "M"
  },
  {
    departures: [
      {
        cityname: "宁波市",
        departtype: "1",
        findname: "宁波市",
        id: "330200000000",
        tag: "浙江省"
      },
      {
        cityname: "南昌市",
        departtype: "1",
        findname: "南昌市",
        id: "360100000000",
        tag: "江西省"
      },
      {
        cityname: "南充市",
        departtype: "1",
        findname: "南充市",
        id: "511300000000",
        tag: "四川省"
      },
      {
        cityname: "宁德市",
        departtype: "1",
        findname: "宁德市",
        id: "350900000000",
        tag: "福建省"
      },
      {
        cityname: "怒江傈僳族自治州",
        departtype: "1",
        findname: "怒江傈僳族自治州",
        id: "533300000000",
        tag: "云南省"
      },
      {
        cityname: "南京市",
        departtype: "1",
        findname: "南京市",
        id: "320100000000",
        tag: "江苏省"
      },
      {
        cityname: "内江市",
        departtype: "1",
        findname: "内江市",
        id: "511000000000",
        tag: "四川省"
      },
      {
        cityname: "南宁市",
        departtype: "1",
        findname: "南宁市",
        id: "450100000000",
        tag: "广西"
      },
      {
        cityname: "南平市",
        departtype: "1",
        findname: "南平市",
        id: "350700000000",
        tag: "福建省"
      },
      {
        cityname: "那曲地区",
        departtype: "1",
        findname: "那曲地区",
        id: "542400000000",
        tag: "西藏"
      },
      {
        cityname: "南安市",
        departtype: "1",
        findname: "南安市",
        id: "350583000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "宁安市",
        departtype: "1",
        findname: "宁安市",
        id: "231084000000",
        tag: "牡丹江市,黑龙江"
      },
      {
        cityname: "农安县",
        departtype: "1",
        findname: "农安县",
        id: "220122000000",
        tag: "长春市,吉林省"
      },
      {
        cityname: "南岔区",
        departtype: "1",
        findname: "南岔区",
        id: "230703000000",
        tag: "伊春市,黑龙江"
      },
      {
        cityname: "南城县",
        departtype: "1",
        findname: "南城县",
        id: "361021000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "宁城县",
        departtype: "1",
        findname: "宁城县",
        id: "150429000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "宁都县",
        departtype: "1",
        findname: "宁都县",
        id: "360730000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "宁洱哈尼族彝族自治县",
        departtype: "1",
        findname: "宁洱县",
        id: "530821100000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "南丰县",
        departtype: "1",
        findname: "南丰县",
        id: "361023000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "南宫市",
        departtype: "1",
        findname: "南宫市",
        id: "130581000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "宁国市",
        departtype: "1",
        findname: "宁国市",
        id: "341881000000",
        tag: "宣城市,安徽省"
      },
      {
        cityname: "宁海县",
        departtype: "1",
        findname: "宁海县",
        id: "330226000000",
        tag: "宁波市,浙江省"
      },
      {
        cityname: "嫩江县",
        departtype: "1",
        findname: "嫩江县",
        id: "231121000000",
        tag: "黑河市,黑龙江"
      },
      {
        cityname: "宁晋县",
        departtype: "1",
        findname: "宁晋县",
        id: "130528000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "宁津县",
        departtype: "1",
        findname: "宁津县",
        id: "371422000000",
        tag: "德州市,山东省"
      },
      {
        cityname: "南涧彝族自治县",
        departtype: "1",
        findname: "南涧彝族自治县",
        id: "532926000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "南康市",
        departtype: "1",
        findname: "南康市",
        id: "360782000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "尼勒克县",
        departtype: "1",
        findname: "尼勒克县",
        id: "654028000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "宁蒗彝族自治县",
        departtype: "1",
        findname: "宁蒗彝族自治县",
        id: "530724000000",
        tag: "丽江市,云南省"
      },
      {
        cityname: "奈曼旗",
        departtype: "1",
        findname: "奈曼旗",
        id: "150525000000",
        tag: "通辽市,内蒙古"
      },
      {
        cityname: "尼玛县",
        departtype: "1",
        findname: "尼玛县",
        id: "542430000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "宁明县",
        departtype: "1",
        findname: "宁明县",
        id: "451422000000",
        tag: "崇左市,广西"
      },
      {
        cityname: "那坡县",
        departtype: "1",
        findname: "那坡县",
        id: "451026000000",
        tag: "百色市,广西"
      },
      {
        cityname: "宁强县",
        departtype: "1",
        findname: "宁强县",
        id: "610726000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "聂荣县",
        departtype: "1",
        findname: "聂荣县",
        id: "542424000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "宁陕县",
        departtype: "1",
        findname: "宁陕县",
        id: "610923000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "宁武县",
        departtype: "1",
        findname: "宁武县",
        id: "140925000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "宁县",
        departtype: "1",
        findname: "宁县",
        id: "621026000000",
        tag: "庆阳市,甘肃省"
      },
      {
        cityname: "南漳县",
        departtype: "1",
        findname: "南漳县",
        id: "420624000000",
        tag: "襄阳市,湖北省"
      }
    ],
    max: 100,
    key: "N"
  },
  {
    departures: [
      {
        cityname: "普洱市",
        departtype: "1",
        findname: "普洱市",
        id: "530800000000",
        tag: "云南省"
      },
      {
        cityname: "平凉市",
        departtype: "1",
        findname: "平凉市",
        id: "620800000000",
        tag: "甘肃省"
      },
      {
        cityname: "莆田市",
        departtype: "1",
        findname: "莆田市",
        id: "350300000000",
        tag: "福建省"
      },
      {
        cityname: "萍乡市",
        departtype: "1",
        findname: "萍乡市",
        id: "360300000000",
        tag: "江西省"
      },
      {
        cityname: "濮阳市",
        departtype: "1",
        findname: "濮阳市",
        id: "410900000000",
        tag: "河南省"
      },
      {
        cityname: "磐安县",
        departtype: "1",
        findname: "磐安县",
        id: "330727000000",
        tag: "金华市,浙江省"
      },
      {
        cityname: "平安县",
        departtype: "1",
        findname: "平安县",
        id: "632121000000",
        tag: "海东地区,青海省"
      },
      {
        cityname: "浦北县",
        departtype: "1",
        findname: "浦北县",
        id: "450722000000",
        tag: "钦州市,广西"
      },
      {
        cityname: "平川区",
        departtype: "1",
        findname: "平川区",
        id: "620403000000",
        tag: "白银市,甘肃省"
      },
      {
        cityname: "蒲城县",
        departtype: "1",
        findname: "蒲城县",
        id: "610526000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "平果市",
        departtype: "1",
        findname: "平果市",
        id: "451082000000",
        tag: "百色市,广西"
      },
      {
        cityname: "偏关县",
        departtype: "1",
        findname: "偏关县",
        id: "140932000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "平湖市",
        departtype: "1",
        findname: "平湖市",
        id: "330482000000",
        tag: "嘉兴市,浙江省"
      },
      {
        cityname: "浦江县",
        departtype: "1",
        findname: "浦江县",
        id: "330726000000",
        tag: "金华市,浙江省"
      },
      {
        cityname: "平鲁区",
        departtype: "1",
        findname: "平鲁区",
        id: "140603000000",
        tag: "朔州市,山西省"
      },
      {
        cityname: "平利县",
        departtype: "1",
        findname: "平利县",
        id: "610926000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "屏南县",
        departtype: "1",
        findname: "屏南县",
        id: "350923000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "平南县",
        departtype: "1",
        findname: "平南县",
        id: "450821000000",
        tag: "贵港市,广西"
      },
      {
        cityname: "磐石市",
        departtype: "1",
        findname: "磐石市",
        id: "220284000000",
        tag: "吉林市,吉林省"
      },
      {
        cityname: "平山县",
        departtype: "1",
        findname: "平山县",
        id: "130131000000",
        tag: "石家庄市,河北省"
      },
      {
        cityname: "皮山县",
        departtype: "1",
        findname: "皮山县",
        id: "653223000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "蒲县",
        departtype: "1",
        findname: "蒲县",
        id: "141033000000",
        tag: "临汾市,山西省"
      },
      {
        cityname: "凭祥市",
        departtype: "1",
        findname: "凭祥市",
        id: "451481000000",
        tag: "崇左市,广西"
      },
      {
        cityname: "平阳县",
        departtype: "1",
        findname: "平阳县",
        id: "330326000000",
        tag: "温州市,浙江省"
      },
      {
        cityname: "平遥县",
        departtype: "1",
        findname: "平遥县",
        id: "140728000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "平舆县",
        departtype: "1",
        findname: "平舆县",
        id: "411723000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "鄱阳县",
        departtype: "1",
        findname: "鄱阳县",
        id: "361128000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "彭泽县",
        departtype: "1",
        findname: "彭泽县",
        id: "360430000000",
        tag: "九江市,江西省"
      }
    ],
    max: 100,
    key: "P"
  },
  {
    departures: [
      {
        cityname: "青岛市",
        departtype: "1",
        findname: "青岛市",
        id: "370200000000",
        tag: "山东省"
      },
      {
        cityname: "秦皇岛市",
        departtype: "1",
        findname: "秦皇岛",
        id: "130300000000",
        tag: "河北省"
      },
      {
        cityname: "琼海市",
        departtype: "1",
        findname: "琼海市",
        id: "469002000000",
        tag: "海南省"
      },
      {
        cityname: "潜江市",
        departtype: "1",
        findname: "潜江市",
        id: "429005000000",
        tag: "湖北省"
      },
      {
        cityname: "曲靖市",
        departtype: "1",
        findname: "曲靖市",
        id: "530300000000",
        tag: "云南省"
      },
      {
        cityname: "七台河市",
        departtype: "1",
        findname: "七台河市",
        id: "230900000000",
        tag: "黑龙江"
      },
      {
        cityname: "庆阳市",
        departtype: "1",
        findname: "庆阳市",
        id: "621000000000",
        tag: "甘肃省"
      },
      {
        cityname: "清远市",
        departtype: "1",
        findname: "清远市",
        id: "441800000000",
        tag: "广东省"
      },
      {
        cityname: "钦州市",
        departtype: "1",
        findname: "钦州市",
        id: "450700000000",
        tag: "广西"
      },
      {
        cityname: "泉州市",
        departtype: "1",
        findname: "泉州市",
        id: "350500000000",
        tag: "福建省"
      },
      {
        cityname: "衢州市",
        departtype: "1",
        findname: "衢州市",
        id: "330800000000",
        tag: "浙江省"
      },
      {
        cityname: "迁安市",
        departtype: "1",
        findname: "迁安市",
        id: "130283000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "乾安县",
        departtype: "1",
        findname: "乾安县",
        id: "220723000000",
        tag: "松原市,吉林省"
      },
      {
        cityname: "秦安县",
        departtype: "1",
        findname: "秦安县",
        id: "620522000000",
        tag: "天水市,甘肃省"
      },
      {
        cityname: "丘北县",
        departtype: "1",
        findname: "丘北县",
        id: "532626000000",
        tag: "文山壮族苗族自治州,云南省"
      },
      {
        cityname: "蕲春县",
        departtype: "1",
        findname: "蕲春县",
        id: "421126000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "庆城县",
        departtype: "1",
        findname: "庆城县",
        id: "621021000000",
        tag: "庆阳市,甘肃省"
      },
      {
        cityname: "曲阜市",
        departtype: "1",
        findname: "曲阜市",
        id: "370881000000",
        tag: "济宁市,山东省"
      },
      {
        cityname: "青冈县",
        departtype: "1",
        findname: "青冈县",
        id: "231223000000",
        tag: "绥化市,黑龙江"
      },
      {
        cityname: "青河县",
        departtype: "1",
        findname: "青河县",
        id: "654325000000",
        tag: "阿勒泰地区,新疆"
      },
      {
        cityname: "清涧县",
        departtype: "1",
        findname: "清涧县",
        id: "610830000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "全椒县",
        departtype: "1",
        findname: "全椒县",
        id: "341124000000",
        tag: "滁州市,安徽省"
      },
      {
        cityname: "祁连县",
        departtype: "1",
        findname: "祁连县",
        id: "632222000000",
        tag: "海北藏族自治州,青海省"
      },
      {
        cityname: "青龙满族自治县",
        departtype: "1",
        findname: "青龙县",
        id: "130321000000",
        tag: "秦皇岛,河北省"
      },
      {
        cityname: "祁门县",
        departtype: "1",
        findname: "祁门县",
        id: "341024000000",
        tag: "黄山市,安徽省"
      },
      {
        cityname: "全南县",
        departtype: "1",
        findname: "全南县",
        id: "360729000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "潜山市",
        departtype: "1",
        findname: "潜山市",
        id: "340882000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "铅山县",
        departtype: "1",
        findname: "铅山县",
        id: "361124000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "沁水县",
        departtype: "1",
        findname: "沁水县",
        id: "140521000000",
        tag: "晋城市,山西省"
      },
      {
        cityname: "岐山县",
        departtype: "1",
        findname: "岐山县",
        id: "610323000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "青田县",
        departtype: "1",
        findname: "青田县",
        id: "331121000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "奇台县",
        departtype: "1",
        findname: "奇台县",
        id: "652325000000",
        tag: "昌吉回族自治州,新疆"
      },
      {
        cityname: "乾县",
        departtype: "1",
        findname: "乾县",
        id: "610424000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "青县",
        departtype: "1",
        findname: "青县",
        id: "130922000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "沁县",
        departtype: "1",
        findname: "沁县",
        id: "140430000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "邱县",
        departtype: "1",
        findname: "邱县",
        id: "130430000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "迁西县",
        departtype: "1",
        findname: "迁西县",
        id: "130227000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "青原区",
        departtype: "1",
        findname: "青原区",
        id: "360803000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "千阳县",
        departtype: "1",
        findname: "千阳县",
        id: "610328000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "青阳县",
        departtype: "1",
        findname: "青阳县",
        id: "341723000000",
        tag: "池州市,安徽省"
      },
      {
        cityname: "庆元县",
        departtype: "1",
        findname: "庆元县",
        id: "331126000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "沁源县",
        departtype: "1",
        findname: "沁源县",
        id: "140431000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "曲阳县",
        departtype: "1",
        findname: "曲阳县",
        id: "130634000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "琼中黎族苗族自治县",
        departtype: "1",
        findname: "琼中黎族苗族自治县",
        id: "469030000000",
        tag: "省直辖县级行政区划,海南省"
      },
      {
        cityname: "全州县",
        departtype: "1",
        findname: "全州县",
        id: "450324000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "曲周县",
        departtype: "1",
        findname: "曲周县",
        id: "130435000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "泉阳镇",
        departtype: "1",
        findname: "泉阳镇",
        id: "220621102000",
        tag: "抚松县,白山市,吉林省"
      }
    ],
    max: 100,
    key: "Q"
  },
  {
    departures: [
      {
        cityname: "日喀则市",
        departtype: "1",
        findname: "日喀则市",
        id: "540200000000",
        tag: "西藏"
      },
      {
        cityname: "日照市",
        departtype: "1",
        findname: "日照市",
        id: "371100000000",
        tag: "山东省"
      },
      {
        cityname: "瑞安市",
        departtype: "1",
        findname: "瑞安市",
        id: "330381000000",
        tag: "温州市,浙江省"
      },
      {
        cityname: "融安县",
        departtype: "1",
        findname: "融安县",
        id: "450224000000",
        tag: "柳州市,广西"
      },
      {
        cityname: "瑞昌市",
        departtype: "1",
        findname: "瑞昌市",
        id: "360481000000",
        tag: "九江市,江西省"
      },
      {
        cityname: "容城县",
        departtype: "1",
        findname: "容城县",
        id: "130629000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "饶河县",
        departtype: "1",
        findname: "饶河县",
        id: "230524000000",
        tag: "双鸭山市,黑龙江"
      },
      {
        cityname: "瑞金市",
        departtype: "1",
        findname: "瑞金市",
        id: "360781000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "瑞丽市",
        departtype: "1",
        findname: "瑞丽市",
        id: "533102000000",
        tag: "德宏傣族景颇族自治州,云南省"
      },
      {
        cityname: "汝南县",
        departtype: "1",
        findname: "汝南县",
        id: "411727000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "任丘市",
        departtype: "1",
        findname: "任丘市",
        id: "130982000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "若羌县",
        departtype: "1",
        findname: "若羌县",
        id: "652824000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "融水苗族自治县",
        departtype: "1",
        findname: "融水苗族自治县",
        id: "450225000000",
        tag: "柳州市,广西"
      },
      {
        cityname: "容县",
        departtype: "1",
        findname: "容县",
        id: "450921000000",
        tag: "玉林市,广西"
      },
      {
        cityname: "饶阳县",
        departtype: "1",
        findname: "饶阳县",
        id: "131124000000",
        tag: "衡水市,河北省"
      }
    ],
    max: 100,
    key: "R"
  },
  {
    departures: [
      {
        cityname: "韶关市",
        departtype: "1",
        findname: "韶关市",
        id: "440200000000",
        tag: "广东省"
      },
      {
        cityname: "上海市",
        departtype: "1",
        findname: "上海市",
        id: "310000000000",
        tag: "上海市"
      },
      {
        cityname: "绥化市",
        departtype: "1",
        findname: "绥化市",
        id: "231200000000",
        tag: "黑龙江"
      },
      {
        cityname: "石家庄市",
        departtype: "1",
        findname: "石家庄市",
        id: "130100000000",
        tag: "河北省"
      },
      {
        cityname: "商洛市",
        departtype: "1",
        findname: "商洛市",
        id: "611000000000",
        tag: "陕西省"
      },
      {
        cityname: "三明市",
        departtype: "1",
        findname: "三明市",
        id: "350400000000",
        tag: "福建省"
      },
      {
        cityname: "三门峡市",
        departtype: "1",
        findname: "三门峡市",
        id: "411200000000",
        tag: "河南省"
      },
      {
        cityname: "山南市",
        departtype: "1",
        findname: "山南市",
        id: "540500000000",
        tag: "西藏"
      },
      {
        cityname: "四平市",
        departtype: "1",
        findname: "四平市",
        id: "220300000000",
        tag: "吉林省"
      },
      {
        cityname: "商丘市",
        departtype: "1",
        findname: "商丘市",
        id: "411400000000",
        tag: "河南省"
      },
      {
        cityname: "上饶市",
        departtype: "1",
        findname: "上饶市",
        id: "361100000000",
        tag: "江西省"
      },
      {
        cityname: "汕头市",
        departtype: "1",
        findname: "汕头市",
        id: "440500000000",
        tag: "广东省"
      },
      {
        cityname: "汕尾市",
        departtype: "1",
        findname: "汕尾市",
        id: "441500000000",
        tag: "广东省"
      },
      {
        cityname: "绍兴市",
        departtype: "1",
        findname: "绍兴市",
        id: "330600000000",
        tag: "浙江省"
      },
      {
        cityname: "三亚市",
        departtype: "1",
        findname: "三亚市",
        id: "460200000000",
        tag: "海南省"
      },
      {
        cityname: "十堰市",
        departtype: "1",
        findname: "十堰市",
        id: "420300000000",
        tag: "湖北省"
      },
      {
        cityname: "松原市",
        departtype: "1",
        findname: "松原市",
        id: "220700000000",
        tag: "吉林省"
      },
      {
        cityname: "双鸭山市",
        departtype: "1",
        findname: "双鸭山市",
        id: "230500000000",
        tag: "黑龙江"
      },
      {
        cityname: "深圳市",
        departtype: "1",
        findname: "深圳市",
        id: "440300000000",
        tag: "广东省"
      },
      {
        cityname: "朔州市",
        departtype: "1",
        findname: "朔州市",
        id: "140600000000",
        tag: "山西省"
      },
      {
        cityname: "随州市",
        departtype: "1",
        findname: "随州市",
        id: "421300000000",
        tag: "湖北省"
      },
      {
        cityname: "宿州市",
        departtype: "1",
        findname: "宿州市",
        id: "341300000000",
        tag: "安徽省"
      },
      {
        cityname: "苏州市",
        departtype: "1",
        findname: "苏州市",
        id: "320500000000",
        tag: "江苏省"
      },
      {
        cityname: "双柏县",
        departtype: "1",
        findname: "双柏县",
        id: "532322000000",
        tag: "楚雄彝族自治州,云南省"
      },
      {
        cityname: "肃北蒙古族自治县",
        departtype: "1",
        findname: "肃北县",
        id: "620923000000",
        tag: "酒泉市,甘肃省"
      },
      {
        cityname: "绥滨县",
        departtype: "1",
        findname: "绥滨县",
        id: "230422000000",
        tag: "鹤岗市,黑龙江"
      },
      {
        cityname: "莎车县",
        departtype: "1",
        findname: "莎车县",
        id: "653125000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "上蔡县",
        departtype: "1",
        findname: "上蔡县",
        id: "411722000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "商城县",
        departtype: "1",
        findname: "商城县",
        id: "411524000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "神池县",
        departtype: "1",
        findname: "神池县",
        id: "140927000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "石城县",
        departtype: "1",
        findname: "石城县",
        id: "360735000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "遂昌县",
        departtype: "1",
        findname: "遂昌县",
        id: "331123000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "遂川县",
        departtype: "1",
        findname: "遂川县",
        id: "360827000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "山丹县",
        departtype: "1",
        findname: "山丹县",
        id: "620725000000",
        tag: "张掖市,甘肃省"
      },
      {
        cityname: "绥德县",
        departtype: "1",
        findname: "绥德县",
        id: "610826000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "绥芬河市",
        departtype: "1",
        findname: "绥芬河市",
        id: "231081000000",
        tag: "牡丹江市,黑龙江"
      },
      {
        cityname: "疏附县",
        departtype: "1",
        findname: "疏附县",
        id: "653121000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "上高县",
        departtype: "1",
        findname: "上高县",
        id: "360923000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "三河市",
        departtype: "1",
        findname: "三河市",
        id: "131082000000",
        tag: "廊坊市,河北省"
      },
      {
        cityname: "双江拉祜族佤族布朗族傣族自治县",
        departtype: "1",
        findname: "双江拉祜族佤族布朗族傣族自治县",
        id: "530925000000",
        tag: "临沧市,云南省"
      },
      {
        cityname: "萨迦县",
        departtype: "1",
        findname: "萨迦县",
        id: "542325000000",
        tag: "日喀则市,西藏"
      },
      {
        cityname: "三江侗族自治县",
        departtype: "1",
        findname: "三江县",
        id: "450226000000",
        tag: "柳州市,广西"
      },
      {
        cityname: "双辽市",
        departtype: "1",
        findname: "双辽市",
        id: "220382000000",
        tag: "四平市,吉林省"
      },
      {
        cityname: "舒兰市",
        departtype: "1",
        findname: "舒兰市",
        id: "220283000000",
        tag: "吉林市,吉林省"
      },
      {
        cityname: "上林县",
        departtype: "1",
        findname: "上林县",
        id: "450125000000",
        tag: "南宁市,广西"
      },
      {
        cityname: "疏勒县",
        departtype: "1",
        findname: "疏勒县",
        id: "653122000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "绥棱县",
        departtype: "1",
        findname: "绥棱县",
        id: "231226000000",
        tag: "绥化市,黑龙江"
      },
      {
        cityname: "三门县",
        departtype: "1",
        findname: "三门县",
        id: "331022000000",
        tag: "台州市,浙江省"
      },
      {
        cityname: "神木县",
        departtype: "1",
        findname: "神木县",
        id: "610821000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "神农架林区",
        departtype: "1",
        findname: "神农架林区",
        id: "429021000000",
        tag: "省直辖市县级,湖北省"
      },
      {
        cityname: "苏尼特右旗",
        departtype: "1",
        findname: "苏尼特右旗",
        id: "152524000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "商南县",
        departtype: "1",
        findname: "商南县",
        id: "611023000000",
        tag: "商洛市,陕西省"
      },
      {
        cityname: "寿宁县",
        departtype: "1",
        findname: "寿宁县",
        id: "350924000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "肃南裕固族自治县",
        departtype: "1",
        findname: "肃南县",
        id: "620721000000",
        tag: "张掖市,甘肃省"
      },
      {
        cityname: "肃宁县",
        departtype: "1",
        findname: "肃宁县",
        id: "130926000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "顺平县",
        departtype: "1",
        findname: "顺平县",
        id: "130636000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "石泉县",
        departtype: "1",
        findname: "石泉县",
        id: "610922000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "石狮市",
        departtype: "1",
        findname: "石狮市",
        id: "350581000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "石首市",
        departtype: "1",
        findname: "石首市",
        id: "421081000000",
        tag: "荆州市,湖北省"
      },
      {
        cityname: "上思县",
        departtype: "1",
        findname: "上思县",
        id: "450621000000",
        tag: "防城港市,广西"
      },
      {
        cityname: "鄯善县",
        departtype: "1",
        findname: "鄯善县",
        id: "650421000000",
        tag: "吐鲁番市,新疆"
      },
      {
        cityname: "嵊泗县",
        departtype: "1",
        findname: "嵊泗县",
        id: "330922000000",
        tag: "舟山市,浙江省"
      },
      {
        cityname: "宿松县",
        departtype: "1",
        findname: "宿松县",
        id: "340826000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "石台县",
        departtype: "1",
        findname: "石台县",
        id: "341722000000",
        tag: "池州市,安徽省"
      },
      {
        cityname: "沙湾市",
        departtype: "1",
        findname: "沙湾市",
        id: "654203000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "孙吴县",
        departtype: "1",
        findname: "孙吴县",
        id: "231124000000",
        tag: "黑河市,黑龙江"
      },
      {
        cityname: "涉县",
        departtype: "1",
        findname: "涉县",
        id: "130426000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "歙县",
        departtype: "1",
        findname: "歙县",
        id: "341021000000",
        tag: "黄山市,安徽省"
      },
      {
        cityname: "寿县",
        departtype: "1",
        findname: "寿县",
        id: "340422000000",
        tag: "淮南市,安徽省"
      },
      {
        cityname: "泗县",
        departtype: "1",
        findname: "泗县",
        id: "341324000000",
        tag: "宿州市,安徽省"
      },
      {
        cityname: "索县",
        departtype: "1",
        findname: "索县",
        id: "542427000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "濉溪县",
        departtype: "1",
        findname: "濉溪县",
        id: "340621000000",
        tag: "淮北市,安徽省"
      },
      {
        cityname: "上虞区",
        departtype: "1",
        findname: "上虞区",
        id: "330604000000",
        tag: "绍兴市,浙江省"
      },
      {
        cityname: "双阳区",
        departtype: "1",
        findname: "双阳区",
        id: "220112000000",
        tag: "长春市,吉林省"
      },
      {
        cityname: "三原县",
        departtype: "1",
        findname: "三原县",
        id: "610422000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "尚义县",
        departtype: "1",
        findname: "尚义县",
        id: "130725000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "上犹县",
        departtype: "1",
        findname: "上犹县",
        id: "360724000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "山阳县",
        departtype: "1",
        findname: "山阳县",
        id: "611024000000",
        tag: "商洛市,陕西省"
      },
      {
        cityname: "山阴县",
        departtype: "1",
        findname: "山阴县",
        id: "140621000000",
        tag: "朔州市,山西省"
      },
      {
        cityname: "沙洋县",
        departtype: "1",
        findname: "沙洋县",
        id: "420822000000",
        tag: "荆门市,湖北省"
      },
      {
        cityname: "沙雅县",
        departtype: "1",
        findname: "沙雅县",
        id: "652924000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "寿阳县",
        departtype: "1",
        findname: "寿阳县",
        id: "140725000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "松阳县",
        departtype: "1",
        findname: "松阳县",
        id: "331124000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "陕州区",
        departtype: "1",
        findname: "陕州区",
        id: "411203000000",
        tag: "三门峡市,河南省"
      },
      {
        cityname: "嵊州市",
        departtype: "1",
        findname: "嵊州市",
        id: "330683000000",
        tag: "绍兴市,浙江省"
      },
      {
        cityname: "深州市",
        departtype: "1",
        findname: "深州市",
        id: "131182000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "松滋市",
        departtype: "1",
        findname: "松滋市",
        id: "421087000000",
        tag: "荆州市,湖北省"
      },
      {
        cityname: "四子王旗",
        departtype: "1",
        findname: "四子王旗",
        id: "150929000000",
        tag: "乌兰察布市,内蒙古"
      },
      {
        cityname: "申扎县",
        departtype: "1",
        findname: "申扎县",
        id: "542426000000",
        tag: "那曲地区,西藏"
      },
      {
        cityname: "师宗县",
        departtype: "1",
        findname: "师宗县",
        id: "530323000000",
        tag: "曲靖市,云南省"
      },
      {
        cityname: "陕坝镇",
        departtype: "1",
        findname: "陕坝镇",
        id: "150826100000",
        tag: "杭锦后旗,巴彦淖尔市,内蒙古"
      },
      {
        cityname: "四方坨子",
        departtype: "1",
        findname: "四方坨子",
        id: "220821400000",
        tag: "镇赉县,白城市,吉林省"
      },
      {
        cityname: "胜芳镇",
        departtype: "1",
        findname: "胜芳镇",
        id: "131081105000",
        tag: "霸州市,廊坊市,河北省"
      },
      {
        cityname: "沙圪堵镇",
        departtype: "1",
        findname: "沙圪堵镇",
        id: "150622115000",
        tag: "准格尔旗,鄂尔多斯市,内蒙古"
      },
      {
        cityname: "松江河",
        departtype: "1",
        findname: "松江河镇",
        id: "220621101000",
        tag: "抚松县,白山市,吉林省"
      },
      {
        cityname: "松江镇",
        departtype: "1",
        findname: "松江镇",
        id: "222426101000",
        tag: "安图县,延边,吉林省"
      },
      {
        cityname: "萨拉齐镇",
        departtype: "1",
        findname: "萨拉齐镇",
        id: "150221104000",
        tag: "土默特右旗,包头市,内蒙古"
      },
      {
        cityname: "双廊镇",
        departtype: "1",
        findname: "双廊镇",
        id: "532901109000",
        tag: "大理市,大理白族自治州,云南省"
      }
    ],
    max: 100,
    key: "S"
  },
  {
    departures: [
      {
        cityname: "泰安市",
        departtype: "1",
        findname: "泰安市",
        id: "370900000000",
        tag: "山东省"
      },
      {
        cityname: "铜川市",
        departtype: "1",
        findname: "铜川市",
        id: "610200000000",
        tag: "陕西省"
      },
      {
        cityname: "通化市",
        departtype: "1",
        findname: "通化市",
        id: "220500000000",
        tag: "吉林省"
      },
      {
        cityname: "天津市",
        departtype: "1",
        findname: "天津市",
        id: "120000000000",
        tag: "天津市"
      },
      {
        cityname: "吐鲁番市",
        departtype: "1",
        findname: "吐鲁番市",
        id: "650400000000",
        tag: "新疆"
      },
      {
        cityname: "通辽市",
        departtype: "1",
        findname: "通辽市",
        id: "150500000000",
        tag: "内蒙古"
      },
      {
        cityname: "铜陵市",
        departtype: "1",
        findname: "铜陵市",
        id: "340700000000",
        tag: "安徽省"
      },
      {
        cityname: "天门市",
        departtype: "1",
        findname: "天门市",
        id: "429006000000",
        tag: "省直辖市县级,湖北省"
      },
      {
        cityname: "唐山市",
        departtype: "1",
        findname: "唐山市",
        id: "130200000000",
        tag: "河北省"
      },
      {
        cityname: "天水市",
        departtype: "1",
        findname: "天水市",
        id: "620500000000",
        tag: "甘肃省"
      },
      {
        cityname: "太原市",
        departtype: "1",
        findname: "太原市",
        id: "140100000000",
        tag: "山西省"
      },
      {
        cityname: "台州市",
        departtype: "1",
        findname: "台州市",
        id: "331000000000",
        tag: "浙江省"
      },
      {
        cityname: "太白县",
        departtype: "1",
        findname: "太白县",
        id: "610331000000",
        tag: "宝鸡市,陕西省"
      },
      {
        cityname: "塔城市",
        departtype: "1",
        findname: "塔城市",
        id: "654201000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "天长市",
        departtype: "1",
        findname: "天长市",
        id: "341181000000",
        tag: "滁州市,安徽省"
      },
      {
        cityname: "桐城市",
        departtype: "1",
        findname: "桐城市",
        id: "340881000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "腾冲县",
        departtype: "1",
        findname: "腾冲县",
        id: "530522000000",
        tag: "保山市,云南省"
      },
      {
        cityname: "通城县",
        departtype: "1",
        findname: "通城县",
        id: "421222000000",
        tag: "咸宁市,湖北省"
      },
      {
        cityname: "天等县",
        departtype: "1",
        findname: "天等县",
        id: "451425000000",
        tag: "崇左市,广西"
      },
      {
        cityname: "田东县",
        departtype: "1",
        findname: "田东县",
        id: "451022000000",
        tag: "百色市,广西"
      },
      {
        cityname: "同德县",
        departtype: "1",
        findname: "同德县",
        id: "632522000000",
        tag: "海南藏族自治州,青海省"
      },
      {
        cityname: "团风县",
        departtype: "1",
        findname: "团风县",
        id: "421121000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "太谷县",
        departtype: "1",
        findname: "太谷县",
        id: "140726000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "潼关县",
        departtype: "1",
        findname: "潼关县",
        id: "610522000000",
        tag: "渭南市,陕西省"
      },
      {
        cityname: "铜鼓县",
        departtype: "1",
        findname: "铜鼓县",
        id: "360926000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "天河区",
        departtype: "1",
        findname: "天河区",
        id: "440106000000",
        tag: "广州市,广东省"
      },
      {
        cityname: "塔河县",
        departtype: "1",
        findname: "塔河县",
        id: "232722000000",
        tag: "大兴安岭地区,黑龙江"
      },
      {
        cityname: "泰和县",
        departtype: "1",
        findname: "泰和县",
        id: "360826000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "太和县",
        departtype: "1",
        findname: "太和县",
        id: "341222000000",
        tag: "阜阳市,安徽省"
      },
      {
        cityname: "太湖县",
        departtype: "1",
        findname: "太湖县",
        id: "340825000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "通化县",
        departtype: "1",
        findname: "通化县",
        id: "220521000000",
        tag: "通化市,吉林省"
      },
      {
        cityname: "同江市",
        departtype: "1",
        findname: "同江市",
        id: "230881000000",
        tag: "佳木斯市,黑龙江"
      },
      {
        cityname: "特克斯县",
        departtype: "1",
        findname: "特克斯县",
        id: "654027000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "托克逊县",
        departtype: "1",
        findname: "托克逊县",
        id: "650422000000",
        tag: "吐鲁番市,新疆"
      },
      {
        cityname: "铁力市",
        departtype: "1",
        findname: "铁力市",
        id: "230781000000",
        tag: "伊春市,黑龙江"
      },
      {
        cityname: "泰来县",
        departtype: "1",
        findname: "泰来县",
        id: "230224000000",
        tag: "齐齐哈尔,黑龙江"
      },
      {
        cityname: "田林县",
        departtype: "1",
        findname: "田林县",
        id: "451029000000",
        tag: "百色市,广西"
      },
      {
        cityname: "桐庐县",
        departtype: "1",
        findname: "桐庐县",
        id: "330122000000",
        tag: "杭州市,浙江省"
      },
      {
        cityname: "托里县",
        departtype: "1",
        findname: "托里县",
        id: "654224000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "图们市",
        departtype: "1",
        findname: "图们市",
        id: "222402000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "洮南市",
        departtype: "1",
        findname: "洮南市",
        id: "220881000000",
        tag: "白城市,吉林省"
      },
      {
        cityname: "突泉县",
        departtype: "1",
        findname: "突泉县",
        id: "152224000000",
        tag: "兴安盟,内蒙古"
      },
      {
        cityname: "同仁市",
        departtype: "1",
        findname: "同仁市",
        id: "632301000000",
        tag: "黄南藏族自治州,青海省"
      },
      {
        cityname: "塔什库尔干塔吉克自治县",
        departtype: "1",
        findname: "塔什库尔干塔吉克自治县",
        id: "653131000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "泰顺县",
        departtype: "1",
        findname: "泰顺县",
        id: "330329000000",
        tag: "温州市,浙江省"
      },
      {
        cityname: "通山县",
        departtype: "1",
        findname: "通山县",
        id: "421224000000",
        tag: "咸宁市,湖北省"
      },
      {
        cityname: "天台县",
        departtype: "1",
        findname: "天台县",
        id: "331023000000",
        tag: "台州市,浙江省"
      },
      {
        cityname: "通渭县",
        departtype: "1",
        findname: "通渭县",
        id: "621121000000",
        tag: "定西市,甘肃省"
      },
      {
        cityname: "唐县",
        departtype: "1",
        findname: "唐县",
        id: "130627000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "藤县",
        departtype: "1",
        findname: "藤县",
        id: "450422000000",
        tag: "梧州市,广西"
      },
      {
        cityname: "桐乡市",
        departtype: "1",
        findname: "桐乡市",
        id: "330483000000",
        tag: "嘉兴市,浙江省"
      },
      {
        cityname: "同心县",
        departtype: "1",
        findname: "同心县",
        id: "640324000000",
        tag: "吴忠市,宁夏"
      },
      {
        cityname: "田阳区",
        departtype: "1",
        findname: "田阳区",
        id: "451021000000",
        tag: "百色市,广西"
      },
      {
        cityname: "通榆县",
        departtype: "1",
        findname: "通榆县",
        id: "220822000000",
        tag: "白城市,吉林省"
      },
      {
        cityname: "天镇县",
        departtype: "1",
        findname: "天镇县",
        id: "140222000000",
        tag: "大同市,山西省"
      },
      {
        cityname: "图强镇",
        departtype: "1",
        findname: "图强镇",
        id: "232723101000",
        tag: "漠河县,大兴安岭地区,黑龙江"
      },
      {
        cityname: "塔瓦库勒乡",
        departtype: "1",
        findname: "塔瓦库勒乡",
        id: "653221207000",
        tag: "和田县,和田地区,新疆"
      }
    ],
    max: 100,
    key: "T"
  },
  {
    departures: [
      {
        cityname: "文昌市",
        departtype: "1",
        findname: "文昌市",
        id: "469005000000",
        tag: "海南省"
      },
      {
        cityname: "潍坊市",
        departtype: "1",
        findname: "潍坊市",
        id: "370700000000",
        tag: "山东省"
      },
      {
        cityname: "威海市",
        departtype: "1",
        findname: "威海市",
        id: "371000000000",
        tag: "山东省"
      },
      {
        cityname: "乌海市",
        departtype: "1",
        findname: "乌海市",
        id: "150300000000",
        tag: "内蒙古"
      },
      {
        cityname: "武汉市",
        departtype: "1",
        findname: "武汉市",
        id: "420100000000",
        tag: "湖北省"
      },
      {
        cityname: "芜湖市",
        departtype: "1",
        findname: "芜湖市",
        id: "340200000000",
        tag: "安徽省"
      },
      {
        cityname: "乌鲁木齐市",
        departtype: "1",
        findname: "乌鲁木齐市",
        id: "650100000000",
        tag: "新疆"
      },
      {
        cityname: "万宁市",
        departtype: "1",
        findname: "万宁市",
        id: "469006000000",
        tag: "海南省"
      },
      {
        cityname: "渭南市",
        departtype: "1",
        findname: "渭南市",
        id: "610500000000",
        tag: "陕西省"
      },
      {
        cityname: "文山壮族苗族自治州",
        departtype: "1",
        findname: "文山壮族苗族自治州",
        id: "532600000000",
        tag: "云南省"
      },
      {
        cityname: "武威市",
        departtype: "1",
        findname: "武威市",
        id: "620600000000",
        tag: "甘肃省"
      },
      {
        cityname: "温州市",
        departtype: "1",
        findname: "温州市",
        id: "330300000000",
        tag: "浙江省"
      },
      {
        cityname: "吴忠市",
        departtype: "1",
        findname: "吴忠市",
        id: "640300000000",
        tag: "宁夏"
      },
      {
        cityname: "梧州市",
        departtype: "1",
        findname: "梧州市",
        id: "450400000000",
        tag: "广西"
      },
      {
        cityname: "五指山市",
        departtype: "1",
        findname: "五指山市",
        id: "469001000000",
        tag: "海南省"
      },
      {
        cityname: "万安县",
        departtype: "1",
        findname: "万安县",
        id: "360828000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "文安县",
        departtype: "1",
        findname: "文安县",
        id: "131026000000",
        tag: "廊坊市,河北省"
      },
      {
        cityname: "吴堡县",
        departtype: "1",
        findname: "吴堡县",
        id: "610829000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "围场满族蒙古族自治县",
        departtype: "1",
        findname: "围场满族蒙古族自治县",
        id: "130828000000",
        tag: "承德市,河北省"
      },
      {
        cityname: "五常市",
        departtype: "1",
        findname: "五常市",
        id: "230184000000",
        tag: "哈尔滨市,黑龙江"
      },
      {
        cityname: "吴川市",
        departtype: "1",
        findname: "吴川市",
        id: "440883000000",
        tag: "湛江市,广东省"
      },
      {
        cityname: "文成县",
        departtype: "1",
        findname: "文成县",
        id: "330328000000",
        tag: "温州市,浙江省"
      },
      {
        cityname: "武城县",
        departtype: "1",
        findname: "武城县",
        id: "371428000000",
        tag: "德州市,山东省"
      },
      {
        cityname: "五大连池市",
        departtype: "1",
        findname: "五大连池",
        id: "231182000000",
        tag: "黑河市,黑龙江"
      },
      {
        cityname: "望都县",
        departtype: "1",
        findname: "望都县",
        id: "130631000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "五河县",
        departtype: "1",
        findname: "五河县",
        id: "340322000000",
        tag: "蚌埠市,安徽省"
      },
      {
        cityname: "望江县",
        departtype: "1",
        findname: "望江县",
        id: "340827000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "望奎县",
        departtype: "1",
        findname: "望奎县",
        id: "231221000000",
        tag: "绥化市,黑龙江"
      },
      {
        cityname: "乌拉盖开发区",
        departtype: "1",
        findname: "乌拉盖开发区",
        id: "152571000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "乌兰浩特市",
        departtype: "1",
        findname: "乌兰浩特市",
        id: "152201000000",
        tag: "兴安盟,内蒙古"
      },
      {
        cityname: "温岭市",
        departtype: "1",
        findname: "温岭市",
        id: "331081000000",
        tag: "台州市,浙江省"
      },
      {
        cityname: "乌拉特前旗",
        departtype: "1",
        findname: "乌拉特前旗",
        id: "150823000000",
        tag: "巴彦淖尔市,内蒙古"
      },
      {
        cityname: "乌拉特中旗",
        departtype: "1",
        findname: "乌拉特中旗",
        id: "150824000000",
        tag: "巴彦淖尔市,内蒙古"
      },
      {
        cityname: "乌兰县",
        departtype: "1",
        findname: "乌兰县",
        id: "632821000000",
        tag: "海西自治州,青海省"
      },
      {
        cityname: "武鸣县",
        departtype: "1",
        findname: "武鸣县",
        id: "450122000000",
        tag: "南宁市,广西"
      },
      {
        cityname: "万年县",
        departtype: "1",
        findname: "万年县",
        id: "361129000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "武宁县",
        departtype: "1",
        findname: "武宁县",
        id: "360423000000",
        tag: "九江市,江西省"
      },
      {
        cityname: "汪清县",
        departtype: "1",
        findname: "汪清县",
        id: "222424000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "武强县",
        departtype: "1",
        findname: "武强县",
        id: "131123000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "吴桥县",
        departtype: "1",
        findname: "吴桥县",
        id: "130928000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "吴起县",
        departtype: "1",
        findname: "吴起县",
        id: "610626000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "乌苏市",
        departtype: "1",
        findname: "乌苏市",
        id: "654202000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "乌什县",
        departtype: "1",
        findname: "乌什县",
        id: "652927000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "巍山彝族回族自治县",
        departtype: "1",
        findname: "巍山彝族回族自治县",
        id: "532927000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "五台县",
        departtype: "1",
        findname: "五台县",
        id: "140922000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "魏县",
        departtype: "1",
        findname: "魏县",
        id: "130434000000",
        tag: "邯郸市,河北省"
      },
      {
        cityname: "威县",
        departtype: "1",
        findname: "威县",
        id: "130533000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "文县",
        departtype: "1",
        findname: "文县",
        id: "621222000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "武穴市",
        departtype: "1",
        findname: "武穴市",
        id: "421182000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "武乡县",
        departtype: "1",
        findname: "武乡县",
        id: "140429000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "武宣县",
        departtype: "1",
        findname: "武宣县",
        id: "451323000000",
        tag: "来宾市,广西"
      },
      {
        cityname: "渭源县",
        departtype: "1",
        findname: "渭源县",
        id: "621123000000",
        tag: "定西市,甘肃省"
      },
      {
        cityname: "武邑县",
        departtype: "1",
        findname: "武邑县",
        id: "131122000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "婺源县",
        departtype: "1",
        findname: "婺源县",
        id: "361130000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "五原县",
        departtype: "1",
        findname: "五原县",
        id: "150821000000",
        tag: "巴彦淖尔市,内蒙古"
      },
      {
        cityname: "万载县",
        departtype: "1",
        findname: "万载县",
        id: "360922000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "乌丹镇",
        departtype: "1",
        findname: "乌丹镇",
        id: "150426100000",
        tag: "翁牛特旗,赤峰市,内蒙古"
      },
      {
        cityname: "乌斯太镇",
        departtype: "1",
        findname: "乌斯太镇",
        id: "152971100000",
        tag: "阿拉善经济开发区,阿拉善盟,内蒙古"
      }
    ],
    max: 100,
    key: "W"
  },
  {
    departures: [
      {
        cityname: "西安市",
        departtype: "1",
        findname: "西安市",
        id: "610100000000",
        tag: "陕西省"
      },
      {
        cityname: "宣城市",
        departtype: "1",
        findname: "宣城市",
        id: "341800000000",
        tag: "安徽省"
      },
      {
        cityname: "许昌市",
        departtype: "1",
        findname: "许昌市",
        id: "411000000000",
        tag: "河南省"
      },
      {
        cityname: "孝感市",
        departtype: "1",
        findname: "孝感市",
        id: "420900000000",
        tag: "湖北省"
      },
      {
        cityname: "锡林郭勒盟",
        departtype: "1",
        findname: "锡林郭勒盟",
        id: "152500000000",
        tag: "内蒙古"
      },
      {
        cityname: "厦门市",
        departtype: "1",
        findname: "厦门市",
        id: "350200000000",
        tag: "福建省"
      },
      {
        cityname: "咸宁市",
        departtype: "1",
        findname: "咸宁市",
        id: "421200000000",
        tag: "湖北省"
      },
      {
        cityname: "西宁市",
        departtype: "1",
        findname: "西宁市",
        id: "630100000000",
        tag: "青海省"
      },
      {
        cityname: "西双版纳傣族自治州",
        departtype: "1",
        findname: "西双版纳傣族自治州",
        id: "532800000000",
        tag: "云南省"
      },
      {
        cityname: "仙桃市",
        departtype: "1",
        findname: "仙桃市",
        id: "429004000000",
        tag: "省直辖市县级,湖北省"
      },
      {
        cityname: "邢台市",
        departtype: "1",
        findname: "邢台市",
        id: "130500000000",
        tag: "河北省"
      },
      {
        cityname: "新乡市",
        departtype: "1",
        findname: "新乡市",
        id: "410700000000",
        tag: "河南省"
      },
      {
        cityname: "襄阳市",
        departtype: "1",
        findname: "襄阳市",
        id: "420600000000",
        tag: "湖北省"
      },
      {
        cityname: "咸阳市",
        departtype: "1",
        findname: "咸阳市",
        id: "610400000000",
        tag: "陕西省"
      },
      {
        cityname: "信阳市",
        departtype: "1",
        findname: "信阳市",
        id: "411500000000",
        tag: "河南省"
      },
      {
        cityname: "新余市",
        departtype: "1",
        findname: "新余市",
        id: "360500000000",
        tag: "江西省"
      },
      {
        cityname: "忻州市",
        departtype: "1",
        findname: "忻州市",
        id: "140900000000",
        tag: "山西省"
      },
      {
        cityname: "兴安县",
        departtype: "1",
        findname: "兴安县",
        id: "450325000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "新巴尔虎右旗",
        departtype: "1",
        findname: "新巴尔虎右旗",
        id: "150727000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "薛城区",
        departtype: "1",
        findname: "薛城区",
        id: "370403000000",
        tag: "枣庄市,山东省"
      },
      {
        cityname: "乡城县",
        departtype: "1",
        findname: "乡城县",
        id: "513336000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "孝昌县",
        departtype: "1",
        findname: "孝昌县",
        id: "420921000000",
        tag: "孝感市,湖北省"
      },
      {
        cityname: "新蔡县",
        departtype: "1",
        findname: "新蔡县",
        id: "411729000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "新昌县",
        departtype: "1",
        findname: "新昌县",
        id: "330624000000",
        tag: "绍兴市,浙江省"
      },
      {
        cityname: "忻城县",
        departtype: "1",
        findname: "忻城县",
        id: "451321000000",
        tag: "来宾市,广西"
      },
      {
        cityname: "寻甸回彝族自治县",
        departtype: "1",
        findname: "寻甸回族",
        id: "530129000000",
        tag: "昆明市,云南省"
      },
      {
        cityname: "咸丰县",
        departtype: "1",
        findname: "咸丰县",
        id: "422826000000",
        tag: "恩施自治州,湖北省"
      },
      {
        cityname: "信丰县",
        departtype: "1",
        findname: "信丰县",
        id: "360722000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "香格里拉县",
        departtype: "1",
        findname: "香格里拉县",
        id: "533421000000",
        tag: "迪庆藏族自治州,云南省"
      },
      {
        cityname: "新干县",
        departtype: "1",
        findname: "新干县",
        id: "360824000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "兴国县",
        departtype: "1",
        findname: "兴国县",
        id: "360732000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "镶黄旗",
        departtype: "1",
        findname: "镶黄旗",
        id: "152528000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "西和县",
        departtype: "1",
        findname: "西和县",
        id: "621225000000",
        tag: "陇南市,甘肃省"
      },
      {
        cityname: "新河县",
        departtype: "1",
        findname: "新河县",
        id: "130530000000",
        tag: "邢台市,河北省"
      },
      {
        cityname: "新和县",
        departtype: "1",
        findname: "新和县",
        id: "652925000000",
        tag: "阿克苏地区,新疆"
      },
      {
        cityname: "宣化县",
        departtype: "1",
        findname: "宣化县",
        id: "130721000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "下花园区",
        departtype: "1",
        findname: "下花园区",
        id: "130706000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "辛集市",
        departtype: "1",
        findname: "辛集市",
        id: "130181000000",
        tag: "石家庄市,河北省"
      },
      {
        cityname: "仙居县",
        departtype: "1",
        findname: "仙居县",
        id: "331024000000",
        tag: "台州市,浙江省"
      },
      {
        cityname: "西吉县",
        departtype: "1",
        findname: "西吉县",
        id: "640422000000",
        tag: "固原市,宁夏"
      },
      {
        cityname: "逊克县",
        departtype: "1",
        findname: "逊克县",
        id: "231123000000",
        tag: "黑河市,黑龙江"
      },
      {
        cityname: "锡林浩特市",
        departtype: "1",
        findname: "锡林浩特市",
        id: "152502000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "兴隆县",
        departtype: "1",
        findname: "兴隆县",
        id: "130822000000",
        tag: "承德市,河北省"
      },
      {
        cityname: "西盟佤族自治县",
        departtype: "1",
        findname: "西盟佤族自治县",
        id: "530829000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "乡宁县",
        departtype: "1",
        findname: "乡宁县",
        id: "141029000000",
        tag: "临汾市,山西省"
      },
      {
        cityname: "兴平市",
        departtype: "1",
        findname: "兴平市",
        id: "610481000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "霞浦县",
        departtype: "1",
        findname: "霞浦县",
        id: "350921000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "西平县",
        departtype: "1",
        findname: "西平县",
        id: "411721000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "新青区",
        departtype: "1",
        findname: "新青区",
        id: "230707000000",
        tag: "伊春市,黑龙江"
      },
      {
        cityname: "萧山区",
        departtype: "1",
        findname: "萧山区",
        id: "330109000000",
        tag: "杭州市,浙江省"
      },
      {
        cityname: "霞山区",
        departtype: "1",
        findname: "霞山区",
        id: "440803000000",
        tag: "湛江市,广东省"
      },
      {
        cityname: "徐水区",
        departtype: "1",
        findname: "徐水区",
        id: "130609000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "象山县",
        departtype: "1",
        findname: "象山县",
        id: "330225000000",
        tag: "宁波市,浙江省"
      },
      {
        cityname: "兴山县",
        departtype: "1",
        findname: "兴山县",
        id: "420526000000",
        tag: "宜昌市,湖北省"
      },
      {
        cityname: "浠水县",
        departtype: "1",
        findname: "浠水县",
        id: "421125000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "修水县",
        departtype: "1",
        findname: "修水县",
        id: "360424000000",
        tag: "九江市,江西省"
      },
      {
        cityname: "宣威市",
        departtype: "1",
        findname: "宣威市",
        id: "530381000000",
        tag: "曲靖市,云南省"
      },
      {
        cityname: "寻乌县",
        departtype: "1",
        findname: "寻乌县",
        id: "360734000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "西乌珠穆沁旗",
        departtype: "1",
        findname: "西乌珠穆沁旗",
        id: "152526000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "献县",
        departtype: "1",
        findname: "献县",
        id: "130929000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "萧县",
        departtype: "1",
        findname: "萧县",
        id: "341322000000",
        tag: "宿州市,安徽省"
      },
      {
        cityname: "兴县",
        departtype: "1",
        findname: "兴县",
        id: "141123000000",
        tag: "吕梁市,山西省"
      },
      {
        cityname: "新县",
        departtype: "1",
        findname: "新县",
        id: "411523000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "雄县",
        departtype: "1",
        findname: "雄县",
        id: "130638000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "息县",
        departtype: "1",
        findname: "息县",
        id: "411528000000",
        tag: "信阳市,河南省"
      },
      {
        cityname: "西乡县",
        departtype: "1",
        findname: "西乡县",
        id: "610724000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "孝义市",
        departtype: "1",
        findname: "孝义市",
        id: "141181000000",
        tag: "吕梁市,山西省"
      },
      {
        cityname: "湘阴县",
        departtype: "1",
        findname: "湘阴县",
        id: "430624000000",
        tag: "岳阳市,湖南省"
      },
      {
        cityname: "襄垣县",
        departtype: "1",
        findname: "襄垣县",
        id: "140423000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "祥云县",
        departtype: "1",
        findname: "祥云县",
        id: "532923000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "兴业县",
        departtype: "1",
        findname: "兴业县",
        id: "450924000000",
        tag: "玉林市,广西"
      },
      {
        cityname: "新源县",
        departtype: "1",
        findname: "新源县",
        id: "654025000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "昔阳县",
        departtype: "1",
        findname: "昔阳县",
        id: "140724000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "旬阳市",
        departtype: "1",
        findname: "旬阳县",
        id: "610981000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "旬邑县",
        departtype: "1",
        findname: "旬邑县",
        id: "610429000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "信州区",
        departtype: "1",
        findname: "信州区",
        id: "361102000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "新郑市",
        departtype: "1",
        findname: "新郑市",
        id: "410184000000",
        tag: "郑州市,河南省"
      },
      {
        cityname: "象州县",
        departtype: "1",
        findname: "象州县",
        id: "451322000000",
        tag: "来宾市,广西"
      },
      {
        cityname: "西海镇",
        departtype: "1",
        findname: "西海镇",
        id: "632223101000",
        tag: "海晏县,海北藏族自治州,青海省"
      }
    ],
    max: 100,
    key: "X"
  },
  {
    departures: [
      {
        cityname: "雅安市",
        departtype: "1",
        findname: "雅安市",
        id: "511800000000",
        tag: "四川省"
      },
      {
        cityname: "延安市",
        departtype: "1",
        findname: "延安市",
        id: "610600000000",
        tag: "陕西省"
      },
      {
        cityname: "宜宾市",
        departtype: "1",
        findname: "宜宾市",
        id: "511500000000",
        tag: "四川省"
      },
      {
        cityname: "宜昌市",
        departtype: "1",
        findname: "宜昌市",
        id: "420500000000",
        tag: "湖北省"
      },
      {
        cityname: "宜春市",
        departtype: "1",
        findname: "宜春市",
        id: "360900000000",
        tag: "江西省"
      },
      {
        cityname: "伊春市",
        departtype: "1",
        findname: "伊春市",
        id: "230700000000",
        tag: "黑龙江"
      },
      {
        cityname: "银川市",
        departtype: "1",
        findname: "银川市",
        id: "640100000000",
        tag: "宁夏"
      },
      {
        cityname: "运城市",
        departtype: "1",
        findname: "运城市",
        id: "140800000000",
        tag: "山西省"
      },
      {
        cityname: "云浮市",
        departtype: "1",
        findname: "云浮市",
        id: "445300000000",
        tag: "广东省"
      },
      {
        cityname: "阳江市",
        departtype: "1",
        findname: "阳江市",
        id: "441700000000",
        tag: "广东省"
      },
      {
        cityname: "玉林市",
        departtype: "1",
        findname: "玉林市",
        id: "450900000000",
        tag: "广西"
      },
      {
        cityname: "榆林市",
        departtype: "1",
        findname: "榆林市",
        id: "610800000000",
        tag: "陕西省"
      },
      {
        cityname: "阳泉市",
        departtype: "1",
        findname: "阳泉市",
        id: "140300000000",
        tag: "山西省"
      },
      {
        cityname: "烟台市",
        departtype: "1",
        findname: "烟台市",
        id: "370600000000",
        tag: "山东省"
      },
      {
        cityname: "鹰潭市",
        departtype: "1",
        findname: "鹰潭市",
        id: "360600000000",
        tag: "江西省"
      },
      {
        cityname: "玉溪市",
        departtype: "1",
        findname: "玉溪市",
        id: "530400000000",
        tag: "云南省"
      },
      {
        cityname: "益阳市",
        departtype: "1",
        findname: "益阳市",
        id: "430900000000",
        tag: "湖南省"
      },
      {
        cityname: "姚安县",
        departtype: "1",
        findname: "姚安县",
        id: "532325000000",
        tag: "楚雄彝族自治州,云南省"
      },
      {
        cityname: "远安县",
        departtype: "1",
        findname: "远安县",
        id: "420525000000",
        tag: "宜昌市,湖北省"
      },
      {
        cityname: "元宝山区",
        departtype: "1",
        findname: "元宝山区",
        id: "150403000000",
        tag: "赤峰市,内蒙古"
      },
      {
        cityname: "漾濞县",
        departtype: "1",
        findname: "漾濞县",
        id: "532922000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "宜城市",
        departtype: "1",
        findname: "宜城市",
        id: "420684000000",
        tag: "襄阳市,湖北省"
      },
      {
        cityname: "应城市",
        departtype: "1",
        findname: "应城市",
        id: "420981000000",
        tag: "孝感市,湖北省"
      },
      {
        cityname: "永城市",
        departtype: "1",
        findname: "永城市",
        id: "411481000000",
        tag: "商丘市,河南省"
      },
      {
        cityname: "禹城市",
        departtype: "1",
        findname: "禹城市",
        id: "371482000000",
        tag: "德州市,山东省"
      },
      {
        cityname: "延长县",
        departtype: "1",
        findname: "延长县",
        id: "610621000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "盐池县",
        departtype: "1",
        findname: "盐池县",
        id: "640323000000",
        tag: "吴忠市,宁夏"
      },
      {
        cityname: "阳城县",
        departtype: "1",
        findname: "阳城县",
        id: "140522000000",
        tag: "晋城市,山西省"
      },
      {
        cityname: "叶城县",
        departtype: "1",
        findname: "叶城县",
        id: "653126000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "宜川县",
        departtype: "1",
        findname: "宜川县",
        id: "610630000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "永昌县",
        departtype: "1",
        findname: "永昌县",
        id: "620321000000",
        tag: "金昌市,甘肃省"
      },
      {
        cityname: "永春县",
        departtype: "1",
        findname: "永春县",
        id: "350525000000",
        tag: "泉州市,福建省"
      },
      {
        cityname: "郓城县",
        departtype: "1",
        findname: "郓城县",
        id: "371725000000",
        tag: "菏泽市,山东省"
      },
      {
        cityname: "宜都市",
        departtype: "1",
        findname: "宜都市",
        id: "420581000000",
        tag: "宜昌市,湖北省"
      },
      {
        cityname: "永德县",
        departtype: "1",
        findname: "永德县",
        id: "530923000000",
        tag: "临沧市,云南省"
      },
      {
        cityname: "于都县",
        departtype: "1",
        findname: "于都县",
        id: "360731000000",
        tag: "赣州市,江西省"
      },
      {
        cityname: "宜丰县",
        departtype: "1",
        findname: "宜丰县",
        id: "360924000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "永丰县",
        departtype: "1",
        findname: "永丰县",
        id: "360825000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "永福县",
        departtype: "1",
        findname: "永福县",
        id: "450326000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "阳高县",
        departtype: "1",
        findname: "阳高县",
        id: "140221000000",
        tag: "大同市,山西省"
      },
      {
        cityname: "余干县",
        departtype: "1",
        findname: "余干县",
        id: "361127000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "沿河土家族自治县",
        departtype: "1",
        findname: "沿河土家",
        id: "522228000000",
        tag: "铜仁地区,贵州省"
      },
      {
        cityname: "宜黄县",
        departtype: "1",
        findname: "宜黄县",
        id: "361026000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "玉环县",
        departtype: "1",
        findname: "玉环县",
        id: "331021000000",
        tag: "台州市,浙江省"
      },
      {
        cityname: "云和县",
        departtype: "1",
        findname: "云和县",
        id: "331125000000",
        tag: "丽水市,浙江省"
      },
      {
        cityname: "延吉市",
        departtype: "1",
        findname: "延吉市",
        id: "222401000000",
        tag: "延边,吉林省"
      },
      {
        cityname: "英吉沙县",
        departtype: "1",
        findname: "英吉沙县",
        id: "653123000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "雅江县",
        departtype: "1",
        findname: "雅江县",
        id: "513325000000",
        tag: "甘孜州,四川省"
      },
      {
        cityname: "盈江县",
        departtype: "1",
        findname: "盈江县",
        id: "533123000000",
        tag: "德宏傣族景颇族自治州,云南省"
      },
      {
        cityname: "永靖县",
        departtype: "1",
        findname: "永靖县",
        id: "622923000000",
        tag: "临夏自治州,甘肃省"
      },
      {
        cityname: "永吉县",
        departtype: "1",
        findname: "永吉县",
        id: "220221000000",
        tag: "吉林市,吉林省"
      },
      {
        cityname: "杨陵区",
        departtype: "1",
        findname: "杨陵区",
        id: "610403000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "夷陵区",
        departtype: "1",
        findname: "夷陵区",
        id: "420506000000",
        tag: "宜昌市,湖北省"
      },
      {
        cityname: "宜良县",
        departtype: "1",
        findname: "宜良县",
        id: "530125000000",
        tag: "昆明市,云南省"
      },
      {
        cityname: "彝良县",
        departtype: "1",
        findname: "彝良县",
        id: "530628000000",
        tag: "昭通市,云南省"
      },
      {
        cityname: "尉犁县",
        departtype: "1",
        findname: "尉犁县",
        id: "652823000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "云龙县",
        departtype: "1",
        findname: "云龙县",
        id: "532929000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "义马市",
        departtype: "1",
        findname: "义马市",
        id: "411281000000",
        tag: "三门峡市,河南省"
      },
      {
        cityname: "玉门市",
        departtype: "1",
        findname: "玉门市",
        id: "620981000000",
        tag: "酒泉市,甘肃省"
      },
      {
        cityname: "裕民县",
        departtype: "1",
        findname: "裕民县",
        id: "654225000000",
        tag: "塔城地区,新疆"
      },
      {
        cityname: "云梦县",
        departtype: "1",
        findname: "云梦县",
        id: "420923000000",
        tag: "孝感市,湖北省"
      },
      {
        cityname: "伊宁市",
        departtype: "1",
        findname: "伊宁市",
        id: "654002000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "岳普湖县",
        departtype: "1",
        findname: "岳普湖县",
        id: "653128000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "原平市",
        departtype: "1",
        findname: "原平市",
        id: "140981000000",
        tag: "忻州市,山西省"
      },
      {
        cityname: "永平县",
        departtype: "1",
        findname: "永平县",
        id: "532928000000",
        tag: "大理白族自治州,云南省"
      },
      {
        cityname: "乐清市",
        departtype: "1",
        findname: "乐清市",
        id: "330382000000",
        tag: "温州市,浙江省"
      },
      {
        cityname: "焉耆回族自治县",
        departtype: "1",
        findname: "焉耆县",
        id: "652826000000",
        tag: "巴音郭楞蒙古自治州,新疆"
      },
      {
        cityname: "永清县",
        departtype: "1",
        findname: "永清县",
        id: "131023000000",
        tag: "廊坊市,河北省"
      },
      {
        cityname: "垣曲县",
        departtype: "1",
        findname: "垣曲县",
        id: "140827000000",
        tag: "运城市,山西省"
      },
      {
        cityname: "榆树市",
        departtype: "1",
        findname: "榆树市",
        id: "220182000000",
        tag: "长春市,吉林省"
      },
      {
        cityname: "阳朔县",
        departtype: "1",
        findname: "阳朔县",
        id: "450321000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "盐山县",
        departtype: "1",
        findname: "盐山县",
        id: "130925000000",
        tag: "沧州市,河北省"
      },
      {
        cityname: "砚山县",
        departtype: "1",
        findname: "砚山县",
        id: "532622000000",
        tag: "文山壮族苗族自治州,云南省"
      },
      {
        cityname: "颍上县",
        departtype: "1",
        findname: "颍上县",
        id: "341226000000",
        tag: "阜阳市,安徽省"
      },
      {
        cityname: "英山县",
        departtype: "1",
        findname: "英山县",
        id: "421124000000",
        tag: "黄冈市,湖北省"
      },
      {
        cityname: "永胜县",
        departtype: "1",
        findname: "永胜县",
        id: "530722000000",
        tag: "丽江市,云南省"
      },
      {
        cityname: "永寿县",
        departtype: "1",
        findname: "永寿县",
        id: "610426000000",
        tag: "咸阳市,陕西省"
      },
      {
        cityname: "元氏县",
        departtype: "1",
        findname: "元氏县",
        id: "130132000000",
        tag: "石家庄市,河北省"
      },
      {
        cityname: "玉山县",
        departtype: "1",
        findname: "玉山县",
        id: "361123000000",
        tag: "上饶市,江西省"
      },
      {
        cityname: "伊通满族自治县",
        departtype: "1",
        findname: "伊通满族自治县",
        id: "220323000000",
        tag: "四平市,吉林省"
      },
      {
        cityname: "玉田县",
        departtype: "1",
        findname: "玉田县",
        id: "130229000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "于田县",
        departtype: "1",
        findname: "于田县",
        id: "653226000000",
        tag: "和田地区,新疆"
      },
      {
        cityname: "义乌市",
        departtype: "1",
        findname: "义乌市",
        id: "330782000000",
        tag: "金华市,浙江省"
      },
      {
        cityname: "洋县",
        departtype: "1",
        findname: "洋县",
        id: "610723000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "应县",
        departtype: "1",
        findname: "应县",
        id: "140622000000",
        tag: "朔州市,山西省"
      },
      {
        cityname: "郧县",
        departtype: "1",
        findname: "郧县",
        id: "420321000000",
        tag: "十堰市,湖北省"
      },
      {
        cityname: "蔚县",
        departtype: "1",
        findname: "蔚县",
        id: "130726000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "盂县",
        departtype: "1",
        findname: "盂县",
        id: "140322000000",
        tag: "阳泉市,山西省"
      },
      {
        cityname: "阳新县",
        departtype: "1",
        findname: "阳新县",
        id: "420222000000",
        tag: "黄石市,湖北省"
      },
      {
        cityname: "永新县",
        departtype: "1",
        findname: "永新县",
        id: "360830000000",
        tag: "吉安市,江西省"
      },
      {
        cityname: "岳西县",
        departtype: "1",
        findname: "岳西县",
        id: "340828000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "郧西县",
        departtype: "1",
        findname: "郧西县",
        id: "420322000000",
        tag: "十堰市,湖北省"
      },
      {
        cityname: "余姚市",
        departtype: "1",
        findname: "余姚市",
        id: "330281000000",
        tag: "宁波市,浙江省"
      },
      {
        cityname: "阳原县",
        departtype: "1",
        findname: "阳原县",
        id: "130727000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "右玉县",
        departtype: "1",
        findname: "右玉县",
        id: "140623000000",
        tag: "朔州市,山西省"
      },
      {
        cityname: "原阳县",
        departtype: "1",
        findname: "原阳县",
        id: "410725000000",
        tag: "新乡市,河南省"
      },
      {
        cityname: "宜州区",
        departtype: "1",
        findname: "宜州区",
        id: "451203000000",
        tag: "河池市,广西"
      },
      {
        cityname: "禹州市",
        departtype: "1",
        findname: "禹州市",
        id: "411081000000",
        tag: "许昌市,河南省"
      },
      {
        cityname: "野三关镇",
        departtype: "1",
        findname: "野三关镇",
        id: "422823107000",
        tag: "巴东县,恩施自治州,湖北省"
      },
      {
        cityname: "渔洋关镇",
        departtype: "1",
        findname: "渔洋关镇",
        id: "420529103000",
        tag: "五峰县,宜昌市,湖北省"
      }
    ],
    max: 100,
    key: "Y"
  },
  {
    departures: [
      {
        cityname: "淄博市",
        departtype: "1",
        findname: "淄博市",
        id: "370300000000",
        tag: "山东省"
      },
      {
        cityname: "自贡市",
        departtype: "1",
        findname: "自贡市",
        id: "510300000000",
        tag: "四川省"
      },
      {
        cityname: "珠海市",
        departtype: "1",
        findname: "珠海市",
        id: "440400000000",
        tag: "广东省"
      },
      {
        cityname: "张家口市",
        departtype: "1",
        findname: "张家口市",
        id: "130700000000",
        tag: "河北省"
      },
      {
        cityname: "湛江市",
        departtype: "1",
        findname: "湛江市",
        id: "440800000000",
        tag: "广东省"
      },
      {
        cityname: "周口市",
        departtype: "1",
        findname: "周口市",
        id: "411600000000",
        tag: "河南省"
      },
      {
        cityname: "驻马店市",
        departtype: "1",
        findname: "驻马店市",
        id: "411700000000",
        tag: "河南省"
      },
      {
        cityname: "肇庆市",
        departtype: "1",
        findname: "肇庆市",
        id: "441200000000",
        tag: "广东省"
      },
      {
        cityname: "中山市",
        departtype: "1",
        findname: "中山市",
        id: "442000000000",
        tag: "广东省"
      },
      {
        cityname: "舟山市",
        departtype: "1",
        findname: "舟山市",
        id: "330900000000",
        tag: "浙江省"
      },
      {
        cityname: "昭通市",
        departtype: "1",
        findname: "昭通市",
        id: "530600000000",
        tag: "云南省"
      },
      {
        cityname: "张掖市",
        departtype: "1",
        findname: "张掖市",
        id: "620700000000",
        tag: "甘肃省"
      },
      {
        cityname: "资阳市",
        departtype: "1",
        findname: "资阳市",
        id: "512000000000",
        tag: "四川省"
      },
      {
        cityname: "遵义市",
        departtype: "1",
        findname: "遵义市",
        id: "520300000000",
        tag: "贵州省"
      },
      {
        cityname: "枣庄市",
        departtype: "1",
        findname: "枣庄市",
        id: "370400000000",
        tag: "山东省"
      },
      {
        cityname: "漳州市",
        departtype: "1",
        findname: "漳州市",
        id: "350600000000",
        tag: "福建省"
      },
      {
        cityname: "镇安县",
        departtype: "1",
        findname: "镇安县",
        id: "611025000000",
        tag: "商洛市,陕西省"
      },
      {
        cityname: "张北县",
        departtype: "1",
        findname: "张北县",
        id: "130722000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "镇巴县",
        departtype: "1",
        findname: "镇巴县",
        id: "610728000000",
        tag: "汉中市,陕西省"
      },
      {
        cityname: "诸城市",
        departtype: "1",
        findname: "诸城市",
        id: "370782000000",
        tag: "潍坊市,山东省"
      },
      {
        cityname: "柘城县",
        departtype: "1",
        findname: "柘城县",
        id: "411424000000",
        tag: "商丘市,河南省"
      },
      {
        cityname: "肇东市",
        departtype: "1",
        findname: "肇东市",
        id: "231282000000",
        tag: "绥化市,黑龙江"
      },
      {
        cityname: "正定县",
        departtype: "1",
        findname: "正定县",
        id: "130123000000",
        tag: "石家庄市,河北省"
      },
      {
        cityname: "志丹县",
        departtype: "1",
        findname: "志丹县",
        id: "610625000000",
        tag: "延安市,陕西省"
      },
      {
        cityname: "准格尔旗",
        departtype: "1",
        findname: "准格尔旗",
        id: "150622000000",
        tag: "鄂尔多斯市,内蒙古"
      },
      {
        cityname: "遵化市",
        departtype: "1",
        findname: "遵化市",
        id: "130281000000",
        tag: "唐山市,河北省"
      },
      {
        cityname: "赞皇县",
        departtype: "1",
        findname: "赞皇县",
        id: "130129000000",
        tag: "石家庄市,河北省"
      },
      {
        cityname: "张家川回族自治县",
        departtype: "1",
        findname: "张家川县",
        id: "620525000000",
        tag: "天水市,甘肃省"
      },
      {
        cityname: "枝江市",
        departtype: "1",
        findname: "枝江市",
        id: "420583000000",
        tag: "宜昌市,湖北省"
      },
      {
        cityname: "诸暨市",
        departtype: "1",
        findname: "诸暨市",
        id: "330681000000",
        tag: "绍兴市,浙江省"
      },
      {
        cityname: "中江县",
        departtype: "1",
        findname: "中江县",
        id: "510623000000",
        tag: "德阳市,四川省"
      },
      {
        cityname: "正蓝旗",
        departtype: "1",
        findname: "正蓝旗",
        id: "152530000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "扎赉特旗",
        departtype: "1",
        findname: "扎赉特旗",
        id: "152223000000",
        tag: "兴安盟,内蒙古"
      },
      {
        cityname: "扎鲁特旗",
        departtype: "1",
        findname: "扎鲁特旗",
        id: "150526000000",
        tag: "通辽市,内蒙古"
      },
      {
        cityname: "扎兰屯市",
        departtype: "1",
        findname: "扎兰屯市",
        id: "150783000000",
        tag: "呼伦贝尔市,内蒙古"
      },
      {
        cityname: "镇赉县",
        departtype: "1",
        findname: "镇赉县",
        id: "220821000000",
        tag: "白城市,吉林省"
      },
      {
        cityname: "庄浪县",
        departtype: "1",
        findname: "庄浪县",
        id: "620825000000",
        tag: "平凉市,甘肃省"
      },
      {
        cityname: "涿鹿县",
        departtype: "1",
        findname: "涿鹿县",
        id: "130731000000",
        tag: "张家口市,河北省"
      },
      {
        cityname: "正宁县",
        departtype: "1",
        findname: "正宁县",
        id: "621025000000",
        tag: "庆阳市,甘肃省"
      },
      {
        cityname: "中宁县",
        departtype: "1",
        findname: "中宁县",
        id: "640521000000",
        tag: "中卫市,宁夏"
      },
      {
        cityname: "周宁县",
        departtype: "1",
        findname: "周宁县",
        id: "350925000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "卓尼县",
        departtype: "1",
        findname: "卓尼县",
        id: "623022000000",
        tag: "甘南藏族自治州,甘肃省"
      },
      {
        cityname: "泽普县",
        departtype: "1",
        findname: "泽普县",
        id: "653124000000",
        tag: "喀什地区,新疆"
      },
      {
        cityname: "漳浦县",
        departtype: "1",
        findname: "漳浦县",
        id: "350623000000",
        tag: "漳州市,福建省"
      },
      {
        cityname: "昭平县",
        departtype: "1",
        findname: "昭平县",
        id: "451121000000",
        tag: "贺州市,广西"
      },
      {
        cityname: "章丘市",
        departtype: "1",
        findname: "章丘市",
        id: "370181000000",
        tag: "济南市,山东省"
      },
      {
        cityname: "枣强县",
        departtype: "1",
        findname: "枣强县",
        id: "131121000000",
        tag: "衡水市,河北省"
      },
      {
        cityname: "左权县",
        departtype: "1",
        findname: "左权县",
        id: "140722000000",
        tag: "晋中市,山西省"
      },
      {
        cityname: "柘荣县",
        departtype: "1",
        findname: "柘荣县",
        id: "350926000000",
        tag: "宁德市,福建省"
      },
      {
        cityname: "樟树市",
        departtype: "1",
        findname: "樟树市",
        id: "360982000000",
        tag: "宜春市,江西省"
      },
      {
        cityname: "昭苏县",
        departtype: "1",
        findname: "昭苏县",
        id: "654026000000",
        tag: "伊犁哈萨克自治州,新疆"
      },
      {
        cityname: "柞水县",
        departtype: "1",
        findname: "柞水县",
        id: "611026000000",
        tag: "商洛市,陕西省"
      },
      {
        cityname: "钟山县",
        departtype: "1",
        findname: "钟山县",
        id: "451122000000",
        tag: "贺州市,广西"
      },
      {
        cityname: "竹山县",
        departtype: "1",
        findname: "竹山县",
        id: "420323000000",
        tag: "十堰市,湖北省"
      },
      {
        cityname: "漳县",
        departtype: "1",
        findname: "漳县",
        id: "621125000000",
        tag: "定西市,甘肃省"
      },
      {
        cityname: "正镶白旗",
        departtype: "1",
        findname: "正镶白旗",
        id: "152529000000",
        tag: "锡林郭勒盟,内蒙古"
      },
      {
        cityname: "钟祥市",
        departtype: "1",
        findname: "钟祥市",
        id: "420881000000",
        tag: "荆门市,湖北省"
      },
      {
        cityname: "镇雄县",
        departtype: "1",
        findname: "镇雄县",
        id: "530627000000",
        tag: "昭通市,云南省"
      },
      {
        cityname: "竹溪县",
        departtype: "1",
        findname: "竹溪县",
        id: "420324000000",
        tag: "十堰市,湖北省"
      },
      {
        cityname: "资溪县",
        departtype: "1",
        findname: "资溪县",
        id: "361028000000",
        tag: "抚州市,江西省"
      },
      {
        cityname: "枣阳市",
        departtype: "1",
        findname: "枣阳市",
        id: "420683000000",
        tag: "襄阳市,湖北省"
      },
      {
        cityname: "招远市",
        departtype: "1",
        findname: "招远市",
        id: "370685000000",
        tag: "烟台市,山东省"
      },
      {
        cityname: "肇源县",
        departtype: "1",
        findname: "肇源县",
        id: "230622000000",
        tag: "大庆市,黑龙江"
      },
      {
        cityname: "正阳县",
        departtype: "1",
        findname: "正阳县",
        id: "411724000000",
        tag: "驻马店市,河南省"
      },
      {
        cityname: "镇原县",
        departtype: "1",
        findname: "镇原县",
        id: "621027000000",
        tag: "庆阳市,甘肃省"
      },
      {
        cityname: "紫阳县",
        departtype: "1",
        findname: "紫阳县",
        id: "610924000000",
        tag: "安康市,陕西省"
      },
      {
        cityname: "资源县",
        departtype: "1",
        findname: "资源县",
        id: "450329000000",
        tag: "桂林市,广西"
      },
      {
        cityname: "枞阳县",
        departtype: "1",
        findname: "枞阳县",
        id: "340823000000",
        tag: "安庆市,安徽省"
      },
      {
        cityname: "左云县",
        departtype: "1",
        findname: "左云县",
        id: "140226000000",
        tag: "大同市,山西省"
      },
      {
        cityname: "镇沅彝族哈尼族拉祜族自治县",
        departtype: "1",
        findname: "镇沅自治县",
        id: "530825000000",
        tag: "普洱市,云南省"
      },
      {
        cityname: "涿州市",
        departtype: "1",
        findname: "涿州市",
        id: "130681000000",
        tag: "保定市,河北省"
      },
      {
        cityname: "长子县",
        departtype: "1",
        findname: "长子县",
        id: "140428000000",
        tag: "长治市,山西省"
      },
      {
        cityname: "肇州县",
        departtype: "1",
        findname: "肇州县",
        id: "230621000000",
        tag: "大庆市,黑龙江"
      },
      {
        cityname: "子洲县",
        departtype: "1",
        findname: "子洲县",
        id: "610831000000",
        tag: "榆林市,陕西省"
      },
      {
        cityname: "枝城镇",
        departtype: "1",
        findname: "枝城镇",
        id: "420581105000",
        tag: "宜都市,宜昌市,湖北省"
      },
      {
        cityname: "扎瓦镇",
        departtype: "1",
        findname: "扎瓦镇",
        id: "653222101000",
        tag: "墨玉县,和田地区,新疆"
      }
    ],
    max: 100,
    key: "Z"
  }
];
const localcity = null;
const topcity = [
  {
    cityname: "洪洞县",
    departtype: "1",
    findname: "临汾市",
    id: "141027000000",
    tag: "山西省"
  },
  {
    cityname: "太原市",
    departtype: "1",
    findname: "太原市",
    id: "141028000000",
    tag: "山西省"
  },
  {
    cityname: "北京市",
    departtype: "1",
    findname: "北京市",
    id: "110000000000",
    tag: "北京市"
  },
  {
    cityname: "长春市",
    departtype: "1",
    findname: "长春市",
    id: "220100000000",
    tag: "吉林省"
  },
  {
    cityname: "哈尔滨市",
    departtype: "1",
    findname: "哈尔滨市",
    id: "230100000000",
    tag: "黑龙江"
  },
  {
    cityname: "呼和浩特市",
    departtype: "1",
    findname: "呼和浩特",
    id: "150100000000",
    tag: "内蒙古"
  },
  {
    cityname: "武汉市",
    departtype: "1",
    findname: "武汉市",
    id: "420100000000",
    tag: "湖北省"
  },
  {
    cityname: "兰州市",
    departtype: "1",
    findname: "兰州市",
    id: "620100000000",
    tag: "甘肃省"
  },
  {
    cityname: "南昌市",
    departtype: "1",
    findname: "南昌市",
    id: "360100000000",
    tag: "江西省"
  },
  {
    cityname: "西宁市",
    departtype: "1",
    findname: "西宁市",
    id: "630100000000",
    tag: "青海省"
  },
  {
    cityname: "合肥市",
    departtype: "1",
    findname: "合肥市",
    id: "340100000000",
    tag: "安徽省"
  }
];
const cityData = {
  cityinfo,
  localcity,
  topcity
};
if (!Array) {
  const _easycom_u_navbar2 = common_vendor.resolveComponent("u-navbar");
  const _easycom_u_index_anchor2 = common_vendor.resolveComponent("u-index-anchor");
  const _easycom_u_index_item2 = common_vendor.resolveComponent("u-index-item");
  const _easycom_u_index_list2 = common_vendor.resolveComponent("u-index-list");
  (_easycom_u_navbar2 + _easycom_u_index_anchor2 + _easycom_u_index_item2 + _easycom_u_index_list2)();
}
const _easycom_u_navbar = () => "../../node-modules/uview-plus/components/u-navbar/u-navbar.js";
const _easycom_u_index_anchor = () => "../../node-modules/uview-plus/components/u-index-anchor/u-index-anchor.js";
const _easycom_u_index_item = () => "../../node-modules/uview-plus/components/u-index-item/u-index-item.js";
const _easycom_u_index_list = () => "../../node-modules/uview-plus/components/u-index-list/u-index-list.js";
if (!Math) {
  (_easycom_u_navbar + _easycom_u_index_anchor + _easycom_u_index_item + _easycom_u_index_list)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const title = common_vendor.ref("");
    const type = common_vendor.ref("");
    common_vendor.ref([]);
    const indexList = common_vendor.ref(["热"]);
    const itemArr = common_vendor.ref([]);
    common_vendor.onLoad((options) => {
      type.value = options.type;
      options.type == "start" ? title.value = "选择出发地" : title.value = "选择目的地";
    });
    common_vendor.onMounted(() => {
      var keyList = cityData.cityinfo;
      itemArr.value.push(cityData.topcity);
      keyList.forEach((item) => {
        indexList.value.push(item.key);
        itemArr.value.push(item.departures);
      });
    });
    const handleSelectCity = (e) => {
      const formData = { id: e.id, city: e.cityname, type: type.value };
      common_vendor.index.$emit("updateData", { value: formData });
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
        b: common_vendor.f(itemArr.value, (item, index, i0) => {
          return {
            a: "3d73c471-3-" + i0 + "," + ("3d73c471-2-" + i0),
            b: common_vendor.p({
              text: indexList.value[index]
            }),
            c: common_vendor.f(item, (cell, index2, i1) => {
              return {
                a: common_vendor.t(cell.cityname),
                b: common_vendor.t(cell.tag),
                c: index2,
                d: common_vendor.o(($event) => handleSelectCity(cell), index2)
              };
            }),
            d: "3d73c471-2-" + i0 + ",3d73c471-1",
            e: index
          };
        }),
        c: common_vendor.p({
          ["index-list"]: indexList.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/selectCity/index.js.map
