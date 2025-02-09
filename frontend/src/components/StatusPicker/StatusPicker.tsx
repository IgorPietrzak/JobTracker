import { useState } from "react";
import styles from "./StatusPicker.module.css";
import colours from "../../colours.json";

/*

The status picker dropdown menu. Used on the right end of Job.tsx component.
Used for changing job status of given job application. Passes status up to parent,
so we can change its colour based on what was picked.

Can in theory use this for a picker with different options but needs refactoring to be more general.

*/


interface StatusPickerProps {
  onStatusChange: (status: string) => void;
  options: string[];
  initial_status: string;
}


function StatusPicker({ onStatusChange, options, initial_status }: StatusPickerProps) {
  const [status, setStatus] = useState(initial_status);


  // pass it up to parent
  function onClick(status: string) {
    setStatus(status);
    onStatusChange(status);

  }

  // get colours associated with each status, defined in colours.json
  const getColour = (value: string) => {
    switch (value) {
      case "Waiting": return colours.Waiting;
      case "Interview": return colours.Interview;
      case "Success": return colours.Success;
      case "Rejected": return colours.Rejected;
      default: return "white";
    }

  }

  return (
    <div className={styles.dropdownMenu} style={{ backgroundColor: getColour(status) }}>
      <button className={styles.dropBtn} style={{ backgroundColor: getColour(status) }}><h6>▼</h6></button>
      <div className={styles.options} >
        {options.map((val, index) => {
          return <div key={index} onClick={() => onClick(val)} className={styles.dropItem} style={{ color: getColour(val) }}>{val}</div>
        })}
      </div>
    </div >);

}

export default StatusPicker;
