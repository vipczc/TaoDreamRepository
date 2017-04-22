const DomainName = '/taodream-consumer'//http://10.60.20.76 //域名
// const PortNumber = '8081' //端口号 POST

//消费者
export const userApi = {

      index : DomainName+'/member/selectMember',//消费者主页面接口
      bankInfo : DomainName+'/memberWithDraw/selectBankInfo',//查询银行卡信息接口
      withdrawals : DomainName+'/memberWithDraw/withdrawals',//提现接口
      bankInfoDialog : DomainName+'/memberWithDraw/selectBankInfo',//提现窗口信息接口

      withDrawlistRecord : DomainName+'/memberWithDraw/listRecord',//提现记录查询接口

      exchangeTaodou : DomainName+'/memberTaodou/exchangeTaodou',//淘豆兑换接口
      taodoulistAccount : DomainName+'/memberTaodou/listAccount',//淘豆流水查询
      taodoulistRecord : DomainName+'/memberTaodou/listRecord',//淘豆兑换记录查询

      giveQuato : DomainName+'/memberQuato/giveQuato',//赠送额度接口
      raiseQuato : DomainName+'/memberQuato/raiseQuato',//提升额度接口
      quatolistAccount : DomainName+'/memberQuato/listAccount',//额度流水查询接口

      listRecommendRecord : DomainName+'/member/listRecommendRecord',//推荐记录查询接口
      listConsumptionRecord : DomainName+'/member/listConsumptionRecord',//消费记录查询接口
      consumptionDetail : DomainName+'/member/consumptionDetail',//消费记录详情接口
      encourageDetail : DomainName+'/member/encourageDetail',//激励明细接口
}
//商家
export const businessAPi =  {




      index : DomainName+'/shop/index',//商家基本信息接口
      consumerOrderRecord : DomainName+'/shop/consumerOrderRecord',//消费记录接口
      consumerOrderRecordInfo : DomainName+'/shop/consumerOrderRecordInfo',//消费记录详情接口
      withdrawRecord : DomainName+'/shop/withdrawRecord',//提现记录接口
      taodouExchangeRecord : DomainName+'/shop/taodouExchangeRecord',//淘豆兑换记录接口
      taodouRecord : DomainName+'/shop/taodouRecord',//淘豆流水接口
      quotaRecord : DomainName+'/shop/quotaRecord',//额度流水接口
      takeCash : DomainName+'/shop/takeCash',//提现接口
      exchangeTaodou : DomainName+'/shop/exchangeTaodou',//淘豆兑换接口
      quotaUpgrade : DomainName+'/shop/quotaUpgrade',//额度提升接口


}
//咨询师
export const clerkApi =  {

      index : DomainName+'/counselor/index',//咨询师基本信息接口
      taodouExchangeRecord : DomainName+'/counselor/taodouExchangeRecord',//淘豆兑换记录接口
      taodouRecord : DomainName+'/counselor/taodouRecord',//淘豆流水接口
      withdrawRecord : DomainName+'/counselor/withdrawRecord',//提现记录接口

      customerAdd : DomainName+'/counselor/customerAdd',//业务记录客源添加接口
      customerRecord : DomainName+'/counselor/customerRecord',//业务记录列表接口
      taodouExchangeRecord : DomainName+'/counselor/taodouExchangeRecord',//业务记录-客源跟进接口
      consumerOrderRecord : DomainName+'/counselor/consumerOrderRecord',//关联消费记录接口

      consumerOrderRecordInfo : DomainName+'/counselor/consumerOrderRecordInfo',//关联消费记录详情接口
      takeCash : DomainName+'/counselor/takeCash',//提现接口
      exchangeTaodou : DomainName+'/shop/exchangeTaodou',//淘豆兑换接口
      sendCode : DomainName+'/counselor/sendCode',//修改密码-发送验证码接口

      updatePassword : DomainName+'/counselor/updatePassword',//修改密码接口

}
