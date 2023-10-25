import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password
        }
        // console.log(user);
        const url = 'http://localhost:8000/token/'
        const data = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        }).then(response => response.json());
        console.log('DATA IS:', data);
        const { access, refresh } = data;
        localStorage.clear();
        localStorage.setItem('access_token', access);
        localStorage.setItem('refresh_token', refresh);
    };

    return (
        <form
            onSubmit={handleSubmit}>
            <label>Username
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChangeUsername}
                />
            </label>
            <label>Password
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                />
            </label>
            <label>
                <button
                    type="submit"
                >Login
                </button>
            </label>
        </form>
    )
}