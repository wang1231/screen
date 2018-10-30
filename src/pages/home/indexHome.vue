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
    export default {
        components: {
            navBar,
            manuscriptNumber
        },
        data () {
            return {
                views: manuscriptNumber
            }
        },
        methods: {
            // 切换视频层
            switchView(){

            }

        }
    }
</script>
