import Job from "../Job/job.tsx";
import JobListProps from "../../types.ts";
import styles from "./JobList.module.css";

/*
 
Retireved jobs JSON from database and spawn Job components.

*/

function JobList(props: JobListProps) {
  return (
  <div className={styles.jobList}>
      {props.jobs.map((job,index) => {
        return <Job key = {index} job = {job.job} url = {job.url} date = {job.date_applied} status = {job.status}  />
      })}
    </div>
  )
}

export default JobList;
