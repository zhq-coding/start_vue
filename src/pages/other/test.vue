<template>
<div>
    <el-dropdown trigger="click" >
          <span class="el-dropdown-link" ref="ellink" >
            {{ test_obj.title }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown" align="center" v-for="item in test_obj.arr" :key="item.id">
            <el-dropdown-item   > 
              {{ item.desc }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown trigger="click" >
          <span class="el-dropdown-link" ref="ellink" >
            {{ test_obj.title }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown" align="center" >
            <el-dropdown-item  v-for="item in test_obj.arr" :key="item.id" > 
              {{ item.desc }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
</div>
</template>
<script>
export default {
    name:'test',
    data(){
        return {
            test_obj:{
                title:'测试下拉菜单',
                arr:[
                    {id:1,desc:'测试1'},
                    {id:2,desc:'测试2'},
                    {id:3,desc:'测试3'}
                ]
            },
            obj:{
                title:'测试下拉菜单other',
                arr:[
                    {id:1,desc:'测试1'},
                    {id:2,desc:'测试2'},
                    {id:3,desc:'测试3'}
                ]
            }
            
        }
    }
}
</script>