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
	name: 'Ry',
	id: 2
}, {
	name: '挺度',
	id: 3
}, {
	name: '耐折度',
	id: 4
}, {
	name: '干拉力',
	id: 5
}, {
	name: '耐破度',
	id: 6
}, {
	name: '荧光亮度',
	id: 7
}, {
	name: 'SM信号',
	id: 8
}, {
	name: 'W信号',
	id: 9
}];

var vm = new Vue({
	el: '#panel',
	data: {
		noteclass: {
			name: '项目',
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
			value: '0'
		},
		xAxis: {
			name: '自变量',
			options: ananyList,
			value: '0'
		},
		yAxis: {
			name: '因变量',
			options: ananyList,
			value: '1'
		},
		chartType: {
			name: '图表类型',
			options: [{
				name: '散点图',
				id: 0,
				desc: '查看原始数据分布状况'
			}, {
				name: '线型图',
				id: 1,
				desc: '查看趋势情况'
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