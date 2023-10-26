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
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MjkxMjc5LCJpYXQiOjE2OTgyODk0NzksImp0aSI6ImY2NTFkZmY3NmNiMDRiZjQ4MGVkZWJlODIyNjY5N2NkIiwidXNlcl9pZCI6MX0.30oYPXrJHhz160CzyE1Nl8rJ0FxsMlP_hwxJ5xp3_-Y`
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
        </>
    )
}