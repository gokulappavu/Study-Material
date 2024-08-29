import React, { useEffect, useState } from "react";

const ControlledComp = () => {
  const initialState = {
    email: "",
    userName: "",
    mobileNumber: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    // setFormData({ ...formData, [name]: value });
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    setFormData({
      email: "yigfuyew@gmail.com",
      userName: "ewfg",
      mobileNumber: "34567",
      address: "gfugweufy",
    });
  }, []);

  console.log("state", formData);

  const HandleReset = () => {
    setFormData({ email: "", userName: "", mobileNumber: "", address: "" });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit}
        onReset={HandleReset}
      >
        <label className="text-center text-xl font-bold">Controlled Form</label>
        <input
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email Id"
          name="email"
          className="p-2 border border-gray-300 rounded"
          type="email"
          required
        />
        <input
          value={formData.userName}
          onChange={handleChange}
          placeholder="Enter userName"
          name="userName"
          className="p-2 border border-gray-300 rounded"
          type="text"
          required
        />
        <input
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Enter mobile number"
          name="mobileNumber"
          className="p-2 border border-gray-300 rounded"
          type="number"
          required
        />
        <input
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter address"
          name="address"
          className="p-2 border border-gray-300 rounded"
          type="text"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 rounded text-white p-2"
        >
          Submit
        </button>
        <button
          type="reset"
          className="w-full bg-blue-500 rounded text-white p-2"
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default ControlledComp;
