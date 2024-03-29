import {Link} from 'react-router-dom'
import {BsStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    id,
    companyLogoUrl,
    title,
    rating,
    location,
    packagePerAnnum,
    employmentType,
    jobDescription,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item">
        <div className="logo-location-title-container">
          <div className="logo-title-container">
            <img
              src={companyLogoUrl}
              className="company-logo"
              alt="company logo"
            />
            <div className="title-rating-container">
              <h1 className="title">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="rating-icon" />
                <p className="rating-count">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
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
            <p className="package-heading">{packagePerAnnum}</p>
          </div>
        </div>
        <hr className="line" />
        <h1 className="description-heading">Description</h1>
        <p className="description-text">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
