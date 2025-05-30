import axios from "axios";
import { createContext, useAppContext} from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth} from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURENCY || ".000 VND";
    const navigate = useNavigate();

  const value = {
    // add your context values here
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);


