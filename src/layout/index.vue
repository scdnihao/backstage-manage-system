<template>
    <div class="layout">
        <div class="banner">

        </div>
        <div class="visitpath">

        </div>
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu default-active="1-4-1" 
            class="el-menu-vertical-demo" 
            @open="handleOpen" 
            @close="handleClose" 
            :collapse="isCollapse" 
            :background-color="globalstyle.menuColor">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
            </template>
            <!-- <el-menu-item-group> -->
            <!-- <span slot="title">分组一</span> -->
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
            <!-- </el-menu-item-group> -->
            <!-- <el-menu-item-group >
                    <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu> -->
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
</el-menu>
        <Appmain />
    </div>
</template>
<script>
import globalstyle from "../style/globalstyle.scss";
import Appmain from "./AppMain";

export default {
    name:"Layout",
    components:{
        Appmain
    },
    data() {
      return {
        isCollapse: false,
      };
    },
    computed:{
        globalstyle(){
            return globalstyle
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
}
</script>
<style lang="scss" scoped>
@import "../style/globalstyle.scss";



.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
}
.layout{
    position: relative;
    min-width:1200px;
    .banner{
        height:50px;
        min-width:1200px;
        background-color:$banner-color;
    }
    .visitpath{
        height:20px;
        background-color:#DCDCDC;
        display:inline;
        // width:calc(100vw - 200px);
        width:100%;
        // position: relative;
        // left:200px;
    }
    .el-menu-vertical-demo{
        height:calc(100vh - 50px);
        display:inline;
        position: absolute;
        left:0;
        top:50px;
    }
    .appmain{
        min-width:1200px;
        height:100px;
        display:inline-block;
        // position: absolute;
        // left:200px;
        background-color:$banner-color;
    }
}
</style>