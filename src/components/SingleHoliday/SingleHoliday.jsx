import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import './SingleHoliday.css'

const
 SingleHoliday = ({ title, duration, description, price, image, next, prev }) => {
  return (

    <div className="holiday-container">

      <img src={image} alt={title} className="holiday-img" />

      <div className="holiday-info">

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="holiday-cost">

          <h4>{duration}</h4>

          <h4 className="price">{price} €</h4>

        </div>

        <div className="buttons-container">

          <button className="btn" onClick={prev}><GrFormPreviousLink className="icon" /></button>

          <button className="btn" onClick={next}><GrFormNextLink className="icon" /></button>

        </div>

      </div>

    </div>

  )

}

export default SingleHoliday