import { useState } from "react";
import { nanoid } from "nanoid";
import { Button } from "./StyleButtons";
import { Form } from "./StyleForm";

export default function UrlForm() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = {
      title,
      long_url,
      short_url: nanoid(8),
      user: 1,
    };
    // console.log(user);
    const apiurl = "http://localhost:8000/token/";
    const data = await fetch(apiurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUrl),
    }).then((response) => response.json());
    console.log("DATA:", data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>Link Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
      />

      <label>Original Url</label>
      <input type="url" name="url" value={url} onChange={handleChangeUrl} />

      <Button type="submit">Submit</Button>
    </Form>
  );
}
