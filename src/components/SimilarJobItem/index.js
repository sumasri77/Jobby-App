import {BsStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const SimilarJobItem = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    title,
    rating,
    location,
    employmentType,
    jobDescription,
  } = similarJobData
  return (
    <li className="similar-job-item">
      <div className="logo-location-title-container">
        <div className="logo-title-container">
          <img
            src={companyLogoUrl}
            className="similar-job-company-logo"
            alt="similar job company logo"
          />
          <div className="title-rating-container">
            <h1 className="title">{title}</h1>
            <div className="rating-container">
              <BsStarFill className="rating-icon" />
              <p className="rating-count">{rating}</p>
            </div>
          </div>
        </div>
        <h1 className="description-heading">Description</h1>
        <p className="description-text">{jobDescription}</p>
        <div className="location-employment-container">
          <div className="location-container">
            <MdLocationOn className="location-icon" />
            <p className="location-heading">{location}</p>
          </div>
          <div className="employment-container">
            <BsFillBriefcaseFill className="brief-case-icon" />
            <p className="employment-type-heading">{employmentType}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobItem
