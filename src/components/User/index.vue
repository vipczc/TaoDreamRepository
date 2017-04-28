
<template lang="html">
<div id="uIndex">
  <!-- 商家 -->
  <el-row>
<!-- 导航条 -->
    <el-col class="nav-content">
      <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}">

            <span class="nav-common-logo"><img src="../../assets/img/TMZ.png" alt="Logo"></span>


        </el-col>
        <el-col :xs="0" :sm="{span:6,offset:12}" :md="{span:6,offset:12}" :lg="{span:4,offset:16}">
        <div class="nav-quit-box">
          <a href="javascript:void(0)" @click="quitDialog = true" class="nav-quit"><img src="../../assets/img/ExitButton.png" @click="quitDialog = true" alt="quit"><span class="quit" @click="quitDialog = true"> 退出</span></a>
        </div>


        </el-col>
    </el-col>


<!-- 侧边栏 -->
    <el-col :xs="6" :sm="{span:5,offset:0}" :md="{span:5,offset:0}" :lg="{span:3,offset:0}">
      <el-menu  id="sidebar-content" mode="vertical" :default-active="defaultActiveNumber" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" :unique-opened="true" >

<el-menu-item-group class="box-img-two">
  <el-menu-item index="3" @click="one" name="dreams" ><img class="box-img-one" src="../../assets/img/zone.png" alt="淘梦地带">淘梦地带</el-menu-item>


  <el-submenu index="1">
    <template slot="title"><img class="box-img-one" src="../../assets/img/BillingRecord.png" alt=""><span class="two-item-text">账单记录</span></template>
  <el-menu-item index="1-1" @click="one"><img src="../../assets/img/RecordsOfConsumption.png" alt="消费记录">消费记录</el-menu-item>
  <el-menu-item index="1-2" @click="one"><img src="../../assets/img/WithdrawalRecord.png" alt="提现记录">提现记录</el-menu-item>
  <el-menu-item index="1-3" @click="one"><img src="../../assets/img/conversion.png" alt="兑换记录">兑换记录</el-menu-item>
  <el-menu-item index="1-4" @click="one"><img src="../../assets/img/toddleDaybook.png" alt="淘豆流水">淘豆流水</el-menu-item>
  <el-menu-item index="1-5" @click="one"><img src="../../assets/img/Amountofwater.png" alt="额度流水">额度流水</el-menu-item>

  </el-submenu>
  <el-submenu index="2">
  <template slot="title">
<img class="box-img-one" src="../../assets/img/RecommendationManagement.png" alt="">
<span class="two-item-text">推荐管理</span>
</template>
  <el-menu-item index="2-1" @click="one"><img src="../../assets/img/RecommendedRecords.png" alt="推荐记录">推荐记录</el-menu-item>
  <!-- <el-menu-item index="2-2" @click="one"><img src="../../assets/img/RecommendedRewards.png" alt="推荐奖励">推荐奖励</el-menu-item> -->
  </el-submenu>
</el-menu-item-group>

        </el-menu>
    </el-col>

<!-- 内容 -->

    <el-col :xs="0" :sm="{span:19,offset:0}" :md="{span:19,offset:0} " :lg="{span:21,offset:0}" style="background-color: #f3f1f6;">
      <div class="main-content">
        <router-view v-on:activeNumber="activeNumberMessage"></router-view>
      </div>


    </el-col>

  </el-row>
  <el-dialog title="操作" v-model="quitDialog" size="tiny">
  <h2 style="color:#000;">是否退出登录</h2>
  <span slot="footer" class="dialog-footer">
    <el-button type="success" @click="quitDialog = false">取 消</el-button>
    <el-button type="danger"  @click="toLogin" >确 定</el-button>
  </span>
</el-dialog>

</div>
</template>

<script>
export default {

  name: 'uIndex',
  data() {
    this.$router.push("/user")

    return {
      quitDialog: false,
      defaultActiveNumber: "3"
    }
  },
  methods: {
    toLogin() {
      window.location.href = '/'
    },
    activeNumberMessage(strNumber) {
      this.defaultActiveNumber = strNumber
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    one(ev) {

      if (ev.index == 3) {
        this.defaultActiveNumber = '3'
        this.$router.push("/user/dream") //淘梦地带
      } else if (ev.index == '1-1') {
        this.$router.push("/user/expenseRecord") //消费记录
      } else if (ev.index == '1-2') {
        this.$router.push("/user/withdrawalsRecord") //提现记录
      } else if (ev.index == '1-3') {
        this.$router.push("/user/conversionRecord") //兑换记录
      } else if (ev.index == '1-4') {
        this.$router.push("/user/TDRecord") //淘豆流水
      } else if (ev.index == '1-5') {
        this.$router.push("/user/limitRecord") //额度流水
      } else if (ev.index == '2-1') {
        this.$router.push("/user/recommendRecord") //推荐记录
      } else if (ev.index == '2-2') {
        this.$router.push("/user/recommendStimulate") //推荐激励
      }

    }

  }
}
</script>

<style lang="css">
body{
  margin: 0px;
}
/*整体背景色*/
#uIndex{
  background-color: #f3f1f6;
  text-align: center;
}
/*导航样式*/
.nav-content{
  height: 100px;
  background-image: url('../../assets/img/www.adsbooks.com.png');
}
.nav-common-logo img{
  position: relative;
  top: 7px;
  line-height: 100px;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
}
.nav-quit{



  text-decoration:none
}
/*侧边栏样式*/
.el-menu-item.is-active{
  color: #000;
  font-weight: bold;
  background-color: #fdd7be;

}
.el-menu-item:first-child {
    margin-top: 18px;
}
#sidebar-content{
height: 1022px;
width: 280px;
background-color: #fff7f1;
}
/*内容样式*/
@media screen and (min-width: 1920px) {
    .main-content {
      width: 1559px;
      height: 845px;
      margin-top: 18px;
    }
}

@media screen and (max-width: 1440px) {
  body{
    width: 1440px;
  }
  #sidebar-content{
    height:840px;
    width: 240px;
    background-color: rgb(255, 247, 241);
  }
    .content-right{
      margin-left: 20px;
    }
}
.main-content {
  height: 845px;
  margin-top: 18px;
  margin-right: 40px;
  margin-left: 80px;

    background-color: #f3f1f6;

}

.quit{
  height: 22px;
  position: relative;
  top:-4px;
  margin-left: 8px;
line-height: 22px;
font-size: 19px;
color: #FFF;
text-decoration:none;
}
.nav-quit-box{

  margin-top: 9px;
}
.nav-content {
    -webkit-animation: fadeInDown 0.6s 0.2s ease both;
    -moz-animation: fadeInDown 0.6s 0.2s ease both;
}
@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
}
@-moz-keyframes fadeInDown {
    0% {
        opacity: 0;
        -moz-transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        -moz-transform: translateY(0);
    }
}
#sidebar-content{
-webkit-animation:fadeInLeft 1s .2s ease both;
-moz-animation:fadeInLeft 1s .2s ease both;}
@-webkit-keyframes fadeInLeft{
0%{opacity:0;
-webkit-transform:translateX(-20px)}
100%{opacity:1;
-webkit-transform:translateX(0)}
}
@-moz-keyframes fadeInLeft{
0%{opacity:0;
-moz-transform:translateX(-20px)}
100%{opacity:1;
-moz-transform:translateX(0)}
}
</style>
