"use client";

import { AiOutlineLogin } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { students } from "@/data/students";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ClickButton } from "./buttons";

export default function LoginForm() {
  const router = useRouter();
  const [waiting, setWaiting] = useState(false);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    try {
      
      toast("Password mismatch!", {
        type: "error",
        position: "bottom-center",
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setWaiting(false);
      router.refresh();
    }

    // router.replace("/" + formData.email);
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <p className="">Student login</p>
      <form
        onSubmit={onLogin}
        className="grid bg-white p-4 rounded-md shadow-md shadow-blue-200"
      >
        <label htmlFor="" className="text-sm">
          Username
        </label>
        <input
          onChange={handleOnChange}
          type="text"
          value={formData.email}
          name="email"
          placeholder="Index number"
          className="font-semibold p-2 focus:outline-blue-300 border "
        />
        <br />
        <label htmlFor="" className="text-sm">
          Password
        </label>
        <input
          onChange={handleOnChange}
          type="password"
          name="password"
          value={formData.password}
          placeholder="eg. *******"
          className="font-semibold p-2 focus:outline-blue-300 border "
        />
        <br />
        <ClickButton
          type="submit"
          primaryText="Login"
          waiting={waiting}
          disabled={waiting}
          styles={" text-white rounded justify-center "}
        >
          <AiOutlineLogin />
        </ClickButton>
      </form>

      <ToastContainer />
    </div>
  );
}
