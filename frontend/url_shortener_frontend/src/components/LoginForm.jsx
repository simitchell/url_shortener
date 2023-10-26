import { useState } from "react";
import { Button } from "./StyleButtons";
import { Form } from "./StyleForm";

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
        <Form
            onSubmit={handleSubmit}>
            <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChangeUsername}
                />
            
            <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChangePassword}
                />
                <Button
                    type="submit"
                >Login
                </Button>
            
        </Form>
    )
}