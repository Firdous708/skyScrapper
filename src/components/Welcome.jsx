import React from 'react'
import Welcomelogo from '../assets/flighticon.jpg';
import {GiRocketFlight} from 'react-icons/gi';
import {FaPaperPlane} from 'react-icons/fa';
import {Zoom, Fade} from 'react-reveal'
import { Link } from 'react-router-dom';
export default function Welcome() {
  return (
    <div className="welcome-container flex flex-row items-center justify-between pt-[40px] px-[80px]">
       <Fade left>
       <div className="welcome-text  max-w-[550px] ">
            <h1 className='text-[55px] font-bold' style={{
                fontFamily: "'Roboto', sans-serif",
            }}>
                The <span className='text-violet-400 flex flex-row gap-[20px]'>journey <GiRocketFlight /></span> of
                thousand miles 
                begins with a 
                single step <FaPaperPlane className='inline-block text-violet-400 ml-10 animate-bounce' />
            </h1>
            <div className="welcome-buttons flex flex-row items-center justify-between mt-[60px]" style={{
                fontFamily: "'Roboto', sans-serif",
            }}>
                <Link to='/search' >
                <button  className="search-flights  text-lg rounded-lg shadow-2xl  h-[55px] w-[250px] bg-gradient-to-r from-violet-400 to-violet-500 text-white hover:-translate-y-[5px] transition ease-in">
                    Search flights
                </button>
                </Link>
                <button className="get-info text-lg rounded-2xl border-2 shadow-2xl  border-violet-400 h-[55px] w-[250px] hover:-translate-y-[4px] transition ease-in hover:bg-violet-300 hover:border-none">
                    Get info
                </button>
            </div>
        </div>
       </Fade>
       <Zoom>
       <div className="welcome-image  max-w-[750px] -translate-y-[20px]">
            <img src={Welcomelogo}  />
        </div>
       </Zoom>
    </div>
  )
}
