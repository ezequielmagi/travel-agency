import Header from "./Header";

export default function Home () {
  return(
    <section id="home" className="w-full h-auto xl:max-w-[1440px] xl:mx-auto">
      <Header />
      <div className="w-full h-3/4">
        <div className="w-full h-full">
            <div className=" w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-60 lg:justify-start xl:max-w-[1440px]">
              <input className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus-within:outline-none focus:ring-2 focus:w-11/12 lg:hidden" placeholder="San Francisco" type="search" name="" id="" />
              <div className="hidden h-auto lg:w-2/5 lg:flex pb-6">
                <p className="text-5xl ml-16 font-bold text-white">Encuentra más ubicaciones como esta</p>
              </div>
              <button className="bg-white text-xl text-primary font-semibold p-4 w-64 rounded-full shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white hover:transform hover:-translate-y-1 hover:scale-110 lg:ml-16">
                Explorar
              </button>
            </div>

            <div className="w-full h-full lg:h-[45rem] lg:w-full lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
              <img className="lg:hidden" src="./img/sanFrancisco.jpg" alt="" />
            </div>
        </div>
       
      </div>
    </section>
  )
}