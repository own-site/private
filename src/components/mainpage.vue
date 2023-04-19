<template>
  <div class='main-page'>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="用户编码">
    <el-input v-model="formInline.userCode" placeholder="用户编码"></el-input>
  </el-form-item>
  <el-form-item label="用户名称">
    <el-input v-model="formInline.userName" placeholder="用户名称"></el-input>
  </el-form-item>
  <el-form-item label="邮箱">
    <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
  </el-form-item>
  <el-form-item label="电话">
    <el-input v-model="formInline.phone" placeholder="电话"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
   <el-form-item>
    <el-button type="primary" @click="reset">重置</el-button>
  </el-form-item>
  </el-form>
</div>
</template>
<script>
module.exports = {
    data() {
      return {
        formInline: {
          userCode: '',
          userName: '',
          email: '',
          phone: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
