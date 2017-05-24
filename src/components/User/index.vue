
<template lang="html">
<div id="uIndex">
  <!-- 商家 -->
  <el-row class="nav-content">

    <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}" >

          <span class="nav-common-logo"><img src="../../assets/img/TMZ.png" alt="Logo"></span>


      </el-col>
      <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:10,offset:6}" style="text-align:left;">

            <div class="announcement">
              <div class="win">
                  <span style="color:#FFF;font-size:14px;font-weight: 100;">为满足广大淘梦者们的理财需求，淘梦者俱乐部为淘梦者们推出了专属的“存豆罐”服务，只需轻轻一点，把账户内淘豆放入其中，即可获取指定收益，您还在等什么，“增值”刻不容缓！
</span>
              </div>

            </div>


        </el-col>
        <el-col :xs="24" :sm="{span:6,offset:0}" :md="{span:6,offset:0}" :lg="{span:4,offset:0}">

              <a href="javascript:void(0)" @click="quitDialog = true" class="nav-quit"><img src="../../assets/img/ExitButton.png" @click="quitDialog = true" alt="quit"><span class="quit" @click="quitDialog = true"> 退出</span></a>


          </el-col>



  </el-row>
  <el-row>
<!-- 导航条 -->



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
  <el-menu-item index="1-6" @click="one"><img src="../../assets/img/fixmini.png" alt="存豆罐记录">存豆罐记录</el-menu-item>
<!-- <img src="" alt="存豆罐记录"> -->
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
import {
  quitUser
} from '../api/apiCode.js'
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
      quitUser.quit();
    },
    activeNumberMessage(strNumber) {
      this.defaultActiveNumber = strNumber
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
      } else if (ev.index == '1-6') {
        this.$router.push("/user/fixDepositRecord") //存豆罐记录
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
@keyframes myfirst
{
0%   { left:100%;}

100% { left:-320%;}
}
body{
  margin: 0px;
}
.announcement{
  display: inline-block;
  margin-top:33.5px;
  line-height: 100px;
  width: 408px;
  height: 33px;
  background-origin: inherit;
  background-image: url('../../assets/img/gg.png');
  z-index: 0;
}
.announcement span{

  position: absolute;
  overflow: hidden;
  top: -34px;
  left: 64%;

animation:myfirst 20s linear infinite;
}
.win{
position:relative;
  width: 338px;
  height: 33px;
  overflow: hidden;
  margin-left: 50px;
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
height: 896px;
width: 280px;
background-color: #fff7f1;
}
/*内容样式*/
@media screen and (min-width: 1920px) {
    .main-content {
      overflow-y : scroll;
      width: 1559px;
      height: 896px;
      margin-top: 18px;
    }
}

@media screen and (max-width: 1440px) {
  body{
    width: 1440px;
  }
  #sidebar-content{
    height:800px;
    width: 240px;
    background-color: rgb(255, 247, 241);
  }
    .content-right{
      margin-left: 20px;
    }
    .main-content {
      overflow-x : scroll;
      overflow-y : scroll;
      width: 1170px;
      height: 780px !important;
      margin-top: 18px;
    }
}
.main-content {
  overflow-x : hidden;
  overflow-y : scroll;
  height: 896px;
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
.nav-quit-box a{
  display: inline-block;

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

/*滚动条*/

::-webkit-scrollbar {

    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track,
::-webkit-scrollbar-thumb {
    border-radius: 999px;
    border: 1px solid transparent;
}

::-webkit-scrollbar-track {
    /*box-shadow: 1px 1px 5px rgba(0, 0, 0, .2) inset;*/
}

::-webkit-scrollbar-thumb {
    min-height: 20px;
    background-clip: content-box;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, .2) inset;
}

::-webkit-scrollbar-corner {
    background: transparent;
}


/*自定义加载*/
/*.el-loading-spinner .circular {
  display: none;
}

.el-loading-spinner {
  position: relative;
  width: 2.5em;
  height: 2.5em;
  transform: rotate(165deg);
}

.el-loading-spinner:before,
.el-loading-spinner:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5em;
  height: 0.5em;
  border-radius: 0.25em;
  transform: translate(-50%, -50%);
}

.el-loading-spinner:before {
  animation: csshub-before 2s infinite;
  -webkit-animation: csshub-before 2s infinite;
}

.el-loading-spinner:after {
  animation: csshub-after 2s infinite;
  -webkit-animation: csshub-after 2s infinite;
}

@keyframes csshub-before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@-webkit-keyframes csshub-before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes csshub-after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}

@-webkit-keyframes csshub-after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}*/


</style>
