import React from 'react';
import { FaPlaneDeparture, FaShip } from 'react-icons/fa';
import { BsFillAirplaneFill } from 'react-icons/bs';
import { IoMdTrain } from "react-icons/io";
import {IoCarSportSharp} from "react-icons/io5";

import Input from "./Input"
import Nav from './Nav';


const Home = () => {
  return (
    <div className="bg-[#e9f0eb]  w-full h-[80em] md:h-[70em]">
      <div className="">
        <div className="flex  justify-between pt-[1em]">
        <div className=" flex pl-[1em]  ">
          <div className="text-blue-600 text-[1.5em]  font-normal  ">Ticket4U</div>
          <div><FaPlaneDeparture className="text-blue-600 text-[2em] shadow-lg" /></div>
        </div>
        <div><Nav/></div>
        </div>

        < div className=" space-x-[0.08em] flex justify-center  md:space-x-[0.8em]  pt-[3em]">

          <div className="py-[3em] w-[19em] bg-[#63cf82] border shadow-lg">
            <div className="space-y-[1.5em] grid place-items-center">
              <div className="text-white"><BsFillAirplaneFill className="text-[2em]" /></div>
              <div className="text-white">Flight</div>
            </div>

          </div>


          <div className="py-[3em] w-[19em] bg-white border shadow-lg">
            <div className="space-y-[1.5em] grid place-items-center">
              <div className="text-white"><IoMdTrain className="text-[2em] text-neutral-400" /></div>
              <div className="text-neutral-400">Trains</div>
            </div>

          </div>



          <div className="py-[3em] w-[19em] bg-white border shadow-lg">
            <div className="space-y-[1.5em] grid place-items-center">
              <div className="text-white"><FaShip className="text-[2em] text-neutral-400" /></div>
              <div className="text-neutral-400">Trains</div>
            </div>

          </div>


          <div className="py-[3em] w-[19em] bg-white border shadow-lg">
            <div className="space-y-[1.5em] grid place-items-center">
              <div className="text-white"><IoCarSportSharp className="text-[2em] text-neutral-400" /></div>
              <div className="text-neutral-400">Cars</div>
            </div>

          </div>
        </div>

        <div>
          <div className="whitespace-nowrap text-center ">
           <p className="text-[1.2em] text-neutral-500 md:text-[2em] md:text-neutral-400 md:font-bolder pt-[1em] "> Best flight Deals  with
           <span className="text-blue-600 pl-[0.7em] text-[2em] md:text-blue-600 md:pl-[0.7em] md:font-bold shadow">Ticket4U</span></p>
           
          </div>

        </div>
        

        <div><Input/></div>

      </div>

    </div>
  )
}
export default Home;