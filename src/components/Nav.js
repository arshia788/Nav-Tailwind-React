import React, {useState} from 'react';

import { FaHamburger } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";

const Nav = () => {

    const [show, setShow]= useState(false);

    return (
        <nav className='bg-blue-950 text-white py-2 px-4 flex justify-between items-center'>

            <h2 className='text-3xl font-bold '>logo</h2>

            <div
            className={`
                transition-all duration-150
                sm:static sm:bg-transparent sm:right-0 sm:top-0 sm:w-fit sm:p-0
                xs:absolute ${show ? 'xs:left-0':'xs:-left-full'} xs:top-12 xs:bg-blue-800 xs:w-full xs:p-1
                `
            }
            >
                <ul className={'flex gap-x-3 text-md'} >
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