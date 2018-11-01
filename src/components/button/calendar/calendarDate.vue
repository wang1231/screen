<template>
    <span class="calendar">
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                <i class="el-icon-date"></i>
                日历
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <div class="dropdown">
                    <div class="year">
                        <h4>{{ currentYear }}</h4>
                        <ul>
                            <li v-for="year in yearData" @click="selectYear(year)">{{ year }}</li>
                        </ul>
                    </div>
                    <div class="month">
                        <h4>{{ currentMonth }}</h4>
                        <ul>
                            <li v-for="month in monthData" @click="selectMonth(month)">{{ month }}</li>
                        </ul>
                    </div>
                    <div class="day">
                        <h4>{{ currentDay }}</h4>
                        <ul>
                            <li v-for="day in dayData" @click="selectDay(day)">{{ day }}</li>
                        </ul>
                    </div>
                </div>
            </el-dropdown-menu>
        </el-dropdown>
    </span>
</template>

<script>
export default {
    data () {
        return {
            yearData: [],                   // 年列表
            monthData: [],                  // 月列表
            dayData: [],                    // 日列表
            currentYear: "2018",            // 默认年
            currentMonth: "1",              // 默认月
            currentDay: "1"                 // 默认日
        }
    },
    methods: {
        yearInit(){
            let date = new Date().getFullYear();
            for (let i = 0; i < 100; i++){
                this.yearData.push(date);
                date -= 1;
            }
        },
        monthInit(){
            let month = 1;
            for (let i = 0; i < 12; i++){
                this.monthData.push(month);
                month++;
            }
        },
        dayInit(){
            let day = 1;
            for (let i = 0; i < 31; i++){
                this.dayData.push(day);
                day++;
            }
        },
        // 选择年
        selectYear(year){
            this.currentYear = year;

            this.$emit('selectYear',year);
        },
        // 选择月
        selectMonth(month){
            this.currentMonth = month;

            this.$emit('selectMonth',this.currentYear, month);
        },
        // 选择日
        selectDay(day){
            this.currentDay = day;

            this.$emit('selectDay',this.currentYear, this.currentMonth, day);
        }
    },
    mounted(){
        this.yearInit();
        this.monthInit();
        this.dayInit();
    }
}
</script>

<style>
    .el-dropdown-menu{
        border: 1px solid #000a0c; 
        background-color: #000a0c;
    }
    .calendar .el-dropdown-link{
        font-size: 27px;
        color: #ace2ec;
    }
    .calendar .el-dropdown{
        background: #1d3a48;
        padding: 12px;
    }
    .dropdown > div {
        display: inline-block;
    }
    .dropdown h4{
        font-size: 16px;
        color: #bdf6ff;
        background: #1d3a48;
        text-align: center;
        padding: 10px 40px;
    }
    .dropdown ul{
        height: 200px;
        overflow: hidden;
        overflow-y: auto;
    }

    .dropdown ul li {
        text-align: center;
        padding: 10px 40px;
        background: #000a0c;
        color: #bdf6ff;
        cursor: pointer;
    }
    .dropdown ul li:hover{
        background: #1d3a48;
    }
    .dropdown ul::-webkit-scrollbar{
        width: 8px;
        height: 1px;
        background: #000a0c;
    }
    .dropdown ul::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: #5f8086;
    }
    .dropdown ul::-webkit-scrollbar-track{
        border-radius: 10px;
    }
    .el-dropdown-menu{
        padding: 0;
    }
</style>
