<template lang="html">
  <div class="dream" >
  <!-- 用户信息 -->
  <el-col :span="24">
      <div class="user-message">
        <el-col :span="4">
            <div class="user-headPortrait" @click="basicDialogShow()">

<!-- <div class="details">
  <img src="../../../assets/img/详情.png" alt="详情">
</div> -->

            </div>
            <div class="userType" @click="basicDialogShow()">
              <span>{{ userType }}</span>
            </div>

        </el-col>
        <!-- 用户信息 -->
        <el-col :span="6" :offset="1">
          <div class="user-message-content">
            <p>会员姓名:&#12288<span>{{ userName }}</span></p>
            <p>出生日期:&#12288<span>{{ userAge }}</span></p>
            <p>电&#12288&#12288话:&#12288<span>{{ userNuber }}</span></p>
            <p>银行卡号:&#12288<span>{{ userBlock }}</span></p>
          </div>
        </el-col>
        <el-col :span="4" :offset="1">
          <div class="user-message-content">
            <p>性&#12288&#12288别:&#12288<span>{{ userSex }}</span></p>
            <p>行&#12288&#12288业:&#12288<span>{{ profession }}</span></p>
            <p>会员ID&#12288:&#12288<span>{{ memberCode }}</span></p>
<img src="/taodream-consumer/validateCode" alt="验证码">
            验证码:<input type="text" name="" v-model="pngimg" value="">
            <el-button @click="login()">登录</el-button>
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
                  <img src="../../../assets/img/withdrawDeposit.png" alt="提现">
                  <p>提现</p>
                </div>

          </div>
        </el-col>
        <!-- 提现信息 -->
        <el-col :span="7" :offset="1">
          <div class="content-right ">

              <p>提现余额:&#12288&#12288<span>{{ withdrawSum }}￥</span></p>

              <!-- <router-link to="/user/expenseRecord" >查看提现记录></router-link> -->
              <a href="javascript:void(0);" @click="toPath('1-2')">查看提现记录 ></a>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="content-right content-right-hr ">

              <el-button type="success" size="large" id="btn-top" @click="withdrawSumDialogShow()">提现</el-button>

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

              <p>淘豆余额:&#12288&#12288<span>{{ TDSum }}￥</span></p>
              <a href="javascript:void(0);" @click="toPath('1-3')">查看兑换记录 > </a>
              <!-- <router-link to="/user/conversionRecord" @click="toPath('1-3')">查看兑换记录></router-link> -->
          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" id="btn-top" @click="tdrecordSumDialogShow()">兑换</el-button>

          </div>
        </el-col>
        <!-- 获得淘豆 -->
        <el-col :span="9" :offset="1">
          <div class="content-right">

              <p>昨日获得淘豆:<span>{{ yesterdayTD }}￥</span></p>

              <a href="javascript:void(0);" @click="toPath('1-4')">查看淘豆流水 ></a>
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
              <!-- <p >消费额度提升:<span>{{ expenseLimitUp }}￥</span></p> -->
        <a href="javascript:void(0);"  @click="toPath('1-5')">查看额度流水 > </a>
              <!-- <router-link  to="/user/limitRecord" @click="toPath('1-5')">查看额度流水></router-link> -->

          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" id="btn-top" @click="giveQuotaDialogShow()">赠送</el-button>

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

              <el-button type="success" size="large" id="btn-top" @click="extractionQuotaDialogShow()">提额</el-button>

          </div>
        </el-col>
      </div>
  </el-col>
  <!-- 推荐 -->
    <el-col :span="24" class="user-recommend">
        <div class="" >

          <el-col :span="4">
            <!-- 额度图标 -->
            <div class="recommend-logo">
              <div class="logo-content">
                <img src="../../../assets/img/recommend.png" alt="推荐" id="recommend-logo-content">
                <p>推荐</p>
              </div>
            </div>
          </el-col>
          <!-- 消费额度 -->
          <el-col :span="7" :offset="1">
            <div class="content-right">

                <p>推荐人数:&#12288&#12288<span>{{ recommendCount }}人</span></p>
                <p >推荐奖励:&#12288&#12288<span>{{ recommendAward }}￥</span></p>
                <a href="javascript:void(0);" style="top:-5px;" @click="toPath('2-1')">查看推荐记录 > </a>
                <!-- <router-link style="top:-5px;" to="/user/recommendRecord" @click="toPath('2-1')">查看推荐记录></router-link> -->
            </div>
          </el-col>

        </div>
    </el-col>
    <basic :dialogValue="basicDialog" v-on:message="basicMessage"></basic>
    <withdrawSum :sumValue="withdrawSumDialog" v-on:withdraw="withdrawMessage" ref="formLabelAlign"></withdrawSum>
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

import {
  userApi
} from '../../api/apiCode.js'
// import {
//   basics
// } from '../../../common.js'
export default {
  data() {
    return {
      result: {},
      upData: false, //数据
      pngimg: '',
      userType: '会员', //用户类型
      userName: '', //商家姓名
      userAge: '', //出生日期
      userNuber: '', //电话
      userBlock: '', //银行卡号
      userSex: '', //性别
      userOccupation: '', //职业
      withdrawSum: 0, //提现余额
      TDSum: 0, //淘豆金额
      yesterdayTD: 0, //昨日获得淘豆
      expenseLimit: 300000, //消费额度
      expenseLimitUp: 0, //消费额度提升
      recommendLimit: 0, //已消费额度
      surplusLimit: 0, //剩余额度
      recommendCount: 0, //推荐数
      recommendAward: 0, //推荐奖励
      profession: '', //行业
      memberCode: '', //会员ID

      basicDialog: {
        show: false,
        objetcData: {}
      }, //基本信息对话框
      withdrawSumDialog: {
        show: false, //显示
        userType: 1, //用户
        withdrawSum: 0 //提现余额
      }, //提现对话框
      extractionQuotaDialog: {
        show: false,
        userType: 1, //用户
      }, //提额对话框
      giveQuotaDialog: {
        show: false
      }, //额度赠送对话框

      tdrecordSumDialog: {
        show: false,
        userType: 1,
        TDSum: 0
      }, //淘豆余额兑换对话框

      defaultActiveNumber: '' //当前标签选择位置
    }
  },
  mounted() {
    //获取当前时间 老时间
    this.upDataFun()

  },
  watch: {
    'upData': 'upDataFun',

  },
  methods: {
    toPath(str) { //向父组件传递值

      this.defaultActiveNumber = str
      this.$emit('activeNumber', this.defaultActiveNumber)
      if (str == '1-2') {
        this.$router.push("/user/withdrawalsRecord") //提现记录
      } else if (str == '1-3') {
        this.$router.push("/user/conversionRecord") //兑换记录
      } else if (str == '1-4') {
        this.$router.push("/user/TDRecord") //淘豆流水
      } else if (str == '1-5') {
        this.$router.push("/user/limitRecord") //额度流水
      } else if (str == '2-1') {
        this.$router.push("/user/recommendRecord") //推荐记录
      }
    },
    modality(cont) {

      console.log(cont);

    },
    basicMessage(isb) { //子组件返回值
      this.basicDialog.show = isb
    },
    withdrawMessage(isb) { //子组件返回值
      this.withdrawSumDialog.show = isb.show
      this.upData = isb.upData
    },
    extractionMessage(isb) { //提额 子组件返回值
      this.extractionQuotaDialog.show = isb.show
      this.upData = isb.upData
    },
    giveMessage(isb) { //额度赠送 子组件返回值
      this.giveQuotaDialog.show = isb.show
    },
    tdMessage(isb) { //子组件返回值
      this.tdrecordSumDialog.show = isb.show
      this.upData = isb.upData
    },
    basicDialogShow() { //基本信息对话框
      this.basicDialog.show = true
      this.basicDialog.objetcData = this.result

    },
    giveQuotaDialogShow() {
      this.giveQuotaDialog.expenseLimitSum = this.expenseLimit //传递 消费 额度
      this.giveQuotaDialog.show = true
    },
    extractionQuotaDialogShow() {
      this.extractionQuotaDialog.surplusLimitSum = this.surplusLimit //传递 剩余 额度
      this.extractionQuotaDialog.show = true

    },
    withdrawSumDialogShow() {
      this.withdrawSumDialog.withdrawSum = this.withdrawSum //传递总金额
      this.withdrawSumDialog.show = true

    },
    tdrecordSumDialogShow() {
      this.tdrecordSumDialog.TDSumDialog = this.TDSum //传递 总淘豆数量

      this.tdrecordSumDialog.show = true
    },
    login() {
      // let boj = new formData();
      // formData.username = '13357156388'


      let formData = new FormData()
      formData.append('userName', '18767669666')
      formData.append('passWord', '123456')
      formData.append('userType', '1')
      formData.append('imageCode', this.pngimg)

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
    upDataFun() {
      this.$http.post(userApi.index).then((objData) => {
        console.log(objData);

        if (objData.data.ERRORCODE == 0) { //成功

          this.result = objData.data.RESULT
          this.userAge = objData.data.RESULT.birthday //	出生年月
          this.memberCode = objData.data.RESULT.memberCode //会员ID
          this.withdrawSum = objData.data.RESULT.banlance //	余额
          this.userBlock = objData.data.RESULT.cardNumber //银行卡号
          this.recommendLimit = objData.data.RESULT.costQuota //已消费额度
          this.userNuber = objData.data.RESULT.mobile //联系电话
          //  this.expenseLimit = objData.data.RESULT.quota //消费额度
          this.recommendCount = objData.data.RESULT.refereeNum //推荐人数,推荐人数提升额度=推荐人数X5000
          this.userSex = objData.data.RESULT.sex ? '男' : '女' //性别 -1位置 0女 1男
          this.TDSum = objData.data.RESULT.taodou //淘豆
          this.userName = objData.data.RESULT.trueName //姓名
          this.recommendAward = objData.data.RESULT.refereeNum * 5000 //推荐奖励
          this.surplusLimit = this.expenseLimit - this.recommendLimit //剩余
          this.profession = objData.data.RESULT.profession //行业
          //缺省 昨日获得淘豆
        }


      }).catch((err) => {
        console.log(err);
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
  background-image: url(../../../assets/img/DefaultAvatar.png);
  background-color: #e6e6e6;
  border: 2px solid #FFF;
  border-radius: 72px;
  color: #FFF;
  margin-top: 41.5px;
  margin-left: 40px;
  cursor:pointer;

}
.user-headPortrait img{

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
  cursor:pointer;
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
/*推荐*/
.user-recommend{
  background-color: #FFF;
}
.recommend-logo{
  height: 188px;
  width: 230px;
  border-top: 1px solid #fdfdfe;
  background-color: #fbc00d;
}
#recommend-logo-content{
  margin: 15px auto;
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
/*.iconSearch{
  color: #ff6805;
  position: relative;
  top: 35px;
  left: 9px;
  font-size: 70px;
}*/
/*.iconSearchP{
  position: relative;
  top: 80px;
  left: 2px;
  font-size: 20px;
  font-weight: bold;
  color: #ff6805;
}*/
/*:hover.iconSearchP{

  text-shadow: 0px 15px 15px #aaa;
}*/
.details img{
  width: 46px;
  height: 46px;
  position: relative;
  top: 10px;
  left: 60px;

}
.user-headPortrait{
-webkit-animation:tada 1s .2s ease both;
-moz-animation:tada 1s .2s ease both;}
@-webkit-keyframes tada{
0%{-webkit-transform:scale(1)}
10%,20%{-webkit-transform:scale(0.9) rotate(-3deg)}
30%,50%,70%,90%{-webkit-transform:scale(1.1) rotate(3deg)}
40%,60%,80%{-webkit-transform:scale(1.1) rotate(-3deg)}
100%{-webkit-transform:scale(1) rotate(0)}
}
@-moz-keyframes tada{
0%{-moz-transform:scale(1)}
10%,20%{-moz-transform:scale(0.9) rotate(-3deg)}
30%,50%,70%,90%{-moz-transform:scale(1.1) rotate(3deg)}
40%,60%,80%{-moz-transform:scale(1.1) rotate(-3deg)}
100%{-moz-transform:scale(1) rotate(0)}
}

:hover.user-headPortrait{
-webkit-animation:bounce 1s .2s ease both;
-moz-animation:bounce 1s .2s ease both;}
@-webkit-keyframes bounce{
0%,20%,50%,80%,100%{-webkit-transform:translateY(0)}
40%{-webkit-transform:translateY(-30px)}
60%{-webkit-transform:translateY(-15px)}
}
@-moz-keyframes bounce{
0%,20%,50%,80%,100%{-moz-transform:translateY(0)}
40%{-moz-transform:translateY(-30px)}
60%{-moz-transform:translateY(-15px)}
}

.user-message{
-webkit-animation:fadeInRight 1s .1s ease both;
-moz-animation:fadeInRight 1s .1s ease both;}
@-webkit-keyframes fadeInRight{
0%{opacity:0;
-webkit-transform:translateX(20px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRight{
0%{opacity:0;
-moz-transform:translateX(20px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
.user-withdrawa{
-webkit-animation:fadeInRight 1s .3s ease both;
-moz-animation:fadeInRight 1s .3s ease both;}
@-webkit-keyframes fadeInRight{
0%{opacity:0;
-webkit-transform:translateX(50px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRight{
0%{opacity:0;
-moz-transform:translateX(50px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
.user-td{
-webkit-animation:fadeInRight 1s .5s ease both;
-moz-animation:fadeInRight 1s .5s ease both;}
@-webkit-keyframes fadeInRight{
0%{opacity:0;
-webkit-transform:translateX(90px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRight{
0%{opacity:0;
-moz-transform:translateX(90px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
.user-limit{
-webkit-animation:fadeInRight 1s .6s ease both;
-moz-animation:fadeInRight 1s .6s ease both;}
@-webkit-keyframes fadeInRight{
0%{opacity:0;
-webkit-transform:translateX(120px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRight{
0%{opacity:0;
-moz-transform:translateX(120px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
.user-recommend{
-webkit-animation:fadeInRight 1s .7s ease both;
-moz-animation:fadeInRight 1s .7s ease both;}
@-webkit-keyframes fadeInRight{
0%{opacity:0;
-webkit-transform:translateX(140px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInRight{
0%{opacity:0;
-moz-transform:translateX(140px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
</style>
