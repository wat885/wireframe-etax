import { Checkbox } from "primereact/checkbox";
import React, { useContext, useEffect, useState } from "react";
import { PrintingSubmit } from "../types/etaxTypes";
import { LayoutContext } from "./context/layoutcontext";

type Props = { rowData: PrintingSubmit };

function Action({ rowData }: Props) {
  const [checked, setChecked] = useState<any>(false);
  const [sendOrder, setSendOrder] = useState<string | undefined>(undefined);
  const [index, setIndex] = useState(undefined);

  const { selectOrder, setSelectOrder } = useContext(LayoutContext);

  // console.log("rowData", rowData);
  // console.log("selectOrder", selectOrder);



  return (
    <div className="flex align-items-center">
      Unsend
      <Checkbox
        className=" mx-2"
        onChange={(e) => {
          setChecked(e.checked);
          if (!checked) {
            console.log("เพิ่มข้อมูล");

            setSelectOrder([...selectOrder, rowData]);
            console.log("selectOrder in Action", selectOrder.length);
            setIndex(selectOrder.length + 1);
            // const searchIndex = selectOrder.findIndex(
            //   (item: PrintingSubmit) => item.reference === rowData.reference
            // );
          } else {
            console.log("ลบข้อมูล");

            const searchIndex = selectOrder.findIndex(
              (item: PrintingSubmit) => item.reference === rowData.reference
            );
            console.log("searchIndex", searchIndex);

            const removedItem = selectOrder.splice(searchIndex, 1);

            setIndex(undefined);
          }
        }}
        checked={checked}
      ></Checkbox>
      <label htmlFor="tax-invoice"> send to order {index}</label>
    </div>
  );
}

export default Action;
