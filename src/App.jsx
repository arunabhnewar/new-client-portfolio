import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Components/Routes/Routes";

function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
