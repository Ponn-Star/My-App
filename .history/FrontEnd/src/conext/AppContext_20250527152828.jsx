import axios from "axios";
import { createContext, useAppContext} from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth} from "@clerk/clerk-react";
import { useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURENCY || ".000 VND";
    const navigate = useNavigate();
    const {user} = useUser();
    const { getToken } = useAuth();

    const [isOwner, setIsOwner] = useState(false)
    const [showRoomReg, setRoomReg] = useState(false)

    const fetchUser = async ()=>{
        try{
            await axios.get('/api/user', {headers: {Authorization: `Bear`}})
        } catch (error)
    }

  const value = {
        currency, navigate, user, getToken, isOwner, setIsOwner, axios, showRoomReg, setRoomReg, 
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);


