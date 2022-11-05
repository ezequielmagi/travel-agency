import Card from "./Card";

export default function Recomendations (){

  const cards = [
    {img: "w-full h-3/5 bg-norway bg-cover rounded-t-lg", title: 'Norway', subTitle:'Beatiful landscape'},
    {img: "w-full h-3/5 bg-new_york bg-cover rounded-t-lg", title: 'New York', subTitle:'Concrete jungle'},
    {img: "w-full h-3/5 bg-yosemite bg-cover rounded-t-lg", title: 'Yosemite', subTitle:'A break from the world'},
    {img: "w-full h-3/5 bg-seattle bg-cover rounded-t-lg", title: 'Seattle', subTitle:'Big city'},
  ]

    const bgCard0 = "bg-secondary w-full h-2/5 rounded-b-lg"
    const bgCard1 = "bg-white text-terciary w-full h-2/5 rounded-b-lg"

    const titleStyle0 = "text-white text-bold text-xl px-4 py-2"
    const titleStyle1 = "text-terciary text-bold text-xl py-2 px-4"

    const subTitleStyle0 = "text-white text-md px-4"
    const subTitleStyle1 = "text-terciary text-md px-4"

  return(
    <section className="p-6">
    <p className="text-3xl font-semibold text-primary">Recomendados</p>
    <div className="flex h-72 w-auto items-center mt-6 overflow-x-auto overscroll-x-contain space-x-4 overflow-y-hidden">
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