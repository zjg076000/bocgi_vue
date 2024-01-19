<script setup lang="ts">

//表单的响应数据
const form = reactive({
    phone: '1391222121',
    password: '123456',
})


//登录事件梳理

const onSubmit = () => {
    ElMessage.success('提交数据成功')

    //定义表单规则
    const rules = reactive<FormRules>({
        phone: [
            { required: true, message "电话不能未空"，triggler: "blur" },
            { pattern: /^ 1\d{ 10}$ /，message: '手机号必须是11位', trigger: "blur" },

        ],
        password: [
            { required: true, message "密码不能为空"，triggler: "blur" },
            { pattern: min: 6, max: 18，message: '密码必须大于6位，小于18位', trigger: "blur" },

        ],

    }

}
</script>

<template>
    <div class="login">

        <el-form :model="form" label-width="120px" label-position="top">
            <h2>系统登录</h2>

            <el-form-item label="手机号">
                <el-input v-model="form.phone" />
            </el-form-item>

            <el-form-item label="密码">
                <el-input v-model="form.password" />
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>

            </el-form-item>
        </el-form>

    </div>
</template>


<style lang='scss' scoped>
.login {

    background-color: #eee;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-form {

        width: 300px;
        padding: 30px;
        border-radius: 10px;

        background-color: #fff;

    }

    .el-form-item {

        margin-top: 20px;
    }

    .el-button {

        width: 100%;
    }

}
</style>
