import { createContext, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
// const axios from 'axios'
import axios from "axios";
// import React, { useContext } from 'react'

const MainContext = createContext()
function Context(props) {
    const [Categories, setCategories] = useState([]);
    const API_BASE_URL = "http://localhost:5000"
    const CATEGORY_URL = "/category"

    const notify = (msg, flag) => toast(msg, { type: flag ? "success" : "error" });

    function getCategory(id = null) {
        let URL = API_BASE_URL + CATEGORY_URL;
        if (id != null) {
            URL +=`/${id}`

        }
        
        axios.get(API_BASE_URL + CATEGORY_URL).then(
            (response) => {
                if (response.data.flag === 1) {
                    setCategories(response.data.categorise)
                    // console.log(response.data.categorise);
                }
            }
        ).catch(
            (error) => {
                setCategories([]);
            }
        )
    }

    return (
        <MainContext.Provider value={{ API_BASE_URL, CATEGORY_URL, notify, getCategory, Categories }}>
            <ToastContainer autoClose={700} />
            {
                props.children
            }
        </MainContext.Provider>
    )
}

export default Context;
export { MainContext };
