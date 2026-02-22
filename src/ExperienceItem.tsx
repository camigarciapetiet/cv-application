import { WorkExperience } from "./CVBuilder";

type Props = {
  experience: WorkExperience;
};

export function ExperienceItem({ experience }: Props) {
  return (
    <div className="experience-item">
      <div className="experience-header">
        <h3>{experience.title}</h3>
        <span>
          {experience.startDate} - {experience.finishDate}
        </span>
      </div>

      <p className="experience-location">{experience.location}</p>

      <p className="experience-description">{experience.description}</p>
    </div>
  );
}
