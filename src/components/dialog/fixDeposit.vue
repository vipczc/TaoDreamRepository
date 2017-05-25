<template lang="html">
  <!-- 存豆罐 -->
  <div class="fixDeposit">
    <el-dialog title="存豆罐" v-model="fixDepositDialog.show = fixDepositValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="15%">
  <div class="cir" @click="fixDepositDialogOver"><i class="el-icon-close i-top" ></i></div>
  <!-- :rules="rulesfixDeposit" ref="formfixDeposit" prop="sum" -->
          <el-form  label-width="80px" :model="formfixDeposit" :rules="rulesformfix" ref="formfixDeposit">


<el-row>
  <el-col :span="24" style="margin-top:20px">

      <el-col :span="8">

          <div class="pricingTable green" @click="card(1)">
                          <div class="pricingTable-header">
                              <i class="fa fa-adjust"></i>
                              <div class="price-value"> 存豆罐A <span class="month"></span> </div>

                          </div>
                          <img src="../../assets/img/cd.png" alt="对号" class="img-dh">
                          <div class="pricing-content">
                              <ul>
                                  <li>产品期限<b> {{ this.result[0].duration }}个月</b></li>
                                  <li>年化增值率<b> 6%</b></li>

                              </ul>

                          </div>
                          <div class="pricingTable-signup" >
                              <a href="javascript:void(0)">选择</a>
                          </div>
                          </div>


      </el-col>
      <el-col :span="8">
        <div class="pricingTable" @click="card(2)">
                        <div class="pricingTable-header">
                            <i class="fa fa-adjust"></i>
                            <div class="price-value"> 存豆罐B <span class="month"></span> </div>
                        </div>
                        <img src="../../assets/img/gd.png" alt="对号" class="img-dh">
                        <div class="pricing-content">
                            <ul>
                                <li>产品期限<b> {{ this.result[1].duration }}个月</b></li>
                                <li>年化增值率<b> 8%</b></li>

                            </ul>
                        </div>
                        <div class="pricingTable-signup" >
                            <a href="javascript:void(0)">选择</a>
                        </div>
                        </div>

      </el-col>
      <el-col :span="8">
        <div class="pricingTable red" @click="card(3)">
                        <div class="pricingTable-header">
                            <i class="fa fa-adjust"></i>
                            <div class="price-value"> 存豆罐C <span class="month"></span> </div>
                        </div>
                        <img src="../../assets/img/rd.png" alt="对号" class="img-dh">
                        <div class="pricing-content">
                            <ul>
                                <li>产品期限<b> {{ this.result[2].duration }}个月</b></li>
                                <li>年化增值率<b> 10%</b></li>

                            </ul>
                        </div>
                        <div class="pricingTable-signup" >
                            <a href="javascript:void(0)">选择</a>
                        </div>
                        </div>

      </el-col>
</el-col>
</el-row>

          <el-row  >
            <el-col :span="18" style="margin-top:20px;">
              <el-form-item label="转入数量:" labelPosition="left" prop="sum">
                <el-input placeholder="" v-model="formfixDeposit.sum" placeholder="请输入转入淘豆数量" @change="countSum" :disabled="disInput"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6" style="margin-top:20px;">
              <el-form-item label="" >
                <span style="color:#ffa442;" class="tdsumleab">淘豆:<b>{{fixDepositValue.TDSum}}</b></span>
              </el-form-item>
            </el-col>
          </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="预计收益:" labelPosition="left" >
            <span style="color:#ff4b4b;font-size:30px">{{ income }}</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" style="margin-top:0px;text-align:left">
            <span style="color:red;"> * </span>存豆罐业务说明：<br/>
          <p style="margin-top:10px;text-align:center">&#12288;&#12288;存豆罐是淘梦者俱乐部最新推出的淘豆增值服务，把淘豆余额转入存豆罐中就可获得一定的增值，定存到期以后淘豆自动转回余额，</p><p>&#12288;可用于兑换提现。</p>
          </el-col>
        </el-row>
        </el-form>



  <span slot="footer" class="dialog-footer">
<!-- :disabled="disInput" :loading="disInput" -->
    <el-button type="primary" @click="formfixValue('formfixDeposit')" :disabled="disInput" :loading="disInput">提 交</el-button>
  </span>
</el-dialog>

<el-dialog
  title="提示"
  :visible.sync="confirm"
  size="tiny"
  top="0%"
>
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="confirm = false">取 消</el-button>
    <el-button type="primary" @click="confirm = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {
  userApi,
  businessAPi,
  clerkApi
} from '../api/apiCode.js'
export default {

  data() {
    var checkNum = (rule, value, callback) => {
      if (!/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/.test(value)) {
        callback(new Error('请输入正确的淘豆数量,最多2位小数'));
      }
      if (Number(value) > Number(this.fixDepositValue.TDSum)) {

        callback(new Error('大于当前淘豆余额'));
      }
      if (Number(value) < 100) {

        callback(new Error('最少转入淘豆100个'));
      }
      callback();
    }
    return {
      confirm: false, //确认信息
      result: [{
          duration: 0,
          appreciation: 0
        },
        {
          duration: 0,
          appreciation: 0
        },
        {
          duration: 0,
          appreciation: 0
        }
      ],
      typeId: 0,
      disInput: false,
      rulesformfix: {
        sum: [{
          validator: checkNum,
          trigger: 'blur'
        }]
      },
      income: 0, //收益
      fixType: 4,
      fixDepositDialog: {
        show: false,
        upData: true
      },
      formfixDeposit: {
        sum: '',
      },
      statusModel: [{
        statusValue: '3',
        label: '已确定'
      }, {
        statusValue: '1',
        label: '可发展'
      }, {
        statusValue: '2',
        label: '没兴趣'
      }],
    }
  },
  props: {
    fixDepositValue: Object
  },
  watch: {
    'fixDepositDialog.show': 'disposeData'
  },
  methods: {

    disposeData() {

      if (!this.fixDepositDialog.show == false) { //控制数据获取
        //userApi.bankInfoDialog //提现窗口信息
        this.$http.post(userApi.productList).then((objData) => {
          //console.log(objData.data);
          if (objData.data.ERRORCODE == 0) { //成功
            this.result = objData.data.RESULT
            //缺省 昨日获得淘豆
          }
        }).catch((err) => {
          //console.log(err);
        })

      }


    },
    countSum() {

      if (this.fixType != 4) {
        if (this.fixType == 1) {
          if ((Number(this.formfixDeposit.sum) * (Number(this.result[0].appreciation) * 0.01)).toFixed(2) != 'NaN') {
            this.income = (Number(this.formfixDeposit.sum) * (Number(this.result[0].appreciation) * 0.01)).toFixed(2)
          } else {
            this.income = '请输入正确数值!'
          }

        } else if (this.fixType == 2) {
          if ((Number(this.formfixDeposit.sum) * (Number(this.result[1].appreciation) * 0.01)).toFixed(2) != 'NaN') {
            this.income = (Number(this.formfixDeposit.sum) * (Number(this.result[1].appreciation) * 0.01)).toFixed(2)
          } else {
            this.income = '请输入正确数值!'
          }

        } else if (this.fixType == 3) {
          if ((Number(this.formfixDeposit.sum) * (Number(this.result[2].appreciation) * 0.01)).toFixed(2) != 'NaN') {
            this.income = (Number(this.formfixDeposit.sum) * (Number(this.result[2].appreciation) * 0.01)).toFixed(2)
          } else {
            this.income = '请输入正确数值!'
          }
        }
      } else {
        // 请选择

        this.$message({
          showClose: true,
          message: '请选择存豆罐类型!',
          type: 'warning'
        });

      }
    },
    formfixValue(formName) { //提交

      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.fixType < 4 && this.fixType > 0) {
            let typeName = this.fixType == 1 ? '存豆罐A' : this.fixType == 2 ? '存豆罐B' : this.fixType == 3 ? '存豆罐C' : ''
            this.disInput = true

            this.$confirm('存入: ' + this.formfixDeposit.sum + '豆' + ' 套餐: ' + typeName + ' 收益: ' + this.income + '元', '亲爱的用户您好,您将进行一下操作', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',

            }).then(() => {
              this.submitForm() //提交请求
            }).catch(() => {
              this.disInput = false
              return false;
            });


          } else {
            this.$message({
              showClose: true,
              message: '请选择存豆罐类型!',
              type: 'warning'
            });
          }


          //console.log('submit!!');
        } else {
          ////console.log('error submit!!');
          return false;
        }
      });



    },
    fixDepositDialogOver() {
      this.fixDepositDialog.show = false
      this.$emit('fix', this.fixDepositDialog)
    },
    submitForm() {
      //提交请求
      let formData = new FormData()

      formData.set('soya', this.formfixDeposit.sum) //定存金额
      formData.set('depositId', this.fixType) //定存产品id
      //console.log(this.fixDepositDialog.sum);
      //console.log(this.fixType);
      this.$http.post(userApi.memberProductSave, formData).then((objData) => {


        if (objData.data.ERRORCODE == 0) {
          this.disInput = false
          this.fixDepositDialog.show = false
          this.fixDepositDialog.upData = !this.fixDepositDialog.upData
          this.$emit('fix', this.fixDepositDialog)
          this.scuess(objData.data.RESULT)
        } else {
          this.errorScuess(objData.data.RESULT)
        }

      }).catch((err) => {
        this.errorScuess()
      })
    },
    scuess(result) {
      this.income = 0
      this.formfixDeposit.sum = ''
      this.$notify.success({
        title: "操作",
        message: '转入成功!',
        offset: 150
      });
    },
    errorScuess(reqs) {
      this.income = 0
      this.disInput = false
      this.fixDepositDialog.show = false
      this.fixDepositDialog.upData = !this.fixDepositDialog.upData
      this.$emit('fix', this.fixDepositDialog)
      this.formfixDeposit.sum = ''
      this.$notify.error({
        title: '操作',
        message: reqs + ' 转入失败!',
        offset: 150
      });
    },
    monitorValue() {

    },
    card(index) {
      let dom = document.getElementsByClassName('pricingTable')[index - 1]
      let dh = document.getElementsByClassName('img-dh')[index - 1]
      if (index == 1) {
        dh.style.display = 'inline'
        this.fixType = 1
        dom.style.border = '2px solid #40c952';
        let one = document.getElementsByClassName('pricingTable')[1]
        let onedh = document.getElementsByClassName('img-dh')[1]
        onedh.style.display = 'none'
        one.style.border = 'none';
        let two = document.getElementsByClassName('pricingTable')[2]
        let twodh = document.getElementsByClassName('img-dh')[2]
        twodh.style.display = 'none'
        two.style.border = 'none';
        this.countSum()
      } else if (index == 2) {
        dh.style.display = 'inline'
        this.fixType = 2
        dom.style.border = '2px solid #ffa442';
        let one = document.getElementsByClassName('pricingTable')[0]
        one.style.border = 'none';
        let onedh = document.getElementsByClassName('img-dh')[0]
        onedh.style.display = 'none'
        let twodh = document.getElementsByClassName('img-dh')[2]
        twodh.style.display = 'none'
        let two = document.getElementsByClassName('pricingTable')[2]
        two.style.border = 'none';
        this.countSum()
      } else if (index == 3) {
        dh.style.display = 'inline'
        this.fixType = 3
        dom.style.border = '2px solid #ff4b4b';
        let one = document.getElementsByClassName('pricingTable')[0]
        one.style.border = 'none';
        let two = document.getElementsByClassName('pricingTable')[1]
        two.style.border = 'none';
        let onedh = document.getElementsByClassName('img-dh')[0]
        onedh.style.display = 'none'
        let twodh = document.getElementsByClassName('img-dh')[1]
        twodh.style.display = 'none'
        this.countSum()
      }



    }
  }
}
</script>

<style lang="css">


.pricingTable {
  width: 90%;
            text-align: center;
            background: #fff;
            margin: 0 auto;
            box-shadow: 0 0 10px #ababab;
            padding-bottom: 40px;
            border-radius: 10px;
            color: #cad0de;
            transform: scale(1);
            transition: all 0.5s ease 0s;
        }

        .pricingTable:hover {
            transform: scale(1.05);
            z-index: 1;
        }

        .pricingTable .pricingTable-header {
            padding: 40px 0;
            background: #f5f6f9;
            border-radius: 10px 10px 50% 50%;
            transition: all 0.5s ease 0s;
        }

        .pricingTable:hover .pricingTable-header {
            background: #ff9624;
        }

        .pricingTable .pricingTable-header i {
            font-size: 50px;
            color: #858c9a;
            margin-bottom: 10px;
            transition: all 0.5s ease 0s;
        }

        .pricingTable .price-value {
            font-size: 35px;
            color: #ff9624;
            transition: all 0.5s ease 0s;
        }

        .pricingTable .month {
            display: block;
            font-size: 14px;
            color: #cad0de;
        }

        .pricingTable:hover .pricingTable-header i,
        .pricingTable:hover .price-value,
        .pricingTable:hover .month {
            color: #fff;
        }

        .pricingTable .heading {
            font-size: 24px;
            color: #ff9624;
            margin-bottom: 20px;
            text-transform: uppercase;
        }

        .pricingTable .pricing-content ul {
            list-style: none;
            padding: 0;
            margin-bottom: 30px;
        }

        .pricingTable .pricing-content ul li {
            line-height: 30px;
            color: #a7a8aa;
        }

        .pricingTable .pricingTable-signup a {
            display: inline-block;
            font-size: 15px;
            color: #fff;
            padding: 10px 35px;
            border-radius: 20px;
            background: #ffa442;
            text-transform: uppercase;
            transition: all 0.3s ease 0s;
        }

        .pricingTable .pricingTable-signup a:hover {
            box-shadow: 0 0 10px #ffa442;
        }

        .pricingTable.blue .price-value,
        .pricingTable.blue .heading {
            color: #4b64ff;
        }

        .pricingTable.blue:hover .pricingTable-header,
        .pricingTable.blue .pricingTable-signup a {
            background: #4b64ff;
        }

        .pricingTable.blue .pricingTable-signup a:hover {
            box-shadow: 0 0 10px #4b64ff;
        }

        .pricingTable.red .price-value,
        .pricingTable.red .heading {
            color: #ff4b4b;
        }

        .pricingTable.red:hover .pricingTable-header,
        .pricingTable.red .pricingTable-signup a {
            background: #ff4b4b;

        }

        .pricingTable.red .pricingTable-signup a:hover {
            box-shadow: 0 0 10px #ff4b4b;

        }

        .pricingTable.green .price-value,
        .pricingTable.green .heading {
            color: #40c952;
        }

        .pricingTable.green:hover .pricingTable-header,
        .pricingTable.green .pricingTable-signup a {
            background: #40c952;

        }
        .pricingTable.green:hover .pricingTable-header,
        .pricingTable.green .pricingTable-signup a {
            background: #40c952;

        }

        .pricingTable.green .pricingTable-signup a:hover {
            box-shadow: 0 0 10px #40c952;

        }

        .pricingTable.blue:hover .price-value,
        .pricingTable.red:hover .price-value,
        .pricingTable.green:hover .price-value {
            color: #fff;
        }

        @media screen and (max-width: 990px) {
            .pricingTable {
                margin: 0 0 20px 0;
            }
        }
        .img-dh{
          display: none;
        }
        .tdsumleab{
          position: relative;
          margin-left: -70px;
        }
</style>
