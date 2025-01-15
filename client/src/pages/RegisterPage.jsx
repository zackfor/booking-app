import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            const response = await axios.post('/register', {
                name,
                email,
                password,
            });
            console.log("User registered: ", response.data);
            setSuccessMessage("Account registered successfully! You may now log in!");
            setErrorMessage('');
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("An error occurred. Please, try again.")
            }
            console.error("Error creating account:", error.response ? error.response.data : error.message);
        }
        
    }
    return (
    <>
        <div className="-mt-24 items-center justify-around">
            <div>
                <h1 className="text-4xl text-center">Register</h1>
                
                <form className="max-w-md mx-auto" onSubmit={registerUser} action="">
                    
                    <input className="border border-gray-500 " 
                    type="text" 
                    placeholder="name"      
                    value={name} 
                    onChange={ev => setName(ev.target.value)}/>

                    <input className="border border-gray-500 " 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email} 
                    onChange={ev => setEmail(ev.target.value)}/>

                    <input className="border border-gray-500 " 
                    type="password" 
                    placeholder="yourPassword" 
                    value={password} 
                    onChange={ev => setPassword(ev.target.value)}/>

                    <button  className=" login_button bg-orange-300 mt-3 rounded-2xl w-full p-2 text-slate-800">Register</button>
                    <div className="text-center p-3">
                        Already have an account?
                        <Link className="ml-2 underline text-slate-700 font-semibold" to={"/login"}>Login</Link>
                    </div>
                </form>
                {errorMessage && <div className="text-red-500 text-center mt-3">{errorMessage}</div>}
                {successMessage && <div className="text-green-500 text-center mt-3">{successMessage}</div>}
            </div>
        </div>
    </>    
    );
}