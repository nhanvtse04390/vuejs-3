<template>
  <div class="p-3">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
        label-position="left"
    >
      <el-form-item label="Tên tài khoản" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email" placeholder="vidu@gmail.com"/>
      </el-form-item>
      <el-form-item label="Số điện thoại" prop="phone">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="Địa chỉ" prop="address">
        <el-input v-model="ruleForm.address" />
      </el-form-item>
      <el-form-item label="Mật khẩu" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="Xác nhận Mật khẩu" prop="confirmPassword">
        <el-input v-model="ruleForm.confirmPassword" />
      </el-form-item>
      <el-form-item label="Loại tài khoản" prop="role">
        <el-input v-model="ruleForm.role" />
      </el-form-item>
      <div class="flex justify-end">
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Đăng ký</el-button>
          <el-button @click="resetForm(ruleFormRef)">Tạo lại</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>

</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
definePageMeta({
  middleware: 'auth',
  name: 'Register',
});

interface RuleForm {
  name: string
  email: string
  phone: string
  address: string
  password: string
  confirmPassword: string
  role: string
}

const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
  confirmPassword: '',
  role: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Vui lòng không bỏ trống !!!', trigger: 'blur' },
  ],
  email: [
    { required: true, type: "email", message:'Vui lòng nhập email !!!', trigger: 'blur'}
  ],
  phone: [
    { required: true, message:'Vui lòng không bỏ trống !!!', trigger: 'blur'},
    { min: 8, max: 13, message: 'Số điện thoại từ 8 đến 13 số !!!', trigger: 'blur' },
  ],
  address: [
    { required: true, message:'Vui lòng không bỏ trống !!!', trigger: 'blur'},
    { min: 8, max: 13, message: 'Số điện thoại từ 8 đến 13 số !!!', trigger: 'blur' },
  ],
  password: [
    { required: true, message:'Vui lòng không bỏ trống !!!', trigger: 'blur'},
  ],
  confirmPassword: [
    { required: true, message:'Vui lòng không bỏ trống !!!', trigger: 'blur'},
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
<style scoped>
.el-form-item__content {
  display: flex;
  justify-content: end;
}
</style>