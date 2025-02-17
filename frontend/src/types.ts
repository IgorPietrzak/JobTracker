// JOB TYPES:
export interface JobProps {
  job: string;
  url: string;
  date: string;
  status: string;
}

export interface JobListProps {
  jobs: JobProps[];
}

export interface TextInputProps {
  text: string
}


