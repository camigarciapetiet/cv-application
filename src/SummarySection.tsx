import { CVData } from "./CVBuilder";

type Prop = {
  data: string;
  setData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SummarySection({ data, setData }: Prop) {
  return (
    <>
      <div className="form-group">
        <label>Summary</label>
        <input
          name="summary"
          value={data}
          onChange={setData}
          placeholder="Write something that summarizes you.."
        />
      </div>
    </>
  );
}
