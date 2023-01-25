import React from 'react'
import Sidebar from './Sidebar'
import "./Songs.css";
import { AiFillInfoCircle } from 'react-icons/ai';

const Songs = () => {
    const call = [
        { customer: "abcd", callQuery: "Education", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Completed", color: "true" },
        { customer: "fgh", callQuery: "Love Marriage", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Missed", color: "false" },
        { customer: "tyui", callQuery: "Career", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Missed", color: "false" },
        { customer: "abcokjd", callQuery: "Other", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Call Failed", color: "false" },
        { customer: "pol", callQuery: "Other", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Call Failed", color: "false" },
        { customer: "mhg", callQuery: "Match Making", timeslot: "09:00 PM - 12:00 AM", date: "27/10/2022", info: <AiFillInfoCircle color="white" size={20} />, action: "Call Failed", color: "false" },

    ]
  return (
    <>
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
                <section class="sidebar md:col-span-1">
                    {" "}
                    <Sidebar/>
                </section>

                <div className="dashboardContainer">
                    <div className=" container dashboardSummary flex justify-between items-center">
                        <div className='font-bold'>Songs</div>
                        <div className=''><button className='border bg-orange-400 rounded-md p-1'>Add songs</button></div>
                    </div>
                    <hr className='  border-1 border-black border-dotted ' size={30} />
                    <div className=' flex justify-center'><button className='border shadow-md p-2 m-5 w-3/4'>No shopping Address Available</button></div>
                    <hr />
                </div>

                
            </div>


            
    </>
  )
}

export default Songs