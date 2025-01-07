import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <div className="-mt-24 grow flex items-center justify-around">
            <div>
                <h1 className="text-4xl text-center">Register</h1>
                <form className="max-w-md mx-auto" action="">
                    <input className="border border-gray-500 " type="text" placeholder="name"/>
                    <input className="border border-gray-500 " type="email" placeholder="your@email.com" />
                    <input className="border border-gray-500 " type="password" placeholder="yourPassword" />
                    <button class="login_button" className="bg-orange-300 mt-3 rounded-2xl w-full p-2 text-slate-800">Register</button>
                    <div className="text-center p-3">
                        Already have an account?
                        <Link className="ml-2 underline text-slate-700 font-semibold" to={"/login"}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}