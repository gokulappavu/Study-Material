import axios from "axios";
import React, { useState } from "react";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [percentage, setPercentage] = useState(0);

  const handleUpload = async (e) => {
    e.preventDefault();

    const ArryData = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("arryData", JSON.stringify(ArryData));

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const percentage = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setPercentage(percentage);
        console.log(`File upload progress: ${percentage}%`);
      },
    };

    await axios
      .post("http://localhost:4500/fileupload", formData, config)
      .then((res) => console.log(res.data.message))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <img
        src={"http://localhost:4500/img/png_1726826431741-28.png"}
        className="w-400 h-400"
      /> */}
      <form className="flex flex-col gap-5" onSubmit={handleUpload}>
        <div className="flex flex-col gap-2">
          <label>File Upload</label>
          <input
            type="file"
            name="file"
            placeholder="file upload"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="w-full bg-blue-500 text-white px-4 py-1.5 rounded hover:opacity-90 duration-500 ease-in-out">
          Upload
        </button>

        {percentage > 0 && <h1>{percentage}%</h1>}
      </form>
    </div>
  );
};

export default FileUpload;
