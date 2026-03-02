import { EducationalExperience } from "./CVBuilder";

type Props = {
  education: EducationalExperience;
};

export function EducationItem({ education }: Props) {
  return (
    <div className="education-item">
      <div className="education-header">
        <h3>{education.schoolName}</h3>
        <span>
          {education.startDate} - {education.finishDate}
        </span>
      </div>
      <p className="education-title">{education.title}</p>
      <p className="education-description">{education.description}</p>
    </div>
  );
}
