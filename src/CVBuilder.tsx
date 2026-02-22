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

export type WorkExperience = {
  title: string;
  location: string;
  startDate: string;
  finishDate: string;
  description: string;
};

export type CVData = {
  personalInfo: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  skills: string[];
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
    experience: [],
    skills: [],
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
  const handleSummaryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;

    setCvData((prev) => ({
      ...prev,
      summary: value,
    }));
  };

  const addWorkExperience = (newWork: WorkExperience) => {
    setCvData((prev) => ({
      ...prev,
      experience: [...prev.experience, newWork],
    }));
  };

  const addSkill = (newSkill: string) => {
    if (!newSkill.trim()) return;

    setCvData((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill],
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
          addSkill={addSkill}
          addWork={addWorkExperience}
        />
        <CVPreview cv={cvData} />
      </div>
    </>
  );
}
