<template>
    <div class="finished-details">
        <el-dialog title="成品详细信息 Product Detail" :visible.sync="propsData.visible" :show-close="false">
            <div class="main clearfix">
                <div class="list fl">
                    <h2>实时稿件列表</h2>
                    <ul>
                        <li v-for="(item,index) in propsData.realTime">
                            <span>{{ index }} {{ item.headLine }}</span>
                        </li>
                    </ul>
                </div>
                <div class="type fl clearfix">
                    <div class="fl">
                        <h2>按类型分</h2>
                        <ul>
                            <li v-for="item in propsData.mediaType"><span>{{ item.mediaType | mediaTypeFilter }}</span></li>
                        </ul>
                    </div>
                    <div class="fl">
                        <h2>今日增量</h2>
                        <ul>
                            <li v-for="item in propsData.mediaType"><span>{{ item.increment }}</span></li>
                        </ul>
                    </div>
                    <div class="fl">
                        <h2>按语种分</h2>
                        <ul>
                            <li v-for="item in propsData.language"><span>{{ item.languageId | languageFilter }}</span></li>
                        </ul>
                    </div>
                    <div class="fl">
                        <h2>今日增量</h2>
                        <ul>
                            <li v-for="item in propsData.language"><span>{{ item.increment }}</span></li>
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
        },
        filters: {
            languageFilter(value){
                let language = {
                    'fr': "法文",
                    'en': "英文",
                    'ru': "俄文",
                    'zh-CN': "中文",
                    'es': "西文",
                    'ja': "日文",
                    'pt': "葡文",
                    'ar': "阿文"
                }

                return language[value];
            },
            mediaTypeFilter(value){
                let mediaType = {
                    'Text': "文本",
                    'Photo': "图片",
                    'Audio': "音频",
                    'Graph': "图表",
                    'MultiMedia': "多媒体",
                    'Video': "视频"
                }

                return mediaType[value];
            }
        }
    }
</script>

<style>
    .finished-details .el-dialog{
        width: 1410px;
    }
    .finished-details .el-dialog__header{
        background: #1d3a48;
        padding: 10px 25px;
    }
    .finished-details .el-dialog__header .el-dialog__title{
        font-size: 27px;
        color: #afe6ef;
    }
    .finished-details .el-dialog__body{
        padding: 40px 30px;
        background: #000a0c;
        height: 700px;
        overflow: hidden;
        overflow-y: auto;
    }

    .finished-details .el-dialog__body::-webkit-scrollbar{
        width: 8px;
        height: 1px;
        background: #000a0c;
    }
    .finished-details .el-dialog__body::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: #5f8086;
    }
    .finished-details .el-dialog__body::-webkit-scrollbar-track{
        border-radius: 10px;
    }
    .finished-details .main .list{
        width: 430px;
    }
    .finished-details .main .list h2{
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 25px;
    }
    .finished-details .main .list ul{
        margin-top: 20px;
    }
    .finished-details .main .list li {
        border: 1px solid #0b1c22;
        margin-top: 10px;
        padding: 10px 0;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .finished-details .main .list li span{
        font-size: 16px;
        color: #7aa3a9;
    }
    .finished-details .main .type{
        margin-left: 40px;
    }
    .finished-details .main .type > div{
        width: 210px;
        margin-right: 10px;
    }
    .finished-details .main .type > div:nth-child(4){
        margin-right: 0;
    }
    .finished-details .main .type h2 {
        font-size: 22px;
        color: #afe6ef;
        background: #1d3a48;
        padding: 12px 0;
        padding-left: 20px;
    }
    .finished-details .main .type ul{
        margin-top: 20px;
    }
    .finished-details .main .type li {
        border: 1px solid #0b1c22;
        padding: 10px 0;
        text-align: center;
        margin-top: 10px;
    }
    .finished-details .main .type li span{
        font-size: 16px;
        color: #7aa3a9;
    }
</style>
