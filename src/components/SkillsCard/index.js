const SkillsCard = props => {
  const {skillDetails} = props
  const {name, imageUrl} = skillDetails
  return (
    <li className="skills-items-container">
      <div className="skills-container">
        <img src={imageUrl} alt={name} className="skill-image" />
        <p className="skill-name">{name}</p>
      </div>
    </li>
  )
}

export default SkillsCard
