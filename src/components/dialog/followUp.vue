<template lang="html">
  <div class="followUp">
    <!-- 跟进 -->
    <el-dialog title="跟进会员" v-model="followUpDialog.show  = followValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="followUpValueOver()"><i class="el-icon-close i-top" ></i></div>
          <el-form  label-width="80px" :model="formFollowUp" >
            <!-- <el-form-item label="会员账号:">
            <el-input v-model="formFollowUp.id" placeholder="请输入会员账号"></el-input>
            </el-form-item>
            <el-form-item label="会员姓名:">
            <el-input v-model="formFollowUp.name" placeholder="请输入会员名称"></el-input>
            </el-form-item>
            <el-form-item label="赠送姓名:">
            <el-input v-model="formFollowUp.giveName" placeholder="请输入姓名"></el-input>
            </el-form-item> -->
            <div class="dialog-list-box">

              <div class="box-left">
                <el-form-item label="姓名:">
                <span>{{ followValue.objectData.customerName }}</span>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="联系电话:">
                <span>{{ followValue.objectData.mobile }}</span>
                </el-form-item>
              </div>
              <el-form-item label="文字描述(限制90):" >
                <span class="textCount" >{{ textCount }}/90</span>
              <el-input v-model="formFollowUp.text = followValue.objectData.remark" type="textarea" laceholder="备注信息" :disabled="disInput" @change="followUpText(formFollowUp.text)"> </el-input>
              </el-form-item>
              <el-form-item label="状态:">
                <!-- <el-select v-model="getDataResource.state = value" placeholder="value">
                <el-option v-for="item of options" :label="item.label" :value="item.value">
                </el-option>
                </el-select> -->
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
            </div>
          </el-form>

    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="followUpValue()">提 交</el-button>
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
    return {
      textCount: 0,
      disInput: false,
      getDataResource: {
        name: '',
        phoneNumber: '',
        state: ''
      },
      followUpDialog: {
        show: false,
        upData: true
      },
      formFollowUp: {
        text: ''
      },
      options: [{
        Value: '1',
        label: '可发展'
      }, {
        Value: '2',
        label: '没兴趣'
      }, {
        Value: '3',
        label: '已确定'
      }],
      Value: '1',
    }
  },
  watch: {
    'followValue.show': 'setValue'
  },
  props: {
    followValue: Object
  },
  methods: {
    followUpText(count) {
      this.textCount = count.length
    },

    setValue() {
      // console.log(followValue.stValue);
      this.Value = this.followValue.stValue

    },
    followUpValueOver() {
      //关闭
      this.followUpDialog.show = false
      this.$emit('follow', this.followUpDialog)
    },
    //提交
    followUpValue() {



      if (this.formFollowUp.text.length == null || this.formFollowUp.text.length == 0) {
        this.$message.error('需要填写文字描述哦！(⊙o⊙)');
      } else if (this.formFollowUp.text.length > 90) {
        this.$message.error('文字描述最多只能写90字哦！(⊙o⊙)');
      } else if (this.formFollowUp.text.length <= 90 && this.formFollowUp.text.length > 0) {
        this.disInput = true
        this.submitForm()
      } {

      }
    },
    submitForm() {


      let formData = new FormData()
      formData.append('id', this.followValue.objectData.id)
      formData.append('status', this.Value == '已确定' ? 3 : this.Value == '没兴趣' ? 2 : this.Value == '可发展' ? 1 : this.Value != '已确定' && this.Value != '没兴趣' && this.Value != '可发展' ? this.Value : this.Value)
      formData.append('remark', this.followValue.objectData.remark == 'null' ? '' : this.followValue.objectData.remark)
      this.$http.post(clerkApi.customerFollow, formData).then((objData) => { //跟进接口

        if (objData.data.RESULT == 'ok') {

          this.disInput = false
          this.followUpDialog.show = false
          this.followUpDialog.upData = !this.followUpDialog.upData
          this.$emit('follow', this.followUpDialog)
          this.scuess()
        }
      }).catch((err) => {
        this.errorScuess('服务器无响应！')
      })

    },

    scuess(result) {
      this.$notify.success({
        title: '操作',
        message: '修改成功!',
        offset: 150
      });
    },
    errorScuess(result) {
      this.disInput = false
      this.$notify.error({
        title: '操作',
        message: result + '操作失败!',
        offset: 150
      });
    }
  }
}
</script>

<style lang="css">
.followUp .el-notification{
 right: 800px !important;
}
.followUp .textCount{
  position: relative;
  left: 92%;

font-size: 12px;
  color: rgb(28, 126, 255);
}
</style>
