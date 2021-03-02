<template>
    <div class="home">
        <el-row>
            <el-button icon="el-icon-lock" @click="buttonState=!buttonState">默认按钮</el-button>
            <el-button icon="el-icon-delete" type="danger" :disabled="buttonState">危险按钮</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return{
            buttonState:true,

        }
    }
}
</script>
<style>

</style>