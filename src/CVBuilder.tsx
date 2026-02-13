import { useState } from "react";
import { CVForm } from "./CVForm.tsx";
import { CVPreview } from "./CVPreview.tsx";

export type PersonalInfo = {
  name: string;
  city: string;
  country: string;
  email: string;
  cell: string;
};
export type CVData = {
  personalInfo: PersonalInfo;
  summary: string;
};

export function CVBuilder() {
  const [cvData, setCvData] = useState<CVData>({
    personalInfo: {
      name: "",
      city: "",
      country: "",
      email: "",
      cell: "",
    },
    summary: "",
  });

  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCvData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [name]: value,
      },
    }));
  };
  const handleSummaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCvData((prev) => ({
      ...prev,
      summary: value,
    }));
  };

  return (
    <>
      <h1>Create your CV</h1>
      <div className="app-container">
        <CVForm
          data={cvData}
          onPersonalChange={handlePersonalChange}
          onSummaryChange={handleSummaryChange}
        />
        <CVPreview cv={cvData} />
      </div>
    </>
  );
}
