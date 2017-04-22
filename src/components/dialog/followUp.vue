<template lang="html">
  <div class="followUp">
    <!-- 跟进 -->
    <el-dialog title="跟进会员" v-model="followUpDialog.show  = followValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="followUpValueOver()"><i class="el-icon-close" ></i></div>
          <el-form  label-width="80px" :model="formFollowUp">
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
              <el-form-item label="文字描述:">
              <el-input v-model="followValue.objectData.remark" type="textarea" laceholder="备注信息"></el-input>
              </el-form-item>
              <el-form-item label="状态:">
                <!-- <el-select v-model="getDataResource.state = value" placeholder="value">
                <el-option v-for="item of options" :label="item.label" :value="item.value">
                </el-option>
                </el-select> -->
                <el-select v-model="Value"  placeholder="消费者">
                  <el-option
                    v-for="item in options"
                    :label="item.label"
                    :value="item.Value"
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
      getDataResource: {
        name: '',
        phoneNumber: '',
        state: ''
      },
      followUpDialog: {
        show: false,
        upData: false
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
  props: {
    followValue: Object
  },
  methods: {
    followUpValueOver() {
      //关闭
      this.followUpDialog.show = false
      this.$emit('follow', this.followUpDialog)
    },

    followUpValue() {
      //提交
      let formData = new FormData()
      formData.append('id', this.followValue.objectData.id)
      formData.append('status', this.Value)
      formData.append('remark', this.followValue.objectData.remark)
      this.$http.post(clerkApi.customerFollow, formData).then((objData) => { //跟进接口
        console.log(objData.data);
        if (objData.data.RESULT == 'ok') {


          this.followUpDialog.show = false
          this.followUpDialog.upData = !this.followUpDialog.upData
          this.$emit('follow', this.followUpDialog)
          this.scuess()
        }
      }).catch((err) => {
        console.log('访问错误1');
      })

    },

    scuess() {
      this.$notify.success({
        title: '修改成功!',
        message: '',
        offset: 150
      });
    }
  }
}
</script>

<style lang="css">
</style>
