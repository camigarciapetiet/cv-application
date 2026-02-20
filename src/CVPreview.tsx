import { CVData } from "./CVBuilder";

type Prop = {
  cv: CVData;
};
export function CVPreview(cv: Prop) {
  const location = [cv.cv.personalInfo.city, cv.cv.personalInfo.country]
    .filter(Boolean)
    .join(", ");
  const items = [
    location,
    cv.cv.personalInfo.email,
    cv.cv.personalInfo.cell,
  ].filter(Boolean);

  return (
    <div className="cv-preview">
      <h1 className="name-line">{cv.cv.personalInfo.name}</h1>
      <p className="personal-line">{items.join(" | ")}</p>
      {cv.cv.summary && (
        <div className="subsection">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">{cv.cv.summary}</p>
        </div>
      )}
    </div>
  );
}
