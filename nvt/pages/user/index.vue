<template>
  <div>
    <el-button @click="isDialogVisibleRegister = true" type="primary" :icon="Edit" plain>Đăng ký</el-button>
    <!-- Element Plus Table -->
    <el-table
        :data="rowData"
        style="width: 100%; overflow-x: auto;"
        @cell-click=""
    >

      <!-- Existing table columns -->
      <el-table-column
          prop="id"
          label="ID"
          width="80"
      />
      <!-- Other columns... -->
      <el-table-column
          label="Tùy chỉnh"
          width="200"
      >
        <template v-slot="scope">
          <el-button @click="handleEditClick(scope.row)">Chi tiết</el-button>
          <el-button @click="handleEditClick(scope.row)">Chỉnh sửa</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="isDialogVisibleInfo" width="800">
      <account-info></account-info>
    </el-dialog>

    <el-dialog v-model="isDialogVisibleRegister" center title="Tạo tài khoản mới" width="800">
      <register-account
          @reload="handleReload"
      />
      <template #header>
        <div class="uppercase flex justify-center font-bold">
          Tạo tài khoản mới
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import 'element-plus/dist/index.css';
import {ElButton, ElDialog} from 'element-plus';
import {getUsers} from '@/services/userService.js';
import { Edit } from '@element-plus/icons-vue'

definePageMeta({
  middleware: 'auth',
  name: 'UserIndex'
});

// Row Data
const rowData = ref([]);

// Dialog visibility state
const isDialogVisibleInfo = ref(false);
const isDialogVisibleRegister = ref(false)
const editedRowData = ref(null);

// Fetch data from API
const fetchData = async () => {
  try {
    const response = await getUsers();
    rowData.value = response.data;
  } catch (error) {
    console.error('Fetch data error:', error);
  }
};

// On component mounted
onMounted(() => {
  fetchData();
});

// Handle edit button click
const handleEditClick = (row) => {
  editedRowData.value = {...row};
  isDialogVisibleInfo.value = true;
};

const handleReload = () => {
  isDialogVisibleRegister.value = false
  fetchData()
}

</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
