import JobList from "../JobList/JobList.tsx";
import jobs from "../../jobs.json";
import AddJob from "../AddJob/AddJob.tsx";
import styles from "./Tracker.module.css";
import { useState } from "react";


function Tracker() {
  const [page, setPage] = useState("list");
  const length = jobs.length;
  console.log(page);
return page === "list" ? (
  <div className={styles.main}>
    <h1>{`You have applied for ${length} jobs so far!`}</h1>
    <JobList jobs={jobs} />
    <button className={styles.btn} onClick={() => setPage("add")}>
      Add Job
    </button>
  </div>
) : (
  <AddJob />
);
 

  }

export default Tracker;
