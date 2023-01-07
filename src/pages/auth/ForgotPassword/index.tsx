import React from "react";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "../AuthWrapper";

interface IFormInput {
    email: String;
    password: String;
}
const initialState = {
    email: "",
    password: "",
};

const ForgotPassword = (props: any) => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = React.useState(initialState);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setUserInfo(initialState);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    return (
        <AuthWrapper FormType="Change Password">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-[10px]">
                    <label>Email</label>
                    <input
                        type="text"
                        className="border-rounded border-2 px-3"
                        onChange={handleChange}
                        name="email"
                    />
                </div>

                <div className="flex justify-between items-center">
                    <button
                        onClick={handleSubmit}
                        className="rounded-md bg-[blue] border-2 px-8 py-3 text-white cursor-pointer"
                    >
                        Reset Password
                    </button>
                </div>
            </form>
        </AuthWrapper>
    );
};

export default ForgotPassword;
