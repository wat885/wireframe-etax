/* eslint-disable @next/next/no-img-element */

import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton, RadioButtonChangeEvent } from "primereact/radiobutton";
import { Rating } from "primereact/rating";
import { Toast } from "primereact/toast";
import { Toolbar } from "primereact/toolbar";
import { classNames } from "primereact/utils";
import React, { useContext, useEffect, useRef, useState } from "react";
import { ProductService } from "../../../demo/service/ProductService";
import { Demo } from "../../../types/types";
import { PrintingSubmit, SelectedDates } from "../../../types/etaxTypes";
import { printingSubmitMockupData } from "../../../types/mockupEtaxData";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import Action from "../../../layout/Action";
import { LayoutContext } from "../../../layout/context/layoutcontext";

const Crud = () => {
  let emptyProduct: PrintingSubmit = {
    reference: "20230627-9F7AF16D2F1B6394",
    group: "PRD-TIV-INSTANT",
    filename: "IBC_COUNT_20230627_001.pdf",
    filesize: "688483627",
    sequence: "1-10000",
    total: 10000,
    createdDate: "2023-06-27 14:58:15",
    description: "eTax Invoice of 27 Jun 2023 (counter bank)",
  };

  const [products, setProducts] = useState<PrintingSubmit[]>([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState<PrintingSubmit>(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState<PrintingSubmit[]>(
    []
  );
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<PrintingSubmit[]>>(null);

  //Form state

  const { selectOrder, setSelectOrder } = useContext(LayoutContext);

  const [taxInvoice, setTaxInvoice] = useState<string>("");
  const [billingAccount, setBillingAccount] = useState<string>("");
  const [invoiceNumber, setInvoiceNumber] = useState<string>("");
  const [taxID, setTaxId] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<string>("");

  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [untilDate, setUntilDate] = useState<string | Date | Date[] | null>(
    null
  );
  const [checked, setChecked] = useState<boolean>(false);

  const [selectedDate, setSelectedDate] = useState<SelectedDates | null>({
    name: "เลือกทั้งเดือน",
    code: "month",
  });
  const dates: SelectedDates[] = [
    { name: "PRD-TIV-INSTANT ", code: "INSTANT" },
    { name: "PRD-TIV-BATCH", code: "BATCH" },
  ];

  // console.log("date", date, typeof date);
  // console.log('products',products)

  console.log(" selectOrder in print submit", selectOrder);

  useEffect(() => {
    // ProductService.getProducts().then((data) => setProducts(data));
    setProducts([...printingSubmitMockupData]);
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const openNew = () => {
    setProduct(emptyProduct);
    setSubmitted(false);
    setProductDialog(true);
  };

  const hideDialog = () => {
    setSubmitted(false);
    setProductDialog(false);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const saveProduct = () => {
    setSubmitted(true);

    // if (product.name.trim()) {
    //   let _products = [...products];
    //   let _product = { ...product };
    //   if (product.id) {
    //     const index = findIndexById(product.id);

    //     _products[index] = _product;
    //     toast.current?.show({
    //       severity: "success",
    //       summary: "Successful",
    //       detail: "Product Updated",
    //       life: 3000,
    //     });
    //   } else {
    //     _product.id = createId();
    //     _product.image = "product-placeholder.svg";
    //     _products.push(_product);
    //     toast.current?.show({
    //       severity: "success",
    //       summary: "Successful",
    //       detail: "Product Created",
    //       life: 3000,
    //     });
    //   }

    //   setProducts(_products);
    setProductDialog(false);
    //   setProduct(emptyProduct);
    // }
  };

  const editProduct = (product: PrintingSubmit) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product: PrintingSubmit) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    // let _products = products.filter((val) => val.id !== product.id);
    // setProducts(_products);
    setDeleteProductDialog(false);
    // setProduct(emptyProduct);
    // toast.current?.show({
    //   severity: "success",
    //   summary: "Successful",
    //   detail: "Product Deleted",
    //   life: 3000,
    // });
  };

  const findIndexById = (id: string) => {
    // let index = -1;
    // for (let i = 0; i < products.length; i++) {
    //   if (products[i].id === id) {
    //     index = i;
    //     break;
    //   }
    // }
    // return index;
  };

  const createId = () => {
    let id = "";
    let chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts?.includes(val));
    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
    toast.current?.show({
      severity: "success",
      summary: "Successful",
      detail: "Products Deleted",
      life: 3000,
    });
  };

  const onCategoryChange = (e: RadioButtonChangeEvent) => {
    // let _product = { ...product };
    // _product["category"] = e.value;
    // setProduct(_product);
  };

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    // const val = (e.target && e.target.value) || "";
    // let _product = { ...product };
    // _product[`${name}`] = val;
    // setProduct(_product);
  };

  const onInputNumberChange = (
    e: InputNumberValueChangeEvent,
    name: string
  ) => {
    // const val = e.value || 0;
    // let _product = { ...product };
    // _product[`${name}`] = val;
    // setProduct(_product);
  };

  const leftToolbarTemplate = () => {
    return (
      <React.Fragment>
        <div className="my-2">
          <Button
            label="New"
            icon="pi pi-plus"
            severity="success"
            className=" mr-2"
            onClick={openNew}
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            severity="danger"
            onClick={confirmDeleteSelected}
            disabled={!selectedProducts || !selectedProducts.length}
          />
        </div>
      </React.Fragment>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <React.Fragment>
        <FileUpload
          mode="basic"
          accept="image/*"
          maxFileSize={1000000}
          chooseLabel="Import"
          className="mr-2 inline-block"
        />
        <Button
          label="Export"
          icon="pi pi-upload"
          severity="help"
          onClick={exportCSV}
        />
      </React.Fragment>
    );
  };

  const referenceTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.reference}
      </>
    );
  };
  const groupTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.group}
      </>
    );
  };

  const filenameTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.filename}
      </>
    );
  };
  const filesizeTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.filesize}
      </>
    );
  };
  const sequenceTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.sequence}
      </>
    );
  };
  const totalTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.total}
      </>
    );
  };
  const createdDateTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.createdDate}
      </>
    );
  };
  const descriptionTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.description}
      </>
    );
  };
  // const amountTemplate = (rowData: PrintingSubmit) => {
  //   return (
  //     <>
  //       <span className="p-column-title">Code</span>
  //       {rowData.amount}
  //     </>
  //   );
  // };
  // const vatTemplate = (rowData: PrintingSubmit) => {
  //   return (
  //     <>
  //       <span className="p-column-title">Code</span>
  //       {rowData.vat}
  //     </>
  //   );
  // };
  // const totalTemplate = (rowData: PrintingSubmit) => {
  //   return (
  //     <>
  //       <span className="p-column-title">Code</span>
  //       {rowData.total}
  //     </>
  //   );
  // };
  // const emailTemplate = (rowData: PrintingSubmit) => {
  //   return (
  //     <>
  //       <span className="p-column-title">Code</span>
  //       {rowData.email}
  //     </>
  //   );
  // };

  const codeBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {/* {rowData.code} */}
      </>
    );
  };

  const nameBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        {/* {rowData.name} */}
      </>
    );
  };

  const imageBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        {/* <span className="p-column-title">Image</span>
        <img
          src={`/demo/images/product/${rowData.image}`}
          alt={rowData.image}
          className="shadow-2"
          width="100"
        /> */}
      </>
    );
  };

  const priceBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Price</span>
        {/* {formatCurrency(rowData.price as number)} */}
      </>
    );
  };

  const categoryBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        {/* {rowData.category} */}
      </>
    );
  };

  const ratingBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Reviews</span>
        {/* <Rating value={rowData.rating} readOnly cancel={false} /> */}
      </>
    );
  };

  const statusBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <span className="p-column-title">Status</span>
        {/* <span
          className={`product-badge status-${rowData.inventoryStatus?.toLowerCase()}`}
        >
          {rowData.inventoryStatus}
        </span> */}
      </>
    );
  };

  const actionBodyTemplate = (rowData: PrintingSubmit) => {
    return (
      <>
        <Action rowData={rowData} />
      </>
    );
  };

  const header = (
    <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
      <h5 className="m-0">Manage Products</h5>
      <span className="block mt-2 md:mt-0 p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.currentTarget.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  const productDialogFooter = (
    <>
      <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
      <Button label="Send" icon="pi pi-check" text onClick={saveProduct} />
    </>
  );
  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        text
        onClick={hideDeleteProductDialog}
      />
      <Button label="Yes" icon="pi pi-check" text onClick={deleteProduct} />
    </>
  );
  const deleteProductsDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        text
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        text
        onClick={deleteSelectedProducts}
      />
    </>
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted");
    console.log({
      taxInvoice,
      billingAccount,
      invoiceNumber,
      taxID,
      date,
      untilDate,
      selectedDate,
    });
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
    // Add your button's functionality here
  };

  return (
    <div className="grid crud-demo">
      <div className="col-12">
        <div className="card">
          <Toast ref={toast} />
          {/* <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar> */}

          <div className="col-12">
            <div
            // className="card"
            >
              <h5>List file for printing submission</h5>
              <form onSubmit={handleSubmit}>
                <div className="p-fluid formgrid grid">
                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-invoice">File Name</label>
                    <InputText
                      id="tax-invoice"
                      type="text"
                      value={taxInvoice}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTaxInvoice(e.target.value)
                      }
                    />
                  </div>

                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="billing-account">File Description</label>
                    <InputText
                      id="billing-account"
                      type="text"
                      value={billingAccount}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setBillingAccount(e.target.value)
                      }
                    />
                  </div>

                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-id">Reference ID</label>
                    <InputText
                      id="tax-id"
                      type="text"
                      value={taxID}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setTaxId(e.target.value)
                      }
                    />
                  </div>

                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-id">
                      เลือกเฉพาะรายการที่ยังไม่ถูกนำส่ง
                    </label>

                    <ToggleButton
                      checked={checked}
                      onChange={(e: ToggleButtonChangeEvent) =>
                        setChecked(e.value)
                      }
                      className=""
                    />

                    {/* <br/>
                    <InputSwitch checked={checked} onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} /> */}
                  </div>

                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-id">File Create Date From</label>
                    <Calendar
                      value={date || null}
                      onChange={(e: CalendarChangeEvent) =>
                        e.value !== undefined && setDate(e.value)
                      }
                      showIcon
                      dateFormat="dd/mm/yy"
                      showButtonBar
                    />
                  </div>
                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-id">File Create Date To</label>
                    <Calendar
                      value={untilDate || null}
                      onChange={(e: CalendarChangeEvent) =>
                        e.value !== undefined && setUntilDate(e.value)
                      }
                      showIcon
                      dateFormat="dd/mm/yy"
                      showButtonBar
                    />
                  </div>

                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="select-date">Grouping</label>
                    <Dropdown
                      value={selectedDate}
                      onChange={(e: DropdownChangeEvent) =>
                        setSelectedDate(e.value)
                      }
                      options={dates}
                      optionLabel="name"
                      placeholder="Select a Group"
                      // className="w-full md:w-14rem"
                    />
                  </div>
                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="search">ค้นหา</label>
                    <Button label="Search" type="submit" className=""></Button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <DataTable
            ref={dt}
            value={products}
            selection={selectedProducts}
            onSelectionChange={(e) =>
              setSelectedProducts(e.value as PrintingSubmit[])
            }
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[5, 10, 25]}
            className="datatable-responsive"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            emptyMessage="No products found."
            // header={header}
            responsiveLayout="scroll"
          >
            {/* <Column
              selectionMode="multiple"
              headerStyle={{ width: "4rem" }}
            ></Column> */}

            <Column
              field="reference"
              header="Reference"
              body={referenceTemplate}
              headerStyle={{ minWidth: "4rem" }}
            ></Column>

            <Column
              field="group"
              header="Group"
              body={groupTemplate}
              headerStyle={{ minWidth: "4rem" }}
            ></Column>

            <Column
              field="filename"
              header="Filename"
              body={filenameTemplate}
              headerStyle={{ minWidth: "4rem" }}
            ></Column>

            <Column
              field="filesize"
              header="Filesize"
              body={filesizeTemplate}
              headerStyle={{ minWidth: "4rem" }}
            ></Column>

            <Column
              field="sequence"
              header="Sequence"
              body={sequenceTemplate}
              headerStyle={{ minWidth: "8rem" }}
            ></Column>

            <Column
              field="total"
              header="Total"
              body={totalTemplate}
              headerStyle={{ minWidth: "4rem" }}
            ></Column>

            <Column
              field="createdDate"
              header="Created Date"
              body={createdDateTemplate}
              headerStyle={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="createdDate"
              header="Description"
              body={descriptionTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              header={
                <div className="flex align-items-center">
                  
                  {/* <Button
                    icon="pi pi-times"
                    rounded
                    severity="warning"
                    className="ml-2"
                    onClick={() => {
                      console.log("clear")
                      setSelectOrder([])

                    }}
                  /> */}
                  Next
                  <Button
                    icon="pi pi-arrow-right"
                    rounded
                    severity="success"
                    className="ml-2"
                    onClick={() => {
                      console.log("next");
                      console.log(selectOrder);
                    }}
                  />
                </div>
              }
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>

            {/* <Column header="Image" body={imageBodyTemplate}></Column>
            <Column
              field="price"
              header="Price"
              body={priceBodyTemplate}
              sortable
            ></Column>
            <Column
              field="category"
              header="Category"
              sortable
              body={categoryBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="rating"
              header="Reviews"
              body={ratingBodyTemplate}
              sortable
            ></Column>
            <Column
              field="inventoryStatus"
              header="Status"
              body={statusBodyTemplate}
              sortable
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
            <Column
              body={actionBodyTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column> */}
          </DataTable>

          <Dialog
            visible={productDialog}
            style={{ width: "450px" }}
            header="Send Email"
            modal
            className="p-fluid"
            footer={productDialogFooter}
            onHide={hideDialog}
          >
            {/* {product.image && (
              <img
                src={`/demo/images/product/${product.image}`}
                alt={product.image}
                width="150"
                className="mt-0 mx-auto mb-5 block shadow-2"
              />
            )} */}
            <div className="field">
              <label htmlFor="name">Email</label>
              <InputText
                id="name"
                value={sendEmail}
                onChange={(e) => setSendEmail(e.target.value)}
                required
                autoFocus
                className={classNames({
                  "p-invalid": submitted && !sendEmail,
                })}
              />
              {submitted && !sendEmail && (
                <small className="p-invalid">Email is required.</small>
              )}
            </div>
            {/*             
            <div className="field">
              <label htmlFor="description">Description</label>
              <InputTextarea
                id="description"
                value={product.description}
                onChange={(e) => onInputChange(e, "description")}
                required
                rows={3}
                cols={20}
              />
            </div>

            <div className="field">
              <label className="mb-3">Category</label>
              <div className="formgrid grid">
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category1"
                    name="category"
                    value="Accessories"
                    onChange={onCategoryChange}
                    checked={product.category === "Accessories"}
                  />
                  <label htmlFor="category1">Accessories</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category2"
                    name="category"
                    value="Clothing"
                    onChange={onCategoryChange}
                    checked={product.category === "Clothing"}
                  />
                  <label htmlFor="category2">Clothing</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category3"
                    name="category"
                    value="Electronics"
                    onChange={onCategoryChange}
                    checked={product.category === "Electronics"}
                  />
                  <label htmlFor="category3">Electronics</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="category4"
                    name="category"
                    value="Fitness"
                    onChange={onCategoryChange}
                    checked={product.category === "Fitness"}
                  />
                  <label htmlFor="category4">Fitness</label>
                </div>
              </div>
            </div>

            <div className="formgrid grid">
              <div className="field col">
                <label htmlFor="price">Price</label>
                <InputNumber
                  id="price"
                  value={product.price}
                  onValueChange={(e) => onInputNumberChange(e, "price")}
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                />
              </div>
              <div className="field col">
                <label htmlFor="quantity">Quantity</label>
                <InputNumber
                  id="quantity"
                  value={product.quantity}
                  onValueChange={(e) => onInputNumberChange(e, "quantity")}
                />
              </div>
            </div> */}
          </Dialog>

          <Dialog
            visible={deleteProductDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductDialogFooter}
            onHide={hideDeleteProductDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Are you sure you want to delete <b></b>?
                </span>
              )}
            </div>
          </Dialog>

          <Dialog
            visible={deleteProductsDialog}
            style={{ width: "450px" }}
            header="Confirm"
            modal
            footer={deleteProductsDialogFooter}
            onHide={hideDeleteProductsDialog}
          >
            <div className="flex align-items-center justify-content-center">
              <i
                className="pi pi-exclamation-triangle mr-3"
                style={{ fontSize: "2rem" }}
              />
              {product && (
                <span>
                  Are you sure you want to delete the selected products?
                </span>
              )}
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Crud;
