import { useLoaderData, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../LocalStorege/LocalStorege';

const JobDetail = () => {
  const valus = useLoaderData();
  // console.log(valus);
  const { category_name, companyName, description, experience, duty_hours, jobSummary, job_title, skills, deadline, _id, location, postDate, } = valus || {};
const navigate =useNavigate()

  const handleSubmit = () => {
    const data =getDataFromLocalStorage()
    const exists = data.find(da => da === _id)
    if (!exists) {
      setDataToLocalStorage(_id)
      navigate('/apply')
      toast('applied successfully')
    }
    else {
      toast.error('already exixts')
    }
  }
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-white py-3 rounded-xl bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-30% to-emerald-300 to-90%">Job Details</h2>
      <div className='grid grid-cols-3 mt-10 gap-10'>
        <div className='col-span-2 border-2 border-blue-300 p-10 rounded-xl'>
          <h1 className="font-bold text-xl">Job Title</h1>
          <p className="text-xl mt-2">{job_title}</p>

          <hr className="border border-black mt-4" />
          <p className="font-bold">Job Summary</p>
          <hr className="border border-black mt-4" />
          <p className="text-xl mt-3">{jobSummary}</p>
          <hr className="border border-black mt-4" />
          <p className="text-xl font-bold mt-5">Description</p>
          <p className="text-xl mt-2">{jobSummary}</p>
          <hr className="border border-black mt-4" />
        </div>
        <div className="border-2 border-blue-300 p-10 rounded-xl">
          <h1 className="font-bold text-2xl">Company Name</h1>
          <p className="text-xl font-semibold mt-3">{companyName}</p>
          <p className="font-bold text-2xl mt-2">Skills</p>
          <p className="text-xl font-semibold mt-3">{skills}</p>
          <p className="font-bold text-2xl mt-2">Experience</p>
          <p className="text-xl font-semibold mt-3">{experience}</p>
          <p className="font-bold text-2xl mt-2">Deuty hourse</p>
          <p className="text-xl font-semibold mt-3">{duty_hours}</p>
          <p className="font-bold text-2xl mt-2">Deadline</p>
          <p className="text-xl font-semibold mt-3">{deadline}</p>
          <p className="font-bold text-2xl mt-2">Location</p>
          <p className="text-xl font-semibold mt-3">{location}</p>
          <p className="font-bold text-2xl mt-2">Post date</p>
          <p className="text-xl font-semibold mt-3">{postDate}</p>

          <button className="btn btn-primary font-semibold mt-3" onClick={handleSubmit}>Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default JobDetail;
