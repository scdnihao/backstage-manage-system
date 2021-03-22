<template>
    <div class="login">
        <div class="logininfo">
            <div class="tabletitle">
                <ul @click="checkTabs($event)">
                    <li value="1" title="账密登陆" :class="{ tabSelected:changeColor == '1'}">账密登陆</li>
                    <li value="2" title="手机登陆" :class="{ tabSelected:changeColor == '2'}">手机登陆</li>
                    <li value="3" title="用户注册" :class="{ tabSelected:changeColor == '3'}">用户注册</li>
                </ul>
            </div>
            <div class="tableinfo">
                <ul>
                    <li title="1" v-show="changeColor == '1'">
                        <template>
                            <el-form v-model="loginForm">
                                <el-form-item label="用户名" prop="userName" >
                                    <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="passWord">
                                    <el-input type="password" v-model="loginForm.passWord" placeholder="请输入密码"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:300px;">登录</el-button>
                        </template>
                    </li>
                    <li title="2" v-show="changeColor == '2'">手机登录</li>
                    <li title="3" v-show="changeColor == '3'">用户注册</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
                changeColor:"1",             //tab切换样式变换
                loginForm:{
                    userName:"",
                    passWord:""
                }
        }
    },
    methods:{
        checkTabs(event){
            let target = event.target
            // console.log(target.getAttribute("value"))
            switch(target.getAttribute("value")){
                case "1":
                    console.log(1);
                    this.changeColor="1";
                    break;
                case "2":
                    console.log(2);
                    this.changeColor="2";
                    break;
                case "3":
                    console.log(3);
                    this.changeColor="3";
                    break;
                default:
                    break;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
        .login{
            .tabSelected{
                color:#409EFF !important;
            }
            height:calc(100vh);
            width:calc(100vw);
            background-color:#181d4b;
            display: flex;
            align-items: center;
            justify-content: center;
            .logininfo{
                border:1px solid #C0C4CC;
                border-radius:5px;
                height:400px;
                width:500px;
                background-color:#181d4b;
                .tabletitle{
                    height:60px;
                    text-align: left;
                    ul{
                        line-height:60px;
                        padding:0 10px;
                        li{
                            color:#DCDFE6;
                            cursor: default;
                            font-size:20px;
                            font-weight:800;
                            padding:0 20px;
                            user-select: none;
                             &:hover{
                                 color:#409EFF;
                             }
                        }
                    }
                }
                .tableinfo{
                    height:340px;

                }
            }
        }
</style>