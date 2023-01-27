import React, { useRef, useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";

const AddSong = ({ visible, onClose }) => {
  const imageRef = useRef();
  const [image, setImage] = useState(null);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  const onImageChange = (event) => {
    if (event.target.name === "avatar") {
      // if (event.target.files && event.target.files[0]) {
      //   let img = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };
      reader.readAsDataURL(event.target.files[0]);

      //   setImage(img);
    }
  };
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded relative w-full h-full max-w-md md:h-auto px-6 py-6 lg:px-8">
        <div className="flex justify-between items-start  p-4 border-b rounded-t dark:border-gray-600">
          <div className="font-bold">Add Song</div>
          <div className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <AiOutlineClose onClick={onClose} />
          </div>
        </div>

        <form action="" className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Song Name
            </label>
            <input
              placeholder="Song Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Song link
            </label>
            <input
              placeholder="URL"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Source Name
            </label>
            <input
              placeholder="Source Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <div
              onClick={() => imageRef.current.click()}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[18rem] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white flex gap-3 hover:cursor-pointer"
            >
              <BsUpload />
              Click to Upload Profile Thumbnail
            </div>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
            {
              image && (
                <div
                  className="flex justify-between items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                >
                  <div className="w-[3rem]">
                    <img src={image} alt="" />
                  </div>
                  <div>
                    <AiOutlineDelete onClick={() => setImage(null)} />
                  </div>
                </div>
              )
              // :
              // (
              //     <label className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ' type="text" >Source Name</label>

              // )
            }
            <label className="block mb-2 text-sm font-normal text-gray-600 dark:text-white">
              Image has to be aspect ratio 1:1 with a size of 3000 pixels x
              3000pixels
            </label>
          </div>

          <div className="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
              Cancel
            </button>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSong;
