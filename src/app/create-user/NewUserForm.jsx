"use client";

import { AiOutlineUserAdd } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ClickButton } from "../(components)/buttons";

export default function NewUserForm() {
  const router = useRouter();
  const [waiting, setWaiting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  });
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const onCreate = async (e) => {
    e.preventDefault();
    try {
      setWaiting(true);
      const response = await fetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify(formData),
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        //clear
        setFormData({ email: "", fullname: "", password: "" });
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      router.refresh();
      setWaiting(false);
    }
  };
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <p className="">Create new user</p>
      <form
        onSubmit={onCreate}
        className="grid bg-white p-4 rounded-md shadow-md shadow-blue-200"
      >
        <label htmlFor="" className="text-sm">
          Fullname
        </label>
        <input
          onChange={handleOnChange}
          type="text"
          value={formData.fullname}
          name="fullname"
          placeholder="Index number"
          className="font-semibold p-2 focus:outline-blue-300 border "
        />
        <br />
        <label htmlFor="" className="text-sm">
          Email
        </label>
        <input
          onChange={handleOnChange}
          type="email"
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
          waiting={waiting}
          disabled={waiting}
          primaryText="Create user"
          styles={
            "border bg-green-500 hover:bg-green-600 active:bg-green-400 transition-all flex text-white rounded justify-center "
          }
        >
          <AiOutlineUserAdd />
        </ClickButton>
      </form>

      <ToastContainer />
    </div>
  );
}
