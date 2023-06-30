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
import React, { useEffect, useRef, useState } from "react";
import { ProductService } from "../../../demo/service/ProductService";
import { Demo } from "../../../types/types";
import { TrackImport } from "../../../types/etaxTypes";
import { trackImportMockupData } from "../../../types/mockupEtaxData";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";

const Crud = () => {
  let emptyProduct: TrackImport = {
  };

  const [products, setProducts] = useState<TrackImport[]>([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState<TrackImport>(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState<TrackImport[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<TrackImport[]>>(null);

  //Form state

  const [orignalFile, setOrignalFile] = useState<string>("");
  const [findId, setFindId] = useState<string>("");
  const [fileDescrition, setFileDescrition] = useState<string>("");
  const [sendEmail, setSendEmail] = useState<string>("");

  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [untilDate, setUntilDate] = useState<string | Date | Date[] | null>(
    null
  );

  // console.log("date", date, typeof date);
  // console.log('products',products)

  useEffect(() => {
    // ProductService.getProducts().then((data) => setProducts(data));
    setProducts([...trackImportMockupData]);
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

  const editProduct = (product: TrackImport) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product: TrackImport) => {
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

  const findIdTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.findId}
      </>
    );
  };
  const orignalFileTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.orignalFile}
      </>
    );
  };

  const importDateTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.importDate}
      </>
    );
  };
  const totalDocTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.totalDoc}
      </>
    );
  };
  const errorDocTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.errorDoc}
      </>
    );
  };
  const inprogressDocTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.inprogressDoc}
      </>
    );
  };
  const doneDocTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.doneDoc}
      </>
    );
  };
  const importStateTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.importState}
      </>
    );
  };
  const errorDescriptionTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.errorDescription}
      </>
    );
  };

  const codeBodyTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {/* {rowData.code} */}
      </>
    );
  };

  const nameBodyTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Name</span>
        {/* {rowData.name} */}
      </>
    );
  };

  const imageBodyTemplate = (rowData: TrackImport) => {
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

  const priceBodyTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Price</span>
        {/* {formatCurrency(rowData.price as number)} */}
      </>
    );
  };

  const categoryBodyTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Category</span>
        {/* {rowData.category} */}
      </>
    );
  };

  const ratingBodyTemplate = (rowData: TrackImport) => {
    return (
      <>
        <span className="p-column-title">Reviews</span>
        {/* <Rating value={rowData.rating} readOnly cancel={false} /> */}
      </>
    );
  };

  const statusBodyTemplate = (rowData: TrackImport) => {
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

  const actionBodyTemplate = (rowData: TrackImport) => {
    return (
      <>
        <Button
          icon="pi pi-file-pdf"
          rounded
          severity="warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
        <Button
          icon="pi pi-envelope"
          rounded
          severity="success"
          className="mr-2"
          onClick={() => editProduct(rowData)}
        />
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
      orignalFile,
      findId,
      fileDescrition,
      date,
      untilDate,
    });
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
              <h5>Import File Search Filter</h5>
              <form onSubmit={handleSubmit}>
                <div className="p-fluid formgrid grid">
                  <div className="field col-12 md:col-4  sm:col-6">
                    <label htmlFor="tax-invoice">Original file name</label>
                    <InputText
                      id="tax-invoice"
                      type="text"
                      value={orignalFile}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setOrignalFile(e.target.value)
                      }
                    />
                  </div>

                  <div className="field col-12 md:col-4  sm:col-6">
                    <label htmlFor="billing-account">Import ID/File ID </label>
                    <InputText
                      id="billing-account"
                      type="text"
                      value={findId}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFindId(e.target.value)
                      }
                    />
                  </div>
                  <div className="field col-12 md:col-4  sm:col-6">
                    <label htmlFor="invoice-number">File descrition</label>
                    <InputText
                      id="invoice-number"
                      type="text"
                      value={fileDescrition}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFileDescrition(e.target.value)
                      }
                    />
                  </div>

                  <div className="field col-12 md:col-4  sm:col-6">
                    <label htmlFor="tax-id">
                    Import date from	
                    </label>
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
                  <div className="field col-12 md:col-4  sm:col-6">
                    <label htmlFor="tax-id">
                    and until
                    </label>
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

                  <div className="field col-12 md:col-4  sm:col-6">
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
              setSelectedProducts(e.value as TrackImport[])
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
              field="findId"
              header="Import ID/File ID"
              body={findIdTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="orignalFile"
              header="Orignal File Name"
              body={orignalFileTemplate}
              headerStyle={{ minWidth: "15rem" }}
            ></Column>

            <Column
              field="importDate"
              header="Imported Date"
              body={importDateTemplate}
              headerStyle={{ minWidth: "12rem" }}
            ></Column>

            <Column
              field="totalDoc"
              header="Total"
              body={totalDocTemplate}
              headerStyle={{ minWidth: "3rem" }}
            ></Column>

            <Column
              field="errorDoc"
              header="Error"
              body={errorDocTemplate}
              headerStyle={{ minWidth: "3rem" }}
            ></Column>

            <Column
              field="inprogressDoc"
              header="Inprogress"
              body={inprogressDocTemplate}
              headerStyle={{ minWidth: "3rem" }}
            ></Column>

            <Column
              field="doneDoc"
              header="Done"
              body={doneDocTemplate}
              headerStyle={{ minWidth: "3rem" }}
            ></Column>

            <Column
              field="amount"
              header="Import State"
              body={importStateTemplate}
              headerStyle={{ minWidth: "3rem" }}
            ></Column>

            <Column
              field="errorDescription"
              header="Error Description"
              body={errorDescriptionTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>
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
                  Are you sure you want to delete <b>{product.findId}</b>?
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
