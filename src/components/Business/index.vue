
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

            <router-link to="/" class="nav-quit">Quit</router-link>

        </el-col>
    </el-col>


<!-- 侧边栏 -->
    <el-col :xs="6" :sm="{span:5,offset:0}" :md="{span:5,offset:0}" :lg="{span:3,offset:0}">
      <el-menu  id="business-sidebar-content" mode="vertical" default-active="1" class="el-menu-vertical-demo"  @open="handleOpen" @close="handleClose" @select="handleSelect">

              <el-menu-item index="1" @click="one" name="dreams" ><i class="el-icon-menu" ></i>淘梦地带</el-menu-item>
              <el-menu-item index="2" @click="one" name="dream">消费记录</el-menu-item>
              <el-menu-item index="3" @click="one">提现记录</el-menu-item>
              <el-menu-item index="4" @click="one">兑换记录</el-menu-item>
              <el-menu-item index="5" @click="one">淘豆流水</el-menu-item>
              <el-menu-item index="6" @click="one">额度流水</el-menu-item>

        </el-menu>
    </el-col>

<!-- 内容 -->

    <el-col :xs="0" :sm="{span:19,offset:0}" :md="{span:19,offset:0} " :lg="{span:21,offset:0}" style="background-color: #f3f1f6;">
      <div class="main-content">
        <router-view ></router-view>
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
      if (ev.index == 1) {
        this.$router.push("/business/dream") //淘梦地带
      } else if (ev.index == 2) {
        this.$router.push("/business/expenseRecord") //消费记录
      } else if (ev.index == 3) {
        this.$router.push("/business/withdrawalsRecord") //提现记录
      } else if (ev.index == 4) {
        this.$router.push("/business/conversionRecord") //兑换记录
      } else if (ev.index == 5) {
        this.$router.push("/business/TDRecord") //淘豆流水
      } else if (ev.index == 6) {
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
.main-content {
  height: 845px;
  margin-top: 18px;
  margin-right: 40px;
  margin-left: 80px;

    background-color: #f3f1f6;

}


</style>
