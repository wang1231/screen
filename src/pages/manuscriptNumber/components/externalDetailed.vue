<template>
    <div class="external-detailed">
        <el-dialog title="外电报刊详细信息 External detailed information" :visible.sync="propsData.visible" :show-close="false">
            <div class="main clearfix">
                <div class="list fl">
                    <h2>最新稿件列表</h2>
                    <ul>
                        <li  v-for="(item,index) in propsData.realTime">
                            <span>{{ index }} {{ item.headLine }}</span>
                        </li>
                    </ul>
                </div>
                <div class="type fl clearfix">
                    <div class="fl">
                        <h2>按外电线路</h2>
                        <ul>
                            <li v-for="item in propsData.external"><span>{{ item.key }}</span></li>
                        </ul>
                    </div>
                    <div class="fl">
                        <h2>今日入库量</h2>
                        <ul>
                            <li v-for="item in propsData.external"><span>{{ item.value }}</span></li>
                        </ul>
                    </div>
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
    .external-detailed .el-dialog{
        width: 970px;
    }
    .external-detailed .el-dialog__header{
        background: #1d3a48;
        padding: 10px 25px;
    }
    .external-detailed .el-dialog__header .el-dialog__title{
        font-size: 27px;
        color: #afe6ef;
    }
    .external-detailed .el-dialog__body{
        padding: 40px 30px;
        background: #000a0c;
        height: 700px;
        overflow: hidden;
        overflow-y: auto;
    }
    .external-detailed .el-dialog__body::-webkit-scrollbar{
        width: 8px;
        height: 1px;
        background: #000a0c;
    }
    .external-detailed .el-dialog__body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: #5f8086;
    }
    .external-detailed .el-dialog__body::-webkit-scrollbar-track{
        border-radius: 10px;
    }
    

    .external-detailed .main .list{
        width: 430px;
    }
    .external-detailed .main .list h2{
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 25px;
    }
    .external-detailed .main .list ul{
        margin-top: 20px;
    }
    .external-detailed .main .list li {
        border: 1px solid #0b1c22;
        margin-top: 10px;
        padding: 10px 0;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .external-detailed .main .list li span{
        font-size: 16px;
        color: #7aa3a9;
    }
    .external-detailed .main .type{
        margin-left: 40px;
    }
    .external-detailed .main .type > div{
        width: 210px;
        margin-right: 10px;
    }
    .external-detailed .main .type > div:nth-child(2){
        margin-right: 0;
    }
    .external-detailed .main .type h2 {
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 20px;
    }
    .external-detailed .main .type ul{
        margin-top: 20px;
    }
    .external-detailed .main .type li {
        border: 1px solid #0b1c22;
        padding: 10px 0;
        text-align: center;
        margin-top: 10px;
    }
    .external-detailed .main .type li span{
        font-size: 16px;
        color: #7aa3a9;
    }
</style>
