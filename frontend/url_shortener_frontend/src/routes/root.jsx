import { useLoaderData, Link, Outlet } from "react-router-dom"
import { useState, useEffect } from 'react'



export default function Root() {
    const [urlList, setUrlList] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:8000/urls/';
        const data = async () => {
            const response = await fetch(url, {
                method: "GET",
                headers:{
                    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            }})
            const json = await response.json();
            console.log("hello", json);
            setUrlList(json);
        }
        data();
    }, [])
    return (
        <>
            <h1>Hello from Root Route</h1>
            <Outlet></Outlet>
        </>
    )
}