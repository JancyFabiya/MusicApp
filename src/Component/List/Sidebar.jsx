import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { BsMusicNoteList } from "react-icons/bs"
import { SlLocationPin } from 'react-icons/sl'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { VscSymbolEnumMember } from 'react-icons/vsc'
import { GiWallet } from 'react-icons/gi'
import { MdChildFriendly } from 'react-icons/md'
import { MdOutlinePayments } from 'react-icons/md'
import { BiChat } from 'react-icons/bi'
import { HiOutlinePhoneMissedCall } from 'react-icons/hi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { Link } from "react-router-dom"

const Sidebar = () => {
    const menus = [

        { name: "Songs", link: "/songs", icon: BsMusicNoteList },
        // { name: "Address", link: "/address", icon: SlLocationPin },
        // { name: "Members", link: "/members", icon: VscSymbolEnumMember },
        // { name: "My Wallet", link: "/mywallet", icon: GiWallet },
        // { name: "My Favorites", link: "/myfavorites", icon: MdOutlineFavoriteBorder },
        // { name: "My Orders", link: "/myorders", icon: MdChildFriendly },
        // { name: "My Subscription", link: "/mysubscription", icon: MdOutlinePayments },
        // { name: "Call/Chat History", link: "/usercallchathistory", icon: BiChat },
        // { name: "My CallRequest", link: "/mycallrequest", icon: HiOutlinePhoneMissedCall },
        // { name: "My Report List", link: "/myreportlist", icon: HiOutlineDocumentReport },




        //  {name:"Blog",link:"",icon:ImNewspaper},
        //  {name:"Logout",link:"",icon:AiOutlineLogout}
    ]

    const [open, setOpen] = useState(true)

  return (
<>
<section className="flex gap-6">
                <div className={`min-h-screen ${open ? "w-72" : "w-16"} duration-500  px-4`}>
                    <div className="py-3 flex justify-end">
                        <HiMenuAlt3 size={26} className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                    {/* <Link to='/horoscope'> */}
                    {/* <a href="" class={`block max-w-sm p-6 bg-white border border-gray-200 rounded-b-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${open ? "" : "hidden"}`}>
                        <div className="flex flex-col items-center justify-center">
                            <div>
                                <img src={pro} alt="" className='rounded-full w-16 h-16' />
                            </div>
                            <div>
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Devendra joshi</h5>
                            </div>
                            <div>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Devendra@gmail.com</p>
                            </div>
                            <div>
                                <p class="font-normal text-gray-700 dark:text-gray-400">+91 6589659654</p>
                            </div>
                        </div>
                    </a> */}
                    {/* </Link> */}


                    <div className='mt-4 flex flex-col gap-4 relative'>
                        {menus?.map((menu, i) => (
                            <Link to={menu?.link} key={i} className={`${menu?.margin && "mt-5"}group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 hover:text-white hover:text-white rounded-md`}>
                                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                                <h2 style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                    className={`duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                                {/* <h2 className={`${open && "hidden" } absolute left-48 bg-black font-semibold whitespace-pre text-white rounde-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300`}>{menu?.name}</h2> */}
                            </Link>
                        ))}


                    </div>
                </div>
                <div className="m-3 text-xl text-gray-900 font-semibold">

                </div>
            </section>
</>
  )
}

export default Sidebar