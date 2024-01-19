<script setup lang="ts">
import { isCollapse } from "./isCollapse"
</script>

<template>
    <el-header>
        <!--图标-->
        <el-icon>
            <iEpExpand v-show="isCollapse" />
            <iEpFold v-show="!isCollapse" />
        </el-icon>
        <!--面包屑-->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
        <!--下拉菜单-->
        <el-dropdown>
            <span class="el-dropdown-link">
                <el-avatar :size="32" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" />
                <el-icon class="el-icon--right">
                    <i-ep-arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>个人资料</el-dropdown-item>
                    <el-dropdown-item>密码修改</el-dropdown-item>
                    <el-dropdown-item divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-header>
</template>

<style lang='scss' scoped>
.el-header {
    display: flex;
    align-items: center;

    background-color: #dedfe0;

    .el-icon {
        margin-right: 17px;
    }
}

.el-dropdown {
    margin-left: auto;

    .el-dropdown-link {
        display: flex;
        justify-content: center;
        align-items: center;

    }
}
</style>