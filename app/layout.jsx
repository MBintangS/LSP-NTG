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
      <body style={{backgroundColor:"#EFF5F5"}}>
        <main className="main">
        <Nav />
          {children}
        </main>
        <Footer />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
};

export default RootLayout;
