
import { useLoaderData } from 'react-router-dom';
import { setDataToLocalStorage } from '../LocalStorege/LocalStorege';

const JobDetails = () => {
  const valus = useLoaderData()
  const{category_name
  } =valus
  console.log(valus)
  // const handleClick ()=>{
  //   setDataToLocalStorage(_id)
    
 //}

  return (

    <div className="max-w-6xl mx-auto mt-14">
      <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-white-300 py-3 rounded-xl bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-30% to-emerald-300 to-90%">Job Details</h2>
      <div className='grid grid-cols-3 mt-5'>
        <div className='col-span-2'>
          {category_name
          }
        </div>
        <div>
         <button className='btn btn-primary'>Apply Now</button>
        </div>
      </div>
    </div>

  );
};

export default JobDetails;