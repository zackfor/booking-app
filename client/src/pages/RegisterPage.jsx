import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function RegisterPage() {
    const [name, setName] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function registerUser(ev) {
        ev.preventDefault();
        axios.post('/register', {
            name,
            email,
            password,
        });
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

                    <button class="login_button" className="bg-orange-300 mt-3 rounded-2xl w-full p-2 text-slate-800">Register</button>
                    <div className="text-center p-3">
                        Already have an account?
                        <Link className="ml-2 underline text-slate-700 font-semibold" to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    </>    
    );
}