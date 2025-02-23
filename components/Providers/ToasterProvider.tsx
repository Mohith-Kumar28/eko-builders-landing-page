"use client";
import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster 
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }}
      containerStyle={{
        position: 'fixed',
        zIndex: 9999,
        top: 16,
        left: 16,
        right: 16,
        bottom: 16,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ToasterProvider; 