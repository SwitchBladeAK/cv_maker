import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
  <canvas />;
  const sections = {
    basicInfo: "Basic Info",
    education: "Education",
    workExp: "Work Experience",
    project: "Projects",
    Skills: "Skills",
    achievement: "Achievements",
    other: "Other",
  };
  const resumeRef = useRef();
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.Skills]: {
      id: sections.Skills,
      sectionTitle: sections.Skills,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>CV Maker</p>

      <div className={styles.toolbar}>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <div>
          <p className={styles.fill}>Fill your info here</p>
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />
		  <p className={styles.fill}>Save after every page</p>
        </div>
        <div>
          <p className={styles.preview}>Preview</p>
          <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
          />
        </div>
      </div>
      <p className={styles.bt}>Made with &lt;&gt; by Ankit </p>
    </div>
  );
}

export default Body;
