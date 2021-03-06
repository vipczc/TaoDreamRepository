import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import host from '../common.js'
import ajax from '../components/api/ajax'
// 404
import notFound from '@/components/notFoundComponent'

// 消费者模块
import uIndex from '@/components/User/index'
import uIndexDream from '@/components/User/modules/dream'//淘梦地带
import uIndexExpenseRecord from '@/components/User/modules/expenseRecord'//消费记录
import uIndexWithdrawalsRecord from '@/components/User/modules/withdrawalsRecord'//提现记录
import uIndexConversionRecord from '@/components/User/modules/conversionRecord'//兑换记录
import uIndexTDRecord from '@/components/User/modules/TDRecord'//淘豆流水
import uIndexLimitRecord from '@/components/User/modules/limitRecord'//额度流水
import uRecommendRecord from '@/components/User/modules/recommendRecord'//推荐记录
import uRecommendStimulate from '@/components/User/modules/recommendStimulate'//推荐激励
import ufixDepositRecord from '@/components/User/modules/fixDepositRecord'//定存宝记录

import userIndex from '@/components/User/userIndex'
import userinfo from '@/components/User/userinfo'
import userList from '@/components/User/userList'


// 商家模块
import bIndex from '@/components/Business/index'
import bIndexDream from '@/components/Business/modules/dream' //淘梦地带
import bIndexExpenseRecord from '@/components/Business/modules/expenseRecord' //消费记录
import bIndexWithdrawalsRecord from '@/components/Business/modules/withdrawalsRecord' //提现记录
import bIndexConversionRecord from '@/components/Business/modules/conversionRecord' //兑换记录
import bIndexTDRecord from '@/components/Business/modules/TDRecord' //淘豆流水
import bIndexLimitRecord from '@/components/Business/modules/limitRecord' //额度流水


//咨询师
import cIndex from '@/components/Clerk/index' //咨询师首页
import cIndexDream from '@/components/Clerk/modules/dream' //淘梦地带
import cIndexTDRecord from '@/components/Clerk/modules/TDRecord'//淘豆流水
import cIndexWithdrawalsRecord from '@/components/Clerk/modules/withdrawalsRecord'//提现记录
import cIndexConversionRecord from '@/components/Clerk/modules/conversionRecord' //兑换记录
import cIndexBusinessRecord from '@/components/Clerk/modules/businessRecord' //业务记录
import cIndexRelatedConsumptionRecord from '@/components/Clerk/modules/relatedConsumptionRecord' //关联消费记录

//注册
// import register from '@/components/register'
import consumerRegister from '@/components/register/consumerRegister'//消费者注册
import consumerRegister1 from '@/components/register/consumerRegister1'//消费者注册
import bussinessRegister from '@/components/register/bussinessRegister'//商家注册

Vue.use(Router)

// function requireAuth (to, from, next) {
//   ajax('GET', host.basic.basicUrl + '/register/selectCurrentUser').
//     then(res => {
//       console.log(res);
//         if (res.ERRORCODE == 0) {
//           if (res.RESULT != 6) {
//             next({
//               path: '/',
//               query: { redirect: to.fullPath }
//             })
//           } else {
//             next();
//           }
//         } else {
//           next('/');
//         }
//     })
// }


const router =  new Router({
  routes: [
    // 主入口
    {
      path: '/',
      name: 'index',
      component: index,
    },
    //注册
    {
      path: '/consumerRegister',
      component: consumerRegister
      // beforeEnter: requireAuth
    },
     {
      path: '/consumerRegister1',
      component: consumerRegister1
      // beforeEnter: requireAuth
    },
    {
      path: '/bussinessRegister',
      component: bussinessRegister
      // beforeEnter: requireAuth

    },
    // 用户部分
    {
      path: '/user',
      component: uIndex,
      // beforeEnter: requireAuth,
      children: [{
        path: '/',
        component: uIndexDream, //淘梦地带,
        // beforeEnter:(to, from, next) => {
        //   ajax('GET', host.basic.basicUrl + '/register/selectCurrentUser').
        //     then(res => {
        //         if (res.ERRORCODE == 0) {
        //             next();
        //         } else {
        //           next('/');
        //         }
        //     })
        // }
      },{
        path: 'dream',
        component: uIndexDream //淘梦地带
      }, {
        path: 'expenseRecord', //消费记录

        component: uIndexExpenseRecord
      }, {
        path: 'withdrawalsRecord', //提现记录

        component: uIndexWithdrawalsRecord
      }, {
        path: 'conversionRecord', //兑换记录

        component: uIndexConversionRecord
      }, {
        path: 'TDRecord', //淘豆流水

        component: uIndexTDRecord
      }, {
        path: 'limitRecord', //额度流水

        component: uIndexLimitRecord
      }, {
        path: 'recommendRecord', //推荐记录

        component: uRecommendRecord
      }, {
        path: 'recommendStimulate', //推荐激励

        component: uRecommendStimulate
      }, {
        path: 'fixDepositRecord', //定存宝记录

        component: ufixDepositRecord
      }]

    },

    //商家部分
    {
      path: '/business',
      component: bIndex,
      // beforeEnter: requireAuth,

      children: [{
        path: '/',
        component: bIndexDream, //淘梦地带
        // beforeEnter:(to, from, next) => {
        //   ajax('GET', host.basic.basicUrl + '/register/selectCurrentUser').
        //     then(res => {
        //         if (res.ERRORCODE == 0) {
        //             next();
        //         } else {
        //           next('/');
        //         }
        //     })
        // }
      }, {
        path: 'dream',
        component: bIndexDream //淘梦地带
      }, {
        path: 'expenseRecord', //消费记录

        component: bIndexExpenseRecord
      }, {
        path: 'withdrawalsRecord', //提现记录

        component: bIndexWithdrawalsRecord
      }, {
        path: 'conversionRecord', //兑换记录

        component: bIndexConversionRecord
      }, {
        path: 'TDRecord', //淘豆流水

        component: bIndexTDRecord
      }, {
        path: 'limitRecord', //额度流水

        component: bIndexLimitRecord
      }]

    },

    // 业务员 || 咨询师 部分
    {
      path: '/clerk',
      name: 'cIndex',
      component: cIndex,
      // beforeEnter: requireAuth,

      children:[{
        path: '/', //推荐激励
        component: cIndexDream,

      },{
        path: 'dream', //推荐激励
        component: cIndexDream
      },{
        path: 'TDRecord', //淘豆流水
        component: cIndexTDRecord
      },{
        path: 'withdrawalsRecord', //提现记录
        component: cIndexWithdrawalsRecord
      },{
        path: 'conversionRecord', //兑换记录
        component: cIndexConversionRecord
      },{
        path: 'businessRecord', //业务记录
        component: cIndexBusinessRecord
      },{
        path: 'relatedConsumptionRecord', //关联消费记录
        component: cIndexRelatedConsumptionRecord
      },]
    },{
      path:'*',
      component:notFound
    }
  ]
})

router.beforeEach((to, from, next) => {
    ajax('GET', host.basic.basicUrl + '/register/selectCurrentUser').
      then(function(res){
        if (res.ERRORCODE == 0) {

          window.vipType = res.RESULT.vipType
            next();
        } else  {
          if (to.path != '/') {
            next({ path: '/' })
          } else {
            next()
          }
        }
      },function(error){
        if (to.path != '/') {
          next({ path: '/' })
        } else {
          next()
        }
      })
})

// router.beforeEach((to, from, next) => {
//     next({path:'/'})
// })

export default router
