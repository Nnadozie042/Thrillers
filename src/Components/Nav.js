import React from 'react';
import {Link} from "react-router-dom"

const Nav=()=>{
    return(
        <>
        <div>
            <ul className="flex justify-between mr-[1em]">
                <li><Link className="hover:text-neutral-400 shadow-lg" to="/Booking">BOOK FLIGHT</Link></li>
                <li className="pl-[1em] "><Link className="hover:text-neutral-400 shadow-lg"to="/Service">SERVICE</Link></li>
            </ul>
        </div>

        </>
    )
}
export default Nav;