import Job from "../Job/job.tsx";
import JobListProps from "../../types.ts";
import styles from "./JobList.module.css";

/*
 
Retireved jobs JSON from database and spawn Job components.

*/

function JobList(props: JobListProps) {
  console.log(props);
  return (
  <div className={styles.jobList}>
      {props.jobs.map((job,index) => {
        const date = new Date(job.date_applied);
        return <Job key = {index} job = {job.job} url = {job.url} date = {date} status = {job.status}  />
      })}
    </div>
  )
}

export default JobList;
