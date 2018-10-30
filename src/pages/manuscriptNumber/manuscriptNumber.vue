<template>
    <div class="manu-script-number">
        <!-- 第一模块 -->
        <div class="data-number">
            <span v-for="item in dataNumber" class="data">
                <span class="label">{{ item.label }}</span><span class="number">{{ item.number }}</span>
            </span>
        </div>
        <!-- 第二模块 -->
        <div class="data-pancake clearfix">
            <div class="manuscript-library fl">
                <button @click="aa()">弹框</button>
            </div>
            <div class="manuscript-type fl">

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
    </div>
</template>

<script>
    import finishedDetails from "@/pages/manuscriptNumber/components/finishedDetails"
    export default {
        components: {
            finishedDetails
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
                    visible: true
                }
            }
        },
        methods: {
            aa(){
                this.finishedData.visible = true;
            }
        }
    }
</script>

<style scoped>
    .manu-script-number {
        padding: 20px 30px;
    }
    /* 第二模块 */
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
