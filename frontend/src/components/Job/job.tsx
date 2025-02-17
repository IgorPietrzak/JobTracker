import styles from "./Job.module.css";
import StatusPicker from "../../components/StatusPicker/StatusPicker";
import { useState } from "react";
import colours from "../../colours.json";
import JobProps from "../../types.ts";

/*

Component representing each individual job appliacation.
Features:
  * Title, URL to job posting, Date Applied, Status
  * Colour coded depending on status
  * Can spawn many of these from a json of jobs.

*/


function Job(props: JobProps) {
    
  const [status, setStatus] = useState(props.status);

  // trim long titles and URLs
  let title = props.job.length > 20 ? props.job.slice(0, 20) + "..." : props.job;
  let url = props.url.length > 20 ? props.url.slice(0, 20) + "..." : props.url;

  // will have to update the DB here when backend ready.
  function handleStatus(status: string): void {
    setStatus(status);

  }

  // Change Job Application colour based on its status.
  const getBackgroundColor = () => {
    switch (status) {
      case "Waiting": return colours.Waiting;
      case "Interview": return colours.Interview;
      case "Success": return colours.Success;
      case "Rejected": return colours.Rejected;
      default: return "white";
    }
  };

  return (
    <div className={styles.job} style={{ backgroundColor: getBackgroundColor() }}>
      <div className={styles.jobField} >
        <h6>Title</h6>
        <p>{title}</p>
      </div>
      <div className={styles.jobField} >
        <h6>URL</h6>
        <a href={props.url}>{url}</a>
      </div>
      <div className={styles.jobField} >
        <h6>Date</h6>
        <p>{props.date}</p>
      </div>
      <div className={styles.jobField}>
        <StatusPicker onStatusChange={handleStatus} initial_status={status}  options={["Waiting", "Interview", "Rejected", "Success"]} />
      </div>
    </div>
  );
}

export default Job;

