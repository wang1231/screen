<template>
    <div class="library-detailed">
        <el-dialog title="待编库详细信息 Library detailed to be compiled" :visible.sync="propsData.visible" width="74%" :show-close="false">
            <div class="main clearfix">
                <div class="list fl">
                    <h2>实时稿件列表</h2>
                    <ul>
                        <li>
                            <span>01 贵州龙里：搬迁搬出好生活</span>
                        </li>
                    </ul>
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
                    <div class="fl">
                        <h2>按语种分</h2>
                        <ul>
                            <li><span>中文</span></li>
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
    .library-detailed .el-dialog__header{
        background: #1d3a48;
        padding: 10px 25px;
    }
    .library-detailed .el-dialog__header .el-dialog__title{
        font-size: 27px;
        color: #afe6ef;
    }
    .library-detailed .el-dialog__body{
        padding: 40px 30px;
        background: #000a0c;
    }
    .library-detailed .main .list{
        width: 430px;
    }
    .library-detailed .main .list h2{
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 25px;
    }
    .library-detailed .main .list ul{
        margin-top: 20px;
    }
    .library-detailed .main .list li {
        border: 1px solid #0b1c22;
        margin-top: 10px;
        padding: 10px 0;
        padding-left: 10px;
    }
    .library-detailed .main .list li span{
        font-size: 16px;
        color: #7aa3a9;
    }
    .library-detailed .main .type{
        margin-left: 40px;
    }
    .library-detailed .main .type > div{
        width: 210px;
        margin-right: 10px;
    }
    .library-detailed .main .type > div:nth-child(4){
        margin-right: 0;
    }
    .library-detailed .main .type h2 {
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 20px;
    }
    .library-detailed .main .type ul{
        margin-top: 20px;
    }
    .library-detailed .main .type li {
        border: 1px solid #0b1c22;
        padding: 10px 0;
        text-align: center;
        margin-top: 10px;
    }
    .library-detailed .main .type li span{
        font-size: 16px;
        color: #7aa3a9;
    }
</style>
