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
import { InstantTracking } from "../../../types/etaxTypes";
import { instantTracking } from "../../../types/mockupEtaxData";
import { Calendar, CalendarChangeEvent } from "primereact/calendar";

const Crud = () => {
  let emptyProduct: InstantTracking = {};

  const [products, setProducts] = useState<InstantTracking[]>([]);
  const [productDialog, setProductDialog] = useState(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
  const [product, setProduct] = useState<InstantTracking>(emptyProduct);
  const [selectedProducts, setSelectedProducts] = useState<InstantTracking[]>(
    []
  );
  const [submitted, setSubmitted] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const toast = useRef<Toast>(null);
  const dt = useRef<DataTable<InstantTracking[]>>(null);

  //Form state

  const [sendEmail, setSendEmail] = useState<string>("");
  const [date, setDate] = useState<string | Date | Date[] | null>(null);
  const [untilDate, setUntilDate] = useState<string | Date | Date[] | null>(
    null
  );

  // console.log("date", date, typeof date);
  console.log("products", products);

  useEffect(() => {
    // ProductService.getProducts().then((data) => setProducts(data));
    setProducts([...instantTracking]);

    getDateToState();
  }, []);

  const getDateToState = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Adding 1 since months are zero-based
    const day = currentDate.getDate();
    setDate(new Date(year, month, day));
    setUntilDate(new Date(year, month, day, 23, 59));
  };

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

  const editProduct = (product: InstantTracking) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  const confirmDeleteProduct = (product: InstantTracking) => {
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

  const findIdTemplate = (rowData: InstantTracking) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.state}
      </>
    );
  };
  const orignalFileTemplate = (rowData: InstantTracking) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.type}
      </>
    );
  };

  const importDateTemplate = (rowData: InstantTracking) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.Description}
      </>
    );
  };
  const totalDocTemplate = (rowData: InstantTracking) => {
    return (
      <>
        <span className="p-column-title">Code</span>
        {rowData.total}
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
      date,
      untilDate,
    });
  };

  return (
    <div className="grid crud-demo">
      <div className="col-12">
        <div className="card">
          <Toast ref={toast} />
          {/* <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar> */}

          <div className="col-12">
            <div
            // className="card"
            >
              <h5>Import File Search Filter</h5>
              <form onSubmit={handleSubmit}>
                <div className="p-fluid formgrid grid">
                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-id">Import date from</label>
                    <Calendar
                      value={date || null}
                      onChange={(e: CalendarChangeEvent) =>
                        e.value !== undefined && setDate(e.value)
                      }
                      showIcon
                      dateFormat="dd/mm/yy"
                      showButtonBar
                      showTime
                      hourFormat="12"
                    />
                  </div>
                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="tax-id">and until</label>
                    <Calendar
                      value={untilDate || null}
                      onChange={(e: CalendarChangeEvent) =>
                        e.value !== undefined && setUntilDate(e.value)
                      }
                      showIcon
                      dateFormat="dd/mm/yy"
                      showButtonBar
                      showTime
                      hourFormat="12"
                    />
                  </div>

                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="search">ค้นหา</label>
                    <Button label="Search" type="submit" className=""></Button>
                  </div>
                  <div className="field col-12 md:col-3  sm:col-6">
                    <label htmlFor="search">ดาวน์โหลดExcel</label>
                    <Button
                      label="Export To Excel"
                      type="button"
                      className=""
                      onClick={() => {
                        console.log("download");
                        dt.current?.exportCSV();
                      }}
                    ></Button>
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
              setSelectedProducts(e.value as InstantTracking[])
            }
            dataKey="id"
            // paginator
            rows={20}
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
              field="state"
              header="State"
              body={findIdTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="type"
              header="Type"
              body={orignalFileTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="Description"
              header="Description"
              body={importDateTemplate}
              headerStyle={{ minWidth: "10rem" }}
            ></Column>

            <Column
              field="total"
              header="Total"
              body={totalDocTemplate}
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
