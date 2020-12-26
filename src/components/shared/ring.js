import React from 'react';
import { DonutChart } from 'bizcharts';

// 数据源
const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: '其它',
    value: 5,
  },
];

function RingChart() {
  return (
    <DonutChart
      data={data}
      title={{
        visible: false,
        text: '环图',
      }}
      forceFit
      description={{
        visible: false,
        text: '环图的外半径决定环图的大小，而内半径决定环图的厚度。',
      }}
      radius={0.8}
      // padding='auto'
      angleField='value'
      colorField='type'
    />
  );
}

export default RingChart;