
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function handleLoginSubmission(ev) {
        ev.preventDefault();
        try {
            const response = axios.post('/login', {email, password});
            alert('Login successful!');
            setRedirect(true);
        } catch (error) {
            alert('Login failed' + error.message);
        }

        
        
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    
    return (
        <>
        <div className="-mt-40 items-center justify-around">
            <div>
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmission}>
                    <input className="border border-gray-500 " 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    />
                    
                    <input className="border border-gray-500 " 
                    type="password" 
                    placeholder="yourPassword" 
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    />

                    <button class="login_button" className="bg-orange-300 mt-3 rounded-2xl w-full p-2 text-slate-800">Login</button>
                    <div className="text-center p-3">
                        Don't have an account, yet?
                        <Link className="ml-2 underline text-slate-700 font-semibold" to={"/register"}>Register</Link>
                    </div>
                </form>
            </div>
        </div>

        </>
        
    );
        
}