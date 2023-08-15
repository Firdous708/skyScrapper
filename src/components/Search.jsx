import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import {MdFlightTakeoff} from 'react-icons/md';
import Flyingw from '../assets/Flyingw.svg';
import Destination1 from '../assets/destination1.jpg'
import Destination2 from '../assets/destination2.jpg';
import Destination3 from '../assets/destination3.jpg';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default function Search() {
  return (
   <div className="search-container bg-violet-200 pb-[50px] px-[100px]" style={{
    fontFamily: "'Roboto', sans-serif",}}
     >
    
    <div className="search-top flex flex-row items-center justify-between ">
        <Fade left>
        <div className="top-left">
        <h1 className='text-[50px]'>Hey Buddy! where are
        <br/> you <span className='font-bold text-violet-500 p-2'> Flying </span> to?
        </h1>
        <button className="explore flex flex-row items-center gap-4 mt-[40px] text-lg hover:text-violet-500 trnasition ease-in ">Explore Now
        <BsFillArrowRightCircleFill /></button>
        </div>
        </Fade>
        <Fade bottom>
        <div className="top-right">
           <img src={Flyingw} alt='image' className='h-[500px]'/>
        </div>
        </Fade>
    </div>
    
    <Zoom duration = {1500}>
    <div className="search-box bg-slate-100 flex flex-col  gap-10 rounded-lg shadow-2xl -translate-y-[30px]">
        <div className="box-top -translate-y-[40px] h-[80px] w-[150px] rounded-lg px-6 py-3 bg-slate-100">
            <p className='flex flex-row items-center text-lg gap-4'><MdFlightTakeoff />Flights</p>
        </div>
        <div className="details-container px-8 -translate-y-[40px]  ">
            <form action='#' className='flex flex-col'>
                <div className="inputs flex flex-row justify-between">
                <div className='text-details-container flex flex-row items-center gap-[50px]'>
                <div className="source  w-[350px] border-2 border-violet-400 rounded-lg shadow-2xl bg-slate-300 flex flex-col ">
               
                <input type='text' id='from' placeholder='Enter Source' className='
                bg-slate-300  p-8 text-lg font-bold' />
                </div>
                <div className="destination  w-[350px] border-2 border-violet-400  rounded-lg shadow-2xl bg-slate-300 flex flex-col ">
               
               <input type='text' id='from' placeholder='Enter Destination' className='
               bg-slate-300  p-8 text-lg font-bold'/>
               </div>
                </div>
                <div className="dates-container flex flex-row justify-between gap-[50px] bg-slate-300 rounded-lg shadow-2xl border-2 border-violet-300 ">
                   <div className="departure-cont flex flex-col items-start gap-2 p-4 border-r-2 border-violet-300">
                   <label for = "departure">Departure</label>
                    <input type='date' id='departure' className='
                    bg-slate-300 text-xl font-bold'/>
                   </div>
                   <div className="return-cont flex flex-col items-start gap-2 p-4 border-r-2">
                   <label for = "return">Return</label>
                    <input type='date' id='return' className='bg-slate-300 text-xl font-bold'/>
                   </div>
                </div>
                </div>
                <button type='submit' className='
                bg-black w-[185px] text-white  py-6 mt-4 translate-y-[60px] rounded-lg shadow-2xl ml-[85%] active:border-2 active:border-violet-400 transition ease-in'>Search Flights </button>
            </form>
        </div>
    </div>
    </Zoom>
    <div className="search-bottom mt-[50px]">

        <div className="pop-destinations">
            <h1 className='text-2xl font-semibold'>Popular Destinations</h1>
        </div>
        <div className="destinations-container mt-[50px] grid grid-cols-3">
            {/*Card1 Here */}
            <Zoom duration={1000}>
            <div className="dest-card flex flex-col p-6 w-[400px]  shadow-lg rounded-lg bg-violet-300 hover:-translate-y-2 transition ease-in">
                <div className="card-top flex flex-col items-center">
                 <img src={Destination1} alt='destination' className='h-[300px] w-[300px] rounded-lg' />
                 <button className="rates px-8 py-3 bg-violet-400 rounded-lg -translate-y-4 shadow-2xl text-lg hover:bg-violet-500 transition ease-in">
                    Book Now!
                 </button>
                
                </div>
                <div className="card-descrp flex flex-col items-center">
                    <h1 className='descrp-heading text-2xl font-bold tracking-widest'>
                        Kashmir
                    </h1>
                    <p className='text-lg'> Explore the Paradise 
                    on earth on affordable prices and convinience. Book tickets now.
                    </p>
                </div>
            </div>
            </Zoom>
            {/* Card2 goes here */}
            <Zoom duration= {1000}>
            <div className="dest-card flex flex-col p-6 w-[400px]  shadow-lg rounded-lg bg-violet-300 hover:-translate-y-2 transition ease-in">
                <div className="card-top flex flex-col items-center">
                 <img src={Destination2} alt='destination' className='h-[300px] w-[300px] rounded-lg' />
                 <button className="rates px-8 py-3 bg-violet-400 rounded-lg -translate-y-4 shadow-2xl text-lg hover:bg-violet-500 transition ease-in">
                    Book Now!
                 </button>
                
                </div>
                <div className="card-descrp flex flex-col items-center">
                    <h1 className='descrp-heading text-2xl font-bold tracking-widest'>
                        Himachal
                    </h1>
                    <p className='text-lg'> Explore the Paradise 
                    on earth on affordable prices and convinience. Book tickets now.
                    </p>
                </div>
            </div>
            </Zoom>

            {/* Card3 goes here */}
            <Zoom duration = {1000}>
            <div className="dest-card flex flex-col p-6 w-[400px]  shadow-lg rounded-lg bg-violet-300 hover:-translate-y-2 transition ease-in">
                <div className="card-top flex flex-col items-center">
                 <img src={Destination3} alt='destination' className='h-[300px] w-[300px] rounded-lg' />
                 <button className="rates px-8 py-3 bg-violet-400 rounded-lg -translate-y-4 shadow-2xl text-lg hover:bg-violet-500 transition ease-in">
                    Book Now!
                 </button>
                
                </div>
                <div className="card-descrp flex flex-col items-center">
                    <h1 className='descrp-heading text-2xl font-bold tracking-widest'>
                        Mumbai
                    </h1>
                    <p className='text-lg'> Explore the Paradise 
                    on earth on affordable prices and convinience. Book tickets now.
                    </p>
                </div>
            </div>
            </Zoom>
        </div>
    </div>
   </div>
  )
}
