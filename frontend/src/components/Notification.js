import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NotificationCard from "./NotificationCard";

const Notificationbar = () => {
    const [menu, setMenu] = useState([]);
    const token = localStorage.getItem('token')
    const getNotification = async () => {
        const response = await fetch("https://dietwell-1-hlvk.onrender.com/notification", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            credentials: "include", // Ensure the backend supports credentials (cookies)
        });

        const result = await response.json();
        console.log(result);

        if (!response.ok) {
            toast.error(result.message, {
                position: "top-center"
            });
        }

        if (response.ok) {
            toast.success(result.message, {
                position: "top-center"
            });
            setMenu(result.data); // Assuming 'data' contains the array of notifications
        }
    };

    useEffect(() => {
        getNotification();
    }, []);

    return (
        <div className="bg-[#233037] min-h-screen p-5 pt-24">
            <h2 className="text-4xl text-white font-bold text-center mb-4">Your Notifications</h2>
            
            {menu.map((item, index) => (
                // Key should ideally be a unique identifier from your data
                <NotificationCard key={index} question={item.Question} answer={item.Answer} />
            ))}
        </div>
    );
};

export default Notificationbar;
