import { useState } from "react";

type Prop = {
  skills: string[];
  addSkill: (newSkill: string) => void;
};

export function SkillsSection({ skills, addSkill }: Prop) {
  const [skillInput, setSkillInput] = useState<string>("");

  const handleSkillInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value } = e.target;
    setSkillInput(value);
  };

  const handleClick = () => {
    addSkill(skillInput);
    setSkillInput("");
  };

  return (
    <>
      <div className="form-section">
        <h2>Skills</h2>
        <div className="form-group">
          <input
            name="skill"
            value={skillInput}
            onChange={handleSkillInput}
            placeholder="Write a skill.."
          />
        </div>
        <button onClick={() => handleClick()}>Add</button>
      </div>
    </>
  );
}
