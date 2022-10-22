import { NextComponentType } from "next"
import NavBar from "./nav"


const Header: NextComponentType = () => {
  return (
    <header className="  text-black min-h-[90%] px-3 mb-10 w-full ">

        <div className="fixed z-[50] top-0 left-0 w-full h-[7vh] bg-slate-100 bg-opacity-50 backdrop-blur">
          
        </div>

        <NavBar />

        <section className='container w-full flex h-full md:p-20  my-20 ' >
        
          <div className="w-full xl:w-1/2 h-max flex flex-col mr-auto  justify-around my-auto">
            
            <p className="text-pink-600 text-sm font-mono">
              welcome to,
            </p>

            <p className="uppercase font-black text-4xl xl:text-5xl  pt-0 pb-10 text-blue-600">
              Tech Innovation Center Foundation.
            </p>

            <p className="text-base text-justify ">
              We exist to leverage local startups through adequate follow-up, mentoring and coaching.
              We are dedicated to support high-potential technology and life sciences startups from EMEA. 
              Helping emerging companies to successfully enter the leading markets and scale their business.

            </p>

            <p className="flex flex-row w-1/2 space-x-4 my-5">
              <button className="rounded border-2 border-slate-800 hover:border-blue-800 text-slate-800 hover:text-blue-700 py-1 px-2 duration-200 hover:scale-105" >Join Us</button>
              <button className="rounded border bg-slate-800 text-white hover:bg-blue-700 py-1 px-2 duration-200 hover:scale-105" >Register</button>
            </p>
          </div> 

          <div className="md:w-[40%] p-5 hidden xl:block  min-h-max  ml-auto relative float-right  bg-sprinkle bg-opacity-10 object-fill ">

            <div className="absolute right-0 rounded-lg bg-gradient-to-br from-blue-600 to-sky-500 w-[320px] h-[320px]"></div>
            <div className="absolute -right-5 -top-5 rounded-lg bg-gradient-to-br from-pink-600 to-indigo-600 w-[120px] h-[120px]"></div>
            <div className="absolute right-48 top-32 rounded-lg bg-gradient-to-br from-slate-600 to-slate-900 w-[240px] h-[240px]"></div>

          </div>
        </section>
        
    </header>
  )
}

Header.propTypes = {}

export default Header