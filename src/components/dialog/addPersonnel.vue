<template lang="html">
  <!-- 对话框 添加人员 -->
  <div class="addPersonnel">
    <el-dialog title="添加" v-model="addPersonnelDialog = addPersonnelValue" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
  <div class="cir" @click="addValue"><i class="el-icon-close" ></i></div>
          <el-form label-width="80px" :model="formAddPersonnel">

            <div class="dialog-list-box">
              <div class="box-left">
                <el-form-item label="姓名:">
                <el-input v-model="formAddPersonnel.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="身份证号:">
                <el-input v-model="formAddPersonnel.id" placeholder="请输入身份证号"></el-input>
                </el-form-item>
                <el-form-item label="出生日期:">
                <el-input v-model="formAddPersonnel.id" placeholder="请输入身份证号"></el-input>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="电话号码:">
                <el-input v-model="formAddPersonnel.phoneNumber" placeholder="请输入电话号码"></el-input>
                </el-form-item>
                <el-form-item label="推荐类型:">
                <el-input v-model="formAddPersonnel.recommendedType" placeholder="请输入推荐类型"></el-input>
                </el-form-item>
                <el-form-item label="职业类型:">
                <el-input v-model="formAddPersonnel.id" placeholder="请输入身份证号"></el-input>
                </el-form-item>
                </div>
                <el-form-item label="家庭住址:">
                <el-input v-model="formAddPersonnel.id" placeholder="请输入家庭住址"></el-input>
                </el-form-item>
                <el-form-item label="详细家庭住址:">
                <el-input type="textarea" v-model="formAddPersonnel.id" placeholder="请输入详细家庭住址"></el-input>
                </el-form-item>
                <el-form-item label="状态:">
                <el-input type="textarea" v-model="formAddPersonnel.id" placeholder="请输入详细家庭住址"></el-input>
                </el-form-item>
            </div>

        </el-form>



  <span slot="footer" class="dialog-footer">

    <el-button type="primary" @click="addValue">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formAddPersonnel: {
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
      addPersonnelDialog: false
    }
  },
  props: {
    addPersonnelValue: Boolean
  },
  methods: {
    addValue() {
      this.addPersonnelDialog = false
      this.$emit('add', this.addPersonnelDialog);
    }
  }
}
</script>

<style lang="css">
</style>
