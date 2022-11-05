export default function Card ( { img, title, subTitle, bgCard, titleStyle, subTitleStyle } ) {
  return(
    <article className="Card">
      <div className={img}></div>
      <div className={bgCard}>
        <p className={titleStyle}>{title}</p>
        <p className={subTitleStyle}>{subTitle}</p>
      </div>
    </article>
  )
}