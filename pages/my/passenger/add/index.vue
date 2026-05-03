<template>
  <view class="passenger-add">
    <u-navbar leftIconColor="#fff" :title="title" :autoBack="true" :fixed="true"  :placeholder="true"> </u-navbar>
    <view class="main">
      <u-form :model="formData"  ref="formRef"
				:rules="rules" :labelWidth="100">
        <u-form-item
					label="乘客姓名"
					prop="name"
					borderBottom
         
			  >
				  <u-input
				  		v-model="formData.name"
				  		border="none"
              placeholder="请输入乘客姓名"
				  ></u-input>
			  </u-form-item>
        <u-form-item
					label="手机号码"
					prop="phone"
					borderBottom
					ref="item1"
			  >
				  <u-input
              type="number"
				  		v-model="formData.phone"
				  		border="none"
              placeholder="请输入乘客手机号"
				  ></u-input>
			  </u-form-item>
        <u-form-item>
          <u-button type="primary" @click="handleSubmit">
            确定
          </u-button>
        </u-form-item>
      </u-form>
    </view>
  </view>  
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { postPassengerAdd , PassengerData , getPassengerDetail , putPassengerUpdate } from '@/api'
import { onLoad , onReachBottom } from '@dcloudio/uni-app';
const title = ref('新增旅客');
const formRef = ref()
const formData = reactive(<PassengerData>{
  passengerId:0,
  name:'',
  phone:'',
  idType:1,
  idCard:'',
  ticketType:1,
})
const rules = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
  ]
})
onLoad(options => {
  console.log(options.id)
  if(options.id){
    title.value = '修改旅客'
    handleDetails(options.id)
  }
})
const handleDetails = async (id:number) : Promise<void> => {
  const {data,code,msg} = await getPassengerDetail({id})
  console.log(data,code,msg)
  if(code == 200){
    formData.passengerId = data.passengerId
    formData.name = data.name
    formData.phone = data.phone
    formData.idCard = data.idCard
    formData.ticketType = data.ticketType
    formData.idType = data.idType
  }

}
const handleSubmit = async() : Promise<void> => {
  formRef.value.validate().then(async (res:boolean) => {
    var opt : {data:string,code:number,msg:string};
    if(title.value == '新增旅客'){
      opt = await postPassengerAdd(formData);
    }else{
      opt = await putPassengerUpdate(formData);
    }
    console.log(opt!)
    if(opt!.code == 200){
      uni.showToast({
        title:opt!.msg,
        icon:'success'
      })
      handleBack();
    }else{
      uni.showToast({
        title:opt!.msg,
        icon:'error'
      })
    }
  }).catch((res : any) => {
    
  })
}

const handleBack = () : void => {
  const pages = getCurrentPages()
  const prevPage = pages[pages.length - 2] // 上一页
  console.log(prevPage.$vm.requestPassenger)
  if (prevPage.$vm.requestPassenger) {
    prevPage.$vm.requestPassenger()
  }
  uni.navigateBack()
  // uni.navigateBack();
}
</script>
<style lang="scss" scoped>
.passenger-add{
  height:100vh;
  background:$w-background-color;
  @include flex-column-style($gap:$w-gap-sm);
  .main{
    background-color: $w-card-color;
    padding:$w-padding-base;
  }
}
</style>