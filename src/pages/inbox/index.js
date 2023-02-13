import { Outlet } from "react-router-dom"
import Sidebar from "./components/sidebar"

const InboxLayout = () => {
    return (
        <div className="border rounded border-gray-300 bg-white h-[calc(100vh-97px)] flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default InboxLayout