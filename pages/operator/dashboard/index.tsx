import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import { OperatorDashboard } from "../../../types/etaxTypes";
import { operatorDashboardMockupData } from "../../../types/mockupEtaxData";

export default function GridLinesDemo() {


  const [products, setProducts] = useState<OperatorDashboard[]>([]);

  useEffect(() => {
    setProducts([...operatorDashboardMockupData]);
  }, []);

  return (
    <div className="card">
      <DataTable
        value={products}
        showGridlines
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="appName" header="App Name"></Column>
        <Column field="thread" header="Thread"></Column>
        <Column field="host" header="Host"></Column>
        <Column field="lastUpdate" header="Last Update"></Column>
        <Column field="isDown" header="การวินิจฉัย"></Column>
      </DataTable>
    </div>
  );
}
