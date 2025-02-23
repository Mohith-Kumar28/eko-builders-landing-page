import ToasterProvider from "@/components/Providers/ToasterProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
} 