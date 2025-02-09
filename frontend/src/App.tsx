import './App.css'
import JobList from "./components/JobList/JobList.tsx";
import jobs from "./jobs.json";



function App() {

  return (
    <div>
     <JobList jobs = {jobs}  /> 
    </div>
  )
}

export default App
