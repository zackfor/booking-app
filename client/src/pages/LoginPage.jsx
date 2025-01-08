
import { Link } from "react-router-dom";

export default function LoginPage() {
    
    return (
        <>
        <div className="-mt-40 items-center justify-around">
            <div>
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto" action="">
                    <input className="border border-gray-500 " type="email" placeholder="your@email.com" />
                    <input className="border border-gray-500 " type="password" placeholder="yourPassword" />
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