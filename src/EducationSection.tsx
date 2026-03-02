import { useState } from "react";
import { EducationalExperience } from "./CVBuilder";
type Props = {
  data: EducationalExperience[];
  addEducation: (newEducation: EducationalExperience) => void;
};

export function EducationSection({ data, addEducation }: Props) {
  const [educationInput, setEducationInput] = useState<EducationalExperience>({
    schoolName: "",
    title: "",
    description: "",
    startDate: "",
    finishDate: "",
  });

  const handleWorkChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEducationInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    addEducation(educationInput);
    setEducationInput({
      schoolName: "",
      title: "",
      description: "",
      startDate: "",
      finishDate: "",
    });
  };
  return (
    <>
      <div className="form-section">
        <h2>Education</h2>
        <div className="form-group">
          <label>School name or institution</label>
          <input
            name="schoolName"
            value={educationInput.schoolName}
            placeholder="Write the school name or institution.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            value={educationInput.title}
            placeholder="Write the title of the education.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Start date</label>
          <input
            name="startDate"
            value={educationInput.startDate}
            placeholder="Specify the date when you started.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Finish date</label>
          <input
            name="finishDate"
            value={educationInput.finishDate}
            placeholder="Specify the date when you finished or present.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={educationInput.description}
            onChange={handleWorkChange}
            placeholder="Write a description.."
          />
        </div>
        <button onClick={() => handleClick()}>Add</button>
      </div>
    </>
  );
}
