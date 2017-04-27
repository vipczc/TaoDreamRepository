<template lang="html">
  <div class="dream" >
  <!-- 用户信息 -->
  <el-col :span="24">
      <div class="user-message">
        <el-col :span="4">
          <!-- @click="basicDialog = true" -->
            <div class="user-headPortrait" >

            </div>
            <!-- @click="basicDialog = true" -->
            <div class="userType" >
              <span>{{ userType }}</span>
            </div>

        </el-col>
        <!-- 用户信息 -->
        <el-col :span="6" :offset="1">
          <div class="user-message-content">
            <p>企业名称&#12288:&#12288<span>{{ enterpriseName }}</span></p>
            <p>企业联系人:&#12288<span>{{ enterpriseContacts }}</span></p>
            <p>企业类型&#12288:&#12288<span>{{ enterpriseType }}</span></p>
            <p>电&#12288&#12288话&#12288:&#12288<span>{{ enterpriseNuber }}</span></p>
          </div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="user-message-content">
            <p>地&#12288&#12288址:&#12288<span>{{ address }}</span></p>
            <p>银行卡号:&#12288<span>{{ bankCardNumber }}</span></p>
            <p>会员ID&#12288:&#12288<span>{{ businessNumber }}</span></p>
          </div>
          <!-- <img src="/taodream-consumer/validateCode" alt="验证码">
                      验证码:<input type="text" name="" v-model="pngimg" value="">
                      <el-button @click="login()">登录</el-button> -->
        </el-col>

      </div>
  </el-col>

  <!-- 提现 -->
  <el-col :span="24">
      <div class="user-withdrawa">
        <!-- 提现图标 -->
        <el-col :span="4">
          <div class="withdrawa-logo">
                <div class="logo-content">
                  <img src="../../../assets/img/withdrawDeposit.png" alt="提现">
                  <p>提现</p>
                </div>

          </div>
        </el-col>
        <!-- 提现信息 -->
        <el-col :span="7" :offset="1">
          <div class="content-right ">

              <p>提现金额:&#12288&#12288<span>{{ withdrawSum }}￥</span></p>
              <a href="javascript:void(0);" @click="toPath('1-2')">查看提现记录 > </a>


          </div>
        </el-col>
        <el-col :span="2">
          <div class="content-right content-right-hr ">

              <el-button type="success" size="large" class="btn-top" @click="withdrawSumDialogShow()">提现</el-button>

          </div>
        </el-col>


        <!-- 待定 -->
        <el-col :span="9" :offset="1">
          <div class="content-right">

          </div>
        </el-col>
      </div>
  </el-col>

<!-- 淘豆 -->
  <el-col :span="24">
      <div class="user-td">
        <el-col :span="4">
          <!-- 淘豆图标 -->
          <div class="td-logo">
            <div class="logo-content">
              <img src="../../../assets/img/toddle.png" alt="淘豆">
              <p>淘豆</p>
            </div>
          </div>
        </el-col>
        <!-- 淘豆金额 -->
        <el-col :span="7" :offset="1">
          <div class="content-right">

              <p>淘豆金额:&#12288&#12288<span>{{ TDSum }}￥</span></p>
              <a href="javascript:void(0);" @click="toPath('1-3')">查看兑换记录 > </a>


          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" class="btn-top" @click="tdrecordSumDialogShow()">兑换</el-button>

          </div>
        </el-col>
        <!-- 获得淘豆 -->
        <el-col :span="9" :offset="1">
          <div class="content-right">

              <p>昨日获得淘豆:<span>{{ yesterdayTD }}￥</span></p>
              <a href="javascript:void(0);" @click="toPath('1-4')">查看淘豆流水 > </a>
          </div>
        </el-col>


      </div>
  </el-col>
<!-- 额度 -->
  <el-col :span="24">
      <div class="user-limit">

        <el-col :span="4">
          <!-- 额度图标 -->
          <div class="limit-logo">
            <div class="logo-content">
              <img src="../../../assets/img/amount.png" alt="额度">
              <p>额度</p>
            </div>
          </div>
        </el-col>
        <!-- 消费额度 -->
        <el-col :span="7" :offset="1">
          <div class="content-right">

              <p>消费额度:&#12288&#12288<span>{{ expenseLimit }}￥</span></p>


              <a href="javascript:void(0);" @click="toPath('1-5')">查看额度流水 > </a>
          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <!-- <el-button type="success" size="large" class="btn-top" @click="giveQuotaDialog = true">赠送</el-button> -->

          </div>
        </el-col>
        <!-- 已消费额度 -->
        <el-col :span="7" :offset="1">
          <div class="content-right">

              <p>已消费额度:&#12288 <span>{{ recommendLimit }}￥</span></p>
              <p>剩余额度:&#12288&#12288 <span>{{ surplusLimit }}￥</span></p>


          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" class="btn-top" @click="extractionQuotaDialogShow()">提额</el-button>

          </div>
        </el-col>
      </div>
  </el-col>
  <!-- <basic :dialogValue="basicDialog" v-on:message="basicMessage"></basic> -->
  <withdrawSum :sumValue="withdrawSumDialog" v-on:withdraw="withdrawMessage"></withdrawSum>
  <extractionQuota :quotaValue="extractionQuotaDialog" v-on:extraction="extractionMessage"></extractionQuota>
  <!-- <giveQuota :giveValue="giveQuotaDialog" v-on:give="giveMessage"></giveQuota> -->
  <TDRecordSum :tdValue="tdrecordSumDialog" v-on:td="tdMessage"></TDRecordSum>
  </div>
</template>

<script>
import basic from '../../dialog/basic.vue' //对话框 基本信息
import withdrawSum from '../../dialog/withdrawSum.vue' //对话框 提现
import extractionQuota from '../../dialog/extractionQuota.vue' //对话框 提额
import giveQuota from '../../dialog/giveQuota.vue' //对话框 额度赠送
import TDRecordSum from '../../dialog/TDRecordSum.vue' //对话框 淘豆兑换
import {
  businessAPi
} from '../../api/apiCode.js'
export default {
  data() {
    return {
      businessNumber: '', //店铺淘梦ID
      pngimg: '',
      userType: '商家', //用户类型
      enterpriseName: '', //企业名称
      enterpriseContacts: '', //企业联系人
      enterpriseType: '', //企业类型
      enterpriseNuber: '', //电话
      address: '', //地址
      bankCardNumber: '', //银行卡号

      withdrawSum: '0', //提现金额
      TDSum: '0', //淘豆金额
      yesterdayTD: '0', //昨日获得淘豆
      expenseLimit: '0', //消费额度

      recommendLimit: '0', //已消费额度
      surplusLimit: '0', //剩余额度

      defaultActiveNumber: '',

      //监听更新数据
      upData: true,
      tdrecordUpData: true,
      extractionUpData: true,

      upDataRq: false,
      basicDialog: false, //基本信息对话框
      withdrawSumDialog: {
        show: false, //显示
        userType: 2, // 商家用户
        withdrawSum: 0 //提现余额

      }, //提现对话框

      extractionQuotaDialog: {
        show: false,
        userType: 2, //商家用户

      }, //提额对话框
      giveQuotaDialog: false, //额度赠送对话框

      tdrecordSumDialog: {
        show: false,
        userType: 2, //商家用户
        TDSumDialog: 0
      }, //淘豆余额兑换对话框
    }
  },
  mounted() {
    //获取用户信息

    // this.$http.post(businessAPi.index).then((objectData) => {
    //   // params:
    //   console.log(objectData.data);
    //
    // }).catch((error) => {
    //   console.log(error);
    // })

  },
  mounted() {
    //获取当前时间 老时间
    this.upDatafun()

  },
  watch: {
    'upData': 'upDatafun',
    'upDataRq': 'upDatafun', //关闭窗口 进行基本数据重新获取
    'tdrecordUpData': 'upDatafun' //关闭td窗口 进行基本数据重新获取
  },
  methods: {
    toPath(str) {
      this.defaultActiveNumber = str
      this.$emit('activeNumber', this.defaultActiveNumber)
      if (str == "1-2") {
        this.$router.push("/business/withdrawalsRecord") //提现记录
      } else if (str == "1-3") {
        this.$router.push("/business/conversionRecord") //兑换记录
      } else if (str == "1-4") {
        this.$router.push("/business/TDRecord") //淘豆流水
      } else if (str == "1-5") {
        this.$router.push("/business/limitRecord") //额度流水
      }
    },
    modality(cont) {

      console.log(cont);

    },
    basicMessage(isb) { //子组件返回值 基本信息
      this.basicDialog = isb
    },
    withdrawMessage(isb) { //子组件返回值 提现
      this.withdrawSumDialog.show = isb.show //显示
      this.upDataRq = isb.upData //更新数据

    },
    extractionMessage(isb) { //子组件返回值 //提额
      this.extractionQuotaDialog.show = isb.show
      this.extractionUpData = isb.upData
    },
    // giveMessage(isb) { //子组件返回值 赠送额度
    //   this.giveQuotaDialog = isb.show
    // },
    tdMessage(isb) { //子组件返回值 淘豆兑换
      this.tdrecordSumDialog.show = isb.show
      this.tdrecordUpData = isb.upData
    },

    //父组件数据 -> 子组件数据
    withdrawSumDialogShow() { //提现
      this.withdrawSumDialog.withdrawSum = this.withdrawSum //传递
      this.withdrawSumDialog.show = true
    },
    tdrecordSumDialogShow() { //淘豆兑换

      this.tdrecordSumDialog.TDSumDialog = this.TDSum //传递 总淘豆数量
      this.tdrecordSumDialog.show = true
    },
    extractionQuotaDialogShow() { //提额
      this.extractionQuotaDialog.show = true
    },
    login() {

      let formData = new FormData()
      formData.append('userName', '13357156388')
      formData.append('passWord', 'hujinhu')
      formData.append('userType', '2')
      formData.append('imageCode', this.pngimg)

      console.log(formData.pngCode);
      this.$http.post('/taodream-consumer/logined', formData).then((objectData) => {
        // params:
        console.log(objectData.data);
        this.upData = !this.upData
      }).catch((error) => {
        console.log(error);
      })

      //       username:13357156388
      // password:hujinhu
      // userType:2
      // pngCode:smdm
    },
    upDatafun() {
      //获取用户信息
      this.$http.post(businessAPi.index).then((objectData) => {
        // params:

        this.businessNumber = objectData.data.RESULT.shopCode
        this.enterpriseName = objectData.data.RESULT.companyName //企业名称
        this.enterpriseContacts = objectData.data.RESULT.trueName //企业联系人
        this.enterpriseType = objectData.data.RESULT.companyTypeName //企业类型
        this.enterpriseNuber = objectData.data.RESULT.mobile //电话
        this.address = objectData.data.RESULT.address //地址
        this.bankCardNumber = objectData.data.RESULT.cardNumber //银行卡号

        this.withdrawSum = objectData.data.RESULT.balance == null ? 0 : objectData.data.RESULT.balance //提现金额
        this.TDSum = objectData.data.RESULT.taodou == null ? 0 : objectData.data.RESULT.taodou //淘豆金额
        this.yesterdayTD = objectData.data.RESULT.lastTaodou == null ? 0 : objectData.data.RESULT.lastTaodou //昨日获得淘豆
        this.expenseLimit = objectData.data.RESULT.quota == null ? 0 : bjectData.data.RESULT.quota //消费额度

        this.recommendLimit = objectData.data.RESULT.costQuota == null ? 0 : objectData.data.RESULT.costQuota //已消费额度
        this.surplusLimit = objectData.data.RESULT.laveQuota == null ? 0 : objectData.data.RESULT.laveQuota //剩余额度
      }).catch((error) => {
        console.log(error);
      })
    }
  },

  components: {
    basic,
    withdrawSum,
    extractionQuota,
    giveQuota,
    TDRecordSum
  }

}
</script>

<style lang="css">

/*用户信息样式*/
.user-message{
  height: 227px;
  background-image: url(../../../assets/img/backimg.png);
}
.user-headPortrait{
  width: 144px;
  height: 144px;

  background-color: #e6e6e6;
  border: 2px solid #FFF;
  border-radius: 72px;
  color: #FFF;
  margin-top: 41.5px;
  margin-left: 40px;
}
.userType{
  height:20px;
  width: 54px;
  background-color: #ff6805;
  color: #FFF;
  border-radius: 2px;
  line-height: 20px;
  position: relative;
  left: 88px;
  top:-10px;
}
.user-message-content{
  margin-top: 45px;
  text-align:left;
  color: #f2f2f2;
  font-size: 16px;
  font-family:"Microsoft YaHei",微软雅黑;
}
.user-message-content p{
  margin-top: 18px;
}
/*提现样式*/
.user-withdrawa{
  height: 188px;
  margin-top: 15px;
  background-color: #FFF;
}
.withdrawa-logo{
  height: 188px;
  width: 230px;
  background-color: #37d786;
}
.logo-content{
  width: 80px;
  height: 80px;
  background-color: #FFF;
  border-radius: 40px;
  position: relative;
  top: 54px;
  left: 75px;

}
.logo-content img{
  margin: 20px auto;
}
.logo-content p{
  margin-top: -2px;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
}
/*淘豆样式*/
.user-td{
  height: 188px;
  border-top: 1px solid #fdfdfe;
  background-color: #FFF;
}
.td-logo{
  height: 188px;
  width: 230px;
  background-color: #ff6805;
}
/*额度样式*/
.user-limit{
  height: 188px;
  border-top: 1px solid #fdfdfe;
  background-color: #FFF;
}
.limit-logo{

  height: 188px;
  width: 230px;
  background-color: #29b7ec;

}
/*公用*/
.el-menu-item.is-active{
  color: #454545 !important;
  font-size: 18px;
}
.content-right-hr{
  border-right: 1px solid #ebebeb;
}
.content-right{
  height: 144px;
  width: 100%;
  margin-top: 22px;

  text-align:left;

}
.content-right p{
  color: #666666;
  font-family:"Microsoft YaHei",微软雅黑;
  font-size: 20px;

}
.content-right p span{
  margin-left: 44px;
  font-size: 34px;
  font-weight: bold;
  color: #ff6805;

}
.content-right a{
  position: relative;
  top:60px;
  font-family:"Microsoft YaHei",微软雅黑;
  font-size: 16px;
  color: #a8a8a8;
  text-decoration:none;
}
.btn-top{
  margin-top: 18px;
}
.dream .userType{
cursor: default;
}
.dream .user-headPortrait{
cursor: default;
}
</style>
