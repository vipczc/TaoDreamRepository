
<template lang="html">
<div id="clerk">
  <!-- 商家 -->
  <el-row>
<!-- 导航条 -->
    <el-col class="nav-content">
      <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}">

            <span class="nav-common-logo">TMZ淘梦者</span>

        </el-col>
        <el-col :xs="0" :sm="{span:6,offset:12}" :md="{span:6,offset:12}" :lg="{span:4,offset:16}">

            <a href="javascript:void(0)" @click="quitDialog = true" class="nav-quit"><img src="../../assets/img/ExitButton.png" @click="quitDialog = true" alt="quit"><span class="quit" @click="quitDialog = true"> 退出</span></a>

        </el-col>
    </el-col>


<!-- 侧边栏 -->
    <el-col :xs="6" :sm="{span:5,offset:0}" :md="{span:5,offset:0}" :lg="{span:3,offset:0}">
      <el-menu  id="business-sidebar-content" mode="vertical" :default-active="defaultActiveNumber" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" @select="handleSelect" :unique-opened="true">

      <el-menu-item index="3" @click="one" name="dreams" ><img class="box-img-one" src="../../assets/img/zone.png" alt="淘梦地带">淘梦地带</el-menu-item>
      <el-submenu index="1">
        <template slot="title"><img class="box-img-one" src="../../assets/img/BillingRecord.png" alt=""><span class="two-item-text">账单记录</span></template>
        <el-menu-item-group class="box-img-two">
          <el-menu-item index="1-1" @click="one"><img src="../../assets/img/toddleDaybook.png" alt="淘豆流水">淘豆流水</el-menu-item>
          <el-menu-item index="1-2" @click="one"><img src="../../assets/img/WithdrawalRecord.png" alt="提现记录">提现记录</el-menu-item>
          <el-menu-item index="1-3" @click="one"><img src="../../assets/img/conversion.png" alt="兑换记录">兑换记录</el-menu-item>



        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
<template slot="title">
<img class="box-img-one" src="../../assets/img/PassengersShow.png" alt="">
<span class="two-item-text">客源展示</span>
</template>
<el-menu-item-group class="box-img-two">
    <el-menu-item index="2-1" @click="one"><img src="../../assets/img/ServiceRecord.png" alt="业务记录">业务基本信息</el-menu-item>
  <el-menu-item index="2-2" @click="one"><img src="../../assets/img/AssociatedConsumptionRecord.png" alt="关联消费记录">关联消费记录</el-menu-item>
</el-menu-item-group>
</el-submenu>


        </el-menu>
    </el-col>


<!-- 内容 -->

    <el-col :xs="0" :sm="{span:19,offset:0}" :md="{span:19,offset:0} " :lg="{span:21,offset:0}" style="background-color: #f3f1f6;">
      <div class="main-content">
        <router-view v-on:activeNumber="activeNumberMessage"></router-view>
      </div>


    </el-col>

  </el-row>
  <el-dialog title="退出" v-model="quitDialog" size="tiny">
  <h2 style="color:#000;">是否退出登录</h2>
  <span slot="footer" class="dialog-footer">
    <el-button type="success" @click="quitDialog = false">取 消</el-button>
    <el-button type="danger"  @click="toLogin" >确 定</el-button>
  </span>
  </el-dialog>
</div>
</template>

<script>
import {
  quitUser
} from '../api/apiCode.js'
export default {
  name: 'clerk',
  data() {

    this.$router.push("/clerk")
    return {
      quitDialog: false,
      defaultActiveNumber: '3'
    }
  },

  methods: {
    toLogin() {
      quitUser.quit();

    },
    activeNumberMessage(strNumber) {
      this.defaultActiveNumber = strNumber
    },
    handleSelect() {

    },
    handleOpen(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath);
    },
    handleIconClick(ev) {
      //console.log(ev);
    },
    one(ev) {
      if (ev.index == 3) {
        this.defaultActiveNumber = '3'
        this.$router.push("/clerk/dream") //淘梦地带
      } else if (ev.index == "1-1") {
        this.$router.push("/clerk/TDRecord") //淘豆流水
      } else if (ev.index == "1-2") {
        this.$router.push("/clerk/withdrawalsRecord") //淘豆流水
      } else if (ev.index == "1-3") {
        this.$router.push("/clerk/conversionRecord") //兑换记录
      } else if (ev.index == "2-1") {
        this.$router.push("/clerk/businessRecord") //业务记录
      } else if (ev.index == "2-2") {
        this.$router.push("/clerk/relatedConsumptionRecord") //关联消费记录
      }

    }

  }
}
</script>

<style lang="css" >
body{
  margin: 0px;
}
/*整体背景色*/
#clerk{
  background-color: #f3f1f6;
  text-align: center;
}
/*导航样式*/
.nav-content{
  height: 100px;
  background-image: url('../../assets/img/www.adsbooks.com.png');
}
.nav-common-logo{
  line-height: 100px;
  font-size: 24px;
  font-weight: bold;
  color: #FFF;
}
.nav-quit{
  line-height: 100px;
  color: #FFF;
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
#clerk-sidebar-content{
height: 840px;
width: 280px;
background-color: #fff7f1;
}
/*内容样式*/
/*@media screen and (min-width: 1920px) {
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
  #clerk-sidebar-content{
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

}*/


</style>
