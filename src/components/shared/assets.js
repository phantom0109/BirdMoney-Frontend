import React from "react";
import ReactDOM from "react-dom";
import { Interval, StackedColumnChart } from "bizcharts";

const data = [
  {
    month: "Jan",
    value: 3,
    type: "BIRD",
  },
  {
    month: "Feb",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Mar",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Apr",
    value: 4,
    type: "BIRD",
  },
  {
    month: "May",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Jun",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Jul",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Aug",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Sep",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Oct",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Nov",
    value: 4,
    type: "BIRD",
  },
  {
    month: "Dec",
    value: 4,
    type: "BIRD",
  },

  {
    month: "Jan",
    value: 3,
    type: "ETH",
  },
  {
    month: "Feb",
    value: 4,
    type: "ETH",
  },
  {
    month: "Mar",
    value: 6,
    type: "ETH",
  },
  {
    month: "Apr",
    value: 2,
    type: "ETH",
  },
  {
    month: "May",
    value: 7,
    type: "ETH",
  },
  {
    month: "Jun",
    value: 8,
    type: "ETH",
  },
  {
    month: "Jul",
    value: 9,
    type: "ETH",
  },
  {
    month: "Aug",
    value: 2,
    type: "ETH",
  },
  {
    month: "Sep",
    value: 5,
    type: "ETH",
  },
  {
    month: "Oct",
    value: 6,
    type: "ETH",
  },
  {
    month: "Nov",
    value: 2,
    type: "ETH",
  },
  {
    month: "Dec",
    value: 7,
    type: "ETH",
  },
  {
    month: "Jan",
    value: 3.5,
    type: "Others",
  },
  {
    month: "Feb",
    value: 5,
    type: "Others",
  },
];

function Assets() {
  return (
    <StackedColumnChart
      height={320}
      data={data}
      title={{
        visible: false,
        text: "Assets",
      }}
      forceFit
      padding="auto"
      xField="month"
      yField="value"
      yAxis={{
        min: 0,
      }}
      color={["#eff0ff", "#0066ff", "#96c1ff"]}
      stackField="type"
    >

    </StackedColumnChart>
  );
}

// import React from "react";
// import { G2, Chart, Tooltip, Interval } from "bizcharts";

// const data = [
//   { name: "BIRD", 月份: "Jan.", 月均降雨量: 18.9 },
//   { name: "BIRD", 月份: "Feb.", 月均降雨量: 28.8 },
//   { name: "BIRD", 月份: "Mar.", 月均降雨量: 39.3 },
//   { name: "BIRD", 月份: "Apr.", 月均降雨量: 81.4 },
//   { name: "BIRD", 月份: "May", 月均降雨量: 47 },
//   { name: "BIRD", 月份: "Jun.", 月均降雨量: 20.3 },
//   { name: "BIRD", 月份: "Jul.", 月均降雨量: 24 },
//   { name: "BIRD", 月份: "Aug.", 月均降雨量: 35.6 },
//   { name: "Others", 月份: "Jan.", 月均降雨量: 12.4 },
//   { name: "Others", 月份: "Feb.", 月均降雨量: 23.2 },
//   { name: "Others", 月份: "Mar.", 月均降雨量: 34.5 },
//   { name: "Others", 月份: "Apr.", 月均降雨量: 99.7 },
//   { name: "Others", 月份: "May", 月均降雨量: 52.6 },
//   { name: "Others", 月份: "Jun.", 月均降雨量: 35.5 },
//   { name: "Others", 月份: "Jul.", 月均降雨量: 37.4 },
//   { name: "Others", 月份: "Aug.", 月均降雨量: 42.4 },
// ];

// function Assets() {
//   return (
//     <Chart
//       height={450}
//       padding="auto"
//       data={data}
//       title={{
//         visible: true,
//         text: "堆叠柱状图",
//       }}
//       autoFit
//     >
//       <Interval
//         adjust={[
//           {
//             type: "stack",
//           },
//         ]}
//         color="name"
//         position="月份*月均降雨量"
//       />
//       <Tooltip shared />
//     </Chart>
//   );
// }

export default Assets;
