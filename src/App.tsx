
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Index from "./pages/Index";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Order from "./pages/Order";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </CartProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
