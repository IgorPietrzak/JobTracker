import styles from "./Job.module.css";
import StatusPicker from "../StatusPicker";
import { useState } from "react";
import colours from "../../colours.json";

/*

Component representing each individual job appliacation.
Features:
  * Title, URL to job posting, Date Applied, Status
  * Colour coded depending on status
  * Can spawn many of these from a json of jobs.

*/

interface JobProps {
  title: string;
  url: string;
  date: Date;
}

function Job(props: JobProps) {

  const [status, setStatus] = useState("Waiting");

  // Date setup
  let date = props.date;
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  // trim long titles and URLs
  let title = props.title.length > 40 ? props.title.slice(0, 20) + "..." : props.title;
  let url = props.url.length > 40 ? props.url.slice(0, 20) + "..." : props.url;

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
      <div className={styles.jobField} style={{ color: status === "Interview" || status === "Rejected" ? "white" : "#213547" }}>
        <h6>Title</h6>
        <p>{title}</p>
      </div>
      <div className={styles.jobField} style={{ color: status === "Interview" || status === "Rejected" ? "white" : "#213547" }}>
        <h6>URL</h6>
        <a href={props.url}>{url}</a>
      </div>
      <div className={styles.jobField} style={{ color: status === "Interview" || status === "Rejected" ? "white" : "#213547" }}>
        <h6>Date</h6>
        <p>{`${day} - ${month} - ${year}`}</p>
      </div>
      <div className={styles.jobField}>
        <StatusPicker onStatusChange={handleStatus} options={["Waiting", "Interview", "Rejected", "Success"]} />
      </div>
    </div>
  );
}

export default Job;

