import React, { useRef } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";

interface FormValues {
  value: string;
}

export default function FormikDoc() {
  const toast = useRef<any>(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: formik.values.value,
    });
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      value: "",
    },
    validate: (data) => {
      console.log("this is validate", data);
      let errors: Partial<FormValues> = {};

      if (!data.value) {
        errors.value = "Name - Surname is required.";
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(data.value)) {
        errors.value =
          "Name - Surname must contain at least one lowercase letter, one uppercase letter, and one digit.";
      }

      return errors;
    },
    onSubmit: (data) => {
      console.log("this is onSubmit", data);
      data && show();
      formik.resetForm();
    },
  });

  const isFormFieldInvalid = (name: keyof FormValues) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name: keyof FormValues) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name]}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
        <span className="p-float-label">
          <Toast ref={toast} />
          <InputText
            id="value"
            name="value"
            value={formik.values.value}
            onChange={(e) => {
              formik.setFieldValue("value", e.target.value);
            }}
            className={classNames({ "p-invalid": isFormFieldInvalid("value") })}
          />
          <label htmlFor="input_value">Name - Surname</label>
        </span>
        {getFormErrorMessage("value")}
        <Button type="submit" label="Submit" />
      </form>
    </div>
  );
}
