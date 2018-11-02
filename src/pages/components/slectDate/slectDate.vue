<template>
  <div class="selectTime">
					<span class="year" @click="getYearShow()">
						<span class="year-value" v-model="defaultYear">{{defaultYear}}</span>
						<ul v-show="dataTime.yearShow">
							<li v-for="item in dataTime.year" @click="selectYear(item)" :id="item">{{item}}</li>
						</ul>
					</span>
    <span class="month" @click="getMonthShow()">
						<span class="month-value" v-model="defaultMouth">{{defaultMouth}}</span>
						<ul v-show="dataTime.monthShow">
							<li v-for="item in dataTime.month" @click="selectMonth(item)">{{item}}</li>
						</ul>
					</span>
    <span class="day" @click="getDayShow()">
						<span class="day-value" v-model="defaultDay">{{defaultDay}}</span>
            <ul v-show="dataTime.dayShow">
							<li v-for="item in dataTime.day" @click="selectDay(item)">{{item}}</li>
						</ul>
					</span>
  </div>
</template>

<script>
  import { padDate ,someDay } from "../../../utils/public";
    export default {
        name: "slect-date",
        data(){
          return {
            dataTime: {
              year: [],
              yearShow: false,
              month: ['12', '11', '10', '09', '08', '07', '06', '05', '04', '03', '02', '01'],
              monthShow: false,
              dayShow: false,
              day: []
            }
          }
        },
      created: function () {
        let beforeDay = new Date().getTime() - 24 * 60 * 60 * 1000;
        let nowYear = new Date(beforeDay).getFullYear();
        let nowMonth = new Date(beforeDay).getMonth() + 1;
        let nowDay = new Date(beforeDay).getDate();
        this.defaultYear = nowYear;
        this.defaultMouth = padDate(nowMonth);
        this.defaultDay = padDate(nowDay)
        for (let i = 0; i < 50; i++) {
          this.dataTime.year.push(nowYear - i)
        }
        this.dataTime.day = someDay(this.defaultYear, this.defaultMouth)
      },
      methods: {
        getDateParams(){
          let date = this.defaultYear + '-' + this.defaultMouth + '-' + this.defaultDay;
          this.$emit('childEvent', { date: date });
          this.$emit('childEventMediaType', { date: date });
        },
        getYearShow(){
          this.dataTime.yearShow = !this.dataTime.yearShow;
          this.dataTime.dayShow = false;
          this.dataTime.monthShow = false;
        },
        getMonthShow(){
          this.dataTime.monthShow = !this.dataTime.monthShow;
          this.dataTime.yearShow = false;
          this.dataTime.dayShow = false;
        },
        getDayShow(){
          this.dataTime.dayShow = !this.dataTime.dayShow;
          this.dataTime.yearShow = false;
          this.dataTime.monthShow = false;
        },
        selectYear(item){
          this.defaultYear = item;
          this.dataTime.day = someDay(this.defaultYear,this.defaultMouth);
          this.dataTime.dayShow = false;
          this.dataTime.monthShow = false;
          this.getDateParams();
        },
        selectMonth(item){
          this.defaultMouth = item;
          this.dataTime.day = someDay(this.defaultYear,this.defaultMouth)
          this.dataTime.yearShow = false;
          this.dataTime.dayShow = false;
          this.getDateParams();
        },
        selectDay(item){
          this.defaultDay = item;
          this.dataTime.yearShow = false;
          this.dataTime.monthShow = false;
          this.getDateParams();
        }
      },
      mounted(){
          this.getDateParams();
      }
    }
</script>

<style scoped lang="less">
  .selectTime {
    display: flex;
    justify-content: space-between;
    width: 320px;
    .year, .month, .day {
      width: 100px;
      padding-right: 20px;
      box-sizing: border-box;
      border: 1px solid #1d3322;
      text-align: center;
      line-height: 36px;
      color: #bdf6ff;
      background-color: #0c191e;
      position: relative;
      cursor: pointer;
      ul{
        position: absolute;
        left: -1px;
        width: 100px;
        top:35px;
        background-color: #0c191e;
        max-height: 200px;
        overflow-x: hidden;
        overflow-y: scroll;
        box-sizing: border-box;
        border: 1px solid #1d3322;
        z-index: 200;
        border-top: none;
        li{
          width: 100%;
          font-size: 16px;
          line-height: 36px;
          text-align: center;
        }
      }
    }
  }
</style>
