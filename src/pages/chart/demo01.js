import React, { PureComponent } from 'react';
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
// import 'echarts/lib/component/toolbox';
// import 'echarts/lib/component/legend';

class Center extends PureComponent {
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: { text: '条形图' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

    const roseChart = echarts.init(document.getElementById('rose'));
    roseChart.setOption({
      title: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      calculable: true,
      series: [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 110],
          center: ['25%', '50%'],
          roseType: 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' }
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [30, 110],
          center: ['75%', '50%'],
          roseType: 'area',
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' }
          ]
        }
      ]
    })
  }
  render() {
    return (
      <div>
        <div id="main" style={{ width: 400, height: 400 }}></div>
        <div id="rose" style={{ width: 500, height: 400 }}></div>
      </div>
    );
  }
}

export default Center;
