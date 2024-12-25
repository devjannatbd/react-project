import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { deleteDataFromLocalStorage, getDataFromLocalStorage } from "../LocalStorege/LocalStorege";
import AppliedJobs from "./AppliedJobs";


const Apply = () => {

  const values = useLoaderData()
  const [localData, setLocalData] = useState([])
  console.log(localData)

  useEffect(() => {
    const data = getDataFromLocalStorage()
    const emptyArray = []
    for (const dat of data) {
      const filterData = values.find(value => value._id === dat)
      emptyArray.push(filterData)
    }
    setLocalData(emptyArray)
  }, [])
  // const handleDelete =(id)=>{
  //   const data = localData.filter(value=>value._id !== id)
  //   setLocalData(data)
  //   deleteDataFromLocalStorage(id)
  // }
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <h2 className="text-center font-bold text-4xl border border-b-indigo-500 shadow-lg text-white-300 py-3 rounded-xl bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-30% to-emerald-300 to-90%">Applied Jobs</h2>
      {
        localData.map(local=><AppliedJobs  local={local} />)
      }

    </div>
  );
};

export default Apply;