import { stays } from "../helpers/Stays"

export default function TrendingStays(){



  return(
    <section id="trendingStays" className="px-6 h-full w-full pb-6 lg:px-6 xl:max-w-[1440px] xl:mx-auto xl:px-10 dark:bg-gray-900">
      <p className="text-3xl text-primary font-semibold py-6 dark:text-white">TrendingStays</p>

      <div className="w-full h-full flex flex-col space-y-6 items-center justify-center lg:hidden">
        {
          stays.map( ({ title , subtitle , img }) => 
            <div key={title} className={img}>
            <p className="CardTitle">{title}</p>
            <p className="text-sm pl-8 text-white mr-24 bg-terciary p-2">{subtitle}</p>
            </div>
          )
        }
      </div>


      <div className="hidden lg:flex flex-col space-y-6 lg:w-full lg:m-auto " >
        <div className="lg:block w-full h-[654px] bg-chicago bg-cover lg:bg-center rounded-xl">
          <p className="CardTitle lg:text-black">Chicago</p>
          <p className="text-sm pl-8 text-white w-1/3 bg-terciary p-2 lg:text-lg ">2 habitaciones, baño y cocina</p>
        </div>

        <div className="hidden lg:flex lg:h-full lg:w-full lg:space-x-4">
          <div className="w-full h-96 bg-LA bg-cover rounded-xl lg:h-auto">
            <p className="CardTitle">Los Angeles</p>
            <p className="text-sm pl-8 text-white w-2/3 bg-terciary p-2 lg:text-lg">2 habitaciones, baño y cocina</p>
          </div>  

          <div className="h-full w-full space-y-4">
              <div className="hidden lg:block w-full h-96 bg-miami bg-cover rounded-xl">
                <p className="CardTitle">Miami</p>
                <p className="text-sm pl-8 text-white w-2/3 bg-terciary p-2 lg:text-lg">2 habitaciones, baño y cocina</p>
              </div>  
              <div className="hidden lg:block w-full h-96 bg-bali bg-cover rounded-xl">
                <p className="CardTitle">Bali</p>
                <p className="text-sm pl-8 text-white w-2/3 bg-terciary p-2 lg:text-lg">2 habitaciones, baño y cocina</p>
              </div>  
          </div> 
        </div>
      </div>



    </section>
  )
}