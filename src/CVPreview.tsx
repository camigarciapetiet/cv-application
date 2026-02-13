import { CVData } from "./CVBuilder";

type Prop = {
  cv: CVData;
};
export function CVPreview(cv: Prop) {
  return <div className="cv-preview"></div>;
}
