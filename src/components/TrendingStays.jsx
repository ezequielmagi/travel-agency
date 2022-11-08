import { stays } from "../helpers/Stays"

export default function TrendingStays(){



  return(
    <section className="px-6 h-full w-full mb-6">
      <p className="text-3xl text-primary font-semibold pb-6">TrendingStays</p>

      <div className="w-full h-full flex flex-col space-y-6 items-center justify-center">

        {
          stays.map( ({ title , subtitle , img }) => 
            <div key={title} className={img}>
            <p className="CardTitle">{title}</p>
            <p className="text-sm pl-8 text-white mr-24 bg-terciary p-2">{subtitle}</p>
            </div>
          )
        }

      </div>


    </section>
  )
}