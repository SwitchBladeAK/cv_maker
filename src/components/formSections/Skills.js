import React from "react";
import InputControl from "../InputControl/InputControl";
import styles from "../Editor/Editor.module.css";
import { useResumeContext } from "../../context/Context";

const Skills = () => {
  const { valuesT, setValuesT } = useResumeContext();
  return (
    <div className={styles.detail}>
      <InputControl
        label="Skills"
        value={valuesT.Skills}
        placeholder="Enter your objective/Skills"
        onChange={event =>
          setValuesT(prev => ({ ...prev, Skills: event.target.value }))}
      />
    </div>
  );
};

export default Skills;
