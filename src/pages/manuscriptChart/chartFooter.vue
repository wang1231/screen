<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-top-left">
        <div class="left-n">
          <div class="left">
            <span class="top-bottom"></span>
            <p>此刻正在</p>
            <p>浏览的稿件</p>
          </div>
          <div class="right">
            <ul>
              <li v-for="item in visitData" :id="item.id"><em></em>{{item.headLine}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-top-right">
        <div class="right-n">
          <div class="left"><span class="top-bottom"></span>
            <p>此刻正在</p>
            <p>下载的稿件</p></div>
          <div class="right">
            <ul>
              <li v-for="item in downData" :id="item.id"><em></em>{{item.headLine}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="server">
        服务调用量
      </div>
      <ul class="list">
        <li class="list-item" v-for="item in serverData">
          <em></em>
          <p class="title">{{item.title}}</p>
          <h2 class="number">{{item.total}}</h2>
          <div class="bottom-wrap">
            <div class="bw-internal"></div>
          </div>
          <div class="list-item-bottom">
            <div class="lib-left">
              <span>日增量</span>
              <span>{{item.increment}}</span>
            </div>
            <div class="lib-right">
              <span>日均增量</span>
              <span>{{item.average}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "chart-footer",
    data() {
      return {
        serverData: [],
        visitData: [],
        downData: []
      }
    },
    methods: {
      _getServer() {
        this.$api.getService().then(res => {
          let data = res.data;
          this.serverData = [];
          let serverName = ['全文检索服务', '稿件详情服务', '获取图片服务', '打包下载服务', '下载附件服务', '下载CNML服务'];
          data.searchApi.title = serverName[0];
          data.resApi.title = serverName[1];
          data.pictureApi.title = serverName[2];
          data.zipApi.title = serverName[3];
          data.attachmentApi.title = serverName[4];
          data.cnmlApi.title = serverName[5];
          this.serverData.push(data.searchApi)
          this.serverData.push(data.resApi)
          this.serverData.push(data.pictureApi)
          this.serverData.push(data.zipApi)
          this.serverData.push(data.attachmentApi)
          this.serverData.push(data.cnmlApi)
        })
      },
      _getDownLoad: function () {
        this.$api.getDownLoad().then(res => {
          if (res.code == 1) {
            let downData = [...res.data];
            // console.log(localStorage.getItem('downData'));
            if (downData.length) {
              localStorage.setItem('downData', JSON.stringify(downData))
              this.downData = downData
            } else {
              if (localStorage.getItem('downData')) {
                this.downData = JSON.parse(localStorage.getItem('downData'));
              }
            }
          }
        })
      },
      _getVisit() {
        this.$api.getVisit().then(res => {
          if (res.code == 1) {
            let visitData = [...res.data]
            if (visitData.length) {
              localStorage.setItem('visitData', JSON.stringify(visitData))
              this.visitData = visitData
            } else {
              if (localStorage.getItem('visitData')) {
                this.visitData = JSON.parse(localStorage.getItem('visitData'));
              }
            }
          }
        })
      }
    },
    mounted() {
      this._getServer();
      this._getDownLoad();
      this._getVisit();
      this.timer = setInterval(() => {
        this._getServer();
        this._getDownLoad();
        this._getVisit();
      },60 * 1000)
    },
    beforeDestroy(){
      if (this.timer){
        clearInterval(this.timer)
      }
    }
  }
</script>

<style scoped lang="less">
  .footer {
    width: 100%;
    margin-top: 25px;
    .footer-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .top-bottom {
        height: 4px;
        width: 100%;
        background-color: #ffb743;
        position: absolute;
        left: 0;
        top: 0;
      }
      .footer-top-left {
        width: 920px;
        height: 140px;
        box-sizing: border-box;
        border: 2px solid #152a33;
        padding: 3px;
        font-size: 24px;
        color: #bdf6ff;
        .left-n {
          width: 100%;
          height: 100%;
          border: 1px solid #11242c;
          display: flex;
          flex-direction: row;
        }
      }
      .footer-top-right {
        width: 920px;
        height: 140px;
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
          .top-bottom {
            background-color: #17c4c6;
          }
          em {
            background-color: #17c4c6;
          }
        }
      }
    }
    .footer-bottom {
      margin-top: 20px;
      width: 100%;
      height: 208px;
      box-sizing: border-box;
      padding: 3px;
      border: 2px solid #152a33;
      display: flex;
      flex-direction: row;
      .server {
        width: 190px;
        height: 100%;
        line-height: 198px;
        background-color: #11242c;
        color: #bdf6ff;
        text-align: center;
        font-size: 24px;
      }
      .list {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 100%;
        width: calc(100% - 190px);
        justify-content: space-between;
        padding: 0 16px;
        .list-item {
          width: 270px;
          height: 194px;
          padding: 20px 20px 0 20px;
          border: 1px solid #11242c;
          box-sizing: border-box;
          position: relative;
          em {
            width: 50px;
            height: 4px;
            background-color: #17c4c6;
            position: absolute;
            left: 0;
            top: 0;
          }
          .title {
            line-height: 35px;
            color: #729ba4;
            font-size: 24px;
          }
          .number {
            line-height: 46px;
            color: #bdf6ff;
            font-size: 30px;
          }
          .bottom-wrap {
            height: 2px;
            width: 100%;
            background-color: #1d3a48;
            margin: 4px 0;
            position: relative;
            .bw-internal {
              position: absolute;
              left: 0;
              top: 0;
              width: 20%;
              height: 2px;
              background-color: #19f9f9;
            }
          }
          .list-item-bottom {
            width: 100%;
            display: flex;
            flex-direction: row;
            div {
              width: 50%;
              padding-top: 4px;
              display: flex;
              flex-direction: column;
              span:nth-of-type(1) {
                line-height: 36px;
                color: #729ba4;
                font-size: 24px;
              }
              span:nth-of-type(2) {
                line-height: 40px;
                color: #bdf6ff;
                font-size: 30px;
              }
            }
          }
        }
        li:nth-of-type(2) em {
          background-color: #826229;
        }
        li:nth-of-type(2) .bottom-wrap .bw-internal {
          background-color: #826229;
        }
        li:nth-of-type(3) em {
          background-color: #ff5050;
        }
        li:nth-of-type(3) .bottom-wrap .bw-internal {
          background-color: #ff5050;
        }
        li:nth-of-type(4) em {
          background-color: #c8ed2b;
        }
        li:nth-of-type(4) .bottom-wrap .bw-internal {
          background-color: #c8ed2b;
        }
        li:nth-of-type(5) em {
          background-color: #7547c9;
        }
        li:nth-of-type(5) .bottom-wrap .bw-internal {
          background-color: #7547c9;
        }
        li:nth-of-type(6) em {
          background-color: #15fe91;
        }
        li:nth-of-type(6) .bottom-wrap .bw-internal {
          background-color: #15fe91;
        }
      }
    }
  }

  .left {
    width: 176px;
    text-align: center;
    background-color: #1d3a48;
    color: #bdf6ff;
    box-sizing: border-box;
    padding-top: 35px;
    position: relative;
  }

  .right {
    width: 734px;
    box-sizing: border-box;
    overflow: hidden;
    ul {
      width: 100%;
      padding: 15px 0;
      li {
        width: 100%;
        box-sizing: border-box;
        padding-left: 45px;
        position: relative;
        color: #98cbd6;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 36px;
        em {
          width: 5px;
          height: 5px;
          background-color: #ffb743;
          border-radius: 100%;
          position: absolute;
          left: 17px;
          top: 12px;
        }
      }
    }
  }
</style>
