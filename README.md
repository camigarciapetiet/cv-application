# CV Application

A lightweight resume builder built with React and Vite. Fill in your details on the left and see a live preview on the right as your CV takes shape.

## Features

- **Live preview** — Changes in the form update the preview instantly.
- **Structured sections** — Personal info, summary, education, work experience, and skills.
- **Split layout** — Form and preview side by side for a clear editing experience.
- **Component-based** — Each section is its own React component for easy maintenance and extension.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 7](https://vite.dev/)
- TypeScript (`.tsx` components)
- Plain CSS for styling

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── CVBuilder.tsx        # Main state and layout (form + preview)
├── CVForm.tsx           # Form container
├── CVPreview.tsx        # Live CV preview
├── PersonalInfoSection.tsx
├── SummarySection.tsx
├── EducationSection.tsx
├── EducationItem.tsx
├── WorkSection.tsx
├── ExperienceItem.tsx
├── SkillsSection.tsx
├── App.jsx              # App entry component
├── main.jsx             # React DOM mount
└── styles/
    ├── App.css          # Layout and component styles
    └── index.css        # Global base styles
```

## How It Works

`CVBuilder` holds all CV data in a single React state object (`CVData`). The form components update that state through callbacks, and `CVPreview` renders the current data in a resume-style layout.

| Section        | Form component          | Preview component   |
| -------------- | ----------------------- | ------------------- |
| Personal info  | `PersonalInfoSection`   | Header in preview   |
| Summary        | `SummarySection`        | About Me            |
| Education      | `EducationSection`      | `EducationItem`     |
| Work           | `WorkSection`           | `ExperienceItem`    |
| Skills         | `SkillsSection`         | Skills list         |

## License

Private project.
