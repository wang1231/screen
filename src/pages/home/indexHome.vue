<template>
    <div class="manu-script-number">
        <!-- 导航 -->
        <nav-bar @switchView="switchView"></nav-bar>
        <!-- 视图层切换 -->
        <div>
            <component :is="views"></component>
        </div>

    </div>
</template>

<script>
    import navBar from '@/pages/components/nav/navBar';
    import manuscriptNumber from "@/pages/manuscriptNumber/manuscriptNumber"
    import ManuscriptChart from '@/pages/manuscriptChart/manuscriptChart'
    export default {
        components: {
            navBar,
            manuscriptNumber,
            ManuscriptChart
        },
        data () {
            return {
                views: manuscriptNumber,
                viewsValue: "manuscriptNumber"
            }
        },
        methods: {
            // 切换视频层
            switchView(){
                if (this.viewsValue == "manuscriptNumber"){
                    this.views = ManuscriptChart;
                    this.viewsValue = "ManuscriptChart";
                } else {
                    this.views = manuscriptNumber;
                    this.viewsValue = "manuscriptNumber";
                }
            }

        }
    }
</script>
