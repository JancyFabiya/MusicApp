import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Songs.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import AddSong from "./AddSong";
import { Footer } from "./Footer";
import img from "../../image/images.jpg";

const Songs = () => {
  // const phone ={
  //     phoneNumber: "+919000000000"}
  // var url ='https://dev.api.goongoonalo.com/v1/auth/login'

  // const ap = async () => {
  //     const data = await axios.post(
  //         url,
  //         phone
  //     )
  //     console.log(data,'data');
  // }
  // ap();
  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);
  // const options = {
  //   method: 'GET',
  //   url: 'https://spotify23.p.rapidapi.com/albums/',
  //   params: {ids: '3IBcauSj5M2A6lTeffJzdv'},
  //   headers: {
  //     'X-RapidAPI-Key': '140e6b718cmsha49e28e76bdcea7p115648jsneb27874065f5',
  //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  //   }
  // };

  // axios.request(options).then(function (response) {
  // 	console.log(response.data);
  // }).catch(function (error) {
  // 	console.error(error);
  // });
  // const params = {
  //     ids: '3IBcauSj5M2A6lTeffJzdv'
  // }
  // const headers = {
  //     'X-RapidAPI-Key': '140e6b718cmsha49e28e76bdcea7p115648jsneb27874065f5',
  //     'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  // }
  // var url = 'https://spotify23.p.rapidapi.com/albums/'

  // const song = async () => {
  //     const data = await axios.get(
  //         url,
  //         params,
  //         headers,

  //     )
  //     console.log(data,'data')
  // }
  // song();

  const songs = [
    {
      SOURCE: "Education",
      ADDED_ON: "27/10/2022",
      play: <AiFillPlayCircle color="orange" size={20} />,
      action: <MdDeleteOutline />,
      color: "true",
    },
    {
      SOURCE: "Education",
      ADDED_ON: "27/10/2022",
      play: <AiFillPlayCircle color="orange" size={20} />,
      action: <MdDeleteOutline />,
      color: "true",
    },
    {
      SOURCE: "Education",
      ADDED_ON: "27/10/2022",
      play: <AiFillPlayCircle color="orange" size={20} />,
      action: <MdDeleteOutline />,
      color: "true",
    },
  ];
  return (
    <>
      <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
          {" "}
          <Sidebar />
        </section>

        <div className="dashboardContainer overflow-hidden">
          <div className=" container dashboardSummary flex justify-between items-center">
            <div className="font-bold">Songs</div>
            <div className="">
              <button
                onClick={() => setShowMyModal(true)}
                className="border bg-orange-400 rounded-md p-1"
              >
                Add songs
              </button>
            </div>
          </div>
          <div className="">
            <hr className="  border-1 border-black border-dotted " size={30} />
          </div>
          <table className="w-full mt-8 text-sm text-left text-gray-500 dark:text-gray-400 border-l-0">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-100 text-black-200 border  dark:bg-gray-800"
                >
                  song name
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-100 text-black-200 border  dark:bg-gray-800"
                >
                  source
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-100 text-black-200 border  dark:bg-gray-800"
                >
                  added on
                </th>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-100 text-black-200 border  dark:bg-gray-800"
                ></th>
                <th
                  scope="col"
                  className="py-3 px-6 bg-gray-100 text-black-200 border  dark:bg-gray-800"
                ></th>
              </tr>
            </thead>
            <tbody>
              {songs.map((s) => (
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td scope="row" className="py-4 px-6">
                    <div className="w-[4rem]">
                    <img src={img} alt=""  />
                        </div>
                  </td>

                  <td className="py-4 px-6">{s.SOURCE}</td>
                  <td className="py-4 px-6">{s.ADDED_ON}</td>
                  <td className="py-4 px-6">{s.play}</td>
                  <td className="py-4 px-6">{s.action}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div class="relative h-72 w-full ">
            <div class="absolute bottom-0 right-0 h-16 w-full  ">
              <Footer />
            </div>
          </div>
        </div>

        <AddSong onClose={handleOnClose} visible={showMyModal} />
      </div>
    </>
  );
};

export default Songs;
