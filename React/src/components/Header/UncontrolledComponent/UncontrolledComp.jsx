import React, { useRef } from "react";

const UncontrolledComp = () => {
  const emailRef = useRef();
  const userNameRef = useRef();
  const mobileNumberRef = useRef();
  const addressRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      userName: userNameRef.current.value,
      mobileNumber: mobileNumberRef.current.value,
      address: addressRef.current.value,
    };

    console.log(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="text-center text-xl font-bold">
          Uncontrolled Form
        </label>
        <input
          placeholder="Enter email Id"
          className="p-2 border border-gray-300 rounded"
          type="email"
          ref={emailRef}
          required
        />
        <input
          placeholder="Enter userName"
          className="p-2 border border-gray-300 rounded"
          type="text"
          ref={userNameRef}
          required
        />
        <input
          placeholder="Enter mobile number"
          className="p-2 border border-gray-300 rounded"
          type="number"
          ref={mobileNumberRef}
          required
        />
        <input
          placeholder="Enter address"
          className="p-2 border border-gray-300 rounded"
          type="text"
          ref={addressRef}
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

export default UncontrolledComp;
