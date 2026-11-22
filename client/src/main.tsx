import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path="/" element={<App />}></Route>
        <Route path=""></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
