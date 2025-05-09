import { createContext } from "react"
import { ToastContainer, toast } from 'react-toastify';

// import React, { useContext } from 'react'
const MainContext = createContext()
function Context(props) {

    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY_URL = "/category"
    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });
    return (
        <MainContext.Provider value={{ API_BASE_URL, CATEGORY_URL, notify }}>
            <ToastContainer />
            {
                props.children
            }
        </MainContext.Provider>
    )
}

export default Context;
export { MainContext };
