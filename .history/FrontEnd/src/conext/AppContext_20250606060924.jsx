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
    const [rooms, setRooms] = useState([]); // Thêm state lưu danh sách phòng

    // Fetch user info
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user', {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });

            if (data.success) {
                setRole(data.role); // <-- Sửa lại, không so sánh === "Admin"
                setRecentSearchedRoomType(data.recentSearchedCities || []);
            } else {
                setTimeout(() => {
                    fetchUser();
                }, 5000);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Fetch rooms
    const fetchRooms = async () => {
        try {
            const { data } = await axios.get('/api/rooms', {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });
            if (data.success) {
                setRooms(data.rooms);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            fetchUser();
            fetchRooms();
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
        setRole,
        rooms,
        setRooms,
        fetchRooms
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);


