import React from "react";
import AuthWrapper from "../AuthWrapper";

interface IFormInput {
  email: String;
  password: String;
}
const initialState = {
  email: "",
  password: "",
}

const Register = (props: any) => {
  
  const [userInfo, setUserInfo] = React.useState(initialState);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserInfo(initialState);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserInfo({...userInfo, [e.target.name]: e.target.value})
  }

  

  return (

    <AuthWrapper FormType="Register">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-[10px]">
          <label>Email</label>
          <input type="text" className="border-rounded border-2 px-3" onChange={handleChange} name="email"/>
        </div>
        <div className="flex flex-col mb-[30px]">
          <label>Password</label>
          <input type="password" className="border-rounded border-2 px-3" onChange={handleChange} name="password"/>
        </div>
        <div className="flex justify-between items-center">
          <button onClick={handleSubmit} className="rounded-md bg-[blue] border-2 px-8 py-3 text-white cursor-pointer">
            Login
          </button>
          <p>Forget Password ?</p>
        </div>
        
    </form>
    </AuthWrapper>
      
  );
}

export default Register;