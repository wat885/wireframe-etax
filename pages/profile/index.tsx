import { Button } from "primereact/button";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Toast } from "primereact/toast";
import { Password } from "primereact/password";

const Profile = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div>
      <div className="flex flex-column align-items-center justify-content-center">
        <div>
          <div className="w-full surface-card p-4 shadow-2 border-round py-8 px-5 sm:px-8">
            <div className="text-center mb-5">
              <div className="text-900 text-3xl font-medium mb-3 ">
                ข้อมูลส่วนตัว
              </div>
              <span className="text-600 font-medium line-height-3">
                เปลี่ยนแปลงรหัสผ่าน
              </span>
            </div>

            <div>
              <label
                htmlFor="oldPassword"
                className="block text-900 text-xl font-medium mb-2"
              >
                รหัสผ่านเดิม
              </label>
              <Password
                inputId="oldPassword"
                value={oldPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setOldPassword(e.target.value)
                }
                placeholder="Password"
                toggleMask
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
                feedback={false}
              ></Password>
              <label
                htmlFor="newPassword"
                className="block text-900 text-xl font-medium mb-2"
              >
                รหัสผ่านใหม่
              </label>
              <Password
                inputId="newPassword"
                value={newPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewPassword(e.target.value)
                }
                placeholder="Password"
                toggleMask
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
              ></Password>
              <label
                htmlFor="confirmPassword"
                className="block text-900 text-xl font-medium mb-2"
              >
                รหัสผ่านเดิม
              </label>
              <Password
                inputId="confirmPassword"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
                placeholder="Password"
                toggleMask
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
                feedback={false}
              ></Password>

              <div className="flex align-items-center justify-content-betweengap-5"></div>
              <Button
                type="submit"
                label="ยืนยัน"
                icon="pi pi-user"
                className="w-full p-3 text-xl"
              ></Button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Profile
