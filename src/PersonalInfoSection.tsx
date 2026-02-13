import { CVData, PersonalInfo } from "./CVBuilder";

type Prop = {
  data: PersonalInfo;
  setData: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PersonalInfoSection({ data, setData }: Prop) {
  return (
    <>
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          value={data.name}
          onChange={setData}
          placeholder="Your full name"
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          name="city"
          value={data.city}
          onChange={setData}
          placeholder="City where you live, eg. New York, Barcelona"
        />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input
          name="country"
          value={data.country}
          onChange={setData}
          placeholder="Country where you live"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          value={data.email}
          onChange={setData}
          placeholder="Your email"
        />
      </div>
      <div className="form-group">
        <label>Cellphone</label>
        <input
          name="cell"
          value={data.cell}
          onChange={setData}
          placeholder="Your work cellphone"
        />
      </div>
    </>
  );
}
