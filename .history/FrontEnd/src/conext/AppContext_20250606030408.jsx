import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const currency = import.meta.env.VITE_CURENCY || ".000 VND";
    const navigate = useNavigate();
    const { user } = useUser();
    const { getToken } = useAuth();

    const [recentSearchedRoomType, setRecentSearchedRoomType] = useState([]);
    const [role, setRole] = useState("User");

    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user', {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });

            if (data.success) {
                setRole(data.role === "Admin");
                setRecentSearchedRoomType(data.recentSearchedRoomType || []);
            } else {
                setTimeout(() => {
                    fetchUser();
                }, 5000);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUser();
        }
    }, [user]);

    const value = {
        currency,
        navigate,
        user,
        getToken,
        axios,
        recentSearchedRoomType,
        setRecentSearchedRoomType,
        role,
        setRole
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);


