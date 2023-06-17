import React, {useState} from 'react';

import { FaHamburger } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";

const Nav = () => {

    const [show, setShow]= useState(false);

    return (
        <nav className='bg-blue-950 text-white py-2 px-4 flex justify-between items-center'>

            <h2 className='text-3xl font-bold '>logo</h2>

            <div>
                <ul className='flex gap-x-3 text-md'>
                    <li>home</li>
                    <li>shop</li>
                    <li>log-out</li>
                </ul>
            </div>

            {
                show
                ?
                <i onClick={()=> setShow(!show)} className='xs:block cursor-pointer sm:hidden text-3xl'>
                    <BsFillXCircleFill />
                </i>
                :
                <i onClick={()=> setShow(!show)} className='xs:block cursor-pointer  sm:hidden text-3xl'>
                    <FaHamburger />
                </i>
                
            }

            
            
        </nav>
    );
};

export default Nav;