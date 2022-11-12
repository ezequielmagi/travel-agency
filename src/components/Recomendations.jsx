import Card from "./Card";

export default function Recomendations (){

  const cards = [
    {img: "w-full h-3/5 bg-norway bg-cover rounded-t-lg", title: 'Norway', subTitle:'Beatiful landscape'},
    {img: "w-full h-3/5 bg-new_york bg-cover rounded-t-lg", title: 'New York', subTitle:'Concrete jungle'},
    {img: "w-full h-3/5 bg-yosemite bg-cover rounded-t-lg", title: 'Yosemite', subTitle:'A break from the world'},
    {img: "w-full h-3/5 bg-seattle bg-cover rounded-t-lg", title: 'Seattle', subTitle:'Big city'},
    {img: "w-full h-3/5 bg-seattle bg-cover rounded-t-lg", title: 'Switzerland', subTitle:'Big city'},
  ]

    const bgCard0 = "bg-secondary w-full h-2/5 rounded-b-lg dark:bg-gray-700"
    const bgCard1 = "bg-white text-terciary w-full h-2/5 rounded-b-lg dark:bg-gray-800"

    const titleStyle0 = "text-white  font-bold px-4 py-2 xl:text-2xl "
    const titleStyle1 = "text-terciary font-bold text-xl py-2 px-4 xl:text-2xl "

    const subTitleStyle0 = "text-white text-md px-4 xl:text-xl"
    const subTitleStyle1 = "text-terciary text-md px-4 xl:text-xl"

  return(
    <section id="featured" className="p-6  xl:mx-auto xl:pl-10 xl:max-w-[1440px] dark:bg-gray-900 dark:text-white">
    <p className="text-3xl font-semibold text-primary xl:py-4  dark:text-white">Recomendados</p>
    <div className="flex h-72 w-auto items-center mt-6 overflow-x-auto overscroll-x-contain space-x-4 overflow-y-hidden xl:h-96">
      {
        cards.map( (card) => ( 
          cards.indexOf(card) % 2 === 0 ? <Card key={card.img} img={card.img} title={card.title} subTitle={card.subTitle} bgCard={bgCard0} titleStyle={titleStyle0} subTitleStyle={subTitleStyle0} /> : 
          <Card key={card.img} img={card.img} title={card.title} subTitle={card.subTitle} bgCard={bgCard1} titleStyle={titleStyle1} subTitleStyle={subTitleStyle1}/>
        ) )
      }
    </div>
    </section>
  )
}