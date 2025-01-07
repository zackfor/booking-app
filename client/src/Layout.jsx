import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div className="p-4 grid grid-flow-row min-h-screen">
            <Header />
            <Outlet />
        </div>
    );
}