import React from "react";
import { DataGrid } from "@material-ui/data-grid";


const DataGridDemo = (props) => {

  // const [data, setData] = useState([]);
  const data = props.data

  const transGrid = data.map((d) => {
    return {
      // id: +d.transactionIndex,
      id: d.confirmations,
      timeStamp: new Date(+d.timeStamp * 1000),
      value: d.value,
      from: d.from,
      to: d.to,
    };
  });

  const transCol = [
    { field: "id", headerName: "ID", width: 90  },
    { field: "from", headerName: "From", width: 230 },
    { field: "to", headerName: "To" , width: 230 },
    { field: "timeStamp", headerName: "Date", width: 220 },
    { field: "value",headerName: "Amount", width: 330 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>

      <DataGrid
        rows={transGrid}
        columns={transCol}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default DataGridDemo;
