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
                    <!-- 账号密码登陆 -->
                    <li title="1" v-show="changeColor == '1'">
                            <el-form v-model="loginForm" class="userlogin">
                                <el-form-item label="用户名" prop="userName" class="whitecolor">
                                    <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="passWord" class="whitecolor">
                                    <el-input type="password" v-model="loginForm.passWord" placeholder="请输入密码"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:400px; margin-top:20px;">登录</el-button>
                    </li>
                    <li title="2" v-show="changeColor == '2'">
                            <el-form v-model="loginForm" class="phonelogin">
                                <el-form-item label="手机号码" prop="userName"  class="whitecolor">
                                    <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码" prop="passWord" class="pincode">
                                        <el-input type="text" v-model="loginForm.passWord" placeholder="请输入验证码">
                                            <el-button slot="append">获取验证码</el-button>
                                        </el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:400px; margin-top:20px;" >登录</el-button>
                    </li>
                    <li title="3" v-show="changeColor == '3'">
                            <el-form v-model="loginForm" class="register">
                                <el-form-item label="用户名" prop="userName" class="whitecolor">
                                    <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="passWord" class="whitecolor">
                                    <el-input type="password" v-model="loginForm.passWord" placeholder="请输入密码"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码" prop="passWord" class="pincode">
                                        <el-input type="text" v-model="loginForm.passWord" placeholder="请输入验证码">
                                            <el-button slot="append">获取验证码</el-button>
                                        </el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:400px; margin-top:20px;" >登录</el-button>
                    </li>
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
                changeColor:"3",             //tab切换样式变换
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
<style lang="scss" >
        .pincode{
            width:400px;
            .el-form-item__label{
                color:#DCDFE6 !important;
            }
            .el-input{
                    .el-input-group__append{
                        border-radius:0;
                        border:none;
                        background-color:#FFF;
                    }
                    .el-input__inner{
                        border:none;
                    }
            }
            
        }
        .whitecolor .el-form-item__label{
                color:#DCDFE6 !important;
        }
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
                height:500px;
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
                            // .el-form-item .el-form-item__label{
                            //         color:#DCDFE6 !important;
                            // }
                        }
                    }
                }
                .tableinfo{
                    height:440px;
                    ul{
                        li{
                            margin-top:20px;
                        }
                    }

                }
            }
        }
</style>