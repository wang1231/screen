<template>
  <div class="manu-chart-header">
    <div class="mch-wrap">
      <div class="mchw-left">
        <div class="left-n">
          <div class="left">{{users.usersLeft.name}}</div>
          <div class="right">{{users.usersLeft.value}}</div>
        </div>
      </div>
      <div class="mchw-right">
        <div class="right-n">
          <div class="left">{{users.usersRight.name}}</div>
          <div class="right">{{users.usersRight.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chart-header",
    data() {
      return {
        users: {
          usersLeft: {
            name: '社内用户量',
            value: ''
          },
          usersRight: {
            name: '社外用户量',
            value: ''
          }
        }
      }
    },
     methods: {
      _getUser(){
        this.$api.getUser().then(res => {
          this.users.usersLeft.value = res.data.sheNei;
          this.users.usersRight.value = res.data.sheWai;
          this.timer = setTimeout(() => {
            this._getUser();
          },60 * 1000)
        })
      }
     } ,
    mounted(){
      this._getUser();
    },
    beforeDestroy(){
      if (this.timer){
        clearTimeout(this.timer)
      }
    }
  }
</script>

<style scoped lang="less">
  .manu-chart-header {
    width: 100%;
    height: 100%;
    .mch-wrap {
      width: 1880px;
      height: 60px;
      margin: 0 auto;
      .mchw-left {
        float: left;
        width: 920px;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #1d3322;
        padding: 3px;
        font-size: 24px;
        color: #bdf6ff;
        .left-n {
          width: 100%;
          height: 100%;
          border: 1px solid #1d3322;
          display: flex;
          flex-direction: row;
          .left {
            width: 40%;
            line-height: 50px;
            text-align: center;
            background-color: #1d3a48;
            color: #bdf6ff;
          }
          .right {
            width: 60%;
            line-height: 50px;
            text-align: left;
            padding-left: 10px;
            box-sizing: border-box;
          }
        }
      }
      .mchw-right {
        float: right;
        width: 920px;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #1d3322;
        padding: 3px;
        font-size: 24px;
        color: #bdf6ff;
        .right-n {
          width: 100%;
          height: 100%;
          border: 1px solid #1d3322;
          display: flex;
          flex-direction: row;
          .left {
            width: 40%;
            line-height: 50px;
            text-align: center;
            background-color: #1d3a48;
            color: #bdf6ff;
          }
          .right {
            width: 60%;
            line-height: 50px;
            text-align: left;
            padding-left: 10px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
</style>
