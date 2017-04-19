
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
      <el-menu  id="sidebar-content" mode="vertical" :default-active="defaultActiveNumber" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" :unique-opened="true" >

<el-menu-item-group class="box-img-two">
  <el-menu-item index="3" @click="one" name="dreams" ><img class="box-img-one" src="../../assets/img/淘梦地带-选中状态.png" alt="淘梦地带">淘梦地带</el-menu-item>


  <el-submenu index="1">
    <template slot="title"><img class="box-img-one" src="../../assets/img/账单记录.png" alt=""><span class="two-item-text">账单记录</span></template>
  <el-menu-item index="1-1" @click="one"><img src="../../assets/img/消费记录.png" alt="消费记录">消费记录</el-menu-item>
  <el-menu-item index="1-2" @click="one"><img src="../../assets/img/提现记录.png" alt="提现记录">提现记录</el-menu-item>
  <el-menu-item index="1-3" @click="one"><img src="../../assets/img/兑换记录.png" alt="兑换记录">兑换记录</el-menu-item>
  <el-menu-item index="1-4" @click="one"><img src="../../assets/img/淘豆流水.png" alt="淘豆流水">淘豆流水</el-menu-item>
  <el-menu-item index="1-5" @click="one"><img src="../../assets/img/额度流水.png" alt="额度流水">额度流水</el-menu-item>

  </el-submenu>
  <el-submenu index="2">
  <template slot="title">
<img class="box-img-one" src="../../assets/img/推荐管理.png" alt="">
<span class="two-item-text">推荐管理</span>
</template>
  <el-menu-item index="2-1" @click="one"><img src="../../assets/img/推荐记录.png" alt="推荐记录">推荐记录</el-menu-item>
  <el-menu-item index="2-2" @click="one"><img src="../../assets/img/推荐奖励.png" alt="推荐奖励">推荐奖励</el-menu-item>
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

</div>
</template>

<script>
export default {
  name: 'uIndex',
  data() {
    this.$router.push("/user")

    return {
      defaultActiveNumber: "3"
    }
  },
  methods: {
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


</style>
