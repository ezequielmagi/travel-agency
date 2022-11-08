import { faqs } from "../helpers/Faqs"

export default function Faqs () {
  return(
    <section id="faqs" className="w-full h-full">
      <article className="w-full h-full p-6 flex-col space-y-4">
        <p className="text-3xl text-primary font-semibold mt-6">FAQ's</p>
        {
          faqs.map( ({ faqTitle , faqContent }) =>(
            <article key={faqTitle}>
              <p className="text-xl font-medium text-primary">{faqTitle}</p>
              <p className="text-md pt-2">
                {faqContent}
              </p>
          </article>
          ) )
        }
      </article>

    </section>
  )
}