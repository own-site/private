<template>
  <div class="mainpage">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="模块">
        <el-select v-model="formInline.module" placeholder="请选择模块">
          <el-option v-for="item in moduleOptions" :label="item.module" :value="item.module" :key="item.id">
             {{ item.module }}
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="formInline.type" placeholder="请选择类型">
          <el-option v-for="item in typeOptions" :label="item.type" :value="item.type" :key="item.id">
             {{ item.type }}
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="key">
        <el-input v-model="formInline.key" placeholder="key"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="processFile">
      <el-row>
        <el-upload
        class="upload-demo inline-block"
        action="#"
        :multiple="false"
        :show-file-list="false"
        :file-list="fileList"
        style="width:5%"
        >
        <el-button size="small" type="primary">上传</el-button>
        </el-upload>
        <el-button type="success" size="small" @click="exportData()">导出</el-button>
      </el-row>
      </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection">
      </el-table-column>
      <el-table-column prop="module" label="模块" width="180">
      </el-table-column>
      <el-table-column prop="type" label="类型" width="180">
      </el-table-column>
      <el-table-column prop="key" label="key" width="200"> </el-table-column>
      <el-table-column prop="chaName" label="中文名称" width="180"> </el-table-column>
      <el-table-column prop="enName" label="英文" width="180"> </el-table-column>
      <el-table-column prop="page" label="路径" width="180"> </el-table-column>
      <el-table-column prop="operatio" label="操作" width="218">
        <template slot-scope="scope">
          <el-button type="text" @click="handleDetialsClick(scope.row)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="编辑"
      position="right"
      :visible.sync="dialogFormVisible"
      append-to-body
    >
      <el-form :model="form">
        <el-form-item label="模块" :label-width="formLabelWidth">
          <el-input v-model="form.module" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" :label-width="formLabelWidth">
          <el-input v-model="form.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="key" :label-width="formLabelWidth">
          <el-input v-model="form.key" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文名称" :label-width="formLabelWidth">
          <el-input v-model="form.chaName" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-left: 300px">
        <el-button type="primary" @click="comfirm()">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        module: "",
        type: "",
        key: "",
      },
      tableData: [
        {
          module: "首页",
          type: "",
          key: "sys_menu_dashboard",
          chaName: "首页",
          enName: "",
          page:"",
          operatio: "",
        },
        {
         module: "系统管理",
          type: "",
          key: "sys_menu_sysManagement",
          chaName: "系统管理",
          enName: "",
          page:"",
          operatio: "",
        },
      ],

      form: {
        userName: "",
        email: "",
        phone: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      fileList: [],
     typeOptions: [{
      id:"1",
      type: "2222",
    },{
      id:"2",
      type: "11122",
    }],
    moduleOptions:[{
      id:"1",
      module: "首页",
    },{
      id:"2",
      module: "系统管理",
    }]
    };
  },
  methods: {
    comfirm(){
      console.log("comfirm",this.form);
    },
    onSubmit() {
      console.log("submit!",this.formInline);
    },
    reset() {
      console.log("reset!");
    },
    handleDetialsClick(row) {
      this.dialogFormVisible = true;
      
      const obj=JSON.parse(JSON.stringify(row)); 
      this.form = obj; 
      // this.form.module = row.module;
      // this.form.type = row.type;
      // this.form.key = row.key;
      console.log(obj);
      
    },
     //导出列表的数据到excel中
    exportData(row) {
      //请求的url
      // this.$ajax.post(process.env.API+"excelExport",{
      //   //  'data':this.data//请求数据
      // },{
      // //     responseType:'blob'//服务器返回的数据类型
      //   }).then((row)=>{
          //这里用content保存文件流，后端对文件流做了一层封装，所以将content指向res.data即可
          //另外，流的转储属于浅拷贝，所以此处的content转储仅仅是便于理解，并没有实际作用
          const content = row
          const blob = new Blob([content])//构造一个blob对象来处理数据
          const fileName = '国际化翻译.xls'

          //对于<a>标签，只有 Firefox 和 Chrome（内核） 支持 download 属性
          //IE10以上支持blob但是依然不支持download
          if ('download' in document.createElement('a')) { //支持a标签download的浏览器
            const link = document.createElement('a')//创建a标签
            link.download = fileName//a标签添加属性
            link.style.display = 'none'
            link.href = URL.createObjectURL(blob)
            document.body.appendChild(link)
            link.click()//执行下载
            URL.revokeObjectURL(link.href) //释放url
            document.body.removeChild(link)//释放标签
          } else { //其他浏览器
            navigator.msSaveBlob(blob, fileName)
          }
    },
    
  },
};
</script>
<style>
.mainpage {
  width: 90%;
  height: 90%;
  margin: auto;
}
.processFile{
  width: 100%;
  height: 40px;
}
.inline-block{
  display: inline-block;
}
</style>










