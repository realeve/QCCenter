var myselect = {
	template: '#my-select-tpl',
	props: ['info']
};
var ananyList = [{
	name: '整洁度',
	id: 0
}, {
	name: '白度',
	id: 1
}, {
	name: '挺度',
	id: 2
}, {
	name: '荧光亮度',
	id: 3
}, {
	name: 'SM信号',
	id: 4
}, {
	name: 'W信号',
	id: 5
}, {
	name: '耐折度',
	id: 6
}, {
	name: '干拉力',
	id: 7
}, {
	name: '耐破度',
	id: 8
}];

var vm = new Vue({
	el: '#panel',
	data: {
		area: {
			name: '地区',
			options: [{
				name: '成都市',
				id: 0
			}, {
				name: '资阳市',
				id: 1
			}, {
				name: '资阳县',
				id: 2
			}],
			value: '0',
			addAll:true
		},
		noteType: {
			name: '券别',
			options: [{
				name: '佰圆券',
				id: 0
			}, {
				name: '拾圆券',
				id: 1
			}, {
				name: '壹圆券',
				id: 2
			}],
			value: '0',
			addAll:true
		},
		noteClass: {
			name: '层级',
			options: [{
				name: 'A类',
				id: 0,
				desc: '票面整洁、完整、较新，无破损，无涂鸦文字。'
			}, {
				name: 'B类',
				id: 1,
				desc: '大部分较整洁，无破损，水印区有蹭脏。'
			}, {
				name: 'C类',
				id: 2,
				desc: '票面较脏，无破损，有折痕，有涂鸦文字。'
			}, {
				name: 'D类',
				id: 3,
				desc: '票面脏污严重，有裂口、折痕、涂鸦文字，有补的痕迹。'
			}],
			value: '0',
			addAll:true
		},
		year: {
			name: '年份',
			options: [{
				name: '2008年',
				id: 0
			}, {
				name: '2009年',
				id: 1
			}, {
				name: '2010年',
				id: 2
			}, {
				name: '2011年',
				id: 3
			}, {
				name: '2012年',
				id: 4
			}, {
				name: '2013年',
				id: 5
			}, {
				name: '2014年',
				id: 6
			}, {
				name: '2015年',
				id: 7
			}, {
				name: '2016年',
				id: 8
			}],
			value: '0',
			addAll:true
		},
		xAxis: {
			name: '自变量',
			options: [{
				name: '地区',
				id: 0
			}, {
				name: '券别',
				id: 1
			}, {
				name: '层级',
				id: 2
			}, {
				name: '年份',
				id: 3
			}],
			value: '0'
		},
		yAxis: {
			name: '质量指标',
			options: ananyList,
			value: '0'
		},
		chartType: {
			name: '图表类型',
			options: [{
				name: '散点图',
				id: 0
			}, {
				name: '线型图',
				id: 1
			}],
			value: '0'
		}
	},
	components: {
		'my-select': myselect
	},
	methods: {
		updateChart: function() {
			console.log(this.noteclass.value);
			console.log(this.xAxis.value);
			console.log(this.yAxis.value);
		}
	}
});