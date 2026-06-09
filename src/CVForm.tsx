import { CVData, EducationalExperience, WorkExperience } from "./CVBuilder";
import { EducationSection } from "./EducationSection";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { SkillsSection } from "./SkillsSection";
import { SummarySection } from "./SummarySection";
import { WorkSection } from "./WorkSection";

type Prop = {
  data: CVData;
  onPersonalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSummaryChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  addSkill: (newSkill: string) => void;
  deleteSkill: (deleteSkill: string) => void;
  addWork: (newWork: WorkExperience) => void;
  addEducation: (newEducation: EducationalExperience) => void;
};

export function CVForm({
  data,
  onPersonalChange,
  onSummaryChange,
  addSkill,
  deleteSkill,
  addWork,
  addEducation,
}: Prop) {
  return (
    <div className="cv-form">
      <PersonalInfoSection
        data={data.personalInfo}
        setData={onPersonalChange}
      />
      <SummarySection data={data.summary} setData={onSummaryChange} />
      <EducationSection data={data.education} addEducation={addEducation} />
      <WorkSection data={data.experience} addWork={addWork} />
      <SkillsSection
        skills={data.skills}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
      />
    </div>
  );
}
