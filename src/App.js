import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether Dark mode is enabled or disabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e2d2d";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing!";
      // }, 1000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now!"
      // }, 3500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been disabled", "success");
      document.title = "TextUtils-Light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar/> */}
        <Alert alert={alert} />
        <div className="container my-3">
        {/* <Routes> */}
          {/* /user --> Component-1
          /user/someComponet --> Component-2 */}
          {/* <Route exact path="/about" element={<About/>}/> */}

          {/* <Route exact path="/" element={ */}
          <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            {/* }/> */}

        {/* </Routes> */}
        </div>
        {/* </Router> */}
       
    </>
  );
}

export default App;
