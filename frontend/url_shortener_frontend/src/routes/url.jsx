import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";

export default function UrlPage() {
    return (
     <div>
        <h2>Hello, from the URLFORM component</h2>
        <h2>Please submit a url for shortenening</h2>
        <UrlForm />
        <h2>Url List</h2>
        <UrlList />
     </div>
    );
  }