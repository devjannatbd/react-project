import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
  const [value, setValue] = useState(4)
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch('https://next-level-two-ashen.vercel.app/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [])

  return (
    <div className="max-w-6xl mx-auto mt-14">
      <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">Jobs</h2>
      <p className="text-center mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi deleniti natus a. Nam praesentium iste mollitia explicabo accusantium cumque, voluptatem incidunt sint neque vel dolores, alias, consectetur labore? Qui, distinctio!</p>

      <div className="mt-10 grid grid-cols-2 p-10 gap-10 ">
        {
          jobs.slice(0, value).map(job => <Job key={job._id} job={job}></Job>
           )
        }
      </div>
      <div className="mt-5 flex justify-center">

        {
          value === 4 ? <button className="btn btn-primary" onClick={() => setValue(jobs.length)}>Veiw All</button> : <button className="btn btn-primary" onClick={() => setValue(4)}>Show Less</button>
        }
      </div>

    </div>
  );
};

export default Jobs;