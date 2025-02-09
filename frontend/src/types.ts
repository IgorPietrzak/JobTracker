// JOB TYPES:
export interface JobProps {
  job: string;
  url: string;
  date: Date;
  status: string;
}

export interface JobListProps {
  jobs: JobProps[];
}


