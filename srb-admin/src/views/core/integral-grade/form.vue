<template>
  <div class="app-container">
    <!-- 输入表单 -->
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number v-model="integralGrade.borrowAmount" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number v-model="integralGrade.integralStart" :min="0" />
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number v-model="integralGrade.integralEnd" :min="0" />
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBtnDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import integralGradeApi from '@/api/core/integral-grade'
export default {
  data() {
    return {
      integralGrade: {}, // 初始化数据
      saveBtnDisabled: false, // 保存按钮是否禁用，防止表单重复提交
    }
  },
  created() {
    //当路由中id存在时，执行回单表单
    if (this.$route.params.id) {
      this.fetchById(this.$route.params.id)
    }
  },
  methods: {
    saveOrUpdate() {
      //禁用保存按钮
      this.saveBtnDisabled = true
      if (!this.integralGrade.id) {
        //调用新增
        this.saveData()
      } else {
        //调用更新
        this.updateData()
      }
    },
    saveData() {
      integralGradeApi.save(this.integralGrade).then((response) => {
        this.$message.success(response.message)
        this.$router.push('/core/integral-grade/list')
      })
    },
    fetchById(id) {
      integralGradeApi.getById(id).then((response) => {
        this.integralGrade = response.data.record
      })
    },
    // 根据id更新记录
    updateData() {
      // 数据的获取
      integralGradeApi.updateById(this.integralGrade).then((response) => {
        this.$message({
          type: 'success',
          message: response.message,
        })
        this.$router.push('/core/integral-grade/list')
      })
    },
  },
}
</script>

<style scoped></style>
