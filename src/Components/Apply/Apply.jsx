import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from "../LocalStorege/LocalStorege";
import AppliedJobs from "./AppliedJobs";
import { ToastContainer, toast } from 'react-toastify';


const Apply = () => {

  const values = useLoaderData()
  const [localData, setLocalData] = useState([])
  //  console.log(localData)

  useEffect(() => {
    const data = getDataFromLocalStorage()
    const emptyArray = []
    for (const dat of data) {
      const filterData = values.find(value => value._id === dat)
      emptyArray.push(filterData)
    }
    setLocalData(emptyArray)
  }, [])
  const handleDelete = (id) => {
    const data = localData.filter(local => local._id !== id)
    if (data) {
      toast("Delete Succesfully")
      setLocalData(data)
    }
    deleteDataFromLocalStorage(id)
  }
  const handleSort = (e) => {
    const inputValue = e.target.value;
    const filterData = localData.filter(data => data.location === inputValue)
    if (inputValue) {
      setLocalData(filterData)
    }
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-14">
        <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-white-300 py-3 rounded-xl bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-30% to-emerald-300 to-90%">Applied Jobs</h2>
        <div className="mt-5">
          <select className="select select-bordered w-full max-w-xs text-2xl" onChange={handleSort}>
            <option disabled selected>select loacation</option>
            <option>Gazipur</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
            <option>Rajsahi</option>

          </select>
        </div>
        {
          localData.map(local => <AppliedJobs handleDelete={handleDelete} key={local._id} local={local} />)

        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default Apply;