<template lang="html">
  <!-- 对话框 添加人员 -->
  <div class="addPersonnel">
    <el-dialog title="添加" v-model="addPersonnelDialog.show = addPersonnelValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
  <div class="cir" @click="addValueOver"><i class="el-icon-close i-top" ></i></div>
          <el-form label-width="80px" :model="formAddPersonnel" :rules="rulesPersonnel" ref="formAddPersonnel">
            <span class="necessaryOne">*</span>
            <span class="necessaryTwo">*</span>
            <div class="dialog-list-box">
              <div class="box-left">

                <el-form-item label="姓名:" prop="name">
                <el-input v-model="formAddPersonnel.name" placeholder="请输入姓名(必填)" :disabled="disInput"></el-input>
                </el-form-item>
                <el-form-item label="身份证号:" >
                <el-input v-model="formAddPersonnel.id" placeholder="请输入身份证号" :disabled="disInput"></el-input>
                </el-form-item>
                <el-form-item label="出生日期:">
                      <el-date-picker
                        v-model="formAddPersonnel.dateValue"
                        :picker-options="pickerOptions"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy-MM-dd"
                        @change="dateOn"
                        :disabled="disInput">
                      </el-date-picker>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="*电话号码:" prop="phoneNumber">
                <el-input v-model="formAddPersonnel.phoneNumber" placeholder="请输入电话号码(必填)" :disabled="disInput"></el-input>
                </el-form-item>
                <el-form-item label="推荐类型:">
                  <el-select v-model="Value"  placeholder="消费者" :disabled="disInput">
                    <el-option
                      v-for="item in options"
                      :label="item.label"
                      :value="item.Value"
                      :key="item.Value"
                  >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="职业类型:" >
                <!-- <el-input v-model="formAddPersonnel.id" placeholder="请输入身份证号"></el-input> -->
                <el-select v-model="value" placeholder="请选择" :disabled="disInput">
                    <el-option
                      v-for="item in profession"
                      :change="disChange"
                      :label="item.label"
                      :value="item.value"
                      :key="item.value"
                      :disabled="disInput">
                    </el-option>
                  </el-select>
                </el-form-item>
                </div>
                <el-form-item label="家庭住址:">
                  <template>
                      <el-cascader
                        size="large"
                        :options="homeOptions"
                        v-model="homeModel"
                        @change="cascaderHome"
                        :change-on-select="true"
                        :disabled="disInput">
                      </el-cascader>
                  </template>
                </el-form-item>
                <span class="textCount" style="color: red ">{{ textCount }}/200</span>
                <el-form-item label="详细住址:(限制200字)">
                <el-input type="textarea" v-model="formAddPersonnel.detailedHomeAddress" placeholder="请输入详细家庭住址(最多可输入200字)" :disabled="disInput" @change="homeAddress(formAddPersonnel.detailedHomeAddress.length) "></el-input>
                </el-form-item>
                <el-form-item label="状态:">
                  <el-select v-model="statusValue"  placeholder="消费者" :disabled="disInput">
                    <el-option
                      v-for="item in statusModel"
                      :label="item.label"
                      :value="item.statusValue"
                      :key="item.statusValue"
                  >
                    </el-option>
                  </el-select>
                </el-form-item>
            </div>

        </el-form>



  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="addValue('formAddPersonnel')" :disabled="disInput" :loading="disInput">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {
  regionData,
  CodeToText
} from '../funWarehouse/regionDataCity.js'
import {
  clerkApi
} from '../api/apiCode.js'
export default {

  data() {
    let checkMobile = (rule, value, callback) => {
      if (!/^1[34578]\d{9}$/.test(value)) {
        callback(new Error('请输入正确的手机号码!'));
      }
      callback();
    }
    let checkNum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名!'));
      }
      callback();
    }
    return {
      textCount: 0, //字数
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now() - 8.64e7;
        }
      },
      disInput: false,
      rulesPersonnel: {
        name: [{
          validator: checkNum,
          trigger: 'blur'
        }],
        phoneNumber: [{
          validator: checkMobile,
          trigger: 'blur'
        }]
      },
      profession: [{

      }], //行业模板
      value: '', //行业
      result: {},
      homeOptions: regionData,
      homeModel: [],
      works: [],
      o: '',
      options: [{
        Value: '1',
        label: '消费者'
      }, {
        Value: '2',
        label: '商家'
      }],
      Value: '1',


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
      statusValue: '1',

      province: '', //省份
      city: '', //市份
      area: '', //区域

      formAddPersonnel: {
        dateValue: '',
        name: '', //姓名
        phoneNumber: '', //电话号码
        id: '', //身份证
        recommendedType: '', //推荐类型
        birthDate: '', //出生日期
        occupationType: '', //职业类型
        homeAddress: '', //家庭住址
        detailedHomeAddress: '', //详细家庭住址
        state: '' //状态
      },
      addPersonnelDialog: {
        show: false,

      }
    }
  },
  mounted() {
    this.initData()
  },
  props: {
    addPersonnelValue: Object
  },
  methods: {
    homeAddress(count) {
      this.textCount = count
    },
    disChange() {
      //console.log(123456);
    },
    cascaderHome(value) {

      for (let i = 0; i < value.length; i++) {
        CodeToText[value[i]];
        if (value.length == 1) {
          this.province = value[0]
        }
        if (value.length == 2) {
          this.city = value[1]
        }
        if (value.length == 3) {
          this.area = value[2]
        }

      }

    },
    dateOn(date) {

      this.formAddPersonnel.birthDate = date //出生日期
    },
    addValueOver() {
      this.addPersonnelDialog.show = false
      this.$emit('add', this.addPersonnelDialog);
    },
    addValue(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {

          if (this.textCount <= 200) {
            this.disInput = true
            this.submitForm() //提交 请求
          } else {
            this.$message.error('详细地址最多只能写200字哦！(⊙o⊙)');
          }

        } else {
          //console.log('error submit!!');
          return false;
        }
      });

      // this.addPersonnelDialog.show = false
      // this.$emit('add', this.addPersonnelDialog);
    },
    //选择行业
    initData() {

      this.$http.post(clerkApi.selectProfession).then((objData) => {

        this.result = objData.data.RESULT //Object 所有数据
        //时间处理
        for (var i = 0; i < objData.data.RESULT.length; i++) {
          this.result[i].value = objData.data.RESULT[i].value
          this.result[i].label = objData.data.RESULT[i].label
        }

        this.profession = this.result

      }).catch((err) => {
        //console.log(err);
      })
    },

    //发送的数据
    submitForm() {

      let formData = new FormData()
      formData.append('customerName', this.formAddPersonnel.name) //姓名
      formData.append('mobile', this.formAddPersonnel.phoneNumber) //电话
      formData.append('recommendType', this.Value) //推荐类型
      formData.append('status', this.statusValue) //状态（1-可发展 2-没兴趣 3-已确定）
      formData.append('identityNumber', this.formAddPersonnel.id == undefined ? '' : this.formAddPersonnel.id) //身份证号

      formData.append('job', this.value == undefined ? '' : this.value) //职业
      formData.append('birthday', this.formAddPersonnel.birthDate == undefined ? '' : this.formAddPersonnel.birthDate) //出生日期

      formData.append('province', this.province == undefined ? '' : this.province) //所在省
      formData.append('city', this.city == undefined ? '' : this.city) //所在城市
      formData.append('area', this.area == undefined ? '' : this.area) //所在地区
      formData.append('address', this.formAddPersonnel.detailedHomeAddress == undefined ? '' : this.formAddPersonnel.detailedHomeAddress) //详细地址
      // formData.append('remark', this.formAddPersonnel.birthDate == undefined ? '' : this.formAddPersonnel.birthDate) //文字描述



      this.$http.post(clerkApi.customerAdd, formData).then((objData) => {


        if (objData.data.ERRORCODE == 0) {
          this.disInput = false
          this.addPersonnelDialog.show = false
          this.addPersonnelDialog.upData = !this.addPersonnelDialog.upData
          this.$emit('add', this.addPersonnelDialog)
          this.scuess(objData.data.RESULT)
          //清空

          this.formAddPersonnel.name = ''
          this.formAddPersonnel.phoneNumber = ''
          this.formAddPersonnel.id = ''
          this.formAddPersonnel.birthDate = ''
          this.formAddPersonnel.detailedHomeAddress = ''

        } else {
          this.errorScuess(objData.data.RESULT)
        }

      }).catch((err) => {
        this.errorScuess('服务器无响应！')
      })


    },
    scuess(result) {
      this.$notify.success({
        title: '操作',
        message: '添加成功!',
        offset: 150
      });
    },
    errorScuess(result) {
      this.disInput = false
      this.$notify.error({
        title: '操作',
        message: result + '添加失败!',
        offset: 150
      });
    }

  }
}
</script>

<style lang="css">
.addPersonnel .el-notification{
  right: 800px !important;
}
.addPersonnel .textCount{
  position: relative;
  left: 94%;

font-size: 12px;
  color: rgb(28, 126, 255);
}

@media screen and (min-width: 1199px){
  .addPersonnel .necessaryOne{
    position: relative;
    top: 37px;
    left: -41%;
    color: red;
  }
}
@media screen and (max-width: 1300px){
  .addPersonnel .necessaryOne{
    position: relative;
    top: 37px;
    left: -39%;
    color: red;
  }
}
@media screen and (max-width: 1199px){
  .addPersonnel .necessaryOne{
    position: relative;
    top: 37px;
    left: -37%;
    color: red;
  }
}
.addPersonnel .necessaryTwo{
  position: relative;
  top: 37px;

  color: red;
}
</style>
