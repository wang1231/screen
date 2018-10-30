<template>
    <div class="nav-bar clearfix">
        <div class="nav fl">
            <img src="./images/nav.png" alt="">
        </div>
        <div class="btn fr" @click="switchView()">
            <img src="./images/btn.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        switchView(){
            this.$emit('switchView');
        }
    }
}
</script>

<style scoped>
    .nav-bar img {
        width: 100%;
        height: 100%;
    }
    .nav-bar {
        height: 80px;
        overflow: hidden;
    }
    .nav-bar .nav {
        width: 1840px;
        height: 80px;
    }
    .nav-bar .btn {
        width: 80px;
        height: 80px;
    }

</style>
