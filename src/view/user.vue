<template>
    <div class="user">
        <div class="titlebanner">
            <span class="title">用户管理</span>
            <div class="selectstate">
                <i class="el-icon-arrow-down" v-show="arrowShow" @click="arrowShow=false"></i>
                <i class="el-icon-arrow-up" v-show="!arrowShow" @click="arrowShow=true"></i>
            </div>
            
        </div>
        <!-- 查询表单 -->
        <el-collapse-transition>
            <div class="userselect" v-show="!arrowShow">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                            <el-form-item label="用户名" size="mini">
                                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                            </el-form-item>
                            <el-form-item label="所在部门" size="mini">
                                <el-select v-model="formInline.region" placeholder="活动区域">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="邮箱" size="mini">
                                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                            </el-form-item>
                            <el-form-item label="电话" size="mini">
                                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="mini" >查询</el-button>
                                <el-button type="primary" size="mini" >重置</el-button>
                            </el-form-item>
                    </el-form>
            </div>
        </el-collapse-transition>
        <el-button class="adduser" type="primary" icon="el-icon-plus" size=small @click="dialogFormVisible=true">新增用户</el-button>
        <el-button class="useredit" type="danger" icon="el-icon-delete" size=small @click="delectUser()">删除</el-button>
        <template>
                <el-table
                    :data="tableData"
                    border
                    style="width:100%;"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="50">
                    </el-table-column>
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
                        <template slot-scope="">
                            <el-button class="userdelect" @click="dianji()" type="primary" icon="el-icon-edit" circle></el-button>
                        </template>
                    </el-table-column>
                </el-table>
        </template>

        <!-- Form -->
        <template>
            <el-dialog title="收货地址" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth" style="display:inline-block;">
                    <el-input v-model="form.name" autocomplete="off" ></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth" style="display:inline-block;">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option  label="区域一" value="shanghai"></el-option>
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
// import cityData from "../../static/cityData.json"
export default {
    name:"User",
    data(){
        return{
            formInline: {
                user: '',
                region: ''
             },
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
            cityData:{},
            dialogFormVisible: false,
            form:{

            },
            formLabelWidth: '120px',
            multipleSelection:[],                //选中列表
            arrowShow:true                       //查询框显示隐藏
        }
    },
    methods:{
        async delectUser(){
            // if (rows) {
            //     rows.forEach(row => {
            //         this.$refs.multipleTable.toggleRowSelection(row);
            //     });
            //     }
            if(this.multipleSelection.length!=0){
                console.log(this.multipleSelection);
            }
        },
        handleSelectionChange(val){
            this.multipleSelection = val;
        },
        dianji(){
            // this.cityData=cityData;
            // console.log(this.cityData);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../style/globalstyle";
        .user{
            .cell{
                text-align:center;
            }
            text-align: left;
            .titlebanner{
                position: relative;
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
                .selectstate{
                    position: absolute;
                    top:8px;
                    right:20px;
                    display: inline-block;
                    i{
                        font-size: 25px;
                    }
                }
            }
            .adduser{
                margin:20px 0 20px 10px;
            }
            .userselect{
                border-radius:5px;
                background: -webkit-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -moz-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -o-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -ms-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: linear-gradient(to bottom,#DCDCDC,#ffffff);
                box-shadow: 2px 3px 5px #999d9c;
                border:1px solid #999d9c;
                .el-form-item{
                    margin:0;
                    padding:0 10px;
                    vertical-align: middle
                    
                }
            }
        }
</style>