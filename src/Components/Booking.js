import React, { useState, useEffect } from 'react';
import pic2 from "../Components/pic2.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import axios from "axios"


const Booking = () => {
    const [data, setData] = useState([]);
    const [cheap, setCheap] = useState("");

    const [recommend, setRecommend] = useState("");
    const [sortValue, setSortValue] = useState("");


    const sortOption = ["id", "name", "time", "depart", "arrival", "price"];


    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = async () => {
        return await axios.get("http://localhost:8000/data")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        return await axios
            .get(`http://localhost:8000/data?q=${cheap}`)
            .then((res) => {
                setData(res.data);
                setCheap("")
            })
            .catch(err => console.log(err))
    }
    const handleReset = async () => {
        fetchData()
    }

    const handleSort = async (e) => {
        let data = e.target.value;
        setSortValue(data);
        return await axios.get(`http://localhost:8000/data?_sort=${data}&_order=asc`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = data.slice(startIndex, endIndex);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    function goToPreviousPage() {
        setCurrentPage(currentPage - 1);
    }
    function goToPage(page) {
        setCurrentPage(page);
    }
    function goToNextPage() {
        setCurrentPage(currentPage + 1);
    }
    return (
        <div className="w-full h-[50em] md:h-[80em] bg-[#e9eef7]">
            <div className="pt-[1em]">
                < div className="flex justify-end  mt-[1em] pr-[1em]">
                    <Link className="h-[3em] w-[6em] bg-black  hover:bg-neutral-600" to="/">
                        <button className="pl-[1.5em] pt-[0.6em] text-white ">
                            Home
                        </button>
                    </Link>
                </div>

                <div className="flex justify-evenly pt-[2em]">

                    <div>
                        <p className="text-[1em] lg:text-[1.5em] font-bold text-neutral-400 ">Search Result</p>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className=" md:flex md:space-x-[2em] ">
                                <div className="space-y-[0.5em]">
                                    <input className="h-[2em] w-[14em] md:h-[2.5em] md:w-[15em] md:text-center rounded-[0.5em]" type="text"
                                        value={cheap}
                                        onChange={(e) => setCheap(e.target.value)}
                                        placeholder="flightName" />

                                    <div className="space-y-[1em] pl-[3em] ">
                                        <button className="h-[2.1em] w-[4em] bg-blue-200">search</button>

                                        <button onClick={handleReset} className="h-[2.1em] w-[4em]  bg-neutral-300">Reset</button>
                                    </div>
                                </div>


                                <div className="mt-[1em] md:mt-0">
                                    <select
                                        value={sortValue}
                                        onChange={handleSort}
                                        className="w-[10em] h-[2.5em] rounded-[0.5em]">
                                        <option>select your options: here</option>
                                        {
                                            sortOption.map((data) => (
                                                <option value={data}>{data}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="mt-[1.5em] md:mt-0">
                                    <input className="h-[2.5em] w-[10em] rounded-full text-white bg-blue-500 text-center font-bold " type="text"
                                        value={recommend}
                                        onChange={(e) => setRecommend(e.target.value)}
                                        placeholder="Recommend" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='grid place-items-center pt-[4em]'>

                    <div>
                        <table className="table">
                            <thead>
                                <tr>

                                    <th className="bg-neutral-300 border text-left px-[1em] py-[0.1em] lg:py-4 lg:px-16 lg:py-4 lg:pl-[4em]"  >ID</th>
                                    <th className="bg-neutral-300 border text-left px-[1em] py-[0.1em] lg:px-16 lg:py-4" >Name</th>
                                    <th className="bg-neutral-300 border text-left px-[1em] py-[0.1em] lg:px-16 lg:py-4">Time</th>
                                    <th className="bg-neutral-300 border text-left px-[1em] py-[0.8em] lg:px-16 lg:py-4" >Depart</th>
                                    <th className="bg-neutral-300 border text-left px-[1em] py-[0.8em] lg:px-16 lg:py-4">Arrival</th>
                                    <th className="bg-neutral-300 border text-left px-[1em] py-[0.8em] lg:px-16 lg:py-4">Price</th>
                                </tr>

                            </thead>


                            <tbody>
                                {currentData.map((data, i) => {
                                    return (

                                        <tr className="mt-[4em]" key={i} >
                                            <td className="pl-[4em] border-bottom-style: groove pb-[2em] border px-8 py-4">{data.id}</td>
                                            <td className=" lg:border lg:px-8 lg:py-4"><p className="font-bold"><img className="h-[0.8em] w-[1.5em] md:h-[2em] md:w-[4em]" src={pic2} alt="" />
                                            </p>{data.name}</td>
                                            <td className="border px-4 py-2 lg:border lg:px-8 lg:py-4">{data.time}</td>
                                            <td className="border px-4 py-2 lg:border lg:px-8 lg:py-4">{data.depart}</td>
                                            <td className="border px-4 py-2 lg:border lg:px-8 lg:py-4">{data.arival}</td>
                                            <td className="border px-8 py-2 lg:border lg:px-8 lg:py-4">{data.price}</td>

                                        </tr>
                                    )
                                }

                                )}

                            </tbody>

                        </table>

                        <div className='absolute flex flex-row ml-[68em] text-[0.7em] text-gray-400  pt-[2em]'><button onClick={goToPreviousPage} disabled={currentPage === 1}>
                            <FaChevronLeft className="text-gray-400 text-[3em]" />
                        </button>
                            <div>
                                {Array.from({ length: pageCount }, (_, index) => (
                                    <button className="space-x-[20em]" key={index} onClick={() => goToPage(index + 1)}>
                                        {index + 1}
                                    </button>
                                ))}
                            </div>

                            <button onClick={goToNextPage} disabled={endIndex >= data.length} >
                                <FaChevronRight className="text-[3em]" />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Booking;