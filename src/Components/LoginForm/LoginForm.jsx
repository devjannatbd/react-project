import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../../firebase.config";
import { useState } from "react";
import './loginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] =useState(null)

  const Provider = new GoogleAuthProvider()
  const auth = getAuth(app)

  const handleClick = () => {
    signInWithPopup(auth, Provider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePassChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const Email = form.email.value;
    const Password = form.password.value;

    setError(null)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const newUser = result.user;
        console.log(newUser)
      })
      .catch(err => {
       setError(err.message)
      })
  }
  return (
    <div className="bg-[#dcddde] p-7 mt-14">
      <div className="grid grid-cols-2 gap-16 max-w-6xl h-96 mx-auto my-10">
        <div className="mt-14">
          <h1 className="text-2xl font-bold text-[#0866ff] py-4">CareerNetwork</h1>
          <p className="text-xl font-semibold">Are you looking for a job? Find all recent job circular available in Bangladesh and around the globe in one place with easy job application feature. Post your resume or discover valuable career resources on Skill Jobs. </p>
        </div>
        <div className="siginin-container">
          {/* <h2>Sign In</h2> */}
          <form onSubmit={handleSubmit} className="signin-form ">
            <label htmlFor="">Email:</label>
            <input type="email" name="email" id="" placeholder="Enter email address" onChange={handleEmailChange} />
            <label htmlFor="">Password:</label>
            <input type="password" name="password" id="" placeholder="Enter email address" onChange={handlePassChange} />
            <div>
              {
                error && <p className="text-red-600">{error}</p>
              }
            </div>
            <button type="submit" name="login" id="">Log in</button>
          </form>
          <button className="btn text-white bg-[#4caf50] text-lg w-[250px] mt-4 " type="submit" name="submit" id="" onClick={handleClick}>Login with google</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;