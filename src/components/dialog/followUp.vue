<template lang="html">
  <div class="followUp">
    <!-- 跟进 -->
    <el-dialog title="跟进会员" v-model="followUpDialog = followValue.show" size="tiny" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="30%">
    <div class="cir" @click="followUpValue"><i class="el-icon-close" ></i></div>
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
                <span>{{ getDataResource.name }}</span>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="联系电话:">
                <span>{{ getDataResource.phoneNumber }}</span>
                </el-form-item>
              </div>
              <el-form-item label="文字描述:">
              <el-input v-model="formFollowUp.text" type="textarea" placeholder="备注信息"></el-input>
              </el-form-item>
              <el-form-item label="状态:">
                <!-- <el-select v-model="getDataResource.state = value" placeholder="value">
                <el-option v-for="item of options" :label="item.label" :value="item.value">
                </el-option>
                </el-select> -->
              </el-form-item>
            </div>
          </el-form>

    <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="followUpValue">提 交</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getDataResource: {
        name: '',
        phoneNumber: '',
        state: ''
      },
      followUpDialog: false,
      formFollowUp: {
        text: ''
      },
      options: [{
        value: '选项1',
        label: '已入会'
      }, {
        value: '选项2',
        label: '可发展'
      }, {
        value: '选项3',
        label: '没兴趣'
      }],
      value: '已入会'
    }
  },
  props: {
    followValue: Object
  },
  methods: {
    followUpValue() {
      this.followUpDialog = false
      this.$emit('follow', this.followUpDialog)
    }
  }
}
</script>

<style lang="css">
</style>
