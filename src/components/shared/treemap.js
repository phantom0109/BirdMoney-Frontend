import React from 'react';
import DataSet from "@antv/data-set";
import { Chart, Polygon } from "bizcharts";

const { DataView } = DataSet;
const data = {
  name: "root",
  children: [
    { name: "Equities (ICO)", value: 560 },
    { name: "Liquidity (ETH/BIRD)", value: 300 },
    { name: "Fixed Income", value: 100 },
    { name: "Commodities", value: 140 },
  ],
};
const dv = new DataView();
dv.source(data, {
  type: "hierarchy",
}).transform({
  field: "value",
  type: "hierarchy.treemap",
  tile: "treemapResquarify",
  as: ["x", "y"],
});
// 将 DataSet 处理后的结果转换为 G2 接受的数据
const nodes = [];
for (const node of dv.getAllNodes()) {
  if (node.data.name === "root") {
    continue;
  }
  const eachNode = {
    name: node.data.name,
    x: node.x,
    y: node.y,
    value: node.data.value,
  };

  nodes.push(eachNode);
}

const scale = {
  x: {
    nice: true,
  },
  y: {
    nice: true,
  },
};
// console.log(dv.rows);

const TreeMap = (props) => {
  return (
    <Chart scale={scale} pure height={200} autoFit data={nodes}>
      <Polygon
        color="name"
        position="x*y"
        style={{
          lineWidth: 1,
          stroke: "#fff",
        }}
        label={[
          "name",
          {
            offset: 0,
            style: {
              textBaseline: "middle",
            },
            content: (obj) => {
              if (obj.name !== "root") {
                return obj.name;
              }
            },
          },
        ]}
      />
    </Chart>
  );
};


export default TreeMap;
