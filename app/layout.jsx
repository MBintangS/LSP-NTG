import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/footer/Footer";

export const metadata = {
  title: "LSP - POLITEKNIK NEGERI JAKARTA",
  description: "LSP-PNJ",
};

const RootLayout = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/assets/images/Logo.svg" />
      </head>
      <body>
        <main className="main">
          <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
