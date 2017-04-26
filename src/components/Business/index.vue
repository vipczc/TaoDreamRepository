
<template lang="html">
<div id="bIndex" v-on:beforeunload="foreunload()">
  <!-- 商家 -->
  <el-row  >
<!-- 导航条 -->
    <el-col class="nav-content">
      <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}">

            <span class="nav-common-logo">TMZ淘梦者</span>

        </el-col>
        <el-col :xs="0" :sm="{span:6,offset:12}" :md="{span:6,offset:12}" :lg="{span:4,offset:16}">

            <router-link to="/" class="nav-quit"><img src="../../assets/img/ExitButton.png" alt="quit"></router-link>

        </el-col>
    </el-col>


<!-- 侧边栏 -->
    <el-col :xs="0" :sm="{span:3,offset:0}" :md="{span:3,offset:0}" :lg="{span:3,offset:0}">
      <el-menu  id="business-sidebar-content" mode="vertical" :default-active="defaultActiveNumber" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" @select="handleSelect">

              <el-menu-item index="3" @click="one" name="dreams" ><img class="box-img-one" src="../../assets/img/zone.png" alt="淘梦地带">淘梦地带</el-menu-item>
              <el-submenu index="1">
        <template slot="title"><img class="box-img-one" src="../../assets/img/BillingRecord.png" alt=""><span class="two-item-text">账单记录</span></template>
        <el-menu-item-group class="box-img-two">
          <el-menu-item index="1-1" @click="one"><img src="../../assets/img/RecordsOfConsumption.png" alt="消费记录">消费记录</el-menu-item>
          <el-menu-item index="1-2" @click="one"><img src="../../assets/img/WithdrawalRecord.png" alt="提现记录">提现记录</el-menu-item>
          <el-menu-item index="1-3" @click="one"><img src="../../assets/img/conversion.png" alt="兑换记录">兑换记录</el-menu-item>
          <el-menu-item index="1-4" @click="one"><img src="../../assets/img/toddleDaybook.png" alt="淘豆流水">淘豆流水</el-menu-item>
          <el-menu-item index="1-5" @click="one"><img src="../../assets/img/Amountofwater.png" alt="额度流水">额度流水</el-menu-item>
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

</div>
</template>

<script>
export default {
  name: 'bIndex',
  data() {
    this.$router.push("/business")
    return {
      defaultActiveNumber: '3'
    }
  },
  created() {
    //渲染完成
    this.rData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'rData'
  },
  methods: {
    activeNumberMessage(strNumber) {
      this.defaultActiveNumber = strNumber
    },
    rData() {
      //数据get 数据post
      console.log(location.href);

      let path = this.$route.path
      if (path == '/business/dream') {
        console.log(1);

      } else if (path == '/business/expenseRecord') {

      } else if (path == '/business/withdrawalsRecord') {
        console.log(3);

      } else if (path == '/business/TDRecord') {
        console.log(4);
      } else if (path == '/business/limitRecord') {

      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(ev) {
      console.log(ev);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    one(ev) {
      if (ev.index == "3") {
        this.defaultActiveNumber = '3'
        this.$router.push("/business/dream") //淘梦地带
      } else if (ev.index == "1-1") {
        this.$router.push("/business/expenseRecord") //消费记录
      } else if (ev.index == "1-2") {
        this.$router.push("/business/withdrawalsRecord") //提现记录
      } else if (ev.index == "1-3") {
        this.$router.push("/business/conversionRecord") //兑换记录
      } else if (ev.index == "1-4") {
        this.$router.push("/business/TDRecord") //淘豆流水
      } else if (ev.index == "1-5") {
        this.$router.push("/business/limitRecord") //额度流水
      }

    },
    foreunload() {
      console.log(123);
      this.$router.push("/business/dream") //淘梦地带
    }

  }
}
</script>

<style lang="css">

/*整体背景色*/
#bIndex{
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
#business-sidebar-content{
height: 840px;
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

    #business-sidebar-content{
      height:840px;
      width: 240px;
      background-color: rgb(255, 247, 241);
    }
    .content-right{
      margin-left: 20px;
    }
}
@media screen and (max-width: 1199px){
  body{
    width: 1440px;
  }
}

.main-content {
  height: 845px;
  margin-top: 18px;
  margin-right: 40px;
  margin-left: 80px;

    background-color: #f3f1f6;

}
.box-img-one{
  margin-right: 20px;
  position: relative;
  top: 4px;
}
.box-img-two img{
  margin-right: 10px;
  position: relative;
  top: 1px;
}
.two-item-text{
  font-size: 18px;

}
.el-menu-item-group__title{
  display: none;
}
.el-submenu .el-menu{
  background-color:#fff7f1 !important;
}
</style>
