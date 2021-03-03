<template>
    <div class="layout">
        <div class="oderbox">
        <div class="leftbox">
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
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
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
        </div>
        <div class="rightbox">
                <div class="banner">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                </div>
                <div class="visitpath"></div>
                <Appmain />
        </div>
    </div>    
        
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
      }
    }
}
</script>
<style lang="scss" >
@import "../style/globalstyle.scss";



.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
  }
.layout{
    
    // min-width:1200px;
    .oderbox{
        height:100%;
        width:100%;
        position: relative;
        .leftbox{
            position: absolute;
            left:0;
            top:0;
            height:100%;
            .el-menu-vertical-demo{
                min-height:calc(100vh)
            }
        }
        .rightbox{
            height:100%;
            margin-left:200px;
            .banner{
                height:50px;
                background-color:$banner-color;
            }
            .visitpath{
                height:15px;
            }
        }
    }
}
</style>