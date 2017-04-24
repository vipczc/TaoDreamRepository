<template lang="html">
  <!-- 对话框 添加人员 -->
  <div class="addPersonnel">
    <el-dialog title="添加" v-model="addPersonnelDialog.show = addPersonnelValue.show" size="small" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false" top="20%">
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
                      <el-date-picker
                        v-model="formAddPersonnel.dateValue"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy-MM-dd"
                        @change="dateOn">
                      </el-date-picker>
                </el-form-item>
              </div>
              <div class="box-right">
                <el-form-item label="电话号码:">
                <el-input v-model="formAddPersonnel.phoneNumber" placeholder="请输入电话号码"></el-input>
                </el-form-item>
                <el-form-item label="推荐类型:">
                  <el-select v-model="Value"  placeholder="消费者">
                    <el-option
                      v-for="item in options"
                      :label="item.label"
                      :value="item.Value"
                      :key="item.Value"
                  >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="职业类型:">
                <!-- <el-input v-model="formAddPersonnel.id" placeholder="请输入身份证号"></el-input> -->
                <el-cascader
                  :options="works"
                  @change="selWork">
                </el-cascader>
                </el-form-item>
                </div>
                <el-form-item label="家庭住址:">
                  <template>
                      <el-cascader
                        size="large"
                        :options="homeOptions"
                        v-model="homeModel"
                        @change="cascaderHome">
                      </el-cascader>
                  </template>
                </el-form-item>
                <el-form-item label="详细家庭住址:">
                <el-input type="textarea" v-model="formAddPersonnel.id" placeholder="请输入详细家庭住址"></el-input>
                </el-form-item>
                <el-form-item label="状态:">
                  <el-select v-model="statusValue"  placeholder="消费者">
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

    <el-button type="primary" @click="addValue">提 交</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {
  regionData
} from '../funWarehouse/regionDataCity.js'
export default {
  mounted() {},
  data() {
    return {
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
        statusValue: '1',
        label: '已确定'
      }, {
        statusValue: '2',
        label: '可发展'
      }, {
        statusValue: '3',
        label: '没兴趣'
      }],
      statusValue: '1',

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
  props: {
    addPersonnelValue: Object
  },
  methods: {
    cascaderHome() {

    },
    dateOn(date) {

      this.formAddPersonnel.birthDate = date //出生日期
    },
    addValue() {
      this.addPersonnelDialog.show = false
      this.$emit('add', this.addPersonnelDialog);
    },
    //选择行业
    selWork(val) {
      console.log(val[0]);
      this.o = val[0];

    }
  }
}
</script>

<style lang="css">
</style>
