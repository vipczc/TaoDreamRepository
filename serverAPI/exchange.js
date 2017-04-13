module.exports = function(){
  var faker =require("faker");
  var _ = require("lodash");
  faker.locale = "zh_CN";
  return {
    people: _.times(143,function (n) {
      return {
        id: n,
        date: faker.image.image()+'/',
        avatar: faker.address.zipCode()

      }
    }),
    //兑换
    UconversionRecord:_.times(203,function (n) {
      return {
        id: n,
        conversionDate: faker.date.recent(),
        conversionTaodou: faker.random.number(),
        conversionAmountReceived: faker.random.number(),
        surplusTaodou:faker.random.number()
        // 兑换日期 conversionDate
        // 兑换淘豆 conversionTaodou
        // 兑换获得金额 conversionAmountReceived
        // 剩余淘豆 surplusTaodou
      }
    }),
    //额度流水
    UlimitRecord:_.times(203,function (n) {
      return {
        id: n,
        limitOrder: '000110010'+faker.random.number(),
        giveDate: faker.date.recent(),
        memberName: faker.finance.accountName(),
        quotaType:faker.random.number()+'完成',
        consigneeAccount: faker.finance.account(),
        consigneeName: faker.finance.accountName(),
        state:faker.random.number(),
        quota: faker.random.number(),
        remainingAmount: faker.random.number(),

        // * * 额度订单 limitOrder
        // * * 赠送日期 giveDate
        // * * 会员姓名 memberName
        // * * 额度类型 quotaType
        // * * 收货人账号 consigneeAccount
        // * * 收货人姓名 consigneeName
        // * * 状态 state
        // * * 额度 quota
        // * * 剩余额度 remainingAmount
      }
    }),
    //淘豆流水
    UTDRecord:_.times(153,function (n) {
      return {
        id: n,
        operationDate: faker.date.recent(),
        type: faker.database.type(),
        income: faker.random.number()+'元',
        expenditure:faker.random.number()+'元',
        TDbalance: faker.random.number()+'个',
        consumerAccount: faker.finance.account(),
        consumerMember: faker.finance.accountName(),
        orderNumber: '000110010'+faker.random.number(),
        // * * 操作日期 operationDate
        // * * 类型 type
        // * * 收入 income
        // * * 支出 expenditure
        // * * 淘豆余额 TDbalance
        // * * 消费账号 consumerAccount
        // * * 消费会员 consumerMember
        // * * 订单编号 orderNumber
      }
    }),
    //提现记录
    UwithdrawalsRecord:_.times(303,function (n) {
      return {
        id: n,
        dateOfWithdrawal: faker.date.recent(),
        cashWithdrawalAmount: faker.random.number()+'元',
        counterFee: faker.random.number()+'元',
        arrivalAmount:faker.random.number()+'元',
        collectingBank: faker.finance.account(),
        makeRemarks: faker.name.jobType(),
        state:faker.database.type()
        // * * 提现日期 dateOfWithdrawal
        // * * 提现金额 cashWithdrawalAmount
        // * * 手续费 counterFee
        // * * 到账金额 arrivalAmount
        // * * 收款银行 collectingBank
        // * * 打款备注 makeRemarks
        // * * 状态 state
      }
    }),
    //推荐记录
    UrecommendRecord:_.times(253,function (n) {
      return {
        id: n,
        recommendedDate: faker.date.recent(),
        memberAccount: faker.finance.account(),
        memberName: faker.finance.accountName(),
        // * * 推荐日期 recommendedDate
        // * * 会员账号 memberAccount
        // * * 会员姓名 memberName
      }
    }),
    //推荐激励
    UrecommendStimulate:_.times(103,function (n) {
      return {
        id: n,
        orderNumber: '00100100'+faker.random.number(),
        consumptionDate: faker.date.recent(),
        memberAccount: faker.finance.account(),
        memberName:faker.finance.accountName(),
        consumptionAmount: faker.random.number()+'元',
        incentiveProportion:faker.random.number()+'%'
        // * * 订单编号 orderNumber
        // * * 消费日期 consumptionDate
        // * * 会员账号 memberAccount
        // * * 会员姓名 memberName
        // * * 消费金额 consumptionAmount
        // * * 激励比例 incentiveProportion
      }
    }),
    //消费记录
    UexpenseRecord:_.times(53,function (n) {
      return {
        id: n,
        orderNumber: '00100100'+faker.random.number(),
        consumptionDate: faker.date.recent(),
        consumptionAmount: faker.random.number()+'元',
        incentiveProportion:faker.random.number()+"%",
        startDate: faker.date.past(),
        incentiveEndDate:faker.date.future()
        // * * 订单编号 orderNumber
        // * * 消费日期 consumptionDate
        // * * 消费金额 consumptionAmount
        // * * 激励比例 incentiveProportion
        // * * 激励开始日期 startDate
        // * * 激励结束日期 incentiveEndDate
        // * * 详情 && 激励明细 按钮1 按钮2
      }
    }),
    //商家================商家==================商家========================商家==========================商家=======================
    //商家================商家==================商家========================商家==========================商家=======================
    //商家================商家==================商家========================商家==========================商家=======================
    //商家================商家==================商家========================商家==========================商家=======================
    //兑换
    BconversionRecord:_.times(203,function (n) {
      return {
        id: n,
        conversionDate: faker.date.recent(),
        conversionTaodou: faker.random.number(),
        conversionAmountReceived: faker.random.number(),
        surplusTaodou:faker.random.number()
        // 兑换日期 conversionDate
        // 兑换淘豆 conversionTaodou
        // 兑换获得金额 conversionAmountReceived
        // 剩余淘豆 surplusTaodou
      }
    }),
    //额度流水
    BlimitRecord:_.times(103,function (n) {
      return {
        id: n,
        limitOrder: '000110010'+faker.random.number(),
        giveDate: faker.date.recent(),
        enterpriseAccount: faker.finance.account(),
        enterpriseName: faker.company.companyName(),
        quotaType:faker.database.type(),
        state:faker.random.number(),
        quota: faker.random.number(),
        remainingAmount: faker.random.number(),

        // * * 额度订单 limitOrder
        // * * 赠送日期 giveDate
        // * * 企业账号 enterpriseAccount
        // * * 企业名称 enterpriseName
        // * * 额度类型 quotaType
        // * * 状态 state
        // * * 额度 quota
        // * * 剩余额度 remainingAmount
      }
    }),
    //淘豆流水
    BTDRecord:_.times(123,function (n) {
      return {
        id: n,
        operationDate: faker.date.recent(),
        type: faker.database.type(),
        income: faker.random.number()+'元',
        TDbalance: faker.random.number()+'个',
        merchantAccount: faker.finance.account(),
        merchantName: faker.finance.accountName(),
        orderNumber: '000110010'+faker.random.number(),
        // * * 操作日期 operationDate
        // * * 类型 type
        // * * 收入 income
        // * * 淘豆余额 TDbalance
        // * * 商家账号 merchantAccount
        // * * 商家名称 merchantName
        // * * 订单编号 orderNumber
      }
    }),
    //提现记录
    BwithdrawalsRecord:_.times(423,function (n) {
      return {
        id: n,
        dateOfWithdrawal: faker.date.recent(),
        cashWithdrawalAmount: faker.random.number()+'元',
        counterFee: faker.random.number()+'元',
        arrivalAmount:faker.random.number()+'元',
        collectingBank: faker.finance.account(),
        makeRemarks: faker.name.jobType(),
        state:faker.database.type()
        // * * 提现日期 dateOfWithdrawal
        // * * 提现金额 cashWithdrawalAmount
        // * * 手续费 counterFee
        // * * 到账金额 arrivalAmount
        // * * 收款银行 collectingBank
        // * * 打款备注 makeRemarks
        // * * 状态 state
      }
    }),

    //消费记录
    BexpenseRecord:_.times(89,function (n) {
      return {
        id: n,
        orderNumber: '00100100'+faker.random.number(),
        consumptionDate: faker.date.recent(),
        consumptionAmount: faker.random.number()+'元',
        consumptionName:faker.finance.accountName(),
        // * * 订单编号 orderNumber
        // * * 消费日期 consumptionDate
        // * * 消费金额 consumptionAmount
        // * * 消费者姓名 consumptionName
        // * * 操作 //按钮需要进行模态视图
      }
    }),

    //==============咨询师=================咨询师====================咨询师==================咨询师==============咨询师====================
    //==============咨询师=================咨询师====================咨询师==================咨询师==============咨询师====================
    //==============咨询师=================咨询师====================咨询师==================咨询师==============咨询师====================
    //==============咨询师=================咨询师====================咨询师==================咨询师==============咨询师====================
    //淘豆流水
    CTDRecord:_.times(123,function (n) {
      return {
        id: n,
        operationDate: faker.date.recent(),
        type: faker.database.type(),
        income: faker.random.number()+'元',
        TDbalance: faker.random.number()+'个',
        clerkAccount: faker.finance.account(),
        clerkName: faker.finance.accountName(),
        orderNumber: '000110010'+faker.random.number(),
        // * * 操作日期 operationDate
        // * * 类型 type
        // * * 收入 income
        // * * 淘豆余额 TDbalance
        // * * 咨询师账号 clerkAccount
        // * * 咨询师名称 clerkName
        // * * 订单编号 orderNumber
      }
    }),
    //提现记录
    CwithdrawalsRecord:_.times(423,function (n) {
      return {
        id: n,
        dateOfWithdrawal: faker.date.recent(),
        cashWithdrawalAmount: faker.random.number()+'元',
        counterFee: faker.random.number()+'元',
        arrivalAmount:faker.random.number()+'元',
        collectingBank: faker.finance.account(),
        makeRemarks: faker.name.jobType(),
        state:faker.database.type()
        // * * 提现日期 dateOfWithdrawal
        // * * 提现金额 cashWithdrawalAmount
        // * * 手续费 counterFee
        // * * 到账金额 arrivalAmount
        // * * 收款银行 collectingBank
        // * * 打款备注 makeRemarks
        // * * 状态 state
      }
    }),
    //兑换
    CconversionRecord:_.times(203,function (n) {
      return {
        id: n,
        conversionDate: faker.date.recent(),
        conversionTaodou: faker.random.number(),
        conversionAmountReceived: faker.random.number(),
        surplusTaodou:faker.random.number()
        // 兑换日期 conversionDate
        // 兑换淘豆 conversionTaodou
        // 兑换获得金额 conversionAmountReceived
        // 剩余淘豆 surplusTaodou
      }
    }),
    //业务记录
    CbusinessRecord:_.times(24,function (n) {
      return {
        id: n,
        operationDate: faker.date.recent(),
        name: faker.random.number(),
        contactNumber: faker.random.number(),
        IDNumber:faker.random.number(),
        occupationType:faker.random.number(),
        DateOfBirth:faker.random.number(),
        address:faker.random.number(),
        state:faker.random.number(),

        // * * 操作日期 operationDate
        // * * 姓名 name
        // * * 联系电话 contactNumber
        // * * 身份证号 IDNumber
        // * * 职业类型 occupationType
        // * * 出生年月 DateOfBirth
        // * * 地址 address
        // * * 状态 state
        // * * 操作 //跟进BTN按钮
      }
    }),
    //关联消费记录
    CrelatedConsumptionRecord:_.times(10,function (n) {
      return {
        id: n,
        orderNumber: '000110010'+faker.random.number(),
        consumptionDate: faker.date.recent(),
        memberAccount: faker.finance.account(),
        memberName: faker.finance.accountName(),
        consumptionAmount: faker.random.number()+'元',
        incentiveProportion:faker.random.number()+'%',
        address:faker.address.zipCode()
        // * * 订单编号 orderNumber
        // * * 消费日期 consumptionDate
        // * * 会员账号 memberAccount
        // * * 会员姓名 memberName
        // * * 消费金额 consumptionAmount
        // * * 激励比例 incentiveProportion
        // * * 地址 address
        // * * 操作 //详情按钮
      }
    }),
  }
}
