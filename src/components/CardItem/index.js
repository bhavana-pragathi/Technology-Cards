/* eslint-disable jsx-a11y/img-redundant-alt */
import './index.css'

// eslint-disable-next-line no-unused-vars
const CardItem = props => {
  const {techCardDetails} = props
  const {title, description, imgUrl, className} = techCardDetails
  return (
    <div>
      <h1 className="head">Learn 4.0 Technologies</h1>
      <p className="para">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in the Product Development.
      </p>
      <li className={className}>
        <div>
          <h1 className="card-head">{title}</h1>
          <p className="card-para">{description}</p>
          <img className="image" alt={title} src={imgUrl} />
        </div>
      </li>
    </div>
  )
}

export default CardItem
