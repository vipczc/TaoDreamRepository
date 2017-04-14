
<template lang="html">
<div id="uIndex">
  <!-- 商家 -->
  <el-row>
<!-- 导航条 -->
    <el-col class="nav-content">
      <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}">

            <span class="nav-common-logo">TMZ淘梦者</span>

        </el-col>
        <el-col :xs="0" :sm="{span:6,offset:12}" :md="{span:6,offset:12}" :lg="{span:4,offset:16}">

            <router-link to="/" class="nav-quit"><img src="../../assets/img/退出按钮.png" alt="quit"></router-link>

        </el-col>
    </el-col>


<!-- 侧边栏 -->
    <el-col :xs="6" :sm="{span:5,offset:0}" :md="{span:5,offset:0}" :lg="{span:3,offset:0}">
      <el-menu  id="sidebar-content" mode="vertical" default-active="1" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose">

              <el-menu-item index="1" @click="one"><i class="el-icon-menu"></i>淘梦地带</el-menu-item>
              <el-menu-item index="2" @click="one">消费记录</el-menu-item>
              <el-menu-item index="3" @click="one">提现记录</el-menu-item>
              <el-menu-item index="4" @click="one">兑换记录</el-menu-item>
              <el-menu-item index="5" @click="one">淘豆流水</el-menu-item>
              <el-menu-item index="6" @click="one">额度流水</el-menu-item>
              <el-menu-item index="7" @click="one">推荐记录</el-menu-item>
              <el-menu-item index="8" @click="one">推荐激励</el-menu-item>
        </el-menu>
    </el-col>

<!-- 内容 -->

    <el-col :xs="0" :sm="{span:19,offset:0}" :md="{span:19,offset:0} " :lg="{span:21,offset:0}" style="background-color: #f3f1f6;">
      <div class="main-content">
        <router-view></router-view>
      </div>


    </el-col>

  </el-row>

</div>
</template>

<script>
export default {
  name: 'uIndex',
  data() {
    this.$router.push("/user")

    return {}
  },
  methods: {
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

      if (ev.index == 1) {
        this.$router.push("/user/dream") //淘梦地带
      } else if (ev.index == 2) {
        this.$router.push("/user/expenseRecord") //消费记录
      } else if (ev.index == 3) {
        this.$router.push("/user/withdrawalsRecord") //提现记录
      } else if (ev.index == 4) {
        this.$router.push("/user/conversionRecord") //兑换记录
      } else if (ev.index == 5) {
        this.$router.push("/user/TDRecord") //淘豆流水
      } else if (ev.index == 6) {
        this.$router.push("/user/limitRecord") //额度流水
      } else if (ev.index == 7) {
        this.$router.push("/user/recommendRecord") //推荐记录
      } else if (ev.index == 8) {
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
  background-color: #ff6805;
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
.main-content {
  height: 845px;
  margin-top: 18px;
  margin-right: 40px;
  margin-left: 80px;

    background-color: #f3f1f6;

}


</style>
