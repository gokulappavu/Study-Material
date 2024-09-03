import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {
  const initialState = {
    email: "",
    userName: "",
    mobileNumber: "",
    address: "",
  };

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getById = async () => {
      await axios
        .get(`http://localhost:7000/v1/userbyid?_id=${id}`)
        .then((res) => setFormData(res.data.data))
        .catch((err) => console.log(err));
    };
    getById();
  }, [id]);

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:7000/v1/user?_id=${id}`, formData)
      .then((res) => {
        if (res.data) {
          setFormData(initialState);
          toast.success(res.data.message);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  const HandleReset = () => {
    setFormData({ email: "", userName: "", mobileNumber: "", address: "" });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col gap-5 w-[400px]"
        onSubmit={handleUpdate}
        onReset={HandleReset}
      >
        <label className="text-center text-xl font-bold">Edit Form</label>
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
        <div className="flex gap-2">
          <Link
            to={`/`}
            className="w-full bg-blue-500 rounded text-white p-2 text-center"
          >
            Go Back
          </Link>

          <button
            type="submit"
            className="w-full bg-blue-500 rounded text-white p-2"
          >
            Update
          </button>
          <button
            type="reset"
            className="w-full bg-blue-500 rounded text-white p-2"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
