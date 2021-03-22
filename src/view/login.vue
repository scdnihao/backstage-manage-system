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
            <div class="tableinfo"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
                changeColor:"0"             //tab切换样式变换
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
                color:#409EFF;
            }
            height:calc(100vh);
            width:calc(100vw);
            background-color:#2585a6;
            display: flex;
            align-items: center;
            justify-content: center;
            .logininfo{
                height:400px;
                width:500px;
                background-color:#fffef9;
                .tabletitle{
                    height:60px;
                    text-align: left;
                    ul{
                        line-height:60px;
                        padding:0 10px;
                        li{
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
                    height:320px;

                }
            }
        }
</style>