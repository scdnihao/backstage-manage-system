<template>
    <div class="appmain">
        <User/>    
            <!-- <div class="functiontitle">
                1234
            </div> -->
    </div>
</template>
<script>
import User from "@/view/user"
export default {

    name:"Appmain",
    components:{
        User
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/style/globalstyle";
        .appmain{
            padding:10px 0;
            // .functiontitle{
            //     padding:10px;
            // }
        }
</style>