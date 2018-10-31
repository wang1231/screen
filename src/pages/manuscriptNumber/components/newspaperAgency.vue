<template>
    <div class="newspaper-agency">
        <el-dialog title="社内报刊详细信息 Inside the newspaper detailed information" :visible.sync="propsData.visible" width="51%" :show-close="false">
            <div class="main clearfix">
                <div class="list fl">
                    <h2>实时稿件列表</h2>
                </div>
                <div class="type fl clearfix">
                    <div class="fl">
                        <h2>按类型分</h2>
                        <ul>
                            <li><span>文本</span></li>
                        </ul>
                    </div>
                    <div class="fl">
                        <h2>今日增量</h2>
                        <ul>
                            <li><span>418</span></li>
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
    .newspaper-agency .el-dialog__header{
        background: #1d3a48;
        padding: 10px 25px;
    }
    .newspaper-agency .el-dialog__header .el-dialog__title{
        font-size: 27px;
        color: #afe6ef;
    }
    .newspaper-agency .el-dialog__body{
        padding: 40px 30px;
        background: #000a0c;
    }
    

    .newspaper-agency .main .list{
        width: 430px;
    }
    .newspaper-agency .main .list h2{
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 25px;
    }
    .newspaper-agency .main .list ul{
        margin-top: 20px;
    }
    .newspaper-agency .main .list li {
        border: 1px solid #0b1c22;
        margin-top: 10px;
        padding: 10px 0;
        padding-left: 10px;
    }
    .newspaper-agency .main .list li span{
        font-size: 16px;
        color: #7aa3a9;
    }
    .newspaper-agency .main .type{
        margin-left: 40px;
    }
    .newspaper-agency .main .type > div{
        width: 210px;
        margin-right: 10px;
    }
    .newspaper-agency .main .type > div:nth-child(2){
        margin-right: 0;
    }
    .newspaper-agency .main .type h2 {
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 20px;
    }
    .newspaper-agency .main .type ul{
        margin-top: 20px;
    }
    .newspaper-agency .main .type li {
        border: 1px solid #0b1c22;
        padding: 10px 0;
        text-align: center;
        margin-top: 10px;
    }
    .newspaper-agency .main .type li span{
        font-size: 16px;
        color: #7aa3a9;
    }
</style>
