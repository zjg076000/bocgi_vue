<script setup lang="ts">
import { getall } from '@/api/softversion'
import { ref } from 'vue'
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'

//存储返回的版本信息
const allsoftversion = ref()
//获取返回的数据逻辑
const getallsoftversions = async () => {
    const res = await getall()
    console.log(res)

}
//调用方法
getallsoftversions()

const value = ref('')
const options = [
    {
        value: 'I17',
        label: 'I17财务新准则系统',
    },
    {
        value: 'Option2',
        label: 'Option2',
        disabled: true,
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]
</script>

<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span class="app-name">系统名称</span>

                <el-select v-model="value" placeholder="Select" style="width: 240px">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
                        :disabled="item.disabled" />
                </el-select>
                <el-button class="button" :icon="Search" circle />
                <!-- <el-button class="button" text>Operation button</el-button> -->
            </div>
        </template>
        <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/12 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/3 20:46</p>
                </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                    <h4>Update Github template</h4>
                    <p>Tom committed 2018/4/2 20:46</p>
                </el-card>
            </el-timeline-item>
        </el-timeline>
        <!-- <---！
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->

    </el-card>
</template>

<style lang='scss' scoped>
.el-card {}


.app-name {
    margin-right: 15px;
}

.el-button {
    margin-left: 15px;
}

.card-header {

    display: flex;
    // justify-content: space-between;
    align-items: center;

    .soft-select {
        padding-left: 100px;
    }
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>