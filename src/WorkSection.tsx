import { useState } from "react";
import { WorkExperience } from "./CVBuilder";

type Prop = {
  data: WorkExperience[];
  addWork: (work: WorkExperience) => void;
};

export function WorkSection({ data, addWork }: Prop) {
  const [workInput, setWorkInput] = useState<WorkExperience>({
    title: "",
    location: "",
    startDate: "",
    finishDate: "",
    description: "",
  });

  const handleWorkChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setWorkInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = () => {
    addWork(workInput);
    setWorkInput({
      title: "",
      location: "",
      startDate: "",
      finishDate: "",
      description: "",
    });
  };

  return (
    <>
      <div className="form-section">
        <h2>Work Experience</h2>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            value={workInput.title}
            placeholder="Write the work title or position.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            name="location"
            value={workInput.location}
            placeholder="Write the work location.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Start date</label>
          <input
            name="startDate"
            value={workInput.startDate}
            placeholder="Specify the date when you started.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Finish date</label>
          <input
            name="finishDate"
            value={workInput.finishDate}
            placeholder="Specify the date when you finished or present.."
            onChange={handleWorkChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={workInput.description}
            onChange={handleWorkChange}
            placeholder="Write something that summarizes you.."
          />
        </div>
        <button onClick={() => handleClick()}>Add</button>
      </div>
    </>
  );
}
