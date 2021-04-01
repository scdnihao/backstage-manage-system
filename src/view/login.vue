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
                    <li v-show="changeColor == '1'">
                            <el-form :model='loginForm' ref="login"  class="userlogin" :rules='rules'>
                                <el-form-item label="用户名" prop="userName">
                                    <el-input v-model="loginForm.userName" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="passWord">
                                    <el-input type="password" v-model="loginForm.passWord" placeholder="请输入密码" show-password></el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:200px; margin-top:20px;" @click="login(1)">登录</el-button>
                    </li>
                    <!-- 手机号登录 -->
                    <li v-show="changeColor == '2'">
                            <el-form :model='phoneLoginForm' ref="loginData" class="phonelogin" :rules="rules">
                                <el-form-item label="手机号码" prop="phoneNumber">
                                    <el-input v-model="phoneLoginForm.phoneNumber" placeholder="请输入手机号码"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码" prop="pinCode" class="pincode">
                                        <el-input type="text" v-model.number="phoneLoginForm.pinCode" placeholder="请输入验证码">
                                            <span slot="append" class="pincodetext" @click="getPinCode(0)" :class="pinList[0].readOnly ==true? 'span-onlyRead':''">{{pinList[0].pinCodeInfo}}</span>
                                        </el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:200px; margin-top:20px;" @click="login(2)">登录</el-button>
                    </li>
                    <!-- 注册 -->
                    <li v-show="changeColor == '3'">
                            <el-form ref="register" :model='signForm' class="register" :rules='rules'>
                                <el-form-item label="用户名" prop="userName" class="whitecolor">
                                    <el-input v-model="signForm.userName" placeholder="请输入用户名"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="passWord" class="whitecolor">
                                    <el-input type="password" v-model="signForm.passWord" placeholder="请输入密码" show-password></el-input>
                                </el-form-item>
                                <el-form-item label="手机号码" class="whitecolor" prop="phoneNumber">
                                    <el-input v-model="signForm.phoneNumber" placeholder="请输入手机号码"></el-input>
                                </el-form-item>
                                <el-form-item label="验证码" prop="pinCode" class="pincode">
                                        <el-input type="text" v-model.number="signForm.pinCode" placeholder="请输入验证码">
                                            <span slot="append" class="pincodetext" @click="getPinCode(1)" :class="pinList[1].readOnly ==true? 'span-onlyRead':''">{{pinList[1].pinCodeInfo}}</span>
                                        </el-input>
                                </el-form-item>
                            </el-form>
                            <el-button style="width:200px; margin-top:20px;" @click="userRegister">注册</el-button>
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
        var userNameRule=(rule, value, callback)=>{
            if(!value){
                return callback(new Error('请输入用户名！'))
            }else if(value.length<6){
                callback(new Error('账号不得小于6位！'))
            }else if (value.length > 18) {
                callback(new Error('账号不得多于18位字符！'))
            } else if (!/^[0-9a-zA-Z]+$/.test(value)) {
                callback(new Error('账号仅支持字母和数字！'))
            } else{
                callback()
            }
        };
        var passWordRule=(rule,value,callback)=>{
            if (value.length < 6) {
                callback(new Error('密码不得少于6位字符！'))
            } else if (value.length > 18) {
                callback(new Error('密码不得多于18位字符！'))
            } else if (!/^([0-9a-zA-Z,.!@#$%^&*_])+$/.test(value)) {
                callback(new Error('密码仅支持字母、数字和「,._!@#$%^&*」！'))
            } else{
                callback()
            }
        };
        var phoneRule=(rule,value,callback)=>{
            if(!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(value))){
                callback(new Error('手机号码格式有误！'))
            }else{
                callback()
            }
        };
        var pinCode=(rules,value,callback)=>{
            if(!/^[0-9]{6}$/.test(value)){
                callback(new Error('请输入6位数字验证码'))
            }else {
                callback()
            }
        }
        return{
                changeColor:'3',             //tab切换样式变换
                // 账密登陆表单数据及规则
                loginForm:{
                    userName:'',
                    passWord:''
                },
                // 手机号码登陆表单及规则
                phoneLoginForm:{
                    phoneNumber:'',
                    pinCode:''
                },
                // 注册表单及规则
                signForm:{
                    userName:'',
                    passWord:'',
                    phoneNumber:'',
                    pinCode:'',
                },
                //登陆和注册获取验证码
                pinList:[
                    {pinCodeInfo:'获取验证码',
                    readOnly:false},
                    {pinCodeInfo:'获取验证码',
                    readOnly:false}
                ],
                //表单校验规则
                rules:{
                    userName:[
                        {validator:userNameRule,trigger: 'blur'}
                    ],
                    passWord:[
                        {validator:passWordRule,trigger: 'blur'},
                    ],
                    phoneNumber:[
                        {validator:phoneRule,trigger: 'blur'},
                    ],
                    pinCode:[
                        {validator:pinCode},
                    ]
                }
                
        }
    },
    methods:{
        checkTabs(event){
            let target = event.target
            // console.log(target.getAttribute("value"))
            switch(target.getAttribute("value")){
                case "1":
                    this.changeColor="1";
                    break;
                case "2":
                    this.changeColor="2";
                    break;
                case "3":
                    this.changeColor="3";
                    break;
                default:
                    break;
            }
        },
        // 获取验证码
        getPinCode(index){
            this.pinList[index].readOnly=true
            this.pinList[index].pinCodeInfo="60秒后重发"
            let num =59
            let timeOut=setInterval(() =>{
                if(num==0){
                    clearInterval(timeOut);
                    this.pinList[index].readOnly=false
                    this.pinList[index].pinCodeInfo="重新获取"
                }else{
                    this.pinList[index].pinCodeInfo=num--+"秒后重发"
                }
            },1000)
        },
        // 用户注册
        userRegister(){
            this.$refs.register.validate((valid)=>{
                if(valid){console.log(this.signForm)}
                })
        },
        // 登陆
        login(value){
            if(value==1){
                this.$refs.login.validate((valid)=>{
                if(valid){console.log(valid)}
                })
            }else if(value==2){
                this.$refs.loginData.validate((valid)=>{
                if(valid){console.log(valid)}
                })
            }
            
        }
    }
}
</script>
<style lang="scss" >
        .span-onlyRead{
            pointer-events: none;
        }
        .pincode{
            width:400px;
            .pincodetext{
                user-select: none;
                cursor:pointer;
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
        .login{
            user-select: none;
            .tabSelected{
                color:#409EFF !important;
            }
            height:calc(100vh);
            width:calc(100vw);
            background-color:#181d4b;
            display: flex;
            align-items: center;
            justify-content: center;
            .el-form-item{
            width:300px!important;
            }
            .el-input__inner{
                height:30px !important;
            }
            .el-form-item__label{
                    line-height:30px !important;
                    color:#DCDFE6 !important;
                }
            .el-input{
                width:300px!important;
            }
            .logininfo{
                border-radius:5px;
                height:550px;
                background-color:#181d4b;
                .tabletitle{
                    height:60px;
                    text-align: left;
                    ul{
                        line-height:60px;
                        padding:0 10px;
                        li{
                            display: inline-block;
                            color:#DCDFE6;
                            cursor: default;
                            font-size:18px;
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
                    ul{
                        li{
                            display: inline-block;
                            margin-top:20px;
                        }
                    }

                }
            }
        }
</style>