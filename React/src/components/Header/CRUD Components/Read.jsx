import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Read = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFunction = async () => {
      await axios
        .get("http://localhost:7000/v1/user")
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => console.log(err))
        .finally(setLoading(false));
    };
    getFunction();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:7000/v1/user?_id=${id}`)
      .then((res) => {
        toast.success(res.data.message);
        setData((prev) => prev.filter((val) => val._id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-auto flex flex-col gap-5 items-center p-10">
      <div className="w-full flex flex-row justify-end items-center">
        <Link to={`/addform`}>
          <button className="px-4 py-1.5 rounded bg-blue-500 text-white">
            Add form
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {data?.map((value) => (
              <div className="flex flex-col gap-1 bg-green-100 shadow rounded p-3 ">
                <div className="flex gap-1 justify-end">
                  <FcViewDetails className="w-5 h-5 cursor-pointer" />
                  <Link to={`/editform/${value._id}`}>
                    <FaEdit className="w-4 h-5 cursor-pointer text-blue-500" />
                  </Link>

                  <MdDelete
                    className="w-5 h-5 cursor-pointer text-red-500"
                    onClick={() => handleDelete(value._id)}
                  />
                </div>

                <h1>Username: {value?.userName}</h1>
                <h1>Email: {value?.email}</h1>
                <h1>MobileNumber: {value.mobileNumber}</h1>
                <h1 className="truncate">Address: {value.address}</h1>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Read;
