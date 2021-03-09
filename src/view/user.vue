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
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="地址">
                    </el-table-column>
                </el-table>
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
            }]
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