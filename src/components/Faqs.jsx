import { faqs } from "../helpers/Faqs"

export default function Faqs () {
  return(
    <section id="faqs" className="w-full h-full fon xl:max-w-[1440px] xl:mx-auto xl:px-6 dark:bg-gray-900">
      <article className="w-full h-full p-6 flex-col space-y-4">
        <p className="text-3xl text-primary font-bold mt-6 dark:text-white">FAQ's</p>
        {
          faqs.map( ({ faqTitle , faqContent }) =>(
            <article key={faqTitle}>
              <p className="text-xl font-medium text-primary dark:text-white">{faqTitle}</p>
              <p className="text-md pt-2 dark:text-gray-200">
                {faqContent}
              </p>
          </article>
          ) )
        }
      </article>

    </section>
  )
}