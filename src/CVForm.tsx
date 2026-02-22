import { CVData, WorkExperience } from "./CVBuilder";
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
  addWork: (newWork: WorkExperience) => void;
};

export function CVForm({
  data,
  onPersonalChange,
  onSummaryChange,
  addSkill,
  addWork,
}: Prop) {
  return (
    <div className="cv-form">
      <PersonalInfoSection
        data={data.personalInfo}
        setData={onPersonalChange}
      />
      <SummarySection data={data.summary} setData={onSummaryChange} />
      <WorkSection data={data.experience} addWork={addWork} />
      <SkillsSection skills={data.skills} addSkill={addSkill} />
    </div>
  );
}
