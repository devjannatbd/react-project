import { useLoaderData } from "react-router-dom";


const Apply = () => {
  const values = useLoaderData()
  console.log(values)
  return (
    <div>
      This is Apply
    </div>
  );
};

export default Apply;