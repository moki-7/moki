<script setup>
import {options,queryQuestion,deleteQuestion} from '@/axios/thinkRequest.js'
import {showNo}  from '@/views/practice/think/ThinkData.js';
//绑定在表单中的值，用来保存用户在下拉选择框中选择的值
const form=ref({
    level:'',
    module:'',
    chapter:'',
})

//存储的是从后台接口读取数据
const levels=ref({});
const modules=ref({});
const chapters=ref({});

//展示在表格中数据
const tableData = ref([]);

//从后台读取数据
onMounted(()=>{
    //使用axios或者instance从后台读取数据
    options().then((res)=>{
        if(res.code===200){
            levels.value=[...res.data.options];
        }
    }).catch((err)=>[
        console.log(err)
    ])
    
})
//向后端发送请求并处理返回的数据
const requestQueryQuestions=(value)=>{
    queryQuestion(value).then(res=>{
        tableData.value=res.data.tableData;

    }).catch(err=>{
        console.log(err)
    })
}

//'我的提交'按钮
const handleMyWorks=()=>{
    //动态组件
    //修改ThinkData.js中的响应变量showNo=2
    showNo.value=2;

}

//'等级'下拉栏
const handleLevelChange=(value)=>{
    form.value.module='';
    form.value.chapter='';
    let len=levels.value.length;
    for (let i=0;i<len;i++){
        if(levels.value[i].value===value){
            if(levels.value[i].children!==undefined){
                modules.value=levels.value[i].children;
            }else{
                //根据value值，通过axios请求查询题库
                requestQueryQuestions(value);
            }
            break;
        }
    }
}
//'模块'下拉栏
const handleModulesChange=(value)=>{
    form.value.chapter='';
    let len=modules.value.length;
    for (let i=0;i<len;i++){
        if(modules.value[i].value===value){
            if(modules.value[i].children!==undefined){
                chapters.value=modules.value[i].children;
            }else{
                //根据value值，通过axios请求查询题库
                requestQueryQuestions(value);
            }

            break;
        }
    }
}
//'章节'下拉栏
const handleChapterChange=(value)=>{
    requestQueryQuestions(value);
}
//'查询'按钮
const handleQuery=()=>{
    
    if(form.value.chapter!==''){
        requestQueryQuestions(form.value.chapter);
    }else if(form.value.module!==''){
        requestQueryQuestions(form.value.module);
    }else if(form.value.level!==''){
        requestQueryQuestions(form.value.level);
    }

}
//'编辑'按钮
const handleEdit=(row,column,index,store)=>{

}
//'删除'按钮
const handleDelete=(row,index)=>{
    
    deleteQuestion(row.id)
    .then(res=>{
        if(res.code===200){
            tableData.value.splice(index,1);
        }
    }).catch(err=>{
        console.log(err);
    })
}

</script>



<template>
    

    <div class="page-container">

        <div class="title-container">
            <span></span>计算思维训练<span></span>
        </div>

        <div class="toolbar-container">
            <el-form :inline="true" >
                <el-form-item >
                    <el-button @click="handleMyWorks">我的提交</el-button>
                </el-form-item>

                <el-form-item label="等级">
                    <el-select v-model='form.level' @change="handleLevelChange" style="width:200px" placeholder="">
                        <el-option v-for='op in levels'  :key="op.value" :label="op.label" :value="op.value"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="模块">
                    <el-select v-model='form.module' @change="handleModulesChange" style="width:200px" placeholder="">
                        <el-option v-for='op in modules' :key="op.value" :label="op.label" :value="op.value"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="章节"> 
                    <el-select v-model='form.chapter' @change="handleChapterChange" style="width:200px" placeholder="">
                        <el-option v-for='op in chapters' :key="op.value" :label="op.label" :value="op.value"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item> 
                    <el-button @click="handleQuery">查询</el-button>
                </el-form-item>

            </el-form>
                
        </div>


        <div class="content-container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column fixed prop="LMC" label="分区" width="100" />
                <el-table-column prop="id" label="题号" width="100" />
                <el-table-column prop="title" label="题目" width="180" />
                <el-table-column prop="pass" label="通过数" width="120" />
                <el-table-column prop="sumbit" label="提交数" width="120" />
                <el-table-column fixed="right" label="Operations" min-width="120">
                <template v-slot="scope">
                    <el-button @click="handleEdit(scope.row,scope.column,scope.$index,scope.store)">编辑</el-button>
                    <el-button @click="handleDelete(scope.row,scope.$index)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>

    </div>

</template>

<style scoped>
    .page-container{
        height:100%;
        overflow:hidden;
        background-color: rgb(193, 229, 240);
        margin: 5px;
        
        display: flex;
        flex-direction: column ;
        >.title-container{
            height:50px;
            background-color: rgb(197, 238, 233);
            display: flex;
            flex-direction: row ;
            justify-content: space-between;
            color:lightcyan;
            font-size: 30px;
            font-family:"华文彩云";
        }

        >.toolbar-container{
            height:50px;
            background-color: rgb(222, 217, 210);

            margin:5px 10px 5px 130px;
            padding:5px 0 0 0;
        }

        >.content-container{
            flex:1;
            overflow:auto;
            background-color: rgb(187, 233, 206);
        }
        
        

    }
</style>