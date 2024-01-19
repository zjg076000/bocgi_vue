<script setup lang="ts">
import { isCollapse } from './isCollapse';
</script>

<template>
    <el-aside>
        <el-scrollbar>
            <el-menu router unique-opened :collapse="isCollapse">
                <a href="/" class="logo2">
                    <img src="@/assets/logo.svg" alt="" />
                    <h1>中银保险</h1>
                </a>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <iEpSetting />
                        </el-icon><span>权限管理</span>
                    </template>
                    <el-menu-item index="/menu">
                        <el-icon>
                            <iEpMenu />
                        </el-icon>
                        <span>菜单列表</span>
                    </el-menu-item>
                    <el-menu-item index="/user">
                        <el-icon>
                            <iEpUser />
                        </el-icon>
                        <span>用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="/role">
                        <el-icon>
                            <iEpUser />
                        </el-icon>
                        <span>角色管理</span>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item>
                    <el-icon>
                        <iEpSetting />
                    </el-icon>
                    <span>业务管理</span>
                </el-menu-item>
                <el-menu-item>
                    <el-icon>
                        <IEpView />
                    </el-icon>
                    <span>文档管理</span>
                </el-menu-item>
                <el-menu-item>
                    <el-icon>
                        <IEpSetting />
                    </el-icon>
                    <span>系统管理</span>
                </el-menu-item>
            </el-menu>

        </el-scrollbar>

    </el-aside>
</template>

<style lang='scss' scoped>
.el-aside {
    background-color: #e9e9eb;
    height: 100vh;
    width: auto;
}

.logo2 {
    display: flex;
    justify-content: enter;
    align-items: enter;
    text-decoration: none;
    color: black;
    height: 60px;

    img {
        width: 32px;
        height: 32px;

    }
}

.el-menu {


    background-color: #e9e9eb;
    border-right: none;
    width: 200px;

    & .el-menu--vertical {
        width: 60px;

        & h1 {
            display: none;
        }
    }
}
</style>