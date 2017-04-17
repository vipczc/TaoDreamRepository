<template lang="html">
  <div class="dream" >
  <!-- 用户信息 -->
  <el-col :span="24">
      <div class="user-message">
        <el-col :span="4">
            <div class="user-headPortrait" @click="basicClerkDialog = true">

            </div>
            <div class="userType" @click="basicClerkDialog = true">
              <span>{{ userType }}</span>
            </div>

        </el-col>
        <!-- 用户信息 -->
        <el-col :span="6" :offset="1">
          <div class="user-message-content">
            <p>咨询师姓名:&#12288<span>{{ userName }}</span></p>
            <p>联系电话&#12288:&#12288<span>{{ userNuber }}</span></p>
            <p>账号密码&#12288:&#12288<span>{{ password }}</span></p>
            <p>银行卡号&#12288:&#12288<span>{{ bankCard }}</span></p>
          </div>
        </el-col>
      </div>
  </el-col>

  <!-- 添加 -->
  <el-col :span="24">
      <div class="user-withdrawa">
        <!-- 添加图标 -->
        <el-col :span="4">
          <div class="withdrawa-logo withdrawa-red">
                <div class="logo-content">
                  <img src="../../../assets/img/添加.png" alt="添加">
                  <p>添加</p>
                </div>

          </div>
        </el-col>
        <!-- 添加信息 -->
        <el-col :span="7" :offset="1">
          <div class="content-right ">

              <p class="content-mar">添加人数:&#12288&#12288<span>{{ addPeopleNumber }}</span></p>
              <p class="content-mar">推荐成功:&#12288&#12288<span class="peopleNumber">{{ okPeopleNumber }}</span></p>

          </div>
        </el-col>
        <el-col :span="2">
          <div class="content-right content-right-hr ">

              <el-button type="success" size="large" id="btn-top" @click="addPersonnelDialog = true">添加</el-button>

          </div>
        </el-col>


        <!-- 待定 -->
        <el-col :span="9" :offset="1">
          <div class="content-right">

          </div>
        </el-col>
      </div>
  </el-col>

<!-- 跟进 -->
  <el-col :span="24">
      <div class="user-td">
        <el-col :span="4">
          <!-- 跟进图标 -->
          <div class="td-logo td-greey">
            <div class="logo-content">
              <img src="../../../assets/img/跟进.png" alt="跟进">
              <p>跟进</p>
            </div>
          </div>
        </el-col>
        <!-- 跟进金额 -->
        <el-col :span="7" :offset="1">
          <div class="content-right">

              <p>总人数&#12288:&#12288&#12288<span class="peopleNumber">{{ allPeopleNumber }}</span></p>
              <p>今日跟进:&#12288&#12288<span>{{ followUpPeopleNumber }}</span></p>

          </div>
        </el-col>
        <!-- 按钮 -->
        <el-col :span="2">
          <div class="content-right content-right-hr">

              <el-button type="success" size="large" id="btn-top" @click="modality(2)">跟进</el-button>

          </div>
        </el-col>
        <!-- 获得跟进 -->
        <!-- <el-col :span="9" :offset="1">
          <div class="content-right">

              <p>昨日获得跟进:<span>{{ yesterdayTD }}￥</span></p>
              <a href="#">查看兑换记录></a>

          </div>
        </el-col> -->


      </div>
  </el-col>
  <!-- 提现 -->
  <el-col :span="24">
      <div class="user-withdrawa " style="margin-top:0px;">
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
              <a href="javascript:void(0);" @click="toPath('1-2')">查看提现记录 > </a>

          </div>
        </el-col>
        <el-col :span="2">
          <div class="content-right content-right-hr ">

        <el-button type="success" size="large" id="btn-top" @click="withdrawSumDialog = true">提现</el-button>

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
              <a href="javascript:void(0);" @click="toPath('1-3')">查看兑换记录 > </a>

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
              <a href="javascript:void(0);" @click="toPath('1-1')">查看淘豆流水 > </a>

          </div>
        </el-col>


      </div>
  </el-col>
  <withdrawSum :sumValue="withdrawSumDialog" v-on:withdraw="withdrawMessage"></withdrawSum>
  <tdrecordSum :tdValue="tdrecordSumDialog" v-on:td="tdMessage"></tdrecordSum>
  <addPersonnel :addPersonnelValue="addPersonnelDialog" v-on:add="addMessage"></addPersonnel>
  <basicClerk :basicClerkValue="basicClerkDialog" v-on:clerkBasic="clerkBasicMessage"></basicClerk>
  </div>
</template>

<script>
import withdrawSum from '../../dialog/withdrawSum.vue'
import tdrecordSum from '../../dialog/TDRecordSum.vue'
import addPersonnel from '../../dialog/addPersonnel.vue'
import basicClerk from '../../dialog/basicClerk.vue'
export default {
  data() {
    return {
      basicClerkDialog: false,
      tdrecordSumDialog: false,
      withdrawSumDialog: false,
      addPersonnelDialog: false,
      userAge: '40', //年龄
      bankCard: '8888-8888-8888-8888', //银行卡号
      userSex: '女', //性别
      userOccupation: '个体', //职业
      withdrawSum: '500', //添加金额
      TDSum: '60', //跟进金额
      yesterdayTD: '2', //昨日获得跟进
      expenseLimit: '66', //消费额度
      expenseLimitUp: '800', //消费额度提升
      recommendLimit: '10', //已消费额度
      surplusLimit: '20', //剩余额度

      //用到一下
      headPortraitUrl: '', //用户头像+
      userType: '咨询师', //用户类型+
      userName: 'mm', //姓名+
      userNuber: '13049875665', //电话+
      password: '123456', //用户密码
      addPeopleNumber: '20', //添加人数
      okPeopleNumber: '60', //成功推荐人数
      allPeopleNumber: '900', //总人数
      followUpPeopleNumber: '20', //跟进人数
      defaultActiveNumber: ''
    }
  },
  components: {
    withdrawSum, //提现
    tdrecordSum, //淘豆提现
    addPersonnel, //添加人员
    basicClerk
  },
  methods: {
    toPath(str) {
      this.defaultActiveNumber = str
      this.$emit('activeNumber', this.defaultActiveNumber)
      if (str == "1-1") {
        this.$router.push("/clerk/TDRecord") //淘豆流水
      } else if (str == "1-2") {
        this.$router.push("/clerk/withdrawalsRecord") //淘豆流水
      } else if (str == "1-3") {
        this.$router.push("/clerk/conversionRecord") //兑换记录
      }
    },
    clerkBasicMessage(isb) {
      this.basicClerkDialog = isb
    },
    withdrawMessage(isb) {
      this.withdrawSumDialog = isb
    },
    tdMessage(isb) {
      this.tdrecordSumDialog = isb
    },
    addMessage(isb) {
      this.addPersonnelDialog = isb
    },
    modality(cont) {

      console.log(cont);

    }
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
/*添加样式*/
.user-withdrawa{
  height: 188px;
  margin-top: 15px;
  background-color: #FFF;
}
.withdrawa-logo{
  height: 188px;
  width: 230px;

}
.withdrawa-red{
  background-color: #e71d36;
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
/*跟进样式*/
.user-td{
  height: 188px;
  border-top: 1px solid #fdfdfe;
  background-color: #FFF;
}
.td-logo{
  height: 188px;
  width: 230px;

}
.td-greey{
  background-color: #2ec4b6;
  border-bottom: 1px solid #fdfdfe;
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
.content-mar{
  margin-bottom: 50px ;
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
.peopleNumber{
  font-family:"Microsoft YaHei",微软雅黑;
  font-weight: bold;
  font-size: 20px !important;
  color: #1fd34d !important;

}
</style>
