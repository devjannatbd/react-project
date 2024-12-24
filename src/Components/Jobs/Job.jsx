import { Link } from "react-router-dom";


const Job = ({job}) => {
  // console.log(job)
  const{category_name,companyName,description,duty_hours,experience,job_title,jobSummary,salary,skills,_id,image,location}=job
  return (
    <div className="border rounded-lg">
      <div className="p-5">
        <img src={image} alt="" />
        <p className="text-xl font-bold">{job_title}</p>
        <p className="text-lg font-bold">{companyName}</p>
        <p className="text-lg font-semibold">{duty_hours}</p>
        <p className="">{salary}</p>
        <p>{location}</p>
        <Link to={`/jobs/${_id}`}> <button className="btn btn-primary">Job Details</button></Link>
      </div>
    </div>
  );
};

export default Job;