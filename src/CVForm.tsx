import { CVData } from "./CVBuilder";
import { PersonalInfoSection } from "./PersonalInfoSection";
import { SummarySection } from "./SummarySection";

type Prop = {
  data: CVData;
  onPersonalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSummaryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function CVForm({ data, onPersonalChange, onSummaryChange }: Prop) {
  return (
    <div className="cv-form">
      <PersonalInfoSection
        data={data.personalInfo}
        setData={onPersonalChange}
      />
      <SummarySection data={data.summary} setData={onSummaryChange} />
    </div>
  );
}
