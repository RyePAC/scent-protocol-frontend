import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { FragranceBuilder } from "./pages/FragranceBuilder";
import { MyFragrances } from "./pages/MyFragrances";  
import { SignatureFragrances } from "./pages/SignatureFragrances";
import { Cart } from "./pages/Cart";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<FragranceBuilder />} />
            <Route path="/signature" element={<SignatureFragrances />} />
            <Route path="/my-fragrances" element={<MyFragrances />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
