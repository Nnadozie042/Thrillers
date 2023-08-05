import React, { useState } from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaUser } from "react-icons/fa";
import { BsDatabase } from 'react-icons/bs'
import { Link } from "react-router-dom"

const Input = () => {

    const [place, setPlace] = useState("");
    const [arrive, setArrive] = useState("");
    const [departure, setDeparture] = useState("");
    const [turn, setTurn] = useState("");
    const [glass, setGlass] = useState("");
    const [passanger, setPassanger] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div className=" grid places-items-centermd:grid md:place-items-center mt-[2em] ">
                <form className="space-y-[1.5em]" onSubmit={handleSubmit}>
                    <div className="">
                        <p className="text-neutral-500">Depart from</p>
                        <span className="absolute pt-[1em] pl-[0.5em]"><FaPlaneDeparture className="text-neutral-500" /></span>
                        <input className="py-[0.8em] w-[22em] md:w-[25em] rounded-[0.5em] border shadow-lg pl-[1.6em] hover:bg-neutral-200" type="text"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            placeholder="London-All Airport England,Uk" />
                        <p>{
                            place === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                        }</p>
                    </div>

                    <div>
                        <p className="text-neutral-500">Arrive at</p>
                        <span className="absolute pt-[1em] pl-[0.5em]"><FaPlaneArrival className="text-neutral-500" /></span>

                        <input className="py-[0.8em] w-[22em] md:w-[25em] rounded-[0.5em] border shadow-lg pl-[1.8em] hover:bg-neutral-200" type="text"
                            value={arrive}
                            onChange={(e) => setArrive(e.target.value)}
                            placeholder="NewYork-All Airport,NewYork,USA" />
                        <p>{
                            arrive === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                        }</p>
                    </div>

                    <div className="flex space-x-[1.5em]">
                        <div>
                            <p className="text-neutral-500">Departure Date</p>
                            <span></span>
                            <input className="py-[0.8em] w-[10em] md:w-[11.5em] rounded-[0.5em] border shadow-lg hover:bg-neutral-200" type="date"
                                value={departure}
                                onChange={(e) => setDeparture(e.target.value)}
                                placeholder="" />

                            <p>{
                                departure === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                            }</p>
                        </div>

                        <div>
                            <p className="text-neutral-500">Return Date</p>
                            <input className="py-[0.8em] w-[10em] md:w-[11.5em] rounded-[0.5em] border shadow-lg hover:bg-neutral-200" type="date"
                                value={turn}
                                onChange={(e) => setTurn(e.target.value)}
                                placeholder="" />

                            <p>{
                                turn === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                            }</p>
                        </div>
                    </div>

                    <div className="flex space-x-[1.5em]">
                        <div>
                            <p className="text-neutral-500">Class</p>
                            <span className="absolute pt-[1em] pl-[0.5em]"><BsDatabase classsName="text-neutral-300" /></span>
                            <input className="py-[0.8em] w-[10em] md:w-[12.5em] rounded-[0.5em] border shadow-lg pl-[1.5em] hover:bg-neutral-200" type="number"
                                value={glass}
                                onChange={(e) => setGlass(e.target.value)}
                                placeholder="Economy" />

                            <p>{
                                glass === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                            }</p>
                        </div>

                        <div>
                            <p className="text-neutral-500">passangers</p>
                            <span className="absolute pt-[1em] pl-[1em]"><FaUser className="text-neutral-400" /></span>
                            <input className="py-[0.8em] w-[10em]  md:w-[11em] rounded-[0.5em] border shadow-lg hover:bg-neutral-200 " type="number"
                                value={passanger}
                                onChange={(e) => setPassanger(e.target.value)}
                                placeholder="" />

                            <p>{
                                <p>{
                                    turn === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                                }</p> === "" ? (<p className="text-[0.7em] text-red-400">*input is required</p>) : (<p></p>)

                            }</p>
                        </div>
                    </div>
                    <div>
                        <button className="h-[2.5em] w-[22em] bg-blue-800 rounded-[0.5em] border shadow-lg text-white hover:bg-blue-500">
                            <Link to="/Booking">FIND FLIGHT</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Input