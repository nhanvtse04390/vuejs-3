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
        autocomplete="off"
    >
      <el-form-item label="Tên tài khoản" prop="name">
        <el-input v-model="ruleForm.name"/>
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email" placeholder="vidu@gmail.com"/>
      </el-form-item>
      <el-form-item label="Mật khẩu" prop="password">
        <el-input v-model="ruleForm.password" type="password"/>
      </el-form-item>
      <el-form-item label="Xác nhận Mật khẩu" prop="confirmPassword">
        <el-input v-model="ruleForm.confirmPassword" type="password" autocomplete="new-password"/>
      </el-form-item>
      <el-form-item label="Số điện thoại" prop="phone">
        <el-input v-model="ruleForm.phone"/>
      </el-form-item>
      <el-form-item label="Địa chỉ" prop="address">
        <el-input v-model="ruleForm.address"/>
      </el-form-item>
      <el-form-item label="Loại tài khoản" prop="role">
        <el-select
            v-model="ruleForm.role"
            placeholder="Chọn loại tài khoản"
        >
          <el-option label="SALE" value="SALE"/>
          <el-option label="Kế toán máy" value="KTM"/>
          <el-option label="Khách hàng" value="KH"/>
        </el-select>
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
import {reactive, ref} from 'vue'
import type {ComponentSize, FormInstance, FormRules} from 'element-plus'
import {createUser} from '@/services/userService.js';
import {toast} from "vue3-toastify";
import message from "@/define/message";

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
const emit = defineEmits(['reload'])
const reloadFromChild = () => {
  emit("reload")
}

const checkPass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error(message.VALIDATE.PASSWORD_RETYPE))
  } else if (value !== ruleForm.password) {
    callback(new Error(message.VALIDATE.PASSWORD_NOT_MATCH))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<RuleForm>>({
  name: [
    {required: true, message: message.VALIDATE.NOT_EMPTY, trigger: 'blur'},
  ],
  email: [
    {required: true, type: "email", message: message.VALIDATE.NOT_EMPTY_EMAIL, trigger: 'blur'}
  ],
  phone: [
    {required: true, message: message.VALIDATE.NOT_EMPTY, trigger: 'blur'},
    {min: 8, max: 13, message: message.VALIDATE.PHONE, trigger: 'blur'},
  ],
  address: [
    {required: true, message: message.VALIDATE.NOT_EMPTY, trigger: 'blur'},
  ],
  password: [
    {required: true, message: message.VALIDATE.NOT_EMPTY, trigger: 'blur'},
  ],
  confirmPassword: [
    {validator: checkPass, message: message.VALIDATE.PASSWORD_NOT_MATCH, trigger: 'blur'},
  ],
  role: [
    {required: true, message: message.VALIDATE.NOT_EMPTY, trigger: 'change'},
  ],
})

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;

  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const storedData = localStorage.getItem('accountInfo');
      const accountInfo = storedData ? JSON.parse(storedData) : null;
      const payload = {...ruleForm, createdBy: accountInfo.name};

      try {
        // Chờ kết quả trả về từ hàm createUser
        const response = await createUser(payload);

        if (response.status === 200) {
          toast.success(message.SUCCESS.CREATE);
          resetForm(formEl)
          reloadFromChild();
        } else {
          toast.error(response.message || message.ERROR.CREATE);
        }
      } catch (error: any) {
        // Xử lý lỗi nếu hàm createUser bị lỗi hoặc trả về lỗi
        toast.error(error.response.data.message || message.ERROR.FETCH);
      }
    } else {
      console.log("Tạo tài khoản thất bại!!!", fields);
    }
  });
};

</script>
<style scoped>
.el-form-item__content {
  display: flex;
  justify-content: end;
}
</style>