<template>
  <div>
    <el-button @click="isDialogVisibleRegister = true" type="primary" :icon="Edit" plain class="mb-2">Đăng ký
    </el-button>
    <el-table
        :data="rowData"
        style="width: 100%; overflow-x: auto;"
        @cell-click=""
        border
        v-loading="isPending"
    >

      <el-table-column
          prop="id"
          label="ID"
          min-width="10%"
          sortable
      />
      <el-table-column
          prop="name"
          label="Tên"
          min-width="20%"
          sortable
      />
      <el-table-column
          prop="email"
          label="Mail"
          min-width="20%"
          sortable
      />
      <el-table-column
          prop="phone"
          label="Số điện thoại"
          min-width="20%"
          sortable
      />
      <el-table-column
          prop="createdBy"
          label="Người tạo"
          min-width="20%"
          sortable
      />
      <el-table-column
          prop="createdAtShow"
          label="Ngày tạo"
          min-width="20%"
          sortable
      />
      <el-table-column
          prop="updatedBy"
          label="Người sửa"
          min-width="20%"
          sortable
      />
      <el-table-column
          prop="updatedAt"
          label="Ngày sửa"
          min-width="20%"
          sortable
      />
      <el-table-column
          label="Tùy chỉnh"
          min-width="20%"
      >
        <template v-slot="scope">
          <el-button @click="handleEditClick(scope.row)">Chỉnh sửa</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination
          layout="prev, pager, next"
          :total="1000"
          background
          size="default"
      />
    </div>
  </div>
  <!-- Element Plus Table -->
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
</template>

<script setup>
import {onMounted, ref} from 'vue';
import 'element-plus/dist/index.css';
import {ElButton, ElDialog} from 'element-plus';
import {getUsers} from '@/services/userService.js';
import {Edit} from '@element-plus/icons-vue'
import moment from 'moment';

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
const search = ref('')
// Fetch data from API
const isPending = ref(false); // Tạo biến ref để lưu trạng thái pending

const fetchData = async () => {
  try {
    isPending.value = true; // Bắt đầu loading
    const {data: response} = await getUsers();
    rowData.value = response.map(data => ({
      ...data,
      createdAtShow: data.createdAt ? moment(data.createdAt).format("DD-MM-YYYY HH:mm") : ''
    }));
  } catch (err) {
    console.error('Fetch data error:', err);
  } finally {
    isPending.value = false; // Kết thúc loading dù có lỗi hay không
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
.pagination-block {
  margin-top: 10px;
}
</style>