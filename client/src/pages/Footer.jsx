import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="bg-gray-400 h-[400px] p-5 flex flex-col justify-between font-semibold">
            <div className='flex flex-col lg:flex-row justify-center items-center gap-[50px] text-black w-[90%] mx-auto h-[90%] text-center'>
                <div className="flex items-center gap-1 text-2xl font-bold font-serif">
                    <img src="india_travel_logo.jpg" alt="App Logo"
                        className="size-[50px] rounded-full border-2 border-pink-700"
                    />
                    <div className="text-blue-700 text-2xl">India_Travellica</div>
                </div>
                <div>
                    <div className="text-2xl mb-2 text-start"><u>Contact Us</u></div>
                    <ul className="text-xl text-green-800 flex flex-col gap-5">
                        <li className="flex gap-2 items-center"><FaPhone className="text-red-700" /> 8528564602</li>
                        <li>
                            <a href="mailto:anandyad2004@gmail.com" className="flex gap-2 items-center">
                                <IoMdMail className="text-red-700" /> anandyad2004@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-start">
                    <Link to='/aboutus'>
                        <div className="text-xl hover:text-blue-500 flex items-center gap-2">About Us <FaLink /> </div>
                    </Link>
                </div>
            </div>
            <div className="text-center">
                © All rights reserved
            </div>
        </div>
    )
}

export default Footer