import { React } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ModalProvider } from "./components/util/ModalContext"; // Import the ModalProvider

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <ModalProvider>
      <App />
    </ModalProvider>
  </BrowserRouter>,
  rootElement
);
