/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import React, {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { AppTopbarRef } from "../types/types";
import { LayoutContext } from "./context/layoutcontext";
import { useRouter } from "next/router";
import PrimeReact from "primereact/api";

import { AppConfigProps, LayoutConfig, LayoutState } from "../types/types";

const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
  const {
    layoutConfig,
    layoutState,
    onMenuToggle,
    showProfileSidebar,
    setLayoutConfig,
    iconDarkLight,
    setIconDarkLight,
  } = useContext(LayoutContext);
  const menubuttonRef = useRef(null);
  const topbarmenuRef = useRef(null);
  const topbarmenubuttonRef = useRef(null);

  const [deleteProductDialog, setDeleteProductDialog] = useState(false);
  const router = useRouter();

  // mode
  // const [iconDarkLight, setIconDarkLight] = useState("Light");

  useImperativeHandle(ref, () => ({
    menubutton: menubuttonRef.current,
    topbarmenu: topbarmenuRef.current,
    topbarmenubutton: topbarmenubuttonRef.current,
  }));

  const confirmDeleteProduct = () => {
    setDeleteProductDialog(true);
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const deleteProductDialogFooter = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        text
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        text
        onClick={() => {
          console.log("logout");
          hideDeleteProductDialog();
          router.push("/auth/login");
        }}
      />
    </>
  );

  // change mode
  const changeTheme = (theme: string, colorScheme: string) => {
    PrimeReact.changeTheme?.(layoutConfig.theme, theme, "theme-css", () => {
      setLayoutConfig((prevState: LayoutConfig) => ({
        ...prevState,
        theme,
        colorScheme,
      }));
    });
  };

  return (
    <div className="layout-topbar">
      <Link href="/" className="layout-topbar-logo">
        {/* <img src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="47.22px" height={'35px'} alt="logo" /> */}
        {/* <img src="http://101.109.250.52/NT-Logo/04_NT-Logo-with-Full-Name.png" alt="logo" /> */}
        <span>E-Tax Invoice & Receipt</span>
      </Link>

      <button
        ref={menubuttonRef}
        type="button"
        className="p-link layout-menu-button layout-topbar-button"
        onClick={onMenuToggle}
      >
        <i className="pi pi-bars" />
      </button>

      <button
        ref={topbarmenubuttonRef}
        type="button"
        className="p-link layout-topbar-menu-button layout-topbar-button"
        onClick={showProfileSidebar}
      >
        <i className="pi pi-ellipsis-v" />
      </button>

      <div
        ref={topbarmenuRef}
        className={classNames("layout-topbar-menu", {
          "layout-topbar-menu-mobile-active": layoutState.profileSidebarVisible,
        })}
      >
        {/* <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-calendar"></i>
                    <span>Calendar</span>
                </button>
                <button type="button" className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </button>
                <Link href="/documentation">
                    <button type="button" className="p-link layout-topbar-button">
                        <i className="pi pi-cog"></i>
                        <span>Settings</span>
                    </button>
                </Link> */}

        {/* //dark theme */}
        <button
          type="button"
          className="p-link layout-topbar-button"
          onClick={() => {
            if (iconDarkLight === "Light") {
              setIconDarkLight("Dark");
              changeTheme("bootstrap4-dark-blue", "dark");
            } else {
              setIconDarkLight("Light");
              changeTheme("bootstrap4-light-blue", "light");
            }
          }}
        >
          {iconDarkLight === "Light" ? (
            <i className="pi pi-sun"></i>
          ) : (
            <i className="pi pi-moon"></i>
          )}

          <span>{iconDarkLight}</span>
        </button>

        <Link href="/profile">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-user"></i>
            <span>Profile</span>
          </button>
        </Link>
        {/* <Link href="/documentation"> */}
        <button
          type="button"
          className="p-link layout-topbar-button"
          onClick={() => {
            console.log("logout");
            confirmDeleteProduct();
          }}
        >
          <i className="pi pi-power-off"></i>
          <span>Logout</span>
        </button>

        {/* </Link> */}
        {/* <Link href="/documentation">
          <button type="button" className="p-link layout-topbar-button">
            <i className="pi pi-cog"></i>
            <span>Settings</span>
          </button>
        </Link> */}
      </div>

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
          {true && (
            <span>
              Are you sure you want to <b>Logout</b>?
            </span>
          )}
        </div>
      </Dialog>
    </div>
  );
});

AppTopbar.displayName = "AppTopbar";

export default AppTopbar;
