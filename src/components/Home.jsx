export default function Home () {
  return(
    <section className="w-full h-screen">
      <div id="home">
          <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center">
            <input className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus-within:outline-none focus:ring-2 focus:w-11/12" placeholder="San Francisco" type="search" name="" id="" />
            <button className="bg-white text-xl text-primary font-semibold p-4 w-32 rounded-full shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white hover:transform hover:-translate-y-1 hover:scale-110">
              Explorar
            </button>
          </div>
        <div className="w-full h-3/4">
          <div className="w-full h-full">
            <img src="./img/sanFrancisco.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}