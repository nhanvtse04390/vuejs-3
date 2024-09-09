<template>
  <div>
    <!-- Element Plus Table -->
    <el-table
        :data="rowData"
        style="width: 100%; overflow-x: auto;"
        @cell-click="handleCellClick"
    >
      <el-table-column
          prop="id"
          label="ID"
          width="80"
      />
      <el-table-column
          prop="rowName"
          label="Row Name"
          width="150"
          editable
      />
      <el-table-column
          prop="storagePosition"
          label="Storage Position"
          width="150"
          editable
      />
      <el-table-column
          prop="rowNumber"
          label="Row Number"
          width="120"
          editable
      />
      <el-table-column
          prop="sequenceNumber"
          label="Sequence Number"
          width="120"
          editable
      />
      <el-table-column
          prop="level"
          label="Level"
          width="100"
          editable
      />
      <el-table-column
          prop="inUse"
          label="In Use"
          width="100"
          editable
      />
      <el-table-column
          prop="notes"
          label="Notes"
          width="200"
          editable
      />
      <el-table-column
          prop="code"
          label="Code"
          width="120"
          editable
      />
      <el-table-column
          prop="topValue"
          label="Top Value"
          width="120"
          editable
      />
      <el-table-column
          prop="lowValue"
          label="Low Value"
          width="120"
          editable
      />
      <el-table-column
          prop="extraInfo"
          label="Extra Info"
          width="200"
          editable
      />
      <el-table-column
          prop="store"
          label="Store"
          width="150"
          editable
      />
      <el-table-column
          prop="lockStatus"
          label="Lock Status"
          width="150"
          editable
      />
      <el-table-column
          prop="createdName"
          label="Created Name"
          width="150"
      />
      <el-table-column
          prop="createdAt"
          label="Created At"
          width="180"
      />
      <el-table-column
          label="Edit"
          width="100"
      >
        <template v-slot="scope">
          <el-button @click="handleEditClick(scope.row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- Element Plus Dialog -->
    <el-dialog
        title="Confirm Edit"
        :visible.sync="isDialogVisible"
        width="30%"
        @close="handleDialogClose"
    >
      <p>Are you sure you want to save the changes?</p>
      <span class="dialog-footer">
        <el-button @click="handleDialogClose">Cancel</el-button>
        <el-button type="primary" @click="handleConfirmEdit">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { getWarehouseLayout } from '@/services/warehouseLayoutService.js';
import 'element-plus/dist/index.css';

// Row Data
const rowData = ref([]);

// Dialog visibility state
const isDialogVisible = ref(false);
const editedRowData = ref(null);

// Fetch data from API
const fetchData = async () => {
  try {
    const response = await getWarehouseLayout();
    rowData.value = response;
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
  editedRowData.value = { ...row };
  isDialogVisible.value = true;
};

// Handle dialog close
const handleDialogClose = () => {
  isDialogVisible.value = false;
  editedRowData.value = null;
};

// Handle confirm edit
const handleConfirmEdit = async () => {
  try {
    // Call your API to save changes here
    // Example: await saveEditedRowData(editedRowData.value);
    isDialogVisible.value = false;
  } catch (error) {
    console.error('Save edit error:', error);
  }
};
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>
