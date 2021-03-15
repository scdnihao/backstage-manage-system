<template>
    <div class="user">
        <div class="titlebanner">
            <span class="title">用户管理</span>
        </div>
        <el-button class="adduser" type="primary" icon="el-icon-plus" size=small>新增用户</el-button>
        <template>
                <el-table
                    :data="tableData"
                    border
                    style="width:100%;">
                    <el-table-column
                    prop="date"
                    label="用户名"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="部门"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="部门经理"
                    width="130">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址"
                    width="350">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="邮箱">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="电话">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="入职时间">
                    </el-table-column>
                    <el-table-column
                    label="操作">
                        <template slot-scope="scope">
                            <el-button class="userdelect" @click="dianji(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
                            <el-button class="useredit" type="danger" icon="el-icon-delete" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </template>

        <!-- Form -->
        <template>
            <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="120">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </el-dialog>
        </template>
    </div>
</template>
<script>
export default {
    name:"User",
    data(){
        return{
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
                }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            dialogTableVisible: false,
            dialogFormVisible: false,
            form:{

            },
            formLabelWidth: '120px'
        }
    },
    methods:{
        dianji(index){
                console.log(index);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../style/globalstyle";
        .user{
            text-align: left;
            .titlebanner{
                height:40px;
                background: -webkit-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -moz-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -o-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -ms-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: linear-gradient(to bottom,#DCDCDC,#ffffff);
                box-shadow: 2px 3px 5px #999d9c;
                border:1px solid #999d9c;
                border-radius:5px;
                text-align: left;
                .title{
                    margin-left:20px;
                    line-height:40px;
                }
            }
            .adduser{
                margin:20px 0 20px 10px;
            }
        }
</style>