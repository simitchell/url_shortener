import { useLoaderData, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { OuterContainer } from "../components/MyStyles";
import { AuthProvider } from "../AuthContext";
// import { MainNav } from "../components/MainNav"



const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MzUyOTkyLCJpYXQiOjE2OTgzNTExOTIsImp0aSI6IjgyNTZmNzNmNjhkNjQxMDU5NjFlOTUwZDQ4MTUyYmM5IiwidXNlcl9pZCI6MX0.M4KMHm-SM0t1UPUNpNMGjeGn_WktMc37plg6dCTZnAQ`;

const url = `http://127.0.0.1:8000/urls/`;

export default function Root() {
  const [urlList, setUrlList] = useState([]);
  // const url = `${import.meta.env.VITE_API_URL}/urls/`;

  const getData = async (url) => {
    console.log({ url });
    // const access_token = localStorage.getItem("access_token");
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await response.json();
    console.log(json);
    setUrlList(json);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return (
    <AuthProvider>
      <OuterContainer>
        {/* <MainNav /> */}
        <h1>Url shortener</h1>
        <Outlet />
      </OuterContainer>
    </AuthProvider>
  );
}

// export async function rootLoader() {
//   // const url = `127.0.0.1:8000/token/`;
//   // const access_token = localStorage.getItem("access_token");
//   return await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
// }
