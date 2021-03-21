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
        <div class="rightbox"
        ref="marginNum">
                <div class="banner">
                        <div class="menu-status-button">
                            <i class="el-icon-s-fold menu-button" v-show="!isCollapse" @click="menuShow"></i>
                            <i class="el-icon-s-unfold  menu-button" v-show="isCollapse" @click="menuHide"></i>
                        </div>
                        <div class="pathinfo">
                        <span><router-link to="/">主页</router-link></span>
                        <div v-if="pathRouter.path" style="display:inline-block">
                            <span>&nbsp;/&nbsp;</span>
                            <span><router-link :to="pathRouter.path">{{pathRouter.name}}</router-link></span>
                        </div>
                    </div>
                </div>
                <Appmain />
        </div>
    </div>    
        
    </div>
</template>
<script>
import globalstyle from "../style/globalstyle.scss";
import Appmain from "./AppMain";
// require('cityData.json');//加载本地数据文件
// import router from "../router";

export default {
    name:"Layout",
    components:{
        Appmain
    },
    data() {
      return {
        isCollapse: true,
        marginNum:200,
        pathRouter:{
            path:"",
            name:"第一页"
        }

      };
    },
    computed:{
        globalstyle(){
            return globalstyle
        }
    },
    methods: {
        menuHide(){
            this.isCollapse=false;
        },
        menuShow(){
            this.isCollapse=true
        },
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
        },
    },
    watch:{
        isCollapse(){
            if(this.isCollapse){
                    this.$refs.marginNum.style.marginLeft=70+"px"
            }
            if(!this.isCollapse){
                this.$refs.marginNum.style.marginLeft=205+"px"
            }
        },
    }
}
</script>
<style lang="scss" scoped>
@import "../style/globalstyle.scss";



.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    // min-height: 400px;
  }
.layout{
    
    // min-width:1200px;
    .oderbox{
        height:0;
        width:100%;
        position: relative;
        .leftbox{
            position: fixed;
            left:0;
            top:0;
            .el-menu-vertical-demo{
                min-height:calc(100vh)
            }
        }
        .rightbox{
            min-width:1200px;
            transition: margin .4s;
            height:100%;
            margin-left:70px;
            margin-right:5px;
            .banner{
                position: relative;
                height:50px;
                background-color:$banner-color;
                .menu-status-button{
                    position: absolute;
                    left:20px;
                    display: inline-block;
                    font-size:30px;
                    color:$menu-status-color;
                    line-height:50px;
                    .menu-button{
                        cursor: pointer;
                    }
                }
                .pathinfo{
                    position: absolute;
                    left:80px;
                    display: inline-block;
                    line-height:50px;
                    span{
                        color:$menu-status-color;
                        font-weight: 400 !important;
                        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
                        font-size:15px;
                    }
                }
            }
            
        }
    }
}
</style>