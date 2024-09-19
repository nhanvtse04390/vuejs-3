<template>
  <div>
    <div>
      <el-button @click="isDialogVisibleRegister = true" type="primary" :icon="Edit" plain class="mb-2">Đăng ký
      </el-button>
      <el-button @click="isVisibleSearchForm = !isVisibleSearchForm" type="primary" :icon="Search" plain class="mb-2">
        Tìm kiếm
      </el-button>
    </div>

    <div v-show="isVisibleSearchForm" class="search-form">
      <el-form>
        <el-row :gutter="20">
          <el-col :span="3">
            <el-form-item label="Tên" label-position="top">
              <el-input v-model="searchForm.name"/>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Mail" label-position="top">
              <el-input v-model="searchForm.email"/>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Số điện thoại" label-position="top">
              <el-input v-model="searchForm.phone"/>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Người tạo" label-position="top">
              <el-input v-model="searchForm.createdBy"/>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Ngày tạo" label-position="top">
              <el-date-picker
                  v-model="searchForm.createdAt"
                  type="date"
                  aria-label="Chọn ngày"
                  placeholder="Chọn ngày"
                  style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Người sửa" label-position="top">
              <el-input v-model="searchForm.updatedBy"/>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Ngày sửa" label-position="top">
              <el-date-picker
                  v-model="searchForm.updatedAt"
                  type="date"
                  aria-label="Chọn ngày"
                  placeholder="Chọn ngày"
                  style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="Hành động" label-position="top">
              <el-button type="warning" :icon="Refresh" @click="refreshSearch" plain>Tạo lại</el-button>
              <el-button type="primary" :icon="Search" @click="fetchData" plain>Tìm kiếm</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

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
import {Edit, Search, Refresh} from '@element-plus/icons-vue'
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
const isVisibleSearchForm = ref(false)
// Fetch data from API
const isPending = ref(false); // Tạo biến ref để lưu trạng thái pending
const searchForm = ref({
  name: '',
  email: '',
  phone: '',
  createdBy: '',
  createdAt: '',
  updatedBy: '',
  updatedAt: '',
})

const fetchData = async () => {
  try {
    isPending.value = true; // Bắt đầu loading
    const {data: response} = await getUsers(searchForm.value);
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

const refreshSearch = () => {
  searchForm.value = {
    name: '',
    email: '',
    phone: '',
    createdBy: '',
    createdAt: '',
    updatedBy: '',
    updatedAt: '',
  }
  fetchData()
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

.search-form {
  opacity: 0.75;
  border: 1px solid #d3d6db;
  padding: 20px 10px 10px 10px;
  margin-bottom: 20px;
  border-radius: 6px;
  background-color: #f0f2f5;
}
</style>