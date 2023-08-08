import { useEffect, useState } from "react";
import "../stylesheets/MainWindow.css";
import Sidebar from "./Sidebar";
import axios from "axios";

function MainWindow() {
  let [CONNECTED, SET_CONNECTED] = useState(false);

  useEffect(() => {
   
    axios
      .get('http://localhost:8080/get-hello')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let connectFunction = () => {
    SET_CONNECTED(!CONNECTED);
  };
  return (
    <>
      <div id="TopMainWindow">
        <Sidebar
          connectFunction={connectFunction}
          connected={CONNECTED}
          setConnected={SET_CONNECTED}></Sidebar>
      </div>
    </>
  );
}

export default MainWindow;
