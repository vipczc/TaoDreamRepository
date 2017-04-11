<template lang="html">
  <div class="dream" >
  <!-- 用户信息 -->
  <el-col :span="24">
      <div class="user-message">
        <el-col :span="4">
            <div class="user-headPortrait" @click="basicDialog = true">
              <img v-bind:src="headPortraitUrl" alt="头像">
            </div>
            <div class="userType" @click="basicDialog = true">
              <span>{{ userType }}</span>
            </div>

        </el-col>
        <!-- 用户信息 -->
        <el-col :span="6" :offset="1">
          <div class="user-message-content">
            <p>商家姓名:&#12288<span>{{ userName }}</span></p>
            <p>年&#12288&#12288龄:&#12288<span>{{ userAge }}</span></p>
            <p>电&#12288&#12288话:&#12288<span>{{ userNuber }}</span></p>
            <p>银行卡号:&#12288<span>{{ userBlock }}</span></p>
          </div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="user-message-content">
            <p>性&#12288&#12288别:&#12288<span>{{ userSex }}</span></p>
            <p>职&#12288&#12288业:&#12288<span>{{ userOccupation }}</span></p>
          </div>
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
                  <img src="../../../assets/img/提现.png" alt="提现">
                  <p>提现</p>
                </div>

          </div>
        </el-col>
        <!-- 提现信息 -->
        <el-col :span="7" :offset="1">
          <div class="content-right ">

              <p>提现金额:&#12288&#12288<span>{{ withdrawSum }}￥</span></p>
              <a href="#">查看提现记录></a>

          </div>
        </el-col>
        <el-col :span="2">
          <div class="content-right content-right-hr ">

              <el-button type="success" size="large" id="btn-top" @click="tdrecordSumDialog = true">提现</el-button>

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
              <img src="../../../assets/img/淘豆.png" alt="淘豆">
              <p>淘豆</p>
            </div>
          </div>
        </el-col>
        <!-- 淘豆金额 -->
        <el-col :span="7" :offset="1">
          <div class="content-right">

              <p>淘豆金额:&#12288&#12288<span>{{ TDSum }}￥</span></p>
              <a href="#">查看兑换记录></a>

          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" id="btn-top" @click="tdrecordSumDialog = true">提现</el-button>

          </div>
        </el-col>
        <!-- 获得淘豆 -->
        <el-col :span="9" :offset="1">
          <div class="content-right">

              <p>昨日获得淘豆:<span>{{ yesterdayTD }}￥</span></p>
              <a href="#">查看兑换记录></a>

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
              <img src="../../../assets/img/额度.png" alt="额度">
              <p>额度</p>
            </div>
          </div>
        </el-col>
        <!-- 消费额度 -->
        <el-col :span="7" :offset="1">
          <div class="content-right">

              <p>消费额度:&#12288&#12288<span>{{ expenseLimit }}￥</span></p>
              <p >消费额度提升:<span>{{ expenseLimitUp }}￥</span></p>
              <a href="#" style="top:-5px;">查看额度流水></a>

          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" id="btn-top" @click="giveQuotaDialog = true">赠送</el-button>

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

              <el-button type="success" size="large" id="btn-top" @click="extractionQuotaDialog = true">提额</el-button>

          </div>
        </el-col>
      </div>
  </el-col>
  <basic :dialogValue="basicDialog" v-on:message="basicMessage"></basic>
  <withdrawSum :sumValue="withdrawSumDialog" v-on:withdraw="withdrawMessage"></withdrawSum>
  <extractionQuota :quotaValue="extractionQuotaDialog" v-on:extraction="extractionMessage"></extractionQuota>
  <giveQuota :giveValue="giveQuotaDialog" v-on:give="giveMessage"></giveQuota>
  <TDRecordSum :tdValue="tdrecordSumDialog" v-on:td="tdMessage"></TDRecordSum>
  </div>
</template>

<script>
import basic from '../../dialog/basic.vue' //对话框 基本信息
import withdrawSum from '../../dialog/withdrawSum.vue' //对话框 提现
import extractionQuota from '../../dialog/extractionQuota.vue' //对话框 提额
import giveQuota from '../../dialog/giveQuota.vue' //对话框 额度赠送
import TDRecordSum from '../../dialog/TDRecordSum.vue' //对话框 淘豆兑换
export default {
  data() {
    return {
      headPortraitUrl: '', //用户头像
      userType: '商家', //用户类型
      userName: 'mm', //商家姓名
      userAge: '40', //年龄
      userNuber: '13049875665', //电话
      userBlock: '8888-8888-8888-8888', //银行卡号
      userSex: '女', //性别
      userOccupation: '个体', //职业
      withdrawSum: '500', //提现金额
      TDSum: '60', //淘豆金额
      yesterdayTD: '2', //昨日获得淘豆
      expenseLimit: '66', //消费额度
      expenseLimitUp: '800', //消费额度提升
      recommendLimit: '10', //已消费额度
      surplusLimit: '20', //剩余额度

      basicDialog: false, //基本信息对话框
      withdrawSumDialog: false, //提现对话框
      extractionQuotaDialog: false, //提额对话框
      giveQuotaDialog: false, //额度赠送对话框
      tdrecordSumDialog: false, //淘豆余额兑换对话框
    }
  },
  methods: {
    modality(cont) {

      console.log(cont);

    },
    basicMessage(isb) { //子组件返回值
      this.basicDialog = isb
    },
    withdrawMessage(isb) { //子组件返回值
      this.withdrawSumDialog = isb
    },
    extractionMessage(isb) { //子组件返回值
      this.extractionQuotaDialog = isb
    },
    giveMessage(isb) { //子组件返回值
      this.giveQuotaDialog = isb
    },
    tdMessage(isb) { //子组件返回值
      this.tdrecordSumDialog = isb
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
  background-color: #000;
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
#btn-top{
  margin-top: 18px;
}
</style>
