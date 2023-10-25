import { useState, useEffect } from "react";
import { OuterContainer } from "./MyStyles";

 const UrlList = () => {
    const [urlList, setUrlList] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8000/urls/';
        const getList = async () => {
            const data = await fetch(url).then(response => response.json());
            setUrlList(data);
            console.log(data);
        }
        getList();
    }, []);

    return (
        <OuterContainer>
            <h1>A header from react component</h1>
            <ul>
                {urlList?urlList?.map((url, index) => {
                    return (
                        <li key={index}>
                            {url.title} - {url.short_url}
                        </li>
                    )
                }): null}
            </ul>
        </OuterContainer>
    );
};

export default UrlList;