<template>
    <div class="finished-details">
        <el-dialog title="成品详细信息 Product Detail" :visible.sync="propsData.visible" width="50%" :show-close="false">
            <div class="main clearfix">
                <div class="list">

                </div>
                <div class="type">
                    
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: {
            propsData: Object
        }
    }
</script>

<style>
    .finished-details .el-dialog__header{
        background: #1d3a48;
        padding: 10px 25px;
    }
    .finished-details .el-dialog__header .el-dialog__title{
        font-size: 27px;
        color: #afe6ef;
    }
</style>
