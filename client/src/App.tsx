// client/src/App.tsx
import { useState, useEffect } from "react";
import "./App.css";

// Define an interface for the expected data from the API
interface ApiResponse {
  message: string;
}

const apiBaseUrl = import.meta.env.DEV
  ? import.meta.env.VITE_API_BASE_URL
  : import.meta.env.VITE_API_BASE_URL || "";

const App = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/hello`)
      .then((response) => response.json() as Promise<ApiResponse>)
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>React Frontend</h1>
      <p>{message ? `Message from API: ${message}` : "Loading..."}</p>
    </div>
  );
};

export default App;
