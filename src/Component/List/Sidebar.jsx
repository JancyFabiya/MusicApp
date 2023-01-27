import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsMusicNoteList } from "react-icons/bs";

import { Link } from "react-router-dom";

const Sidebar = () => {
  const menus = [{ name: "Songs", link: "/songs", icon: BsMusicNoteList }];

  const [open, setOpen] = useState(true);

  return (
    <>
      <section className="flex gap-6">
        <div
          className={`min-h-screen ${
            open ? "w-72" : "w-16"
          } duration-500  px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                }group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 hover:text-white hover:text-white rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold"></div>
      </section>
    </>
  );
};

export default Sidebar;
