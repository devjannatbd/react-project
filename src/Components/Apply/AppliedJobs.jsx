import { deleteDataFromLocalStorage } from "../LocalStorege/LocalStorege";


const AppliedJobs = ({ local,handleDelete }) => {
const{image,job_title,jobSummary,_id,location}=local
  // console.log(local)
  

  return (
    <div className="mt-10">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="rounded-lg shadow-2xl h-[200px] w-[300px]" />
          <div>
            <h1 className="text-5xl font-bold">{job_title}</h1>
            <p className="py-6">{jobSummary}</p>
            <p>{location}</p>
            <div className="text-end">
              <button className="btn btn-primary px-10" onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AppliedJobs;