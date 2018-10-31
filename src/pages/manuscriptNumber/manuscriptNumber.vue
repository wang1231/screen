<template>
    <div class="manu-script-number">
        <!-- 第一模块 -->
        <div class="data-number">
            <span v-for="item in dataNumber" class="data">
                <span class="label">{{ item.label }}</span><span class="number">{{ item.value }}</span>
            </span>
            <!-- 日历 -->
            <calendar-date @selectYear="selectYear" @selectMonth="selectMonth" @selectDay="selectDay"></calendar-date>
        </div>
        <!-- 第二模块 -->
        <div class="data-pancake clearfix">
            <div class="manuscript-library fl">
                <div id="library" style="width:100%;height:550px;"></div>
            </div>
            <div class="manuscript-type fl">
                <div id="type" style="width:100%;height:550px;"></div>
            </div>
        </div>
        <!-- 第三个模块 -->
        <div class="data-language">
            <span class="title">语种</span>
            <div v-for="item in dataLanguage" class="language">
                <span class="language-type">
                    <span class="languageName">{{ item.title | titleFilter }}稿件量</span>
                    <span class="languageAllNumber">{{ item.total }}</span>
                    <span class="bg"></span>
                </span>
                <span class="date">
                    <span class="dateName">日增量</span>
                    <span class="dateAllNumber">{{ item.increment }}</span>
                </span>
            </div>
        </div>

        <!-- 成品稿弹框 -->
        <finished-details :propsData="finishedData"></finished-details>
        <!-- 社内报刊 -->
        <newspaper-agency :propsData="newspaperData"></newspaper-agency>
        <!-- 外电弹框 -->
        <external-detailed :propsData="externalData"></external-detailed>
        <!-- 待编库 -->
        <library-detailed :propsData="libraryData"></library-detailed>
    </div>
</template>

<script>
    import finishedDetails from "@/pages/manuscriptNumber/components/finishedDetails"
    import newspaperAgency from "@/pages/manuscriptNumber/components/newspaperAgency"
    import externalDetailed from "@/pages/manuscriptNumber/components/externalDetailed"
    import libraryDetailed from "@/pages/manuscriptNumber/components/libraryDetailed"
    import calendarDate from "@/components/button/calendar/calendarDate"
    export default {
        components: {
            finishedDetails,
            newspaperAgency,
            externalDetailed,
            libraryDetailed,
            calendarDate
        },
        data () {
            return {
                // 每日 统计数量
                dataNumber: [
                    {
                        label: "今日数据量",
                        value: ""
                    },
                    {
                        label: "历史数据量",
                        value: ""
                    },
                    {
                        label: "总存储量",
                        value: ""
                    }
                ],
                dataLanguage: [],
                // 成品弹框参数
                finishedData: {
                    visible: false
                },
                // 社内报刊
                newspaperData: {
                    visible: false
                },
                // 外电
                externalData: {
                    visible: false
                },
                // 待遍
                libraryData: {
                    visible: false
                },
                mediaType: {
                    Text: 0,            // 文本
                    Photo: 0,           // 图片
                    Video: 0,           // 视频
                    Audio: 0,           // 音频
                    Graph: 0,           // 图表
                    MultiMedia: 0,      // 多媒体
                    otherType: 0        // 其他
                },
                mediaLis: {
                    finished: 0,            // 成品稿
                    pending: 0,             // 待编稿
                    foreign: 0,             // 外电稿
                    press: 0                // 社内报刊
                }
            }
        },
        methods: {
            libraryInit(){
                let library = this.$echarts.init(document.getElementById('library'));
                let option = {
                    title: {
                        text: '稿件库',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        bottom: 10,
                        left: 'center',
                        data: ['外电', '成品库','报刊','待编库']
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '50%'],
                            selectedMode: 'single',
                            data: [
                                {
                                    value: this.mediaLis.foreign,
                                    name: '外电',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#ffb743',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaLis.finished,
                                    name: '成品库',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#2694f7',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaLis.press,
                                    name: '报刊',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#19f9f9',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaLis.pending,
                                    name: '待编库',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#c8ed2b',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ],
                    color: ['#ffb743','#2694f7','#19f9f9','#c8ed2b']
                };

                library.setOption(option);
            },
            typeInit(){
                let library = this.$echarts.init(document.getElementById('type'));
                let option = {
                    title: {
                        text: '稿件类型',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        bottom: 10,
                        left: 'center',
                        data: ['文本', '图片','视频','音频','多媒体','图表','其他']
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '50%',
                            center: ['50%', '50%'],
                            selectedMode: 'single',
                            data: [
                                {
                                    value: this.mediaType.Text,
                                    name: '文本',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#a6c72a',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaType.Photo,
                                    name: '图片',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#258eec',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaType.Video,
                                    name: '视频',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#7710fd',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaType.Audio,
                                    name: '音频',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#18f0f0',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaType.MultiMedia,
                                    name: '多媒体',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#fd4f4f',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaType.Graph,
                                    name: '图表',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#e4a43c',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                },
                                {
                                    value: this.mediaType.otherType,
                                    name: '其他',
                                    label: {
                                        formatter: [
                                            '{title|{b}：{d}%}',
                                            '{hr|}',
                                            '{sunny|{c}}'
                                        ].join('\n'),
                                        borderColor: '#0b171c',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        backgroundColor: '#000',
                                        rich: {
                                            title: {
                                                backgroundColor: '#0d1d24',
                                                color: '#bdf6ff',
                                                fontSize: '22',
                                                padding: [9,27]
                                            },
                                            sunny: {
                                                color: '#15fb8f',
                                                fontSize: '22',
                                                backgroundColor: '#000',
                                                width: '100%',
                                                align: 'left',
                                                padding: [9,27]
                                            }
                                        }
                                    }
                                }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ],
                    color: ['#a6c72a','#258eec','#7710fd','#18f0f0','#fd4f4f','#e4a43c','#15fb8f']
                };

                library.setOption(option);
            },
            // 年
            selectYear(year){
                console.log('年',year);
            },
            // 月
            selectMonth(year, month){
                console.log('年',year,'月',month);
            },
            selectDay(year, month, day){
                console.log('年',year,'月',month,'日',day);
            },
            // 页面初始化
            pageInit(){
                // 页面调用1.1接口
                let date = this.$Fn.formatDate(new Date(), 'yyyy-MM-dd');
                console.log('当前日期',date);
                // 1.1 接口
                this.$api.getLanguageMediaTypeD(date).then((res) => {
                    console.log('1.1接口',res);
                    if (res && res.code == "1"){
                        this.getMediaType(res.data);
                    } else {
                        this.$message.error(res.message);
                    }
                });

                // 1.2接口
                this.$api.getLanguageLibD(date).then((res) => {
                    console.log('1.2接口',res);
                    if (res && res.code == "1"){
                        // 今日总部条数
                        this.dataNumber[0].value = res.data.amount.increment;
                        this.dataNumber[1].value = res.data.amount.totalCount;
                        this.dataNumber[2].value = res.data.amount.storage;

                        this.getLanguageLib(res.data);

                        // 语种获取

                        //
                    } else {
                        this.$message.error(res.message);
                    }
                })
            },
            // 1.1 整理第二个数据的函数
            getMediaType(object){
                let mediaType = [];
                for (let i in object){
                    mediaType.push(object[i]);
                }
                // 取出每一个类型的数据
                // text 文本
                this.mediaType.Text = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.Text
                }, 0);
                // photo 图片
                this.mediaType.Photo = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.Photo
                }, 0);
                // Video 视频
                this.mediaType.Video = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.Video
                }, 0);
                // Audio 音频
                this.mediaType.Audio = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.Audio
                }, 0);
                // Graph 图表
                this.mediaType.Graph = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.Graph
                }, 0);
                // MultiMedia 多媒体
                this.mediaType.MultiMedia = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.MultiMedia
                }, 0);
                // otherType 其他
                this.mediaType.otherType = mediaType.reduce((total, currentValue) => {
                    return total + currentValue.otherType
                }, 0);

                console.log('第二个图数据已经整理完成',this.mediaType);
                // 调用第二个统计图
                this.typeInit();
            },
            // 1.2 整理第一个数据的函数
            getLanguageLib(object){
                let languageLib = [];
                for (let i in object){
                    if (i != "amount"){
                        object[i].title = i;

                        languageLib.push(object[i]);
                    }
                }
                this.dataLanguage = languageLib;
                console.log('1.2整理',languageLib);
                // 取出每一个 稿件
                // 成品稿
                this.mediaLis.finished = languageLib.reduce((total, currentValue) => {
                    return total + currentValue.resFinished
                }, 0);
                // 待编稿
                this.mediaLis.pending = languageLib.reduce((total, currentValue) => {
                    return total + currentValue.resPending
                }, 0);
                // 外电稿
                this.mediaLis.foreign = languageLib.reduce((total, currentValue) => {
                    return total + currentValue.resForeign
                }, 0);
                // 社内
                this.mediaLis.press = languageLib.reduce((total, currentValue) => {
                    return total + currentValue.resPress
                }, 0);

                console.log('1.2整理后的值',this.mediaLis);

                this.libraryInit();
            },
            // 1.2 整理语种函数
            getLanguageData(object){
                for (let i in object){
    
                }
            }
        },
        mounted(){
            this.pageInit();
        },
        filters: {
            titleFilter(value){
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
            }
        }
    }
</script>

<style scoped>
    .manu-script-number {
        padding: 20px 30px;
    }
    /* 第一模块 */
    .manu-script-number .data-number {
        border: 2px solid #152a33;
        padding: 22px 10px;
    }
    .manu-script-number .data-number .data {
        display: inline-block;
        margin-right: 30px;
    }
    .manu-script-number .data-number .label{
        font-size: 27px;
        color: #ace2ec;
        background: #1d3a48;
        padding: 12px 65px;
    }
    .manu-script-number .data-number .number{
        font-size: 27px;
        color: #233639;
        background: #bdf6ff;
        padding: 12px 65px;
    }
    /* 第二模块 */
    .manu-script-number .data-pancake{
        margin-top: 30px;
        
    }
    .manu-script-number .data-pancake .manuscript-library{
        width: 49%;
        border: 2px solid #152a33;
        height: 545px;
        margin-right: 2%;
    }
    .manu-script-number .data-pancake .manuscript-type{
        width: 49%;
        border: 2px solid #152a33;
        height: 545px;
    }
    /* 第三模块 */
    .manu-script-number .data-language{
        margin-top: 10px;
        border: 2px solid #152a33;
        padding: 10px;
    }
    .manu-script-number .data-language .title {
        display: inline-block;
        font-size: 27px;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        padding: 87px 20px;
        color: #bdf6ff;
        background: #11242c;
        letter-spacing: 10px;
        margin-right: 18px;
    }
    .manu-script-number .data-language .language {
        display: inline-block;
        width: 200px;
        vertical-align: top;
        margin-right: 17px;
        margin-top: 5px;
    }
    
    .manu-script-number .data-language .language-type{
        height: 110px;
        display: block;
        position: relative;
    }
    .manu-script-number .data-language .language-type .bg{
        display: block;
        background: #0d1d24;
        height: 5px;
        position: relative;
    }
    .manu-script-number .data-language .language-type .bg::after{
        content: "";
        width: 200px;
        height: 2px;
        background: #1d3a48;
        position: absolute;
        bottom: -3px;
    }
    /* before */
    .manu-script-number .data-language > div:nth-child(2) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #155183;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(3) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #19f9f9;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(4) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #d6e012;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(5) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #ff5050;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(6) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #ffb743;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(7) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #9755ff;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(8) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #c12f5c;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language > div:nth-child(9) .language-type::before{
        content: "";
        width: 200px;
        height: 3px;
        background: #15fe91;
        position: absolute;
        top: -5px;
    }
    .manu-script-number .data-language .language-type .languageName{
        display: block;
        font-size: 22px;
        color: #bdf6ff;
        background: #0d1d24;
        padding: 8px 20px;
    }
    .manu-script-number .data-language .language-type .languageAllNumber{
        display: block;
        font-size: 22px;
        color: #bdf6ff;
        background: #061114;
        padding: 20px 0;
        text-align: center;
    }   
    .manu-script-number .data-language .language .date {
        display: block;
        margin-top: 15px;
        height: 105px;
        
    }
    .manu-script-number .data-language .language .date .dateName{
        display: block;
        font-size: 22px;
        color: #bdf6ff;
        background: #0d1d24;
        padding: 8px 20px;
    }
    .manu-script-number .data-language .language .date .dateAllNumber{
        display: block;
        font-size: 22px;
        color: #bdf6ff;
        background: #061114;
        padding: 20px 0;
        text-align: center;
        position: relative;
    }
    .manu-script-number .data-language .language .date .dateAllNumber::before{
        content: "";
        position: absolute;
        width: 200px;
        background: #1d3a48;
        height: 3px;
        bottom: -3px;
        left: 0;
    }
    .manu-script-number .data-language .language .date .dateAllNumber::after{
        content: "";
        position: absolute;
        width: 15px;
        height: 3px;
        bottom: -3px;
        right: 0px;
        background: #a2d8e4;
    }
    /* before */
    .manu-script-number .data-language > div:nth-child(2) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #155183;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(3) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #19f9f9;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(4) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #d6e012;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(5) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #ff5050;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(6) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #ffb743;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(7) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #9755ff;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(8) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #c12f5c;
        position: absolute;
    }
    .manu-script-number .data-language > div:nth-child(9) .language-type .bg::before{
        content: "";
        width: 15px;
        height: 5px;
        background: #15fe91;
        position: absolute;
    }
</style>
