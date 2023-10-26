import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

export default function UrlPage() {
    return (
     <div>
        <h1>Hello, from the URLFORM component</h1>
        <UrlForm />
        <h2>Url List</h2>
        <UrlList />
     </div>
    );
  }