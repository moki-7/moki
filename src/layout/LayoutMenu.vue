<script setup>

import { unique } from 'element-plus/es/utils/arrays.mjs';
import {useRouter} from 'vue-router';
const router=useRouter();
const menu=[

  {
    index:'1',
    title:'课程实训',
    icon:'notebook',
    children:[
      {
        index:'1-1',
        path:'/course/think',
        title:'计算思维',
      },
      {
        index:'1-2',
        path:'/course/hard',
        title:'硬件开发',
      },
      {
        index:'1-3',
        path:'/course/soft',
        title:'软件开发',
      }
    ]
  },

  {
    index:'2',
    title:'专业学习',
    icon:'aim',
    children:[
      {
        index:'2-1',
        title:'集中实训',
      },
      {
        index:'2-2',
        title:'企业实习',
      }
    ]

  },

  {
    index:'3',
    title:'毕业设计',
    icon:'document',
    children:[
      {
        index:'3-1',
        title:'选题申报',
      },
      {
        index:'3-2',
        title:'开题答辩',
      },
      {
        index:'3-3',
        title:'过程指导',
      },
      {
        index:'3-4',
        title:'论文撰写',
      },
      {
        index:'3-5',
        title:'论文答辩',
      },
      {
        index:'3-6',
        title:'论文提交',
      }
    ]
  },

  {
    index:'4',
    path:'/test',
    title:'临时测试',
    icon:'setting',
  },

  {
    index:'5',
    title:'系统管理',
    icon:'trophy',
    children:[
      {
        index:'5-1',
        title:'思维题库',
      }
    ]   
  }

]


</script>

  <template>
    <!--:router="true"开启路由-->
    <el-menu :router="true">
      
        <template  v-for="(sub,pt) in menu" :key="pt">

            <el-sub-menu v-if="sub.children!==undefined" :index="sub.index">

                <template v-slot:title>
                    <el-icon><component :is="sub.icon"/></el-icon>
                    <span>{{sub.title}}</span>
                </template>

                <el-menu-item v-for="item in sub.children" :key="item.index" :index="item.index" :route="item.path">
                    <span>{{item.title}}</span>         
                </el-menu-item>

            </el-sub-menu>
            
            <el-menu-item v-else :index="sub.index" :route="sub.path">
                <el-icon><component :is="sub.icon"/></el-icon>
                <span>{{sub.title}}</span>         
            </el-menu-item>
        
        </template> 

    </el-menu>

  </template>


<style>

</style>
