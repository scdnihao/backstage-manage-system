<template>
    <div class="user">
        <div class="titlebanner"></div>
        <el-button type="primary" icon="el-icon-plus" size=small>新增用户</el-button>
            
    </div>
</template>
<script>
export default {
    name:"User",
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../style/globalstyle";
        .user{
            .titlebanner{
                height:100px;
                background: -webkit-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -moz-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -o-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: -ms-linear-gradient(to bottom,#DCDCDC,#ffffff);
                background: linear-gradient(to bottom,#DCDCDC,#ffffff);
                box-shadow: 2px 3px 5px #999d9c;
                border:1px solid #999d9c;
                border-radius:5px;
            }
        }
</style>