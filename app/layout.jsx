import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata = {
  title: "LSP",
  description: "LSP-PNJ",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
