<template>
    <div class="manu-script-number">
        <!-- 第一模块 -->
        <div class="data-number">
            <span v-for="item in dataNumber" class="data">
                <span class="label">{{ item.label }}</span><span class="number">{{ item.number }}</span>
            </span>
            <!-- 日历 -->
            <calendar-date></calendar-date>
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
                    <span class="languageName">{{ item.title }}</span>
                    <span class="languageAllNumber">{{ item.number }}</span>
                    <span class="bg"></span>
                </span>
                <span class="date">
                    <span class="dateName">日增量</span>
                    <span class="dateAllNumber">{{ item.dateNumber }}</span>
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
                        number: "18,308 条"
                    },
                    {
                        label: "历史数据量",
                        number: "61,728,778 条"
                    },
                    {
                        label: "总存储量",
                        number: "93,296 条"
                    }
                ],
                dataLanguage: [
                    {
                        title: '葡文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '法文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '阿文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '英文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '俄文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '中文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '西文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    },
                    {
                        title: '日文稿件量',
                        number: "158,702",
                        dateNumber: '17'
                    }
                ],
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
                                    value: 7882,
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
                                    value: 2416,
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
                                    value: 6826,
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
                                    value: 1184,
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
                                    value: 11136,
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
                                    value: 7405,
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
                                    value: 156,
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
                                    value: 11,
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
                                    value: 783,
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
                                    value: 42,
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
                                    value: 3,
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
            }
        },
        mounted(){
            this.libraryInit();
            this.typeInit();
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
