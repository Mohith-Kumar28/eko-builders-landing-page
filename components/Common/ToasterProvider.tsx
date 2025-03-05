'use client';

import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#363636',
          color: '#fff',
          zIndex: 999999,
        },
        duration: 3000,
      }}
    />
  );
} 