<template>
	<div class="mc-content">
		<div class="mc-left">
			<div class="left-top">
				<div class="lt-title">24小时入库情况</div>
        <slect-date @childEvent="_getTrendFourLibTrend"></slect-date>
			</div>
			<div class="putHours" id="putHours"></div>
		</div>
		<div class="mc-right">
			<div class="left-top">
				<div class="lt-title">按库细分详情</div>
        <slect-date @childEventMediaType="_getMediaTypeTrend"></slect-date>
			</div>
			<div class="putHours" id="libMedia"></div>
		</div>
	</div>
</template>

<script>
  import slectDate from '../components/slectDate/slectDate'
  	export default {
		name: "chart-content",
      components: {
        slectDate
      },
		data() {
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
		methods: {
      _getTrendFourLibTrend(date) {
        let params = {
          date: date.date
        };
        this.$api.getTrendFourLibTrend(params).then(res => {
          let putData = res.data;
          //依次是x轴坐标，社内报刊，外电，成品，待编库
          this.renderChart(putData.xAis, putData.resPress, putData.resForeign, putData.resFinished, putData.resPending)
        })
      },
			renderChart(xAxis, resPress, resForeign, resFinished, resPending) {
				let putHours = this.$echarts.init(document.getElementById('putHours'))
				let option = {
					title: {
						text: '入库量',
						left: '1%',
						textStyle: {
							color: '#bdf6ff',
							fontSize: '12'
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {            // 坐标轴指示器，坐标轴触发有效
							type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: [{ 'name': '社内报刊', textStyle: { color: '#2694f7' }},
						{ 'name': '成品', textStyle: { color: '#19f9f9' }},
						{ 'name': '外电', textStyle: { color: '#ffb743' }},
						{ 'name': '待编库', textStyle: { color: '#c8ed2b' }}],
						right: '2%',
						borderRadius: 10
					},
					calculable: true,
					grid: {
						width: '90%',
						left: '5%',
						height: '86%',
						top: '9%'
					},
					xAxis: [{
						type: 'category',
						data: xAxis,
						axisLabel: {
							color: '#bdf6ff'
						},
						axisTick: { show: false }
					}],
					yAxis: [
						{
							type: 'value',
							axisLine: { show: false },
							axisTick: { show: false },
							axisLabel: {
								show: true,
								color: '#bdf6ff'
							},
							splitLine: {
								show: true,
								lineStyle: {
									// 使用深浅的间隔色
									color: ['#aaa', '#ddd'],
									type: 'dashed'
								}
							}
						}
					],
					series: [
						{
							name: '社内报刊',
							type: 'bar',
							data: resPress,
							itemStyle: {
								color: '#2694f7'
							}
						},
						{
							name: '成品',
							type: 'bar',
							data: resFinished,
							itemStyle: {
								color: '#19f9f9'
							}
						},
						{
							name: '外电',
							type: 'bar',
							data: resForeign,
							itemStyle: {
								color: '#ffb743'
							}
						},
						{
							name: '待编库',
							type: 'bar',
							data: resPending,
							itemStyle: {
								color: '#c8ed2b'
							}
						}
					]
				};
				putHours.setOption(option)
			},
			renderChartLibMedia(textData,photoData,videoData,multiMediaData,graphData,audioData) {
				let libMedia = this.$echarts.init(document.getElementById('libMedia'))
				let option = {
					title: {
						text: '该库类型量',
						left: '1%',
						textStyle: {
							color: '#bdf6ff',
							fontSize: '12'
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {            // 坐标轴指示器，坐标轴触发有效
							type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: [{ 'name': '文字', textStyle: { color: '#19f9f9' }},
						{ 'name': '图片', textStyle: { color: '#ffb743' }},
						{ 'name': '多媒体', textStyle: { color: '#15fe91' }},
						{ 'name': '视频', textStyle: { color: '#c8ed2b' }},
						{ 'name': '音频', textStyle: { color: '#9755ff' }},
						{ 'name': '图表', textStyle: { color: '#2694f7' }},
						{ 'name': '其他', textStyle: { color: '#ff5050' }}],
						right: '2%',
						borderRadius: 10
					},
					calculable: true,
					grid: {
						width: '90%',
						left: '5%',
						height: '86%',
						top: '9%'
					},
					xAxis: [
						{
							type: 'category',
							data: ['社内', '成品', '待编', '外电'],
							axisLabel: {
								color: '#bdf6ff'
							},
							axisTick: { show: false }
						}
					],
					yAxis: [
						{
							type: 'value',
							axisLine: { show: false },
							axisTick: { show: false },
							axisLabel: {
								show: true,
								color: '#bdf6ff'
							},
							splitLine: {
								show: true,
								lineStyle: {
									// 使用深浅的间隔色
									color: ['#aaa', '#ddd'],
									type: 'dashed'
								}
							}
						}
					],
					series: [
						{
							name: '文字',
							type: 'bar',
							data: textData,
							itemStyle: {
								color: '#19f9f9'
							}
						},
						{
							name: '图片',
							type: 'bar',
							data: photoData,
							itemStyle: {
								color: '#ffb743'
							}
						},
						{
							name: '多媒体',
							type: 'bar',
							data: multiMediaData,
							itemStyle: {
								color: '#15fe91'
							}
						},
						{
							name: '视频',
							type: 'bar',
							data: videoData,
							itemStyle: {
								color: '#c8ed2b'
							}
						},
						{
							name: '音频',
							type: 'bar',
							data: audioData,
							itemStyle: {
								color: '#9755ff'
							}
						},
						{
							name: '图表',
							type: 'bar',
							data: graphData,
							itemStyle: {
								color: '#2694f7'
							}
						}
					]
				};
				libMedia.setOption(option)
			},
		_getMediaTypeTrend(date) {
			let getDateTrend = date.date;
			// 社内报刊
			let resPress = this.$api.getMediaTypeTrend({ date: getDateTrend, libId: 6 }).then(res => res.data);
			// 外电
			let resForeign = this.$api.getMediaTypeTrend({ date: getDateTrend, libId: 4 }).then(res => res.data);
			// 成品
			let resFinished = this.$api.getMediaTypeTrend({ date: getDateTrend, libId: 3 }).then(res => res.data);
			// 待编库
			let resPending = this.$api.getMediaTypeTrend({ date: getDateTrend, libId: 1 }).then(res => res.data);
			let textData = [],photoData = [],videoData = [],multiMediaData = [],graphData = [],audioData = [],otherTypeData = [];
			Promise.all([resPress,resFinished,resPending,resForeign]).then(res => {
			// console.log(res);
			res.forEach(value => {
				textData.push(value.Text.reduce((a,b) => a + b));
				photoData.push(value.Photo.reduce((a,b) => a + b));
				videoData.push(value.Video.reduce((a,b) => a + b));
				multiMediaData.push(value.MultiMedia.reduce((a,b) => a + b));
				graphData.push(value.Graph.reduce((a,b) => a + b));
				audioData.push(value.Audio.reduce((a,b) => a + b));
				// otherTypeData.push(value.otherType.reduce((a,b) => a+b));
			});
			// console.log(multiMediaData)
			this.renderChartLibMedia(textData,photoData,videoData,multiMediaData,graphData,audioData);
			})
		}
		}
    }
</script>

<style scoped lang="less">
  .mc-content {
    width: 100%;
    height: 472px;
    margin-top: 25px;
    border: 1px solid #1d3322;
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    .mc-left, .mc-right {
      width: 50%;
      /*background-color: #cccccc;*/
      padding-right: 50px;
      box-sizing: border-box;
      box-sizing: border-box;
    }
    .putHours {
      width: 100%;
      height: 380px;
      margin-top: 10px;
    }
    .left-top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 36px;
      .lt-title {
        line-height: 36px;
        color: #bdf6ff;
        font-size: 16px;
        padding-left: 5px;
      }
    }
  }
</style>
