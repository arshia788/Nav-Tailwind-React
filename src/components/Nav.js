import React, {useState} from 'react';

import { FaHamburger } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";

const Nav = () => {
    return (
        <nav className='bg-blue-950 text-white py-2 px-4 flex justify-between items-center'>

            <h2 className='text-2xl font-bold'>logo</h2>

            <div>
                <ul className='flex gap-x-3'>
                    <li>home</li>
                    <li>shop</li>
                    <li>log-out</li>
                </ul>
            </div>
            
        </nav>
    );
};

export default Nav;