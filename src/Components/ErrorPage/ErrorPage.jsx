import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
      <div>
        <h1>This page is not found</h1>  
        <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ErrorPage;