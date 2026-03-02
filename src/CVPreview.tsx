import { CVData } from "./CVBuilder";
import { ExperienceItem } from "./ExperienceItem";
import { EducationItem } from "./EducationItem";

type Prop = {
  cv: CVData;
};
export function CVPreview({ cv }: Prop) {
  const location = [cv.personalInfo.city, cv.personalInfo.country]
    .filter(Boolean)
    .join(", ");
  const items = [location, cv.personalInfo.email, cv.personalInfo.cell].filter(
    Boolean,
  );
  const skills = cv.skills.join(", ");

  return (
    <div className="cv-preview">
      <h1 className="name-line">{cv.personalInfo.name}</h1>
      <p className="personal-line">{items.join(" | ")}</p>
      {cv.summary && (
        <div className="subsection">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">{cv.summary}</p>
        </div>
      )}
      {cv.education.length > 0 && (
        <div className="subsection">
          <h2 className="section-title">Education</h2>
          {cv.education.map((education, index) => (
            <EducationItem education={education} />
          ))}
        </div>
      )}
      {cv.experience.length > 0 && (
        <div className="subsection">
          <h2 className="section-title">Experience</h2>
          {cv.experience.map((work, index) => (
            <ExperienceItem experience={work} />
          ))}
        </div>
      )}
      {cv.skills.length > 0 && (
        <div className="subsection">
          <h2 className="section-title">Skills</h2>
          <p>{skills}</p>
        </div>
      )}
    </div>
  );
}
