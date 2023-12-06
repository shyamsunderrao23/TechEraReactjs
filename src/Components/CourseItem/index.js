import './index.css'

const CourseItem = props => {
  const {CourseDetailsItem} = props
  const {name, imageUrl, description} = CourseDetailsItem
  return (
    <div className="courses-details-container">
      <img src={imageUrl} alt={name} className="course-details-image" />
      <div className="courses-details">
        <h1 className="courses-details-heading">{name}</h1>
        <p className="courses-details-description">{description}</p>
      </div>
    </div>
  )
}

export default CourseItem
